import { useState } from "react";

function ConditionalRenderingWithLists() {
    const [showActiveOnly, setShowActiveOnly] = useState(false);

    const users = [
        { id: 1, name: "Ali", active: true },
        { id: 2, name: "Sara", active: false },
        { id: 3, name: "Hasib", active: true }
    ];
    const filteredUsers = showActiveOnly ? users.filter(u => u.active) : users;
    return (
        <>
            <div className="bg-gray-100 p-4 rounded-md">
            <button className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600" onClick={() => setShowActiveOnly(!showActiveOnly)}>
                {showActiveOnly ? "Show All" : "Show Active Only"}
            </button>
            <ul>
                {filteredUsers.map(user =>(
                    <li key={user.id}>
                        {user.name} {user.active ? "🟢" : "🔴"}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}
export default ConditionalRenderingWithLists