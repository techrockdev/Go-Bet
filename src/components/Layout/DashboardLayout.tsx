// import { Header } from "./Header/Header";

import { ReactNode } from "react";
import { Sidebar } from "./Sidebar/SideBar";
import { Header } from "./Header/Header";


export const DashboardLayout = ({ children }: { children: ReactNode }) => {
    
    return (
        <main className="flex fixed w-full">
            <div className=" w-auto h-[100vh]">
                <Sidebar>
                    {children}
                </Sidebar>
            </div>
            <section className="flex-1">
                <Header />
                <section className="fixed w-[100%] pl-6 bg-[rgba(13,27,42,0.9)] overflow-y-scroll top-[75px] bottom-0">{children}</section>
            </section>
        </main>
    )
}