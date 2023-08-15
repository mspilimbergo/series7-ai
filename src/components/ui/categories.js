import AccordionItem from '../AccordionItem'

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

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Series 7 <span className='text-[#20B486]'>Subjects</span></h1>
                {/* <p className='text-lg text-gray-600 mb-4'>Various versions have evolved over the years, sometimes by accident.</p> */}
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-4'>
                {topics.map((topic) => (
                  <div className='' key={topic.id}>
                    <AccordionItem {...topic} key={topic.id} />
                    {/* <ProductCard /> */}
                  </div>
                ))}
                    {/* <CategoryCard title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />

                    <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Data Science'} /> */}
                </div>
        
        
        </div>
    </div>
  )
}

export default Categories