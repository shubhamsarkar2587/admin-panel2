import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { svgAssets, pngAssets } from '../assets/asset';
import { loginUserAction } from '../redux/actions/auth.action';
import { validateEmail, validatePassword } from '../utils/verifyInput';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loginForm, setLoginForm] = useState({
		email: {
			value: '',
			isError: false,
			errorText: ''
		},
		password: {
			value: '',
			isError: false,
			errorText: '',
			showPassword: false
		}
	});

	const handleLoginInput = ({ type, value }) => {
		setLoginForm({
			...loginForm,
			[type]: {
				value,
				isError: false,
				errorText: ''
			}
		});
	};

	const loginApiCallback = ({ status }) => {
		if (status === 200) {
			navigate('/');
		} else {
			alert('invalid credentials!');
		}
	};

	const handleLogin = () => {
		let loginPayload = { ...loginForm };
		const isValidEmail = validateEmail(loginForm.email.value || '');
		const isValidPassword = validatePassword(loginForm.password.value || '');

		if (isValidEmail && isValidPassword) {
			dispatch(loginUserAction({
				UserName: 'B100092',
				Password: 'password'
			}, loginApiCallback));
		} else {
			if (!isValidEmail) {
				loginPayload = {
					...loginPayload,
					email: {
						...loginPayload.email,
						isError: true,
						errorText: 'Please enter valid email!'
					}
				};
			}
			if (!isValidPassword) {
				loginPayload = {
					...loginPayload,
					password: {
						...loginPayload.password,
						isError: true,
						errorText: 'Password should have atleast 8 character!'
					}
				};
			}
			setLoginForm(loginPayload);
		}
	};

	return (
		<div className="w-full h-screen flex items-center justify-between">
			<div className="w-[45%] h-full flex items-center bg-[#5367FC]">
				<img alt="login_screen_image" src={svgAssets.login.loginScreenImg}></img>
			</div>
			<div className="w-[55%] h-full py-10 full px-20 relative">
				<img className="absolute top-[40px] h-[40px]" alt="app_logo" src={svgAssets.bigul} />
				<div className="w-full h-full flex flex-col justify-center">
					<h6 className="mb-7 text-black text-2xl capitalize font-semibold font-poppinsSemibold">login</h6>
					<div className="mb-16">
						<div className="flex flex-col mb-8">
							<label className="mb-3 flex items-center leading-6 font-medium font-poppinsMedium">
								<img
									className="max-h-[22px] mr-1.5 object-contain"
									alt="input_icon"
									src={pngAssets.kyc.mobileNumber}
								/>
								<span className="mr-1">Email Id</span>
								<span className="text-[#EA0000]">*</span>
							</label>
							<input
								className="h-[56px] px-4 text-[#353535] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 focus:outline-none"
								placeholder="Please enter email id"
								value={loginForm.email.value}
								onChange={(e) => handleLoginInput({ type: 'email', value: e.target.value })}
							/>
							{
								loginForm.email.isError && (
									<span className="mt-2 text-[12px] text-red-400 font-medium font-poppinsMedium">
										{loginForm.email.errorText}
									</span>)
							}
						</div>
						<div className="flex flex-col mb-8">
							<span className="mb-3 flex items-center leading-6 font-medium font-poppinsMedium">
								<img
									className="max-h-[22px] mr-1.5 object-contain"
									alt="input_icon"
									src={pngAssets.kyc.mobileNumber}
								/>
								<span className="mr-1">Password</span>
								<span className="text-[#EA0000]">*</span>
							</span>
							<div className="relative">
								<input
									className="w-full h-[56px] px-4 text-[#353535] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular leading-6 focus:outline-none"
									type={!loginForm.password.showPassword ? 'password' : 'text'}
									value={loginForm.password.value}
									onChange={(e) => handleLoginInput({ type: 'password', value: e.target.value })}
									placeholder="Please enter password"
									required
								/>
								<img
									className="cursor-pointer absolute right-3 top-0 bottom-0 mt-auto mb-auto"
									width={24} alt="hide_password"
									src={loginForm.password.showPassword ? svgAssets.login.showPassword : svgAssets.login.hidePassword}
									onClick={() => setLoginForm({
										...loginForm,
										password: {
											...loginForm.password,
											showPassword: !loginForm.password.showPassword
										}
									})}
								/>
							</div>
							{
								loginForm.password.isError && (
									<span className=" mt-2 text-[12px] text-red-400 font-medium font-poppinsMedium">
										{loginForm.password.errorText}
									</span>)
							}
						</div>
						<div>
							<div className="text-[#666666] leading-tight flex items-center justify-between font-poppinsRegular">
								<div>
									<input className="form-checkbox mt-1" type="checkbox" />
									<label className="ml-2">Remember me</label>
								</div>
								<span className="">Forgot Password?</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="w-min px-9 py-3 flex items-center justify-center text-white rounded-[10px] bg-[#5367FC]"
							onClick={() => handleLogin()}
						>
							<img className="mr-2.5" alt="login_screen_enter_img" src={svgAssets.login.loginEnter}></img>
							<span className="font-poppinsRegular">Login</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
