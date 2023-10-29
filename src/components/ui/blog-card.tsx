'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from './blogs'

export default function BlogCard({ data, featured }: { data: Blog, featured: boolean }) {

    const FeatureCard = () => {
        return (
            <Link href={`blog/${data?.slug}`} className='col-span-1 md:col-span-2 relative md:mx-4 mb-8'>
                <Image src={data?.img} width={600} height={560} className='md:rounded w-full h-[456px] md:h-[560px]'  alt="" />
                <div className='absolute bottom-0 left-0 right-0 p-4 md:p-8 linear_gradient'>
                    <h4 className='text-sm font-extrabold leading-[.92] tracking-[-0.03em] text-white mb-2.5'>{data?.category}</h4>
                    <h3 className='font-[900] text-[30px] md:text-[50px] text-white tracking-[-0.03em] leading-[1]'>{data?.title}</h3>
                    <p className='mt-2.5 font-medium text-base md:text-lg text-[#ffffffcc]'>{data?.shortDescription}</p>
                </div>
            </Link>
        )
    }

    const NormalCard = () => {
        return (
            <Link href={`blog/${data?.slug}`} className='px-4 mb-8'>
                <div className="pb-5">
                    <Image src={data.img} width={200} height={280} className='w-full max-h-[280px]' alt="" />
                </div>
                <div>
                    <h4 className='text-sm text-black mb-2.5 font-extrabold tracking-[-0.03em] leading-[0.92]'>{data?.category}</h4>
                    <h3 className='text-[30px] font-[900] tracking-[-0.03em] leading-[1]'>{data?.title}</h3>
                    <p className='text-sm mt-2.5 pr-4 text-[#666666]'>{data.shortDescription}</p>
                </div>

            </Link>
        )
    }
    return featured ? <FeatureCard /> : <NormalCard />;
}
