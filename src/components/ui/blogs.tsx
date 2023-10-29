import BlogCard from './blog-card'
export type Blog = {
    id: number,
    created_date?: string,
    updated_date: string,
    category: string,
    title: string,
    slug: string,
    shortDescription: string,
    description?: string,
    img: string,
    tag?: string
}
export const blogsArray: Blog[] = [
    {
        id: 1,
        updated_date: "2023-10-28 20:08:39.161617+00",
        created_date: "2023-10-28 20:08:39.161617+00",
        category: "",
        title: 'How to pass the FINRA Series 7 exam',
        slug: "how-to-pass-finra-series7",
        shortDescription: "In this blog post, we will provide you with a comprehensive guide on how to pass the FINRA Series 7 exam. We will cover everything from the basics of the exam to test-taking tips and tricks.",
        description: `<p><strong>The Series 7 exam</strong> is a qualification exam for entry-level registered representatives. It assesses your knowledge of the critical functions of a general securities representative, including sales of corporate, municipal, investment company, options, and government securities.</p>

<p>In this blog post, we will provide you with a comprehensive guide on how to pass the FINRA Series 7 exam. We will cover everything from the basics of the exam to test-taking tips and tricks.</p>

<p><strong>Why is it valuable to pass the Series 7 exam?</strong></p>

<p>Passing the Series 7 exam allows you to become a general securities representative. This means that you will be licensed to sell a wide range of securities products, including stocks, bonds, mutual funds, and options. You could work as a stockbroker, financial advisor, or investment banker. You could also work for a mutual fund company or a hedge fund.</p>

<p>Qualifying for a Series 7 license is a complex process. You must pass the General Securities Representative exam, the Uniform Securities Agent State Law exam, and the Securities Industry Essentials exam. You must also be sponsored by a FINRA member firm or other self-regulatory organization member firm. A training program is crucial to pass the exams and avoid additional expenses.</p>

<p><strong>How long does it take to become Series 7 licensed?</strong></p>

<p>On average, candidates spend 2–3 weeks studying for the SIE, 1–2 weeks for the Series 63, and 4–6 weeks studying for the Series 7. These exams may be taken consecutively. Several financial organizations and firms will hire you while you prepare for the exams. Most hiring organizations give you a certain amount of time to earn your license. The amount of time provided will depend on the organization.</p>

<p><strong>What are the topics to study to pass the Series 7?</strong></p>

<p>These are just a few examples of the types of questions that you may encounter on the Series 7 exam. You should also practice taking practice exams to get a feel for the format of the exam and to identify any areas where you need to focus your studies. Here are the four main parts of the exam, as well as the type of knowledge you need to know for each.</p>

<p><strong>Part 1: Seeks Business for the Broker-Dealer from Customers and Potential Customers</strong></p>
<ul>
  <li>What are some ethical considerations that a general securities representative should keep in mind when soliciting new clients?</li>
  <li>What are some effective ways to network with potential clients?</li>
  <li>What are some red flags that a general securities representative should be aware of when dealing with potential clients?</li>
</ul>

<p><strong>Part 2: Opens Accounts after Obtaining and Evaluating Customers’ Financial Profile and Investment Objectives</strong></p>
<ul>
  <li>What types of information should a general securities representative gather from a client before opening an account?</li>
  <li>What are some common risk tolerance assessment tools that general securities representatives use?</li>
  <li>What are some ethical considerations that a general securities representative should keep in mind when recommending investments to clients?</li>
</ul>

<p><strong>Part 3: Provides Customers with Information about Investments, Makes Recommendations, Transfers Assets and Maintains Appropriate Records</strong></p>
<ul>
  <li>What are some of the key features and risks of different types of investment products, such as stocks, bonds, mutual funds, and options?</li>
  <li>What factors should a general securities representative consider when making investment recommendations to clients?</li>
  <li>What are some of the regulatory requirements that general securities representatives must comply with when managing client accounts?</li>
</ul>

<p><strong>Part 4: Obtains and Verifies Customers’ Purchase and Sales Instructions and Agreements; Processes, Completes, and Confirms Transactions</strong></p>
<ul>
  <li>What are some of the different types of orders that general securities representatives can place on behalf of clients?</li>
  <li>What are some of the risks associated with different types of orders?</li>
  <li>What are the steps involved in processing and completing a client's trade?</li>
</ul>

<p><strong>What are the best practices to maximize your performance?</strong></p>
<ul>
  <li>Study effectively. This means making a study plan and sticking to it. It also means using effective study methods, such as active learning and spaced repetition.</li>
  <li>Take practice exams. Practice exams are a great way to get comfortable with the format of the exam and to identify any areas where you need to focus your studies.</li>
  <li>Get enough sleep the night before the exam. You need to be well-rested in order to perform your best on the exam.</li>
  <li>Eat a healthy breakfast on the day of the exam. Avoid sugary foods and drinks, as they can lead to a crash in energy levels.</li>
  <li>Arrive at the exam early. This will give you time to relax and get comfortable before the exam begins.</li>
  <li>Form a study group. Studying with other people can help you to stay motivated and to learn from each other.</li>
  <li>Use online resources. There are a number of online resources that can help you to prepare for the Series 7 exam. These resources include practice exams, video lectures, and study guides.</li>
  <li>Hire a tutor. If you are struggling with a particular topic, you may want to consider hiring a tutor. A tutor can provide you with one-on-one instruction and help you to develop a study plan that is tailored to your needs.</li>
</ul>

<p><strong>How often to take mock tests and practice problems?</strong></p>

<p>We recommend that you take a practice exam at least once a week during the final two months of your studies, in addition to practice problems on a daily basis for topics you want to improve upon.</p>
`,
        img: 'https://vojdhxlddvfwjuygvxgv.supabase.co/storage/v1/object/public/blog_images/how-to-pass.png'
        // img: 'https://uploads.republic.com/p/blog/posts/cover_photos/large/000/001/348/1348-1696867353-3b0bbcd992a586d003ed6544fb424177ac3d8fd3.jpg'
    },
    {
        id: 2,
        updated_date: "2023-10-28 20:10:34.622212+00",
        created_date: "2023-10-28 20:10:34.622212+00",
        category: "",
        title: 'How to study for the Series 7 exam',
        slug: "how-to-study-for-series7-exam",
        shortDescription: 'This blog post will discuss the four main parts of the exam in detail, highlighting key concepts that you need to know and why they are important for your future career.',
        description: `<p><strong>The Series 7 exam</strong> is one of the most challenging exams in the financial industry, but it is also one of the most rewarding. Passing the Series 7 exam opens up a wide range of career opportunities including stockbroker, financial advisor, and investment banker.</p>

<p>This blog post will discuss the four main parts of the exam in detail, highlighting key concepts that you need to know and why they are important for your future career.</p>

<h2>Part 1: Seeks Business for the Broker-Dealer from Customers and Potential Customers</h2>
<p>This part of the Series 7 exam assesses your knowledge of how to attract and build relationships with clients. It is important to have a strong understanding of the ethical considerations involved in soliciting new clients, as well as the different ways to network with potential clients. You should also be aware of the red flags that may indicate that a potential client is not a good fit for your services.</p>

<p><strong>Why is this important for your career?</strong></p>
<p>By demonstrating your ability to attract and build relationships with clients, you will be more likely to be successful in your career. This is especially true in the financial industry, where clients are often making significant financial decisions.</p>

<p><strong>Potential career fields and job responsibilities:</strong></p>
<ul>
  <li>Stockbroker</li>
  <li>Financial advisor</li>
  <li>Investment banker</li>
  <li>Wealth manager</li>
  <li>Insurance agent</li>
  <li>Real estate agent</li>
</ul>

<h2>Part 2: Opens Accounts after Obtaining and Evaluating Customers' Financial Profile and Investment Objectives</h2>
<p>This part of the Series 7 exam assesses your knowledge of how to open and manage client accounts. You should be able to gather the necessary information from clients, assess their risk tolerance, and recommend appropriate investment products. You should also be aware of the regulatory requirements that you must comply with when opening and managing client accounts.</p>

<p><strong>Why is this important for your career?</strong></p>
<p>As a financial professional, you will be responsible for managing client accounts. This includes opening and closing accounts, processing transactions, and maintaining accurate records. You should also be able to provide clients with guidance on their investments and help them to achieve their financial goals.</p>

<p><strong>Potential career fields and job responsibilities:</strong></p>
<ul>
  <li>Financial advisor</li>
  <li>Investment banker</li>
  <li>Wealth manager</li>
  <li>Stockbroker</li>
  <li>Portfolio manager</li>
  <li>Financial analyst</li>
</ul>

<h2>Part 3: Provides Customers with Information about Investments, Makes Recommendations, Transfers Assets and Maintains Appropriate Records</h2>
<p>This part of the Series 7 exam assesses your knowledge of a wide range of investment products and services. You should be able to explain the different features and risks of different types of securities, such as stocks, bonds, mutual funds, and options. You should also be able to make investment recommendations to clients based on their individual needs and risk tolerance. Finally, you should be able to transfer assets between accounts and maintain accurate records.</p>

<p><strong>Why is this important for your career?</strong></p>
<p>As a financial professional, you will be responsible for providing clients with information about investment products and making recommendations. You should have a strong understanding of the different types of securities available, as well as the risks and rewards associated with each type of investment. You should also be able to tailor your recommendations to the individual needs and risk tolerance of each client.</p>

<p><strong>Potential career fields and job responsibilities:</strong></p>
<ul>
  <li>Financial advisor</li>
  <li>Investment banker</li>
  <li>Wealth manager</li>
  <li>Stockbroker</li>
  <li>Portfolio manager</li>
  <li>Financial analyst</li>
</ul>

<h2>Part 4: Obtains and Verifies Customers' Purchase and Sales Instructions and Agreements; Processes, Completes, and Confirms Transactions</h2>
<p>This part of the Series 7 exam assesses your knowledge of the order execution process. You should be able to explain the different types of orders that clients can place, as well as the risks associated with each type of order.</p>

<p><strong>Why is this important for your career?</strong></p>
<p>As a financial professional, you will be responsible for placing and executing trades on behalf of your clients. It is important to have a strong understanding of the order execution process and the different types of orders that are available. You should also be able to manage risk effectively and ensure that your clients' trades are executed in a timely and accurate manner.</p>

<p><strong>Potential career fields and job responsibilities:</strong></p>
<ul>
  <li>Stockbroker</li>
  <li>Financial advisor</li>
  <li>Investment banker</li>
  <li>Trader</li>
  <li>Order taker</li>
  <li>Portfolio manager</li>
</ul>

<p><strong>How often to take mock tests and practice problems?</strong></p>
<p>We recommend that you take a practice exam at least once a week during the final two months of your studies, in addition to practice problems on a daily basis for topics you want to improve upon. The Series 7 exam is a challenging exam, but it is possible to pass it with the right preparation.</p>
`,
        img: 'https://vojdhxlddvfwjuygvxgv.supabase.co/storage/v1/object/public/blog_images/how-to-study.png'
    },
    {
        id: 3,
        updated_date: "2023-10-28 20:12:41.133613+00",
        created_date: "2023-10-28 20:12:41.133613+00",
        category: "",
        title: 'How to increase your income with Series 7 licensure',
        slug: "how-to-increase-your-income-with-series7",
        shortDescription: 'If you are interested in a career in the financial industry, it is important to research the specific requirements for the roles that you are interested in. You may also want to consider obtaining Series 7 licensure early in your career, as this will give you a competitive advantage in the job market.',
        description: `<p><strong>It is important to note that the specific requirements for promotion may vary depending on the company and the specific role. However, in general, Series 7 licensure is required for any role that involves providing investment advice to clients or executing trades on their behalf.</strong></p>

<p>If you are interested in a career in the financial industry, it is important to research the specific requirements for the roles that you are interested in. You may also want to consider obtaining Series 7 licensure early in your career, as this will give you a competitive advantage in the job market.</p>

<h2>How much money do people make with a Series 7 license?</h2>
<p>People with a Series 7 license tend to have earning potential in the following ranges:</p>

<ul>
  <li>Entry-level stockbrokers at large firms make around $75,000 in base salary, with additional bonuses and commissions that typically exceed $100,000.</li>
  <li>Experienced stockbrokers at major firms or independent broker-dealers can make $150,000 or more, especially if they develop a strong client base. Commission is a major portion of compensation.</li>
  <li>Investment banker Series 7 salaries tend to start between $100,000 - $150,000 at large banks, with experienced bankers earning over $200,000 and mid/senior bankers earning several hundred thousand in salary and bonus.</li>
  <li>Traders at investment banks, hedge funds, and other financial firms earn lucrative compensation, from $100,000+ for junior traders up to the millions for senior traders at top firms. Bonuses are a huge portion of total pay.</li>
  <li>Compliance officers, operations professionals, and other Series 7 support roles at financial institutions tend to earn $50,000 - $150,000 on average based on experience level.</li>
</ul>

<p>So in summary, Series 7 opens up opportunities across Wall Street and finance that can be very financially rewarding, especially for successful stockbrokers, investment bankers, and traders. The license demonstrates key expertise that brings higher earning potential.</p>

<h2>What career fields require passing the Series 7 in order to advance?</h2>
<p>Many career fields require Series 7 certification if you want to be promoted:</p>

<ul>
  <li>Investment banks</li>
  <li>Brokerage firms</li>
  <li>Wealth management firms</li>
  <li>Financial planning firms</li>
  <li>Insurance companies</li>
  <li>Mutual fund companies</li>
  <li>Hedge funds</li>
  <li>Private equity firms</li>
  <li>Venture capital firms</li>
</ul>

<p>Specifically, here are some job titles that may generally require Series 7 licensure:</p>

<ul>
  <li>Financial advisor</li>
  <li>Investment advisor representative (IAR)</li>
  <li>Stockbroker</li>
  <li>Registered representative</li>
  <li>Trader</li>
  <li>Portfolio manager</li>
  <li>Wealth manager</li>
  <li>Financial planner</li>
  <li>Insurance agent</li>
  <li>Mutual fund representative</li>
  <li>Hedge fund analyst</li>
  <li>Private equity analyst</li>
  <li>Venture capital analyst</li>
</ul>

<p><strong>How often to take mock tests and practice problems?</strong></p>

<p>We recommend that you take a practice exam at least once a week during the final two months of your studies, in addition to practice problems on a daily basis for topics you want to improve upon. The Series 7 exam is a challenging exam, but it is possible to pass it with the right preparation.</p>
`,
        img: 'https://uploads.republic.com/p/blog/posts/cover_photos/medium/000/001/282/1282-1695649394-70ebfbaf6ff8e5978eea85a105ae3c948007c013.png'
    },
    {
        id: 4,
        updated_date: "2023-10-28 20:13:50.28034+00",
        created_date: "2023-10-28 20:13:50.28034+00",
        category: "",
        slug: '30-60-90-day-study-plan-for-finra-series7',
        title: "30-60-90 day study plan for FINRA Series 7 ",
        shortDescription: 'In this article, we will explore the most efficient ways to prepare for a test, breaking them down into three distinct segments: planning for 3 months, 2 months, and 3 weeks leading up to the big day.',
        description: `<p><strong>By implementing effective study techniques, managing time efficiently, and fueling your body with the right nutrients, you can significantly improve your chances of acing the Series 7 exam. In this article, we will explore the most efficient ways to prepare for a test, breaking them down into three distinct segments: planning for 3 months, 2 months, and 3 weeks leading up to the big day.</strong></p>

<h2>Section 1: Plan for 3 Months to Test Day</h2>
<ul>
  <li><strong>Set clear goals and objectives:</strong> Identify the areas where you need improvement and set achievable targets for yourself. Having a clear goal in mind will help you focus your efforts and allocate your study time more effectively.</li>
  <li><strong>Develop a study schedule:</strong> Divide your study plan into manageable chunks, allocating sufficient time for each subject or topic. Be sure to schedule regular breaks to avoid burnout and maintain motivation throughout the process.</li>
  <li><strong>Utilize diverse study techniques:</strong> Combine different learning methods, such as flashcards, practice problems, mock tests, online lectures, and tutoring sessions, to cater to your unique learning style. Mixing things up can help keep your studying interesting and prevent boredom.</li>
  <li><strong>Engage in active recall:</strong> Active recall involves actively retrieving information from memory rather than simply re-reading it. Use flashcards, quizzing, or practice problems to reinforce your understanding of key concepts.</li>
  <li><strong>Seek feedback and evaluate progress:</strong> Periodically review your progress, identify areas where you need improvement, and seek constructive feedback from mentors, peers, or teachers. Using this information, adjust your study strategy accordingly.</li>
</ul>

<h2>Section 2: Plan for 2 Months to Test Day</h2>
<ul>
  <li><strong>Consolidate your knowledge:</strong> Two months prior to the test date, focus on consolidating the information you've learned rather than cramming new material. Review and reinforce previously studied concepts, ensuring they are stored in long-term memory.</li>
  <li><strong>Refine your test-taking strategies:</strong> Practice answering sample questions, analyze past exams, and develop a game plan for tackling complex questions. Learn how to manage time effectively, budget resources, and minimize mistakes.</li>
  <li><strong>Stay updated on current events:</strong> Keep abreast of recent developments in your field of study by reading relevant news articles, attending seminars, or participating in webinars. This will enable you to approach the test with confidence and demonstrate your proficiency in contemporary issues.</li>
  <li><strong>Fine-tune your mental preparedness:</strong> Work on developing a positive mindset through meditation, visualization, or deep breathing exercises. Visualize yourself performing well on the test, and cultivate resilience in the face of challenges.</li>
  <li><strong>Get enough sleep:</strong> Ensure adequate rest and relaxation in the days leading up to the test. Lack of sleep can impair cognitive function, making it harder to concentrate and retain information. Aim for 7-8 hours of quality sleep each night.</li>
</ul>

<h2>Section 3: Plan for 3 Weeks to Test Day</h2>
<ul>
  <li><strong>Finalize your preparation:</strong> During the final three weeks before the test, narrow your focus to fine-tuning your knowledge and polishing your test-taking skills. Attend review sessions, workshops, or private tutorials to address any remaining gaps in your understanding.</li>
  <li><strong>Gradually reduce stress:</strong> As the test approaches, gradually decrease your exposure to stressors such as social media, electronic devices, or demanding tasks. Instead, indulge in calming activities like yoga, journaling, or listening to music.</li>
  <li><strong>Optimize your physical health:</strong> Pay close attention to your diet, exercise routine, and hydration levels. Eat nutritious meals, consume plenty of water, and engage in light physical activity to maintain energy levels and boost morale.</li>
  <li><strong>Organize your test-day essentials:</strong> Gather all necessary stationery, calculators, and permits, and pack them in a convenient carry bag. Don't forget to bring snacks, drinks, and entertainment for any downtime during the test.</li>
  <li><strong>Stick to your routine:</strong> On the day of the test, follow your established routine scrupulously. Arrive early, dress appropriately, and remain focused throughout the exam. Believe in yourself and your hard work – you're ready to ace it!</li>
</ul>

<p><strong>Conclusion:</strong></p>

<p><strong>How often to take mock tests and practice problems?</strong></p>
<p>We recommend that you take a practice exam at least once a week during the final two months of your studies, in addition to practice problems on a daily basis for topics you want to improve upon. The Series 7 exam is a challenging exam, but it is possible to pass it with the right preparation.</p>`,
        img: 'https://uploads.republic.com/p/blog/posts/cover_photos/medium/000/001/249/1249-1694461722-d375d464ddcde4d098f18a86f148499a3cb445e6.jpg'
    },
    {
        id: 5,
        updated_date: "2023-10-28 20:15:03.172611+00",
        created_date: "2023-10-28 20:15:03.172611+00",
        category: "",
        title: 'Training, sponsorship, and job support for Series 7 candidates',
        slug: "training-sponsorship-and-job-support-for-series7",
        shortDescription: 'Here are some entry-level jobs, big companies, and corporate training and sponsorship programs for people who aspire to become professionals holding the Series 7 license. The Series 7 exam is a qualification exam for entry-level registered representatives. ',
        description: `<p><strong>Here are some entry-level jobs, big companies, and corporate training and sponsorship programs for people who aspire to become professionals holding the Series 7 license. The Series 7 exam is a qualification exam for entry-level registered representatives.</strong></p>

<h2>Entry-level jobs:</h2>
<ul>
  <li><strong>Financial Advisor Trainee:</strong> This is a common entry-level position for people who want to become financial advisors. Trainees typically shadow experienced advisors and learn about the financial services industry.</li>
  <li><strong>Registered Client Associate:</strong> These professionals provide administrative support to financial advisors and their clients. They may also have the opportunity to learn about the financial services industry and prepare for the Series 7 exam.</li>
  <li><strong>Client Service Representative:</strong> These professionals answer client questions, process paperwork, and provide other customer service-related tasks.</li>
  <li><strong>Financial Advisor Sales Assistant:</strong> These professionals help financial advisors with sales and marketing activities.</li>
  <li><strong>Middle Office and Clearing Associate:</strong> These professionals work in the middle office of a financial institution, which is responsible for processing trades and other transactions.</li>
</ul>

<h2>Big companies:</h2>
<ul>
  <li><strong>Edward Jones:</strong> Edward Jones is a financial services firm that offers a variety of entry-level jobs for people who want to become financial advisors.</li>
  <li><strong>Merrill Lynch:</strong> Merrill Lynch is another financial services firm that offers entry-level jobs for people who want to become financial advisors.</li>
  <li><strong>Morgan Stanley:</strong> Morgan Stanley is a financial services firm that offers a variety of entry-level jobs for people who want to become financial advisors.</li>
  <li><strong>UBS:</strong> UBS is a financial services firm that offers a variety of entry-level jobs for people who want to become financial advisors.</li>
  <li><strong>Wells Fargo Advisors:</strong> Wells Fargo Advisors is a financial services firm that offers a variety of entry-level jobs for people who want to become financial advisors.</li>
</ul>

<h2>Corporate training/sponsorship programs:</h2>
<ul>
  <li><strong>Edward Jones Financial Advisor Career Development Program:</strong> This program provides training and support for new financial advisors.</li>
  <li><strong>Merrill Lynch Financial Advisor Training Program:</strong> This program provides training and support for new financial advisors.</li>
  <li><strong>Morgan Stanley Financial Advisor Associate Program:</strong> This program provides training and support for new financial advisors.</li>
  <li><strong>UBS Financial Advisor Associate Program:</strong> This program provides training and support for new financial advisors.</li>
  <li><strong>Wells Fargo Advisors Financial Advisor Development Program:</strong> This program provides training and support for new financial advisors.</li>
</ul>

<p><strong>In addition to the above, there are many other financial services firms that offer entry-level jobs and corporate training/sponsorship programs for people who want to become financial advisors. To find more opportunities, you can search online job boards or contact financial services firms directly.</strong></p>

<p><strong>It is important to note that the Series 7 exam is a challenging exam, and it is important to be prepared before you take it. There are many resources available to help you prepare, including online courses, study guides, and practice exams.</strong></p>

<p><strong>How often to take mock tests and practice problems?</strong></p>
<p>We recommend that you take a practice exam at least once a week during the final two months of your studies, in addition to practice problems on a daily basis for topics you want to improve upon. The Series 7 exam is a challenging exam, but it is possible to pass it with the right preparation.</p>
`,
        img: 'https://uploads.republic.com/p/blog/posts/cover_photos/medium/000/001/216/1216-1694461663-f0beadc1383c15924317adb1dfe6344fb92378ab.jpg'
    }
]

export default function Blogs() {
    return (
        <div className='w-full bg-white py-6 md:py-24 md:px-20'>
            <div className='md:max-w-[1148px] m-auto  max-w-[600px]'>
                <h2 className='font-bold text-5xl text-black pb-12 px-4'>Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* <div className='col-span-1 md:col-span-2 relative'>
                        <Image src={blogsArray[0].img} width={600} height={560} className='rounded w-full max-h-[560px]' alt="" />
                        <div className='absolute bottom-8 left-8 right-8'>
                            <h4 className='text-sm font-extrabold leading-[.92] tracking-[-0.03em] text-white mb-2.5'>{blogsArray[0].category}</h4>
                            <h3 className='font-[900] text-[50px] text-white tracking-[-0.03em] leading-[1]'>{blogsArray[0].title}</h3>
                            <p className='mt-2.5 font-medium text-lg text-[#ffffffcc]'>{blogsArray[0].shortDescription}</p>
                        </div>
                    </div>
                    {
                        blogsArray.slice(1, 5).map((data, i) => (
                            <div key={i} className=''>
                                <div className=''>
                                    <div className="pb-5">
                                        <Image src={data.img} width={200} height={280} className='w-full max-h-[280px]' alt="" />
                                    </div>
                                    <div className="">
                                        <h4 className='text-sm text-black mb-2.5 font-extrabold tracking-[-0.03em] leading-[0.92]'>{data?.category}</h4>
                                        <h3 className='text-[30px] font-[900] tracking-[-0.03em] leading-[1]'>{data?.title}</h3>
                                        <p className='text-sm mt-2.5 pr-4 text-[#666666]'>{data.shortDescription}</p>

                                    </div>

                                </div>
                            </div>
                        ))
                    } */}
                    {
                        blogsArray.map((data, i) => (<BlogCard key={i} data={data} featured={i === 0} />))
                    }
                </div>
            </div>
        </div>
    )
}
