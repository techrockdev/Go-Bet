import { IoIosArrowForward } from "react-icons/io";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { useLogin } from "../../hooks/useLogin";

export interface ILoginPageProps {}

export const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
	const {
		emailHandler,
		email,
		password,
		signIn,
		signUp,
		passwordHandler,
		onSubmitForm,
	} = useLogin();
	return (
		<div className="pb-[100px]">
			<section className="login flex justify-center items-end p-4 ">
				<div className="font-bold text-white flex items-center">
					<p>Home</p>
					<IoIosArrowForward className="font-bold" />
					<p>Login Page</p>
				</div>
			</section>
			<div className="flex  mt-[50px] bg-white shadow lg:w-[50%] m-auto sm:w-[100%]">
				<form onSubmit={onSubmitForm} className="p-4 w-full">
					<div>
						<label htmlFor="email">Email</label>
						<Input
							type="email"
							placeholder="Enter email"
							onChange={emailHandler}
							value={email}
							className="w-full"
						/>
					</div>
					<div className="my-2">
						<label htmlFor="password">Password</label>
						<Input
							id="password"
							type="password"
							placeholder="Enter your password"
							onChange={passwordHandler}
							value={password}
							className="w-full"
						/>
					</div>
					<Button
						onClick={signUp}
						className="my-2 bg-blue-500 outline-none border-none text-white  w-[100%]">
						Create An Account
					</Button>
					<Button
						onClick={signIn}
						className=" bg-blue-500 outline-none border-none text-white  w-[100%]">
						Sign Up
					</Button>
				</form>
			</div>
		</div>
	);
};
