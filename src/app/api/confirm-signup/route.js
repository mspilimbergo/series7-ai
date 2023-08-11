import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

const SupabaseAdmin = () => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE,
    );
  };


export async function POST(req, res) {
  console.log("IN CONFIRM SIGNUP")
  if (req.method === 'POST') {
    try {
        const body = await req.json();
        const email = body['email']    
        const password = body['password']
        const {data: {user}, error: adminError} = await SupabaseAdmin().auth.signUp({
            email: email,
            password: password
        })

        console.log('user', user)
        
        if (adminError) {
          console.log("======ADMIN ERROR=====", adminError)
          return NextResponse.json({data: "failure"})
        }
        return NextResponse.json({data: "success"})
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