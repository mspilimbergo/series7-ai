import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProfileForm } from "./profile-form";

export default async function SettingsProfilePage() {
  const supabase = createServerComponentClient({cookies});
  const { data: {session}} = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  const user = session?.user;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Make or review your account details below.
        </p>
      </div>
      {/* <Separator /> */}
      <ProfileForm user={user} />
    </div>
  )
}