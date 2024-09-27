import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isMobile, setIsMobile] = useState(Boolean)

  useEffect(() => {
    innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  },[])

  return (
    <div className='flex justify-between p-2 text-white'>
        <span className='text-white flex items-center justify-center text-2xl font-bold'>IWON</span>
        <div className={`${isMobile ? "visible" : "hidden"}`}>BURGER</div>
        <div className={`flex items-center gap-4 ${isMobile ? "hidden" : "visible"}`}>
          <a href="/work">WORK</a>
          <a href="/contact">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar