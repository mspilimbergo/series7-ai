'use client'
// import ScrollButton from '@/components/ui/scroll-button'
// import HomeNavBar from '@/components/HomeNavBar';
import SignInButton from "@/components/SignInButton";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import Link from "next/link";
function HomeNavBar() { 
    return (
      <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
        <div className={"flex items-center justify-between h-full gap-2 md:px-0 mx-auto md:max-w-[1480px]"}> 
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-2">
              <Image src={"/Logo.svg"} width={160} height={160} alt="loading" />
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
      </div>
    );
  }

export default function TOS()  {
    return (
        <div>
            <HomeNavBar />
            <section className="relative">
        <div className='w-full bg-white py-24'>
          <div className='md:max-w-[1480px] m-auto  max-w-[600px]  px-4 md:px-0'>
              
              {/* <div className='flex flex-col justify-start gap-4'> */}
                  {/* Unlimited Practice Problems and Mock Tests to Pass the Series 7 */}
                  <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Terms of Service <span className='text-[#20B486]'> </span> 
                  </h1>
                  <div className="">
      <h1 className="text-xl font-bold mb-4">Series 7 Practice - Terms of Service</h1>
      <p className="mb-2">Last Updated: September 5, 2023</p>

      <h2 className="mt-4 text-lg font-semibold">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using the Series 7 Practice website ("Website"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use this Website.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Description of Service</h2>
      <p className="mb-4">
        Series 7 Practice provides practice problem sets and resources aimed at helping individuals prepare for Series 7 exams ("Services"). While we strive for accuracy, we cannot guarantee that the Services will be free of errors, omissions, or inaccuracies.
      </p>

      <h2 className="mt-4 text-lg font-semibold">User Conduct</h2>
      <p className="mb-4">
        Users agree to use the Services for lawful purposes only and not to share access credentials with unauthorized persons.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Registration</h2>
      <p className="mb-4">
        Some parts of the Services may require registration. Users must provide accurate and current information and are responsible for keeping their login information secure.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Intellectual Property</h2>
      <p className="mb-4">
        The content provided through the Services, including but not limited to text, graphics, and practice problems, is the property of Series 7 Practice or its content suppliers and is protected by copyright laws.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Limitation of Liability</h2>
      <p className="mb-4">
        Series 7 Practice shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to, damages for loss of profits or data, arising out of the use or inability to use the Services.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Disclaimer</h2>
      <p className="mb-4">
        The Services are provided "as is" and "as available" without any warranties of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability or fitness for a particular purpose.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Changes to Terms</h2>
      <p className="mb-4">
        Series 7 Practice reserves the right to change, modify, or revise these Terms at any time. Any changes will be effective immediately upon posting, and your continued use of the Services signifies your acceptance of these changes.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of the State of [Your State/Country], without regard to its conflict of laws principles.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Contact</h2>
      <p>
        For any questions regarding these Terms, please [insert your contact method or information here].
      </p>
    </div>  
                  
                  {/* <p className='py-2 text-lg text-gray-600  '>Set yourself up for success with an affordable subscription of $7 per month.</p> */}
                  <div className='max-w-[500px] align-bottom'>
                      {/* <Button>Try a test!</Button> */}
                      {/* <ScrollButton scrollAmount={700} /> */}
                      {/* <Button
                      // disabled={isLoading}
                    //   onClick={scrollToPosition}
                      >Try Practice Problems</Button> */}
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
              {/* </div> */}
                          
              {/* <Image loading={'eager'} src={'/hero-image-6.png'} width={800} height={800} className="md:order-last  order-first" alt='ai-questions-example' /> */}
  
          </div>        
  
      </div>  
              
      </section>
        </div>    
    )
}