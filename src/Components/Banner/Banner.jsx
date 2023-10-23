import React from 'react'

const Banner = () => {
  return (

    <div className='bg-[#F5F7FA]'>


      <div className='max-w-container mx-auto py-[96px] '>
        <div className='flex gap-x-[105px] items-center'>
          <div>
            <h1 className='text-[64px] font-bold leading-[76px] '>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span> </h1>
            <p className='pt-[16px]'>Where to grow your business as a photographer: site or social media?</p>


            {/* BUTTON */}

            <div className='mt-[32px]'>
              <a className=' font-pops text-base font-semibold text-white bg-primary border-2 px-[30px] md:py-[13px] py-[5px] md:mt-[30px]' href="#">CONTACT</a>
            </div>



          </div>
          <div className='bg-banner  bg-cover bg-center bg-no-repeat py-[96px] h-[407px] w-[391px]'>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Banner