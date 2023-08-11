// import { avatar, quotationMark } from '../assets'
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <Card>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                {/* <img src={avatar} /> */}
                <div>
                    <CardHeader><h1>Jenny Wilson</h1></CardHeader>
                    <CardDescription>UI-UX Designer</CardDescription>
                </div>
            
            </div>
            {/* <img className='h-8' src={quotationMark} /> */}
      </div>

      <div className='py-8'>
        <h3 className='md:text-lg  sm:text-sm'>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</h3>
      </div>
      </Card>
    </div>
  )
}

export default FeedbackCard