import DashboardCardMain from "@/app/components/dashboard/Card/card";
import RightBar from "@/app/components/dashboard/rightbar/rightbar";
// import DashboardChartMain from "@/app/components/dashboard/Chart/chart";
import {LineChart} from "@/app/components/dashboard/Chart/LineChart";


export default function Page() {
    return (
        <div className={"wrapper flex mt-10 w-full h-full"}>
            <div className={"main flex flex-col flex-auto w-3/4"}>
                <div className={"flex p-2 gap-3"}>
                    <DashboardCardMain/>
                    <DashboardCardMain/>
                    <DashboardCardMain/>
                </div>
                <div className={"bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700"}>
                    <LineChart/>
                </div>
            </div>
            <div className={"justify-end w-1/4 bg-bg-soft h-full p-4 rounded-lg"}>
                <RightBar/>
            </div>
        </div>
    )
}