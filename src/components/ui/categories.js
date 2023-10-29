'use client'
// import AccordionItem from '../AccordionItem';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    id: 1,
    question: 'Seeks Business for the Broker-Dealer from Customers and Potential Customers',
    answer:
      'A. Networking, Seminars, and Sales Presentations B. Prospecting New Customers C. Communicating with the Public',
  },
  {
    id: 2,
    question: 'Opens Accounts After Obtaining and Evaluating Customers’ Financial Profile and Investment Objectives',
    answer:
      'A. Customer Identification and Verification B. Customer Account Information C. Recommendations and Investment Objectives D. Types of Accounts E. Account Registration Types',
  },
  {
    id: 3,  
    question: 'Provides Customers with Information About Investments, Makes Suitable Recommendations, Transfers Assets and Maintains Appropriate Records',
    answer:
      'A. Types of Investments B. Investment Risks and Strategies C. Presentation of Investment Information and Recommendations D. Customer Portfolio Analysis and Making Suitable Recommendations E. Order Entry, Execution, and Confirmation F. Account Records and Maintenance',
  },
  {
    id: 4,
    question: 'Obtains and Verifies Customers’ Purchase and Sales Instructions; Processes, Completes and Confirms Transactions',
    answer:
      'A. Order Types and Order Entry B. Trade Execution and Settlement C. Confirmations and Account Statements D. Customer Complaints and Recordkeeping',
  },
  {
    id: 5,
    question: 'Understanding and Explaining the Securities Markets, the Broker Dealer’s Operations, and Customer Accounts',
    answer:
      'A. Market Types and Characteristics B. Broker-Dealer Operations C. Customer Account Statements and Confirmations D. Tax Consequences of Various Transactions',
  },
  {
    id: 6,
    question: 'Understanding and Explaining Other Packaged Products, Retirement Plans, and Regulations',
    answer:
      'A. Characteristics of Different Investment Companies B. Characteristics of Variable Annuities and Life Insurance C. Characteristics of Direct Participation Programs (DPPs) D. Retirement and Pension Plans E. Federal Regulations and Industry Standards',
  },
  {
    id: 7,
    question: ' Understanding and Explaining Options, Rights, Warrants, and Taxes',
    answer:
      'A. Characteristics and Risks of Options B. Tax Consequences of Various Securities Transactions',
  },
  {
    id: 8,
    question: 'Understanding and Explaining Customer Accounts, Margin Accounts, and Regulations',
    answer:
      'A. Opening Customer Accounts B. Margin Requirements C. Regulations Pertaining to Customer Accounts',
  },
];

const Item1 = () => {
  return (
    <ol >
        <li>1. Standards and required approvals of public communications</li>
        <li>2. Types of communications (e.g., retail, institutional, correspondence)</li>
        <li>Seminars, lectures and other group forum requirements</li>
        <li>Product specific advertisements and disclosures</li>
        <li>Investment company products and variable contracts</li>
        <li>Options-related communications; options disclosure document (ODD)</li>
        <li>Municipal securities</li>
        <li>Research reports (e.g., quiet periods, distribution, third-party research)</li>
        <li>Government securities, collateralized mortgage obligations (CMOs), certificates of deposit (CDs)</li>
    </ol>
  )
}

const Item2 = () => {
  return (
    <ul className="list-disc pl-6 mt-2">
        <li>Standards and required approvals of public communications</li>
        <li>Types of communications (e.g., retail, institutional, correspondence)</li>
        <li>Seminars, lectures and other group forum requirements</li>
        <li>Product specific advertisements and disclosures</li>
        <li>Investment company products and variable contracts</li>
        <li>Options-related communications; options disclosure document (ODD)</li>
        <li>Municipal securities</li>
        <li>Research reports (e.g., quiet periods, distribution, third-party research)</li>
        <li>Government securities, collateralized mortgage obligations (CMOs), certificates of deposit (CDs)</li>
    </ul>
  )
}

const Item3 = () => {
  return (
    <ul className="list-disc pl-6 mt-2">
        <li>Standards and required approvals of public communications</li>
        <li>Types of communications (e.g., retail, institutional, correspondence)</li>
        <li>Seminars, lectures and other group forum requirements</li>
        <li>Product specific advertisements and disclosures</li>
        <li>Investment company products and variable contracts</li>
        <li>Options-related communications; options disclosure document (ODD)</li>
        <li>Municipal securities</li>
        <li>Research reports (e.g., quiet periods, distribution, third-party research)</li>
        <li>Government securities, collateralized mortgage obligations (CMOs), certificates of deposit (CDs)</li>
    </ul>
  )
}


const Categories = () => {


  const cards = [
    {
      topic: 'Function 1: Seeks Business for the Broker-Dealer from Customers and Potential Customers',
      list: <Item3 />
    }
  ]

  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-20'> 
                <h1 className='md:leading-[72px] text-3xl font-bold'>Series 7 <span className='text-[#20B486]'>Subjects</span></h1> 
                {/* <p className='text-lg text-gray-600 mb-4'>Various versions have evolved over the years, sometimes by accident.</p> */}

                <div className='grid grid-cols-1 py-12 md:gap-4 gap-4'>
                </div>
                <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Seeks Business for the Broker-Dealer from Customers and Potential
Customers</AccordionTrigger>
                  <AccordionContent>
                    <Item1 />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Opens Accounts After Obtaining and Evaluating Customers’ Financial Profile and Investment Objectives</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Provides Customers with Information About Investments, Makes Suitable Recommendations, Transfers Assets and Maintains Appropriate Records</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Obtains and Verifies Customers’ Purchase and Sales Instructions; Processes, Completes and Confirms Transactions</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Understanding and Explaining the Securities Markets, the Broker Dealer’s Operations, and Customer Accounts</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Understanding and Explaining Other Packaged Products, Retirement Plans, and Regulations</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Understanding and Explaining Options, Rights, Warrants, and Taxes</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Understanding and Explaining Customer Accounts, Margin Accounts, and Regulations</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                {/* <div className='grid grid-cols-1 py-12 md:gap-4 gap-4'>
                {topics.map((topic) => (
                  <div className='' key={topic.id}>
                    <AccordionItem question={topic.question} answer={topic.answer} id={topic.id} key={topic.id} />
                  </div>
                ))}                   
                </div> */}
        </div>
    </div>
  )

  // return (
    // <div className='w-full bg-[#F0FBF7] py-24'>
        {/* <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-20'> */}
                {/* <h1 className='md:leading-[72px] text-3xl font-bold'>Series 7 <span className='text-[#20B486]'>Subjects</span></h1> */}
                {/* <p className='text-lg text-gray-600 mb-4'>Various versions have evolved over the years, sometimes by accident.</p> */}

                // <div className='grid grid-cols-1 py-12 md:gap-4 gap-4'>
                    {/* <AccordianItem data={cards[0]} />  */}
                    {/* {cards[0].topic} */}
                // </div>
                // <div className='grid grid-cols-1 py-12 md:gap-4 gap-4'>
                // {topics.map((topic) => (
                  // <div className='' key={topic.id}>
                    // <AccordionItem question={topic.question} answer={topic.answer} id={topic.id} key={topic.id} />
                  // </div>
                // ))}                   
                // </div>
        // </div>
    // </div>
  // )
}

export default Categories

 {/* <CategoryCard title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />

                    <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Data Science'} /> */}