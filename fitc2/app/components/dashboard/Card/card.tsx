import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";



export default function DashboardCardMain() {
    return (
        <div className=" flex-auto">
            <Card className="w-full p-4 bg-bg-soft text-white cursor-pointer hover:bg-slate-600 flex-1 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col gap-2">
                    <p className="text-medium uppercase font-bold">Weight</p>
                    <div className={"flex text-medium p-2 "}>
                        <div>
                            <h1 className=" font-bold text-large">167.3</h1>
                        </div>
                        <div className={" content-center justify-end"}>
                        <FaArrowUp/>
                        </div>
                    </div>
                    <h4 className="font-semibold text-sm">Great Job!</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                </CardBody>
            </Card>
        </div>
    )
 }