'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {

    const { data: session } = useSession();

    return (
        <div>
            <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
                <div className="md:col-span-1 h-48 shadow-xl ">
                    <div className="flex w-full h-full relative">
                        <Image 
                            src={session?.user?.image ?? '/9440461.jpg'} 
                            className="w-44 h-44 m-auto" 
                            alt="image profile"
                            width={100}
                            height={100}
                            />

                    </div>
                </div>
                <div className="md:col-span-3 h-48 shadow-xl space-y-2 p-3">
                    <div className="flex ">
                        <span
                            className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Name:</span>
                        <input
                            className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                            type="text" value={session?.user?.name ?? ''} readOnly />
                    </div>
                    <div className="flex ">
                        <span
                            className="text-sm  font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Email:</span>
                        <input
                            className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                            type="text" value={session?.user?.email ?? ''} readOnly />
                    </div>
                    <div className="flex ">
                        <span
                            className="text-sm  font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Role:</span>
                        <input
                            className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                            type="text" value="Admin" readOnly />
                    </div>
                </div>
                <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 hidden md:block">
                    <h3 className="font-bold uppercase"> Profile Description</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

            </div>
        </div>
    );
}