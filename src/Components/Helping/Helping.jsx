import React from 'react'
import member from '../../../src/assets/helpingicon/member.png'

const Helping = () => {
    return (
        <div className='bg-[#F5F7FA]'>

            <div className='max-w-container mx-auto py-[64px] flex gap-x-[204px]'>

                <div>

                    <h2 className='w-[408px] text-[36px] font-semibold leading-[44px]'>Helping a local <span className='text-[#4CAF4F] '>  <br /> business reinvent itself </span></h2>
                    <p className='mt-[8px] '>We reached here with our hard work and dedication</p>
                </div>
                {/* left side done */}

       <div className='flex'>
       <div>
             <div className='flex items-center'>
                    <div>
                        <img src={member} alt="" />
                    </div>
                    <div className='ml-[16px] w-[191px] '>
                        <h3 className='text-[28px] font-semibold' >2,245,341</h3>
                        <p>Members</p>
                    </div>

                </div>

                <div className='flex items-center'>
                    <div>
                        <img src={member} alt="" />
                    </div>
                    <div className='ml-[16px] w-[191px] '>
                        <h3 className='text-[28px] font-semibold' >828,867</h3>
                        <p>Event Bookings</p>
                    </div>

                </div>
             </div>

             {/* one side */}

                <div>
                <div className='flex items-center'>
                    <div>
                        <img src={member} alt="" />
                    </div>
                    <div className='ml-[16px] w-[191px] '>
                        <h3 className='text-[28px] font-semibold' >46,328</h3>
                        <p>Clubs</p>
                    </div>

                </div>

                <div className='flex items-center'>
                    <div>
                        <img src={member} alt="" />
                    </div>
                    <div className='ml-[16px] w-[191px] '>
                        <h3 className='text-[28px] font-semibold' >1,926,436</h3>
                        <p>Payments</p>
                    </div>

                </div>
                </div>
       </div>


{/* right done */}

            </div>



        </div>
    )
}

export default Helping