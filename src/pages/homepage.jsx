import { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import DisplayTable from "../components/reactTable/displayTable";
import Applications from "../components/widgets/Applications";
import Date from "../components/widgets/Date";
import KycDialog from "../components/dialog/KycDialog";

const Homepage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleKycModel = (condition) => {
    if (condition) {
      setIsModelOpen(true)
    } else {
      setIsModelOpen(false)
    }
  }

  return (
    <>
      <Navbar handleKycModel={handleKycModel} />
      <div className="flex h-full">
        <Sidebar handleKycModel={handleKycModel} />
        <div className="pl-5 pr-[30px] py-5 ml-[300px] mt-[115px] flex flex-col grow w-full h-full">
          <div className="mb-[30px] flex">
            <Date />
            <Date />
            <Date />
          </div>
          <div className="mb-[30px] grid grid-cols-3 gap-x-9">
            <Applications />
            <Applications />
            <Applications />
          </div>
          <div>
            <DisplayTable />
          </div>
        </div>
      </div>
      <KycDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </>
  )
}

export default Homepage;
