import SignInButton from "@/components/SignInButton";
import CTAButton from "@/components/ui/CTAButton";
import Blogs from "@/components/ui/blogs";
import Image from "next/image";
import Link from "next/link";

export function HomeNavBar() {
    return (
        <header>
            <nav className="inset-x-0 -top:4 md:top-0 bg-white dark:bg-gray-950 z-[50] h-fit border-b border-zinc-300 p-1 md:px-20 ">
                <div className={"flex items-center justify-between h-full gap-2 md:px-0 mx-auto md:max-w-[1480px]"}>
                    {/* Logo */}
                    <Link href={"/"} className="flex items-center gap-2">
                        <Image src={"/Logo.svg"} width={140} height={140} alt="loading" />
                        {/* <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Series 7 Practice
          </p>           */}

                    </Link>
                    <div className="flex items-center">
                        <div className="flex flex-row gap-4">
                            <SignInButton text={"Sign In"} />
                            <CTAButton text={"Start Practicing"} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default async function Home() {

    return (
        <div>
            <HomeNavBar />
            <Blogs />
        </div>
    );
}
