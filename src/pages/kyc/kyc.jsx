import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { kycSteps } from '../../containers/kyc/kycData';
import { KycModal } from '../../components/modal/kyc/KycModal';
import { StepProgressBar } from '../../components/progressBar/ProgressBar';
import { BackBtn } from '../../components/buttons/BackBtn';
import { ContinueBtn } from '../../components/buttons/ContinueBtn';
import { ReviewBtn } from '../../components/buttons/ReviewBtn';
import { useNavigate } from 'react-router-dom';
import { setKycJourneyAction } from '../../redux/actions/kyc.action';

export const Kyc = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isModelOpen, setIsModelOpen] = useState(false);
	const [steps, setSteps] = useState(kycSteps || []);

	const handleBackBtn = ({ step, index }) => {
		const updatedSteps = steps.map((el, i) => {
			if (i === index) {
				return ({
					...el,
					status: 'inactive'
				});
			} else if (i === index - 1) {
				return ({
					...el,
					status: 'active'
				});
			} else {
				return el;
			}
		});
		setSteps(updatedSteps);
	};

	const handleContinueBtn = ({ step, index }) => {
		const updatedSteps = steps.map((el, i) => {
			if (i === index) {
				return ({
					...el,
					status: 'success'
				});
			} else if (i === index + 1) {
				return ({
					...el,
					status: 'active'
				});
			} else {
				return el;
			}
		});
		setSteps(updatedSteps);
	};

	const handleReviewBtn = () => {
		navigate('/kyc/review');
	};

	const handleKycModel = ({ isOpen, channel }) => {
		if (isOpen) {
			setIsModelOpen(true);
		} else {
			dispatch(setKycJourneyAction(
				{
					channel,
					mobile: '8878228302',
					email: 'xyzankit@gmail.com',
					user_id: 2
				},
				() => setIsModelOpen(false))
			);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			handleKycModel({ isOpen: true });
		}, 1000);
	}, []);

	return (
		<>
			{
				steps?.length > 0
					? steps.map((step, index) => step.status === 'active'
						? (
							<div key={`kyc_step_${index}`}>
								<div className="w-full pb-4 mb-10 bg-[#F6F8F9] sticky top-[105px] z-50">
									<StepProgressBar selectedStep={index} steps={steps} showStepLabel={true} />
								</div>
								<div className="min-h-[calc(100vh-290px)]">
									{
										step.component
									}
								</div>
								<div className={`flex items-center 
                ${index === 0 ? 'justify-end' : 'justify-between'}
              `}>
									{index !== 0 && (<BackBtn handleBackBtn={() => handleBackBtn({ step, index })} />)}
									{index !== steps.length - 1
										? (<ContinueBtn handleContinueBtn={() => handleContinueBtn({ step, index })} />)
										: (<ReviewBtn handleReviewBtn={handleReviewBtn} />)
									}
								</div>
							</div>)
						: null
					)
					: null
			}
			<KycModal isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
		</>
	);
};
