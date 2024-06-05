import React from "react";
import MenuLink from "@/app/components/dashboard/sidebar/menuLink/menuLink";
import { GrOverview } from "react-icons/gr";
import { FaCalendar, FaHome } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import {User} from "@nextui-org/user";


const menuItems = [
    {
        title: " ",
        list: [
            {
                title: "Home",
                path: "/dashboard",
                icon: <FaHome />
            },
            {
                title: "Overview",
                path: "/dashboard/overview",
                icon: <GrOverview />
            },
            {
                title: "Schedule",
                path: "/dashboard/schedule",
                icon: <FaCalendar />
            },
            {
                title: "Workouts",
                path: "/dashboard/workouts",
                icon: <GiWeightLiftingUp />
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <div>
            <div className={"p-2"}>
                <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />

            </div>

            <ul>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span>{item.title}</span>
                        {item.list.map((linkItem) => (
                            <MenuLink
                                key={linkItem.title}
                                path={linkItem.path}
                                icon={linkItem.icon}
                                title={linkItem.title}

                            />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}
