import { useState } from 'react';
import { svgAssets } from '../../assets/asset';
import { SubmitBtn } from '../../components/buttons/SubmitBtn';
import { SelectDropdown } from '../../components/dropdown/SelectDropdown';
import { MyModal } from '../../components/modal/Modal';

export const SingleDetail = ({ label, value, isVerify }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isValid, setIsValid] = useState({
		triggered: false,
		value: null
	});

	const handleModal = ({ isSubmit }) => {
		setIsOpen(false);
		if (isSubmit) {
			setIsValid({
				...isValid,
				triggered: true
			});
		}
	};

	const handleValidation = ({ isValid }) => {
		setIsOpen(true);
		setIsValid({
			...isValid,
			value: isValid
		});
	};

	return (
		<>
			<div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
				<div className="text-[#90A5B5] font-poppinsRegular">{label}</div>
				<div className="text-black font-poppinsRegular">{value}</div>
				{
					isVerify && (
						<div className='flex items-center justify-end'>
							{
								isValid.triggered
									? (
										<>
											<img
												alt="wrong_field"
												className="mr-5"
												src={ isValid.value
													?	svgAssets.review.correctTick
													: svgAssets.review.wrongTick
												}
											/>
											<img
												alt="wrong_field"
												className="cursor-pointer"
												src={svgAssets.review.undo}
												onClick={() => setIsValid({ ...isValid, triggered: false })}
											/>
										</>
									)
									: (
										<>
											<img
												alt="wrong_field"
												className="mr-5 cursor-pointer"
												src={svgAssets.verifyApplication.wrongField}
												onClick={() => handleValidation({ isValid: false })}
											/>
											<img
												alt="right_field"
												className="cursor-pointer"
												src={svgAssets.verifyApplication.rightField}
												onClick={() => handleValidation({ isValid: true })}
											/>
										</>
									)
							}
						</div>
					)
				}
			</div>
			<MyModal
				isModalOpen={isOpen}
				handleModal={handleModal}
				title=""
				centered={false}
				width={590}
			>
				<div className="">
					<h6 className="mb-4 text-lg font-medium">Tell us rejection reason</h6>
					<SelectDropdown placeholder="Enter rejection reason" />
					<div className="flex items-center justify-center mt-12">
						<SubmitBtn handleSubmitBtn={() => handleModal({ isSubmit: true })} />
					</div>
				</div>
			</MyModal >
		</>
	);
};
