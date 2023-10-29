import parse from 'html-react-parser';
import Image from 'next/image';
import { blogsArray } from './blogs';

interface Props {
    slug: string;
}
const markdown = ``
export default async function BlogDetails({ slug }: Props) {
    const data = blogsArray.find((blog) => blog.slug === slug);
    return (
        <div className='w-full bg-white py-6 md:py-24 md:px-20'>
            <div className='m-auto md:max-w-[1148px] max-w-[600px]'>
                <div className="mb-4">
                    <Image src={`${data?.img}`} width={600} height={560} className='w-full md:h-[560px]' alt="" />
                </div>
                <div className="px-4 md:px-0">
                    <h4 className='text-sm font-extrabold leading-[.92] tracking-[-0.03em] mb-2.5'>{data?.category}</h4>
                    <h3 className='font-[900] text-[30px] md:text-[50px] tracking-[-0.03em] leading-[1] mb-3'>{data?.title}</h3>
                    <div className="py-3">
                        <div className="flex items-center gap-2">
                            <Image width={40} height={40} className="w-10 h-10 rounded-full" src="https://uploads.republic.com/p/users/avatars/small/001/421/094/1421094-1696100265-805528ae8b5970b1802986d5a373fc6f4145908b.jpg" alt="Rounded avatar" />
                            <h4 className='text-lg font-semibold mr-3'>Md Azadur Rahman</h4>
                            <p className='text-xs text-gray-700 font-medium'>{data?.updated_date}</p>
                        </div>
                    </div>
                    
                    <article className="prose lg:prose-lg w-full max-w-full">
                        {parse(data?.description || markdown)}
                    </article>
                </div>
            </div>

        </div>
    )
}
