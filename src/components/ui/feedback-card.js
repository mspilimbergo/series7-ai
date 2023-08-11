// import { avatar, quotationMark } from '../assets'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
       <Card className="w-full mt-4">
          <CardHeader className="flex flex-col flex-start">
            <CardTitle className="divide-y divide-zinc-600/50">
            Jenny Wilson
            </CardTitle>
            <CardDescription className="flex-grow text-lg">
            UI-UX Designer
            </CardDescription>
            <CardDescription className="flex-grow sm:text-sm">
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
            </CardDescription>
          </CardHeader>
          {/* <CardFooter>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</CardFooter> */}
        </Card>
      {/* <Card className='p-4'> */}
      {/* <div className='flex justify-between'> */}
        {/* <div className='flex flex-col gap-4'> */}
              {/* <CardTitle>Jenny Wilson</CardTitle> */}
              {/* <CardDescription>UI-UX Designer</CardDescription> */}
              {/* <CardDescription>UI-UX Designer</CardDe/scription> */}
              {/* <CardFooter>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</CardFooter> */}
            
            {/* </div> */}
            {/* <img className='h-8' src={quotationMark} /> */}
      {/* </div> */}

      {/* <div className='py-8'> */}
        {/* <CardFooter>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</CardFooter> */}
        {/* <h3 className='md:text-lg  sm:text-sm'>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</h3> */}
      {/* </div> */}
      {/* </Card> */}
    </div>
  )
}

export default FeedbackCard