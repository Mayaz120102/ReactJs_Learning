import axios from "axios";
import React, { useState } from "react";
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("profile_api", header)
      .then((res) => {
        setUserData(res.data);
        console.log("profile data", res.data);
      })
      .catch((err) => {
        console.log("Error occured", err);
      });
  };

  const handleLogout = () => {
    setUserData();
    localStorage.removeItem("token");
    alert("logout Successfull");
    console.log("log out successfull");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div className="flex gap-3">
        <button
          className="bg-blue-400 text-white px-3 py-1"
          onClick={getProfileData}
        >
          Profile info
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      <div className="show_profile">
        <p>{userData?.email}</p>
        <p>{userData?.id}</p>
        <p>{userData?.name}</p>
        <p>{userData?.password}</p>
        <p>{userData?.role}</p>
        <img src={userData?.avatar} />
      </div>
    </div>
  );
};

export default Profile;
