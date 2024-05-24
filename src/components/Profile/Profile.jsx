import React from "react"

const Profile = (props) => {
    return (
        <div className="App" style={props.appStyle}>
        <div>Name : {props.profile.name}</div>
        <div>Age: {props.profile.age}</div>
        </div>
    )
}
export default Profile;  