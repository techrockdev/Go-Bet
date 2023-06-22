import React, { ReactNode, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { menuItem } from './Menus';
import { Profile } from '../../../UI/profile/Profile';

export const Sidebar = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="flex fixed md:top-[76px] w-full sm:top-[68px]">
            <div className={`${isOpen ? "w-[300px]" : "w-[50px]"} bg-black z-[999] text-white h-[100vh] transition-all duration-[0.5s] `}>
                <div className=' text-white translate-y-[-8px] border-b-gray-600 rounded-b-[40px] border-b'>
                    <div className={`${isOpen ? "m-2" : "ml-0"} flex items-center text-[25px] my-2 justify-between`}>
                        <h1 className={`${isOpen ? "block" : "hidden"} font-bold`}>Profile</h1>
                        <FaBars onClick={toggle} className={`${isOpen ? "ml-0" : "ml-3"} cursor-pointer`} />
                    </div>
                    <div className="flex items-center py-[20px] justify-center px-[15px] ">
                        <div className={`${isOpen ? "block" : "hidden"} text-[30px] pb-4`}>
                            <a href="profile"><Profile className='rounded-full w-[100px]' /></a>
                        </div>
                    </div>
                </div>
                <div className='bg-black'>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="flex items-center text-white py-[10px] px-[15px] space-x-3 transition-all duration-[0.5s] border-l border-l-transparent hover:border-l-blue-400 hover:border-l-4 active:transition-all active:duration-[0.5s] ">
                                <div className="icon">{item.icon}</div>
                                <div className={`${isOpen ? "block" : "hidden"} text-[18px] anime`}>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <main className='w-[100%] bg-[#262626] text-white relative h-[100vh] w-[100%] overflow-y-scroll'>{children}</main>
        </div>
    );
};