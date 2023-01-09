import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const Kyc = () => {

  return (
    <>
      <Navbar selectedPage={'kyc'} />
      <div className="flex">
        <Sidebar />
        <div className="pl-5 pr-[30px] py-5 flex flex-col grow w-full h-full">
          Welcome to kyc Page!
        </div>
      </div>
    </>
  )
}

export default Kyc