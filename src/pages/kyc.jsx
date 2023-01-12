import { useEffect, useState } from 'react';

import KycDialog from '../components/dialog/KycDialog';
import Navbar from '../containers/navbar/Navbar'
import Sidebar from '../containers/sidebar/Sidebar'
import InitMobileEmail from '../containers/kyc/step1/InitMobileEmail';
import VerifyMobileEmail from '../containers/kyc/step1/VerifyMobileEmail';
import VerifyPan from '../containers/kyc/step2/VerifyPan';
import VerifyBankDetails from '../containers/kyc/step3/VerifyBankDetails';
import PersonalDetails from '../containers/kyc/step4/PersonalDetails';
import OccuptionDetail from '../containers/kyc/step4/OccupationDetail';
import BrokerageDetails from '../containers/kyc/step5/BrokerageDetails';
import StepProgressBar from '../containers/kyc/stepProgressBar/StepProgressBar';
import BackBtn from '../components/buttons/BackBtn';
import ContinueBtn from '../components/buttons/ContinueBtn';
import UploadSelfie from '../containers/kyc/step6/UploadSelfie';
import UploadSignature from '../containers/kyc/step7/uploadSignature';

const Kyc = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'Step 1', status: 'inactive'},
    { label: 'Step 2', status: 'inactive'},
    { label: 'Step 3', status: 'inactive'},
    { label: 'Step 4', status: 'inactive'},
    { label: 'Step 5', status: 'inactive'},
    { label: 'Step 6', status: 'inactive'},
    { label: 'Step 7', status: 'inactive'},
    { label: 'Step 8', status: 'inactive'},
  ]);

  const handleKycModel = (condition) => {
    if (condition) {
      setIsModelOpen(true)
    } else {
      setIsModelOpen(false)
    }
  }

  const handleBackBtn = () => {
    if (selectedStep > 0) {
      setSelectedStep(selectedStep - 1)
      const updatedSteps = steps.map((step, index) => index === selectedStep ? {...step, status: 'inactive' } : step ) 
      setSteps( updatedSteps)
    }
  }

  const handleContinueBtn = () => {
    if (selectedStep < steps.length) {
      setSelectedStep(selectedStep + 1)
      const updatedSteps = steps.map((step, index) => index === selectedStep ? {...step, status: 'active' } : step ) 
      setSteps( updatedSteps)
    }
  }

  useEffect(() => {
    handleKycModel(true)
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="pl-5 pr-[30px] py-5 ml-[300px] mt-[115px] flex flex-col grow w-full h-full">
          <div className="mb-14">
            <StepProgressBar selectedStep={selectedStep} steps={steps} />
          </div>
          <div className="min-h-[calc(100vh-340px)]">
            {selectedStep === 0 && <InitMobileEmail />}
            {selectedStep === 1 && <VerifyMobileEmail />}
            {selectedStep === 2 && <VerifyPan />}
            {selectedStep === 3 && <VerifyBankDetails />}
            {selectedStep === 4 && <PersonalDetails />}
            {selectedStep === 5 && <OccuptionDetail />}
            {selectedStep === 6 && <BrokerageDetails />}
            {selectedStep === 7 && <UploadSelfie />}
            {selectedStep === 8 && <UploadSignature />}
          </div>
          <div className="flex items-center justify-between">
            <BackBtn handleBackBtn={handleBackBtn} />
            <ContinueBtn handleContinueBtn={handleContinueBtn} />
          </div>
        </div>
      </div>
      <KycDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </>
  )
}

export default Kyc