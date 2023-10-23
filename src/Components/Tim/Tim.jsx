import React from 'react'
import logos1 from '../../../src/assets/logos/logo1.png'
import logos2 from '../../../src/assets/logos/logo2.png'
import logos3 from '../../../src/assets/logos/logo3.png'
import logos4 from '../../../src/assets/logos/logo4.png'
import logos5 from '../../../src/assets/logos/logo5.png'
import logos6 from '../../../src/assets/logos/logo6.png'

const Tim = () => {
  return (
    <div className='py-[48px]'>
      <div className='max-w-container mx-auto  py-[32px] '>

        <div className='flex gap-x-[78px]'>
          <div className='w-[30%] ml-[-14px] bg-tim  bg-cover bg-center bg-no-repeat h-[326px] w-[326px]'></div>


          <div className='w-[70%] w-[748px]'>
            <p className='pb-[16px]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

             <h3 className='text-[#4CAF4F] font-semibold pb-[8px]'>Tim Smith</h3>

             <h4 className='pb-[32px]'>British Dragon Boat Racing Association</h4>
                   
            <div className='flex gap-x-[36px]'>
            <img src={logos1} alt="" />
             <img src={logos2} alt="" />
             <img src={logos3} alt="" />
             <img src={logos4} alt="" />
             <img src={logos5} alt="" />
             <img src={logos6} alt="" />
            </div>

          </div>

        </div>



      </div>

    </div>
  )
}

export default Tim