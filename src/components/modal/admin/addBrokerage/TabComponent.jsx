import { SelectDropdown } from '../../../dropdown/SelectDropdown';

export const EquityTab = () => (
	<>
		<div className="mb-[36px]">
			<SelectDropdown
				label="Trading"
				isImportant={true}
				placeholder="Select Trading Plan"
			/>
		</div>
		<div className="mb-[50px]">
			<SelectDropdown
				label="Delivery"
				isImportant={true}
				placeholder="Select Delivery Plan"
			/>
		</div>
	</>
);

export const FutureOptionTab = () => (
	<>
		<div className="mb-[36px]">
			<SelectDropdown
				label="Future"
				isImportant={true}
				placeholder="Select Future Plan"
			/>
		</div>
		<div className="mb-[50px]">
			<SelectDropdown
				label="Option"
				isImportant={true}
				placeholder="Select Option Plan"
			/>
		</div>
	</>
);

export const CommodityTab = () => (
	<>
		<div className="mb-[36px]">
			<SelectDropdown
				label="MCX Future"
				isImportant={true}
				placeholder="Select MCX Future Plan"
			/>
		</div>
		<div className="mb-[50px]">
			<SelectDropdown
				label="MCX Option"
				isImportant={true}
				placeholder="Select MCX Option Plan"
			/>
		</div>
	</>
);

export const CurrencyTab = () => (
	<>
		<div className="mb-[36px]">
			<SelectDropdown
				label="Currency Future"
				isImportant={true}
				placeholder="Select Currency Future Plan"
			/>
		</div>
		<div className="mb-[50px]">
			<SelectDropdown
				label="Currency Option"
				isImportant={true}
				placeholder="Select Currency Option Plan"
			/>
		</div>
	</>
);
