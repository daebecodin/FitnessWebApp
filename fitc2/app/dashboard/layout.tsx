//dashboard wrap

import Sidebar from "@/app/components/dashboard/sidebar/sidebar";
import Navbar from "@/app/components/dashboard/navbar/navbar";
import RightBar from "@/app/components/dashboard/rightbar/rightbar";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return <div className={"bg-bg-dark text-white h-screen flex "}>
        <div className={"w-1/5 h-full bg-bg-soft p-4"}>
            <Sidebar/>
        </div>
        <div className={"w-full overflow-hidden ml-12 my-4 mr-4"}>
            <Navbar/>
            {children}
        </div>

    </div>
}