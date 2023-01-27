import InitMobileEmail from './step1/InitMobileEmail';
import VerifyMobileEmail from './step1/VerifyMobileEmail';
import VerifyPan from './step2/VerifyPan';
import VerifyBankDetails from './step3/VerifyBankDetails';
import PersonalDetails from './step4/PersonalDetails';
import OccuptionDetails from './step4/OccupationDetail';
import { BrokerageStep } from './step5/BrokerageStep';
import UploadSelfie from './step6/UploadSelfie';
import UploadSignature from './step7/uploadSignature';
import { ReviewApplication } from '../review/ReviewApplication';

export const kycSteps = () => [
	{
		label: 'Step 1',
		value: 'step1',
		status: 'active',
		subStepStatus: 'active',
		isSuccess: true,
		component: <InitMobileEmail />,
		subSteps: [
			{
				value: 'step1_1',
				isSuccess: true,
				component: <VerifyMobileEmail />
			}
		]
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
		component: <VerifyBankDetails />
	},
	{
		label: 'Step 4',
		value: 'step4',
		status: 'inactive',
		isSuccess: true,
		component: <PersonalDetails />,
		subSteps: [
			{
				value: 'step1_1',
				status: 'inactive',
				component: <OccuptionDetails />
			}
		]
	},
	{
		label: 'Step 5',
		value: 'step5',
		status: 'inactive',
		isSuccess: true,
		component: <BrokerageStep />
	},
	{
		label: 'Step 6',
		value: 'step6',
		status: 'inactive',
		isSuccess: true,
		component: <UploadSelfie />
	},
	{
		label: 'Step 7',
		value: 'step7',
		status: 'inactive',
		isSuccess: true,
		component: <UploadSignature />,
		subSteps: [
			{
				value: 'step1_1',
				status: 'inactive',
				isSuccess: true,
				showProgressBar: false,
				component: <ReviewApplication />
			}
		]
	},
	{
		label: 'Step 8',
		value: 'step8',
		status: 'inactive',
		isSuccess: true,
		component: <ReviewApplication />
	}
];

export const verificationSteps = () => [
	{
		label: 'Step 1',
		value: 'step1',
		status: 'verifyView',
		subStepStatus: 'active',
		isSuccess: true,
		component: <InitMobileEmail />,
		subSteps: [
			{
				value: 'step1_1',
				isSuccess: true,
				component: <VerifyMobileEmail />
			}
		]
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
		component: <VerifyBankDetails />
	},
	{
		label: 'Step 4',
		value: 'step4',
		status: 'success',
		isSuccess: true,
		component: <PersonalDetails />,
		subSteps: [
			{
				value: 'step1_1',
				status: 'success',
				component: <OccuptionDetails />
			}
		]
	},
	{
		label: 'Step 5',
		value: 'step5',
		status: 'success',
		isSuccess: true,
		component: <BrokerageStep />
	},
	{
		label: 'Step 6',
		value: 'step6',
		status: 'success',
		isSuccess: true,
		component: <UploadSelfie />
	},
	{
		label: 'Step 7',
		value: 'step7',
		status: 'success',
		isSuccess: true,
		component: <UploadSignature />,
		subSteps: [
			{
				value: 'step1_1',
				status: 'success',
				isSuccess: true,
				showProgressBar: false,
				component: <ReviewApplication />
			}
		]
	},
	{
		label: 'Step 8',
		value: 'step8',
		status: 'success',
		isSuccess: true,
		component: <ReviewApplication />
	}
];
