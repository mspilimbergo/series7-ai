// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from '@supabase/supabase-js';
// import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

const SupabaseAdmin = () => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE,
    );
  };

// export const dynamic = 'force-dynamic'

export async function POST(req, res) {
  console.log("IN CONFIRM SIGNUP")
    // const supabase = createServerComponentClient({cookies});
  if (req.method === 'POST') {
    try {
        const body = await req.json();
        // const email = body['email']    
        // const password = body['password']
        // console.log("EMAIL", email)
        // console.log("PASSWORD", password)
        // const {data: {user}, error: adminError} = await SupabaseAdmin().auth.signUp({
        //     email: email,
        //     password: password
        // })

        // // const {data: newSignIn, error} = await supabase.auth.signInWithPassword({email, password});
        // if (error) {
        //   console.log("======ADMIN ERROR=====", adminError)
        // }
        return NextResponse.json({data: user})
        // return NextResponse.redirect(`${process.env.CLIENT_URL}/dashboard`)
    // res.send({url: session.url})
    } catch (err) {
        return NextResponse.json(
            {
              message: err.issues,
            },
            {
              status: 400,
            }
          );
    }
  } else {

    return NextResponse.json(
        {
          message: err.issues,
        },
        {
          status: 400,
        }
      );
  }
}