import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/msanket828");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log("child render");
    console.log(this.state.userInfo);
    const { avatar_url, name, public_repos } = this.state.userInfo;
    return (
      <>
        <h1>Profile class component</h1>
        <div>
          <img src={avatar_url} alt="" />
          <h3>name: {name}</h3>
          <h3>public repositories: {public_repos}</h3>
        </div>
      </>
    );
  }
}

export default ProfileClass;
