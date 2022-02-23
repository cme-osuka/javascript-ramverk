import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/");
      const json = await res.json();

      setUsers(json);
    }

    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default Users;
