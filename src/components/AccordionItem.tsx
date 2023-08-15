'use client';

import { useRef, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
    id: number;
    question: string;
    answer: string;
  }

const AccordionItem: React.FC<Props> = ({ question, answer, id }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [height, setHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
  
    const handleClick = (idx: number) => {
      if (activeIndex !== idx) {
        setActiveIndex(idx);
        setHeight(contentRef.current!.clientHeight);
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
          <span className='lg:text-lg font-semibold md:text-xl xl:text-xl'>{question}</span>
  
          {activeIndex === id ? (
            // <AiOutlineArrowUp size={30} className='w-5 h-5 xl:w-8 xl:h-8 stroke-[2px]' />
            <AiOutlineArrowUp size={25}  />
          ) : (
            <AiOutlineArrowDown size={25}/>
          )}
        </button>
  
        <div
          className='transition-all h-0 duration-200 overflow-hidden'
          style={{ height: `${activeIndex === id ? `${height}px` : 0}` }}
        >
          <div ref={contentRef} className='max-w-5xl pt-3 xl:pt-4'>
            <p className='text-sm lg:text-base xl:text-lg'>{answer}</p>
          </div>
        </div>
      </li>
    );
  };

  export default AccordionItem;