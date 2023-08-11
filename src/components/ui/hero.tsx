// import ModalVideo from '@/components/modal-video'
'use client'
// import ScrollButton from '@/components/ui/scroll-button'
import { Button } from '@/components/ui/button';
import LandingQuestions from '@/components/ui/landing-questions';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isLoading, setIsLoading] = useState(false)
    const [isFinishLoading, setIsFinishLoading] = useState(false)
    const [progress, setProgress] = useState(13)
    const [hasScrolled, setHasScrolled] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        console.log("isLoading", isLoading)
    },[isLoading])
    const scrollAmount = 700;

    const scrollToPosition = () => {
        if (hasScrolled) return;
        console.log("scrolling")
        setIsLoading(!isLoading)
        window.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
        setHasScrolled(true)
      };

  return (
    <section className="relative">
      <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Access To <span className='text-[#20B486]'>5000+</span> Courses
                    from <span  className='text-[#20B486]'>300</span> Instructors 
                    & Institutions
                </h1>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                <div className='max-w-[500px]'>
                    {/* <Button>Try a test!</Button> */}
                    {/* <ScrollButton scrollAmount={700} /> */}
                    <Button
                    // disabled={isLoading}
                    onClick={scrollToPosition}
                    >Try some questions</Button>
                </div>
                {/* <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'> */}
                    {/* <Button className='max-w-[500px]'>Learn More</Button>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    /> */}
                    {/* <button> */}
                        {/* <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        /> */}

                    {/* </button> */}
                {/* </form> */}
            </div>
            
            {/* <img  src={heroImg} className="md:order-last  order-first" /> */}

        </div>        

    </div>
    {/* {!isLoading && ( */}
        <div className='w-full bg-white pb-[100px]'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
                <p className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            </div>
        </div>
    {/* )} */}
    {isLoading && (
        <LandingQuestions />
    )}
    {/* <LandingQuestions /> */}
    {/* {isFinishLoading && (
        <>
        Hello
        </>
    )} */}
    {/* {!isLoading && ( */}
        {/* <div className='w-full bg-white py-[100px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <Progress value={progress} className="w-[60%]" />
        </div>
        </div> */}
        
    {/* )} */}

            
    </section>
  )
}