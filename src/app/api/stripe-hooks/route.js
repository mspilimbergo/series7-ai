// import { buffer } from 'micro';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const supabase = createRouteHandlerClient({ cookies })
    const headersList = headers()
    const signature = headersList.get('stripe-signature')    
    const rawReqBody = await request.text()
    let event;
    let customerId;
    let email;
    let name;
    try {
        event = stripe.webhooks.constructEvent(rawReqBody, signature, process.env.STRIPE_SIGNING_SECRET);
        customerId = event.data.object.customer;
    } catch (e) {
        NextResponse.json({ error: `${e.message}` }, { status: 400 })
    }

    try {
        // Get customer_id from stripe using email
        const customer = await stripe.customers.retrieve(
            customerId
        );
        email = customer.email;
        name = customer.name;
    } catch (e) {
        NextResponse.json({ error: `${e.message}` }, { status: 400 })
    }


    // Handle the event
    switch (event.type) {
        case 'customer.subscription.created':
            console.log("Customer Subscription Created")
            console.log("Customer data", email, customerId, name)
            try {
                    const {data, error} = await supabase
                    .from('users')
                    .insert({
                        email: email,
                        stripe_id: customerId,
                        name: name,
                        is_active: true,
                        status: "active"
                    })
                    if (error) {
                        console.log("ERROR", error.message)
                    }
            }  catch (e) {
                console.log("ERROR", error.message)
            }
            break;
        case 'customer.subscription.paused':
            try {
                const {data, error} = await supabase
                .from('users')
                .update({                    
                    is_active: false,
                    status: "paused"
                })
                .eq('stripe_id', customerId)
                if (error) {
                    console.log("ERROR", error.message)
                }
            }  catch (e) {
                console.log("ERROR", error.message)
            }
            break;
        case 'customer.subscription.deleted':
            try {
                const {data, error} = await supabase
                .from('users')
                .update({                    
                    is_active: false,
                    status: "deleted"
                })
                .eq('stripe_id', customerId)
                if (error) {
                    console.log("ERROR", error.message)
                }
            }  catch (e) {
                console.log("ERROR", error.message)
            }
            break;
        case 'customer.subscription.updated':
            try {
                const {data, error} = await supabase
                .from('users')
                .update({                    
                    is_active: true,
                    status: "updated"
                })
                .eq('stripe_id', customerId)
                if (error) {
                    console.log("ERROR", error.message)
                }
            }  catch (e) {
                console.log("ERROR", error.message)
            }
            break;
            // create a new user in the database with the email & customer id
    }
    
    // console.log("EVENT", event)
    // console.log("EVENT TYPE", event.type)
    // } catch (e) {
    //     return NextResponse.json({ error: `${e.message}` }, { status: 500 })
    // }
    // console.log("EVENT", event)
    // res.send({received: true})
}