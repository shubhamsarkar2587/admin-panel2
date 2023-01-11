import { useState } from 'react';
import KycDialog from '../components/dialog/KycDialog';
import Navbar from '../containers/navbar/Navbar'
import ProgressStep from '../containers/kyc/progressStep/ProgressStep';
import Sidebar from '../containers/sidebar/Sidebar'
import InitMobileEmail from '../containers/kyc/step1/InitMobileEmail';
import VerifyMobileEmail from '../containers/kyc/step1/VerifyMobileEmail';
import VerifyPan from '../containers/kyc/step2/VerifyPan';
import VerifyBankDetails from '../containers/kyc/step3/VerifyBankDetails';
import PersonalDetails from '../containers/kyc/step4/PersonalDetails';
import OccuptionDetail from '../containers/kyc/step4/OccupationDetail';
import BrokerageDetails from '../containers/kyc/step5/BrokerageDetails';

const kycSteps = () => [
  {
    name: 'Step 1',
    isValidStep: false,
  }
]

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
            {/* <VerifyBankDetails /> */}
            {/* <PersonalDetails /> */}
            {/* <OccuptionDetail /> */}
            <BrokerageDetails />
          </div>
        </div>
      </div>
      <KycDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </>
  )
}

export default Kyc