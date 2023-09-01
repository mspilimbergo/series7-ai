import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
const SupabaseAdmin = () => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE,
    );
  };

export async function POST(req) {
    const supabase = createRouteHandlerClient({cookies})
    try {
        const body = await req.json();
        // check if user exists with this email, and is active
        const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq('email', body['email'])
        .single()
      
        if (error) {
          // if (error.code === 'PGRST116') {
            // console.log("Error fetching data from supabase in /api/confirm-signup", error.message)
            return NextResponse.json({data: "User not found"})
          // }
          
        }        
        if (data.is_active && data.status === "active")  {
          const email = body['email']    
          const password = body['password']
          const {data, error} = await SupabaseAdmin().auth.signUp({
              email: email,
              password: password
          })
          if (error) {
            console.log("======ADMIN ERROR=====", adminError)
            return NextResponse.json({data: "Error creating user"})
          }
          return NextResponse.json({data: "success"})
        }        

        if (!data.is_active || data.status !== "active") {
          return NextResponse.json({data: "User not found"})
        }
        
    } catch (err) {
        return NextResponse.json(
            {
              message: err.message,
            },
            {
              status: 400,
            }
          );
    }   
}