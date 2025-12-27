import { useState } from "react";

function DayTenHomeWork() {
    const [isActive, setIsActive] = useState(false);
    const users = [
        { id: 1, age: 25, name: "Ali", active: true },
        { id: 2, age: 22, name: "Sara", active: false },
        { id: 3, age: 45, name: "Hasib", active: true },
        { id: 4, age: 15, name: "Ahmad", active: true }
    ];
    const filteredUsers = isActive ? users.filter(u => u.active) : users;
    return (
        <>
            <div className="bg-yellow-100 p-4 rounded-md w-50">
                <button className="bg-sky-500 text-white p-2 rounded-md" onClick={() => setIsActive(!isActive)}>
                    {isActive ? "Show All" : "Show Active Only"}
                </button>
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.age < 18 ? "Minor" : "Adult"} {user.active ? "🟢" : "🔴"}
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}
export default DayTenHomeWork;