// import { InitMobileEmail } from './step1/InitMobileEmail';
import { VerifyMobileEmail } from './step1/VerifyMobileEmail';
import { VerifyPan } from './step2/VerifyPan';
import { PersonalDetail } from './step3/PersonalDetail';
import { OccuptionDetail } from './step4/OccupationDetail';
import { VerifyBankDetails } from './step5/VerifyBankDetails';
import { BrokerageStep } from './step6/BrokerageStep';
import { UploadSelfie } from './step7/UploadSelfie';
import { UploadSignature } from './step8/UploadSignature';
import { KycSuccess } from './success/KycSuccess';

export const kycSteps = () => [
	{
		label: 'Step 1',
		value: 'step1',
		status: 'active',
		isSuccess: true,
		component: <VerifyMobileEmail />
	},
	{
		label: 'Step 2',
		value: 'step2',
		status: 'inactive',
		isSuccess: true,
		component: <VerifyPan />
	},
	{
		label: 'Step 3',
		value: 'step3',
		status: 'inactive',
		isSuccess: true,
		component: <PersonalDetail />
	},
	{
		label: 'Step 4',
		value: 'step4',
		status: 'inactive',
		isSuccess: true,
		component: <OccuptionDetail />
	},
	{
		label: 'Step 5',
		value: 'step5',
		status: 'inactive',
		isSuccess: true,
		component: <VerifyBankDetails />
	},
	{
		label: 'Step 6',
		value: 'step6',
		status: 'inactive',
		isSuccess: true,
		component: <BrokerageStep />
	},
	{
		label: 'Step 7',
		value: 'step7',
		status: 'inactive',
		isSuccess: true,
		component: <UploadSelfie />
	},
	{
		label: 'Step 8',
		value: 'step8',
		status: 'inactive',
		isSuccess: true,
		component: <UploadSignature />
	},
	{
		label: 'Step 9',
		value: 'step9',
		status: 'inactive',
		isSuccess: true,
		component: <KycSuccess />
	}
];

export const verificationSteps = () => [
	{
		label: 'Step 1',
		value: 'step1',
		status: 'verifyView',
		isSuccess: true,
		component: <VerifyMobileEmail />
	},
	{
		label: 'Step 2',
		value: 'step2',
		status: 'success',
		isSuccess: true,
		component: <VerifyPan />
	},
	{
		label: 'Step 3',
		value: 'step3',
		status: 'success',
		isSuccess: true,
		component: <PersonalDetail />
	},
	{
		label: 'Step 4',
		value: 'step4',
		status: 'success',
		isSuccess: true,
		component: <OccuptionDetail />
	},
	{
		label: 'Step 5',
		value: 'step5',
		status: 'success',
		isSuccess: true,
		component: <VerifyBankDetails />
	},
	{
		label: 'Step 6',
		value: 'step6',
		status: 'success',
		isSuccess: true,
		component: <BrokerageStep />
	},
	{
		label: 'Step 7',
		value: 'step7',
		status: 'success',
		isSuccess: true,
		component: <UploadSelfie />
	},
	{
		label: 'Step 8',
		value: 'step8',
		status: 'success',
		isSuccess: true,
		component: <UploadSignature />
	},
	{
		label: 'Step 9',
		value: 'step9',
		status: 'success',
		isSuccess: true,
		component: <KycSuccess />
	}
];
