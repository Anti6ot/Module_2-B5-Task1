import React, { useState } from "react";
import Users from "./components/users";
import api from "./api"; // импортируем фейковый апи

function App() {
    const [users, setUsers] = useState(api.users.fetchAll()); // получаем с помощью хука этот фейкапи с юзерами
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <div>
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    );
}

export default App;
