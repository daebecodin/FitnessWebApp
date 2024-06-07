'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

interface MenuLinkProps {
    path: string;
    icon: React.ReactNode;
    title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ path, icon, title }) => {
    const pathname = usePathname()
    console.log(pathname);

    if (!path) {
        console.error("Error: 'path' is required in MenuLink component.");
        return null;
    }

    return (
        <Link href={path} className={`flex p-3.5 justify-between mr-4 hover:bg-slate-200 hover:rounded-md m-1 ${pathname === path ? "bg-slate-200 rounded-md" : ""}`}>
            {icon}
            {title}
        </Link>
    );
};

export default MenuLink;
