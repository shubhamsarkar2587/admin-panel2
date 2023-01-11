import { useState } from 'react';
import KycDialog from '../components/dialog/KycDialog';
import Navbar from '../components/navbar/Navbar'
import ProgressStep from '../components/kyc/progressStep/ProgressStep';
import Sidebar from '../components/sidebar/Sidebar'
import InitMobileEmail from '../components/kyc/step1/InitMobileEmail';
import VerifyMobileEmail from '../components/kyc/step1/VerifyMobileEmail';
import VerifyPan from '../components/kyc/step1/VerifyPan';
import VerifyBankDetails from '../components/kyc/step1/VerifyBankDetails';

const Kyc = () => {
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
          <div className="mb-14">
            <ProgressStep />
          </div>
          <div>
            {/* <InitMobileEmail /> */}
            {/* <VerifyMobileEmail /> */}
            {/* <VerifyPan /> */}
            <VerifyBankDetails />
          </div>
        </div>
      </div>
      <KycDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </>
  )
}

export default Kyc