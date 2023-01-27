import { Checkbox } from '../../../components/common/Checkbox';

export const Declaration = () => {
	return (
		<div className="grid grid-cols-3 gap-10">
			<div>
				<Checkbox className="mb-6" labelText="Account statement required" />
				<Checkbox className="mb-6" labelText="Account statement required" />
				<Checkbox className="mb-6" labelText="Account statement required" />
			</div>
			<div >
				<Checkbox labelText="Account statement required" />
				<Checkbox labelText="Account statement required" />
				<Checkbox labelText="Electronic transaction cum holding statement Electronic transaction cum holding statement" />
			</div>
			<div >
				<Checkbox labelText="Account statement required" />
				<Checkbox labelText="Account statement required" />
				<Checkbox labelText="Account statement required" />
			</div>
		</div>
	);
};
