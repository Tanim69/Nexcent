import React from 'react'
import img1 from '../../../src/assets/imgbox/img1.png'
import img2 from '../../../src/assets/imgbox/img2.png'
import img3 from '../../../src/assets/imgbox/img3.png'

const Caring = () => {
    return (
        <div className='max-w-container mx-auto'>

            <div className='text-[#4D4D4D] text-center  '>
                <h1 className='text-[36px] font-semibold'>Caring is the new marketing</h1>
                <p className='w-[628px] mx-auto pt-[8px] pb-[16px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>

            <div className='flex gap-x-[24px] '>
                <div className='grid justify-items-center '>

                    <img src={img1} alt="" />
                    <h2 className='w-[285px] h-[176px] bg-white text-center mt-[-110px] rounded  pt-[16px] mb-[96px]'>Creating Streamlined Safeguarding Processes with OneRen</h2>


                </div>


                <div className='grid justify-items-center '>
                    <img src={img2} alt="" />
                    <h2 className='w-[285px] h-[176px] bg-white text-center mt-[-110px] rounded  pt-[16px] mb-[96px]'>What are your safeguarding responsibilities and how can you manage them?</h2>
            


                </div>

                <div className='grid justify-items-center '>
                    <img src={img3} alt="" />
                    <h2 className='w-[285px] h-[176px] bg-white text-center mt-[-110px] rounded pt-[16px] mb-[96px]'>Revamping the Membership, Model with Triathlon Australia</h2>

                </div>


            </div>


        </div>
    )
}

export default Caring