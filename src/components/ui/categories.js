import CategoryCard from '@/components/ui/category-card'
import { AiOutlineCamera } from 'react-icons/ai'
import { BiData } from 'react-icons/bi'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { TbMicrophone2, TbMusic } from 'react-icons/tb'
import { TiHtml5 } from 'react-icons/ti'
import { WiSunrise } from 'react-icons/wi'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600 mb-4'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-4'>
                    <CategoryCard title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />

                    <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Data Science'} />
                </div>
        
        
        </div>
    </div>
  )
}

export default Categories