import { Card, CardHeader } from '@/components/ui/card'

const CategoryCard = ({icons,title}) => {
  return (
    <div>
    {/* // <div className=' bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit'> */}
        <Card>
          <CardHeader><h1 className='md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold' >{title}</h1></CardHeader>          
        </Card>
        {/* <div className='flex gap-4'> */}
            {/* {icons} */}
            
        {/* </div>         */}
        {/* <div className='group-hover/edit:bg-[#20B486] rounded-lg p-3'> */}
            {/* <BsArrowUpRight 
                size={30}
                style={{color:'#20B486'}}
                className='arrow-icon'
            
            /> */}
        {/* </div> */}
        
    </div>
  )
}

export default CategoryCard