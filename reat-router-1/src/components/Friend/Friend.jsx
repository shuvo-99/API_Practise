import React from "react";
import "./Friend.css";
import { Link, useNavigate } from "react-router-dom";

const Friend = (pros) => {
  const { id, name, email } = pros.friend;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/friends/${id}`);
  };
  return (
    <div className="friend_containers">
      <h5>Name = {name}</h5>
      <h5>Email = {email}</h5>
      <p>
        <Link to={`/friends/${id}`}>
          <button>Show Details</button>
        </Link>
      </p>
      <button onClick={handleNavigation}>Show Details using Navigate</button>
    </div>
  );
};

export default Friend;
