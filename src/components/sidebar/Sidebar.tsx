
import { CiLogout } from "react-icons/ci"
import { LogoutButton, SIdebarItem } from ".."
import Image from "next/image"
import Link from "next/link"
import { IoBagAddOutline, IoCalendarOutline, IoCheckboxOutline, IoListOutline, IoPerson } from "react-icons/io5"
import { FaCookieBite } from "react-icons/fa6"


import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const menuItems = [
    {
        path: '/dashboard',
        icon: <IoCalendarOutline size={30}/>,
        title: 'Dashboard',
    },
    {
        path: '/dashboard/rest-todos',
        icon: <IoCheckboxOutline size={30}/>,
        title: 'Rest TODOS',
    },
    {
        path: '/dashboard/server-todos',
        icon: <IoListOutline size={30}/>,
        title: 'Server Actions',
    },
    {
        path: '/dashboard/cookies',
        icon: <FaCookieBite size={30}/>,
        title: 'Cookies',
    },
    {
        path: '/dashboard/products',
        icon: <IoBagAddOutline size={30} />,
        title: 'Products',
    },
    {
        path: '/dashboard/profile',
        icon: <IoPerson size={30} />,
        title: 'Profile',
    }
]

export const Sidebar = async() => {
    const session = await getServerSession(authOptions);
    return (

        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    {/* TODO: Next/Link hacia dashboard */}
                    <Link href="/dashboard">
                        <Image 
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" 
                            className="w-32" 
                            alt="tailus logo"
                            width={100}
                            height={100}
                            />  
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image 
                        src={session?.user?.image ?? '/9440461.jpg'}
                        alt="imagen" 
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" 
                        width={100}
                        height={100}
                        />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session?.user?.name}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    
                    {
                        menuItems.map(item => (
                            <SIdebarItem
                                key={item.path}
                                {...item}
                            />
                        ))
                    }
                </ul>
            
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogoutButton/>
            </div>
        </aside>
    )
}
