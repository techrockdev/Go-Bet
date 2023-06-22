import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"

export const UserProfileForm = () => {
    return (
        <div className="shadow-xl bg-white text-black p-4 flex flex-wrap md:w-[70%] sm:w-[100%] sm:justify-start md:justify-center m-auto">
            <div className="flex flex-col p-1">
                <label htmlFor="profile">Add Profile photo</label>
                <Input type="file" id="profile" className="w-[115px] text-[rgba(38,38,38,1)]" disabled />
            </div>
            <div className="flex flex-col p-1">
                <label htmlFor="name">Your Name</label>
                <Input id="name" disabled />
            </div>
            <div className="flex flex-col p-1">
                <label htmlFor="location">Your Location</label>
                <Input id="location" disabled />
            </div>
            <div className="flex flex-col p-1">
                <label htmlFor="username">Your Username</label>
                <Input id="username" disabled />
            </div>
            <div className="flex flex-col p-1">
                <label htmlFor="bio">Bio..</label>
                <textarea id="bio" className="border bg-[rgba(38,38,38,1)] border-blue-500 text-white outline-none" disabled/>
            </div>
            <Button className="w-[100%] font-bold text-white bg-blue-500 text-white cursor-no-drop" disabled>Save</Button>

        </div>
    )
}