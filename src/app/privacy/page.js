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

export default function PrivacyPolicy()  {
    return (
        <div>
            <HomeNavBar />
            <section className="relative">
        <div className='w-full bg-white py-24'>
          <div className='md:max-w-[1480px] m-auto  max-w-[600px]  px-4 md:px-0'>
              
              {/* <div className='flex flex-col justify-start gap-4'> */}
                  {/* Unlimited Practice Problems and Mock Tests to Pass the Series 7 */}
                  <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Privacy Policy <span className='text-[#20B486]'> </span> 
                  </h1>
                  <div >
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy for Series 7 Practice</h1>
      <p className="mb-2">Last updated: September 5, 2023</p>

      {/* <Divider className="my-4" /> */}
      <br/>

      <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-2">1.1. Personal Data: When you register for an account, we may collect personal data, such as your name, email address, and any other information you choose to provide.</p>
      <p className="mb-4">1.2. Usage Data: We collect information on how the website is accessed and used. This Usage Data may include information such as your computer's IP address, browser type, browser version, the pages you visit, and other diagnostic data.</p>

      <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect for various purposes, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our service.</li>
        <li>To notify you about changes to our service.</li>
        <li>To provide customer support.</li>
        <li>To monitor the usage of our service.</li>
        <li>To detect, prevent, and address technical issues.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Protection of Data</h2>
      <p className="mb-4">We adopt appropriate data collection, storage, and processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.</p>

      <h2 className="text-xl font-semibold mb-2">4. Disclosure of Data</h2>
      <p className="mb-4">We will not sell, distribute, or lease your personal data to third parties unless we have your permission or are required by law to do so.</p>

      <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
      <p className="mb-4">We use cookies to enhance user experience. Cookies are small files that a site transfers to your computer's hard drive through your browser (if you allow). You can choose to decline cookies through your browser settings, but doing so may affect your ability to access or use certain features of our site.</p>

      <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
      <p className="mb-4">Our website may contain links to other sites. If you click on a third-party link, you will be directed to that site. We advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content or practices of any third-party sites.</p>

      <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">Our service is not intended for individuals under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal data, please contact us.</p>

      <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage users to check this page regularly. Your continued use of the service after any changes signifies your acceptance of the updated Privacy Policy.</p>
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