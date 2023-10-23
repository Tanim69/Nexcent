import React from 'react'

import client1 from '../../../src/assets/clientimg/client1.png'
import client2 from '../../../src/assets/clientimg/client2.png'
import client3 from '../../../src/assets/clientimg/client3.png'
import client4 from '../../../src/assets/clientimg/client4.png'
import client5 from '../../../src/assets/clientimg/client5.png'
import client6 from '../../../src/assets/clientimg/client6.png'
import client7 from '../../../src/assets/clientimg/client7.png'


const Client = () => {
    return (
        <div className='max-w-container mx-auto '>

            <div>
                <h1 className='text-center text-[36px] pb-[8px] mt-[40px] font-semibold text-[#4D4D4D]'>Our Clients</h1>
                <p className='text-center pb-[22px] text-[#4D4D4D]'>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className='flex gap-x-[137px] pb-[40px]'>
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
                <img src={client5} alt="" />
                <img src={client6} alt="" />
                <img src={client7} alt="" />
            </div>


        </div>
    )
}

export default Client