'use client';

import { useRef, useState } from 'react';

// const DropDownMenu = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// interface Props {
//     id: number;
//     question: string;
//     answer: string;
//   }

const AccordionItem = ({question, answer, id}) => {

  // const AccordionItem = (data) => {
    const [activeIndex, setActiveIndex] = useState();
    const [height, setHeight] = useState();
    const contentRef = useRef<HTMLDivElement>(null);
  
    const handleClick = (idx) => {
      if (activeIndex !== idx) {
        setActiveIndex(idx);
        setHeight(contentRef.current.clientHeight);
      } else {
        setActiveIndex(null);
        setHeight(0);
      }
    };
  
    return (
      <li
        data-aos='fade-up'
        data-aos-delay={`${id * 200}`}
        className='border border-brand-gray-100 rounded-2xl px-4 py-3 lg:px-6 lg:py-5 list-none'
      >
        <button
          onClick={() => handleClick(id)}
          type='button'
          className={`w-full flex items-center justify-between hover:text-brand-gray-600 ${
            activeIndex === id ? 'text-brand-gray-600' : 'text-brand-gray-400'
          }`}
        >
          <div className='flex'>
            <span className='lg:text-lg font-semibold md:text-xl xl:text-xl text-left'>{question}</span>
            {/* {activeIndex === id ? (
              // <AiOutlineArrowUp size={30} className='w-5 h-5 xl:w-8 xl:h-8 stroke-[2px]' />
              <AiOutlineArrowUp size={25}  />
            ) : (
              <AiOutlineArrowDown size={25}/>
            )} */}
          </div>
          
  

        </button>
  
        <div
          className='transition-all h-0 duration-200 overflow-hidden'
          style={{ height: `${activeIndex === id ? `${height}px` : 0}` }}
        >
          <div ref={contentRef} className='max-w-5xl pt-3 xl:pt-4'>
            {/* <p className='text-sm lg:text-base xl:text-lg'>{answer}</p> */}
            {/* {answer} */}
            {/* <answer /> */}
            {/* <answer /> */}
          </div>
        </div>
      </li>
    );
  };

  export default AccordionItem;