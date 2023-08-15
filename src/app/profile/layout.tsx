import { Metadata } from "next"

import { Card } from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
// import { SidebarNav } from "@/app/examples/forms/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Manage your account settings and set e-mail preferencess.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
    {/* <main className="p-8 mx-auto max-w-7xl"> */}
      <div className="mx-auto max-w-7xl p-2 md:block">
        <Card className="p-4 md:p-8">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferencess.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside> */}
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
        </Card>
      </div>
      
      {/* </main> */}
    </>
  )
}