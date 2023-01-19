import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { svgAssets } from '../assets/asset';

const Login = () => {
	const navigate = useNavigate();

	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = () => {
		navigate('/');
	};

	return (
		<div className="w-full h-screen flex items-center justify-between">
			<div className="w-[45%] h-full flex items-center bg-[#5367FC]">
				<img alt="login_screen_image" src={svgAssets.login.login_screen_img}></img>
			</div>
			<div className="w-[55%] h-full py-10 full px-20 relative">
				<img className="absolute top-[40px] h-[40px]" alt="app_logo" src={svgAssets.bigul} />
				<div className="w-full h-full flex flex-col justify-center">
					<h6 className="mb-7 text-black text-2xl font-semibold capitalize">login</h6>
					<div className="mb-16">
						<div className="flex flex-col mb-8">
							<span className="mb-3">Email Id*</span>
							<input className="p-4 text-[#989898] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
						</div>
						<div className="flex flex-col mb-8">
							<span className="mb-3">Password*</span>
							<div className="relative rounded-md shadow-sm">
								<input
									className='w-full p-4 text-[#989898] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]'
									type={!showPassword ? 'password' : 'text'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Please enter password"
									required
								/>
								<img
									className="cursor-pointer absolute right-3 top-0 bottom-0 mt-auto mb-auto"
									width={24} alt="hide_password"
									src={showPassword ? svgAssets.login.show_password : svgAssets.login.hide_password}
									onClick={() => setShowPassword(!showPassword)}
								/>
							</div>
						</div>
						<div>
							<div className="leading-tight flex items-center justify-between">
								<div>
									<input className="form-checkbox mt-1" type="checkbox" />
									<label className="ml-2 text-[#666666]">Remember me</label>
								</div>
								<span className="text-[#666666]">Forgot Password?</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="w-min px-9 py-3 flex items-center justify-center text-white rounded-[10px] bg-[#5367FC]"
							onClick={() => handleLogin()}
						>
							<img className="mr-2.5" alt="login_screen_enter_img" src={svgAssets.login.login_enter}></img>
							<span className="">Login</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
