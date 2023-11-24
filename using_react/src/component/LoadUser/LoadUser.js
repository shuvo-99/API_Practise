import React, { useEffect, useState } from "react";
import DisplayUser from "../DisplayUser/DisplayUser";

const LoadUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <DisplayUser name={user.name} key={user.id}></DisplayUser>
      ))}
    </div>
  );
};

export default LoadUser;
