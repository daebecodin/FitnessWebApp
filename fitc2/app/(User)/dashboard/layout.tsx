//dashboard wrap

import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import RightBar from "@/app/ui/dashboard/rightbar/rightbar";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <main className={"h-screen flex flex-col"}>
            <div className={"flex flex-1 bg-slate-200"}>
                <div className={"w-1/5 h-screen bg-white shadow-slate-300 shadow-inner p-4"}>
                    <Sidebar />
                </div>
                <div className={"flex-1 flex flex-col h-screen p-2"}>
                    <div>
                        <Navbar />
                    </div>
                    <div className={"flex flex-1 bg-slate-200 gap-3 mt-2"}>
                        <div className={"flex-1"}>
                            {children}
                        </div>
                        <div className={"w-1/4 h-full overflow-auto"}>
                            <RightBar />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
