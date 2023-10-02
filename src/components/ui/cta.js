import { Button } from "@/components/ui/button"
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-1 gap-8 max-w-[600px] items-center px-4 md:px-20'>
        <div>
            <h1 className=' text-2xl font-semibold'>Make use of the world's best <span className='text-[#20B486]'>Series 7</span> practice tool and guarantee yourself a passing score! </h1>
            {/* <p className='py-2 text-lg text-gray-600'>Start learning by registering for free</p> */}
            <Button className="mt-10"       > Subscribe Now!</Button>              
        </div>
        <div className="flex flex-row gap-4 mt-10">
          <Link href={'/privacy'}>Privacy Policy |</Link>
          <Link href={'/terms-of-service'}>Terms of Service |</Link>
          <Link href={'/contact'}>Contact Us</Link>
        </div>
    </div>
</div>
  )
}

export default CTA