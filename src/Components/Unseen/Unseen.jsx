import React from 'react'

const Unseen = () => {
  return (
   <div className='mb-[48px]'>

<div  className='max-w-container mx-auto flex items-center gap-x-[50px] '>

<div className='bg-unseen  bg-cover bg-center bg-no-repeat py-[58px] h-[407px] w-[391px] '></div>

<div> 
    <h2 className='w-[601px] text-[36px] font-semibold text-[#4D4D4D]'>The unseen of spending three years at Pixelgrade</h2>
    <p className='w-[630px] text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

      {/* BUTTON */}

      <div className='mt-[32px]'>
              <a className=' font-pops text-base font-semibold text-white bg-primary border-2 px-[30px] md:py-[13px] py-[5px] md:mt-[30px]' href="#">LEARN MORE</a>
            </div>

</div>


    </div>
   </div>
  )
}

export default Unseen