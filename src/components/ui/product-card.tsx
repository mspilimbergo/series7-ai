

export default function ProductCard() {
    return (
        <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mb-4'>
  {/* <img src={course.linkImg} className="h-40 w-full object-cover" /> */}
  <div className='p-5 border border-b'>
    {/* <h1 className='py-2 truncate'>{course.title}</h1> */}
    <h1 className='py-2 truncate'>Product Offering</h1>
    {/* <StarRating rating={course.rating}/> */}
  </div>
  <h3 className='p-5 text-xl'>Product details</h3>

  <div className='bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
    {/* {course.category} */}
    Class category
  </div>
</div>

      )
}