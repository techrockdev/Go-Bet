// import { Header } from "./Header/Header";

import { ReactNode } from "react";
import { Sidebar } from "./Sidebar/SideBar";
import { Header } from "./Header/Header";


// export const DashboardLayout = ({ children }: { children: ReactNode }) => {
//     return (
//         <main className="flex">
//             <div className="w-[18%] h-[100vh] bg-[#151718]">

//             </div>
//             <section className="flex-1">
//                 <Header />
//                 <section className="bg-[#f9f9f9] px-16 py-10 mt-[4em]">{children}</section>
//             </section>
//         </main>
//     );
// };

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex">
            <div className="w-[auto] h-[100vh]">
                <Sidebar>
                    <main className="bg-[rgba(13,27,42,0.9)] text-white h-[100vh] w-full">
                        {children}
                    </main>
                </Sidebar>
            </div>
            <section className="flex-1">
                <Header />
                <section className=" px-16 py-10 mt-[4em]">{children}</section>
            </section>
        </main>
    )
}