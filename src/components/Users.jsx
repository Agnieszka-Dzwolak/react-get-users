import { useState, useEffect } from "react";

import User from "./User";

import getUsers from "../apis/getUsers";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div className="all-users">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>No users exist</p>
      )}
    </div>
  );
};

export default Users;
