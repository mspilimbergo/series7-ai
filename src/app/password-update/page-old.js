import { PasswordUpdate } from "@/components/PasswordUpdate";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

const PasswordUpdatePage = async ({ params, searchParams: {code}}) => {
    if (code) {
        const supabase = createRouteHandlerClient({cookies})
        await supabase.auth.exchangeCodeForSession(code)
    }

    return <PasswordUpdate />
    
}

export default PasswordUpdatePage;