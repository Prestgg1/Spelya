import Comments from '@/components/Comments';
import Counter from '@/components/Counter';
import Hizmetler from '@/components/Hizmetler';
import Questions from '@/components/Questions';
import References from '@/components/References';
import Team from '@/components/Team';
import Video from '@/components/Video';
import Image from 'next/image';
import Hood from "@/components/Hood";
import Trail from '@/components/Trail';


export const metadata = {
  title: 'Hakkımızda',
  description: 'Biz kimiz?',
}
 

export default function About() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center w-full justify-between py-24">
      <div className='container flex-col gap-10 justify-center flex items-center'>
      <Hood hood='About AIMug' title="A Magical Tool For Seamless Collaboration" paragraf="Mastering the Art of AI Tool: Unleashing the Power of
Automated Creativity with AIMug"/>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="basis-3/4 max-h-[26rem] rounded-3xl shadow-2xl" alt='AboutHero' width={1400} height={314} />
            <div className='basis-1/2 h-full'>
              <h1 className="text-5xl font-bold">Create Something New with AIMug, that&apos;s simple to use</h1>
              <p className="py-6">There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let&apos;s communicate with your customers with emotions</p>
              <div className='flex gap-4'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='container flex-col justify-center flex items-center'>
          <div className='w-full font-extrabold text-2xl text-center'>Trusted by <span className='text-primary'><Counter start={0} end={10.8} decimals={1} decimal="," duration={10} />K</span>  teams, agencies and freelancers.</div>
          <References />
        </div>

      </div>
      <Video />
      <div className="container space-y-4">

        <Team />
        <Comments />
        <Hizmetler />
        <Questions />
        <Trail/>
      </div>


    </main>
  );
}
