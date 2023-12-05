import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h5>Name={friend.name}</h5>
      <h5>Phone={friend.phone}</h5>
      <h5>Username={friend.username}</h5>
      <h5>Website={friend.website}</h5>
      <button onClick={handleGoback}>Go back</button>
    </div>
  );
};

export default FriendDetail;
