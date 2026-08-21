// object e usestte bebohar er niyom

import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "abrar",
    age: 24,
    localtion: "wasa,ctg",
    occupation: "student",
  });

  const handleIncrement = () => {
    const newUser = { ...user, age: user.age + 1 };

    setUser(newUser);
  };

  const handleDecrement= ()=>{
    const downuser ={...user, age: user.age -1};
    setUser(downuser)
  }
  return (
    <div className="profile">
      Profile
      <div className="profile-content">
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{user.localtion}</h3>
        <h4>{user.occupation}</h4>
      </div>
      <div className="age-btn">
        <button
          onClick={() => {
            console.log("increment button clicked");
            handleIncrement();
          }}
        >
          age_inc
        </button>
        <button onClick={()=>{{console.log("decrement button clicked"); handleDecrement()}}}>age_dec</button>
      </div>
    </div>
  );
};

export default Profile;
