"use client";
import {useState} from "react";
import Login from "@/app/auth/login";
import SignIn from "@/app/auth/signin";
import { useTranslations } from 'next-intl';

export default function AUTH(){
    const [activeTab, setActiveTab] = useState("login");
    const t = useTranslations();

    const tabs = [
        { id: "login", labelKey: "login" },
        { id: "signin", labelKey: "signin" },
    ];

    return (
        <div>
            <div className="w-full">
                <div className="flex flex-col items-center justify-center right-0">
                    <ul
                        className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100 w-96 mt-5"
                        role="tablist"
                    >
                        {tabs.map(({ id, labelKey }) => {
                            const isActive = activeTab === id;
                            return (
                                <li key={id} className="flex-auto text-center z-30">
                                    <button
                                        onClick={() => setActiveTab(id)}
                                        role="tab"
                                        aria-selected={isActive}
                                        className={`flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-md cursor-pointer ${
                                            isActive
                                                ? "text-white bg-slate-700"
                                                : "text-slate-600 bg-inherit hover:bg-slate-200"
                                        }`}
                                    >
                                        {t(labelKey)}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="m-4 p-4 w-full">
                        {activeTab === "login" && <Login/>}
                        {activeTab === "signin" && <SignIn/>}
                    </div>
                </div>
            </div>
        </div>
    )
}