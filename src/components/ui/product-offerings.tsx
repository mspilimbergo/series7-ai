import { products } from '../../data/products';
import ProductCard from "./product-card";

export default function ProductOfferrings() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      };
    
      return (
        // <div className='w-full bg-[#E9F8F3B2] py-32'>
        //     <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
        //         <div className='py-4'>
        //           <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
        //           <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
        //         </div>
        //         <div>
        //         {products.map((product,i)=>
        //             <div key={i}>
        //               <ProductCard />
        //             </div> )}
        //         </div>
        //     </div>
        // </div>
        <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0'>
        <div className='py-4'>
        <h1 className='py-3 text-3xl font-bold'><span className='text-[#20B486]'>Series 7</span> Topics </h1>
          {/* <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {products.map((product, i) => (
            <div className='' key={i}>
              <ProductCard />
            </div>
          ))}
        </div>
        </div>
        </div>

      )
}