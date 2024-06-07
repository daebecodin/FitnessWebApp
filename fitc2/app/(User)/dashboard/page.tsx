import DashboardCardMain from "@/app/ui/dashboard/Card/card";
import RightBar from "@/app/ui/dashboard/rightbar/rightbar";
import {LineChart} from "@/app/ui/dashboard/Chart/LineChart";


export default function Page() {
    return (
        <div className={"wrapper flex w-full h-full"}>
            <div className={"main flex flex-col flex-auto w-3/4 gap-2"}>
                <div className={"flex  gap-3"}>
                    <DashboardCardMain/>
                    <DashboardCardMain/>
                    <DashboardCardMain/>
                </div>
                <div className={"bg-white p-3 rounded-lg cursor-pointer hover:bg-slate-300 shadow-large"}>
                    <LineChart/>
                </div>
            </div>
        </div>
    )
}