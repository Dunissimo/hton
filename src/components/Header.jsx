import { NavLink, useLocation } from "react-router-dom"
import { Menu } from "antd";
import { useState } from "react";

const links = {
    "/": "projects",
    "/reports": "reports",
}

export const Header = () => {
    return (
        <header className="w-full py-3 border-b">
            <div className="my-container flex gap-4">
                <NavLink className={({ isActive }) => isActive ? "font-bold" : ""} to="/projects">
                    Проекты
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? "font-bold" : ""} to="/reports">
                    Отчеты
                </NavLink>
            </div>
        </header>
    )
}