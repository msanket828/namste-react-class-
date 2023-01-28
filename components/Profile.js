import { useEffect, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/msanket828");
    const json = await data.json();
    setUserInfo(json);
    console.log("child useEffect");
  };
  const { avatar_url, name, public_repos } = userInfo;
  console.log("child render");
  return (
    <>
      <div className="main-body">
        <h1>Profile component</h1>
        <h3>Name:{name}</h3>
        <h3>Public Repos: {public_repos}</h3>
        <img src={avatar_url} alt="" />
      </div>
    </>
  );
};

export default Profile;
