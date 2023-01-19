import './popover.css';
import { useState } from 'react';
import { Popover, ArrowContainer } from 'react-tiny-popover';

const MyPopover = ({ PopoverParentComp, PopoverChildComp }) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	return (
		<Popover
			containerClassName="my-component-popover"
			isOpen={isPopoverOpen}
			positions={['bottom']}
			padding={10}
			onClickOutside={() => setIsPopoverOpen(false)}
			content={({ position, childRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					childRect={childRect}
					popoverRect={popoverRect}
					arrowSize={15}
					arrowColor={'#fff'}
				>
					<PopoverChildComp />
				</ArrowContainer>
			)}
		>
			<div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>

				<PopoverParentComp />
			</div>
		</Popover>
	);
};

export default MyPopover;
