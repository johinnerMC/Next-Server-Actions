'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}
export const SIdebarItem = ({ icon, path, title}:Props) => {

    const pathName = usePathname();
    {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
    return (
        <li>
            <Link href={path} className={`
                relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 from-sky-600
                ${path == pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
            `}>
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
