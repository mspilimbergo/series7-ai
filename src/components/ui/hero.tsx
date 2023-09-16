// import ModalVideo from '@/components/modal-video'
'use client'
// import ScrollButton from '@/components/ui/scroll-button'
import { Button } from '@/components/ui/button';
import LandingQuestions from '@/components/ui/landing-questions';
import Image from 'next/image';
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
      <div className='w-full bg-white py-8 md:py-24 md:px-20'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0'>            
            <div className='flex flex-col justify-center md:justify-start gap-4 md:gap-2 mb-4 md:mb-0'>
                <p className='py-0 md:py-2 text-lg md:text-2xl  text-[#20B486] text-center md:text-start font-medium'>SERIES 7   PRACTICE</p>
                <h1 className='md:leading-[72px] text-center md:text-start py-2 md:text-6xl text-4xl font-semibold'>Unlimited <span className='text-[#20B486]'>Practice Problems </span> for the 
                    FINRA <span  className='text-[#20B486]'>Series 7</span> 
                </h1>
                {/* <p className='text-md md:text-lg text-center md:text-start text-gray-600 md:leading-[72px]'>Set yourself up for success with an affordable subscription of $7 per month.</p> */}
                <div className='flex self-center  md:self-start max-w-[500px] align-bottom '>
                    <Button
                    className='md:text-md'
                    onClick={scrollToPosition}
                    >Try Practice Problems</Button>
                </div>              
            </div>                        
            <Image loading={'eager'} src={'/hero-image-6.png'} width={800} height={800} className="md:order-last order-last" alt='ai-questions-example' />

        </div>        

    </div>
    {/* {!isLoading && ( */}
        <div className='w-full bg-white md:pb-[70px]'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px] px-2 md:px-20'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#536E96]'>Series 7 Practice offers AI-assisted practice problems, mock tests, and personalized tutoring.</h1>
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