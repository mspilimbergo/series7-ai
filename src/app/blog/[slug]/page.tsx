import BlogDetails from "@/components/ui/blog-details";
import { HomeNavBar } from "../page";

export default function Page({ params }: { params: { slug: string } }) {
    return <div>
        <HomeNavBar />

        <BlogDetails slug={params?.slug} />

    </div>
}