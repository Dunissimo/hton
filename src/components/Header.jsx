import { NavLink } from "react-router-dom"

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

                <NavLink className={({ isActive }) => isActive ? "font-bold" : ""} to="/styles">
                    Стили
                </NavLink>
            </div>
        </header>
    )
}