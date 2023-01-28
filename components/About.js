import { useEffect } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  useEffect(() => {
    console.log("parent useEffect");
  });
  console.log("parent render");
  return (
    <div className="main-body">
      <h1>About us page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus.
      </p>
      {/* <ProfileClass /> */}
      <Profile />
    </div>
  );
};

export default About;
