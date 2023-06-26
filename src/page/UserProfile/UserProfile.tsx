import { BsDot } from "react-icons/bs";
import { Profile } from "../../components/UI/profile/Profile";
import { FcAbout } from "react-icons/fc";
import { Button } from "../../components/UI/Button/Button";
import { UserProfileForm } from "./UserProfileForm";

export const UserProfile = () => {
	return (
		<section>
			<section className="shadow rounded">
				<div className="bg-[#3F84E5] lg:h-[200px] sm:h-[80px] md:h-[150px] flex items-center justify-center font-bold text-white lg:text-6xl md:text-4xl sm:text-1xl font-cursive">
					<h1 className="name">Sign Up</h1>
				</div>
				<div className="lg:translate-y-[-50px] sm:translate-y-[-30px] md:translate-y-[-30px] flex md:justify-center sm:justify-start sm:pl-2">
					<Profile className="lg:w-[150px] sm:w-[60px] md:w-[90px] rounded-full border-white border-[4px]" />
				</div>
				<div className="flex sm:justify-start sm:pl-3 md:justify-center md:translate-y-[-30px] sm:translate-y-[-20px]">
					<div className="sm:text-[12px] md:text-[16px]">
						<h3 className="font-bold">Sign Up</h3>
						<p>Location...</p>
						<div className="flex">
							<h5 className="font-bold text-gray-300">@username</h5>
							<div className="font-bold flex items-center space-x-2">
								<BsDot className="text-gray-600" />
								<FcAbout />
								<h5>bio...</h5>
							</div>
						</div>
						<div className="flex md:space-x-3 sm:space-x-2 mt-2">
							<Button className="bg-[#3F84E5] text-white sm:py-[2px]">
								Message
							</Button>
							<Button className="bg-[#3F84E5] text-white sm:py-[2px]">
								Share profile
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-[90px]">
				<UserProfileForm />
			</section>
		</section>
	);
};
