// import { cta } from '../assets'

import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        {/* <img src={cta} className="w-[650px] mx-auto" /> */}

        
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#20B486]'>World's largest</span> learning platform today </h1>
            <p className='py-2 text-lg text-gray-600'>Start learning by registering for free</p>
            <Button>Sign Up Today!</Button> 

             
        </div>
        



    </div>
    

</div>
  )
}

export default CTA