import React from 'react'

function AddressSec() {
  return (
    <div className='flex flex-row gap-20'>
      <div className='w-full h-28 border-r-2 pl-2 border-gray-300'>Nairobi, Kenya
 <p>info@celebratelife.co.ke</p>
+254 722 123 015</div>
      <div className='w-full h-28 border-r-2 border-gray-300'>Nairobi, Kenya
<p>info@celebratelife.co.ke</p>
<span>
+254 722 123 015
</span>

        {/* <button className='bg-green-300'>Contact Us  </button> */}
      </div>
      <div className='w-full h-28 border-r-2 border-gray-300'>Nairobi, Kenya
<p>info@celebratelife.co.ke</p>
<span>+254 722 123 015</span>
</div>
      <div className='w-full h-28 border-r-2 border-gray-300'>Nairobi, Kenya
        <p>info@celebratelife.co.ke</p>
        <span>+254 722 123 015</span>
</div>
    </div>
  )
}

export default AddressSec
