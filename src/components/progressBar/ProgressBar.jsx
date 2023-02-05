import { statusParameter } from './progressBarData';

export const 	StepProgressBar = ({ selectedStep, steps, showStepLabel, width, circleDim, circleRadius, lineDim }) => {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className={`${width || 'w-3/4'} grid grid-cols-8 items-center mb-[15px]`}>
				{
					steps?.length > 0
						? steps.map((step, index) => index !== steps.length - 1
							? (
								<div key={`step_${index}`} className="w-full flex items-center">
									<div className="w-full flex items-center">
										<div className={`w-full ${lineDim || 'h-[5px]'} items-center ${index !== 0 ? selectedStep >= index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}>
											<div width={50} className={`w-1/2 ${lineDim || 'h-[5px]'} leading-none ${index !== 0 ? selectedStep >= index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}></div>
										</div>
									</div>
									<div
										className={'h-full rounded-full'}
										style={{
											minWidth: circleDim || statusParameter[step.status].size,
											width: circleDim || statusParameter[step.status].size,
											height: circleDim || statusParameter[step.status].size,
											border: circleRadius || `2px solid ${statusParameter[step.status].borderColor}`,
											backgroundColor: statusParameter[step.status].bgColor
										}}
									>
									</div>
									<div className="w-full flex items-center">
										<div className={`w-full ${lineDim || 'h-[5px]'} items-center ${index !== steps.length - 2 ? selectedStep > index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}>
											<div width={50} className={`w-1/2 ${lineDim || 'h-[5px]'} leading-none ${index !== steps.length - 2 ? selectedStep > index ? 'bg-[#5367FC]' : 'bg-[#B4BABD]' : ''}`}></div>
										</div>
									</div>
								</div>
							)
							: null)
						: null
				}
			</div>
			{
				showStepLabel && (
					<div className="w-3/4 grid grid-cols-8 items-center justify-items-center">
						{
							steps.map((step, index) => index !== steps.length - 1
								? (
									<div
										key={`step_label_${index}`}
										className="font-medium font-poppinsMedium"
										style={{
											color: statusParameter[step.status].borderColor
										}}
									>
										{step.label}
									</div>
								)
								: null)
						}
					</div>
				)
			}
		</div>
	);
};
