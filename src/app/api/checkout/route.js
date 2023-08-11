const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1NdpXAFvZHhtZe4AZa7DI4QB",
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${process.env.CLIENT_URL}/signup-success/?success=true`,
        cancel_url: `${process.env.CLIENT_URL}/?failure=true?`,
      });
    //   res.send(303, session.url);
    return NextResponse.json({
        url: session.url,
      });
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
    // res.setHeader('Allow', 'POST');
    // res.send('Method Not Allowed');
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