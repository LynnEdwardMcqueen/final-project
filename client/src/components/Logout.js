import React from "react";

function Logout({user, handleLogoutUser}) {
    handleLogoutUser(user)
    return (
        <>
            <h1>Logout</h1>
            
        </>
    )
}

export default Logout;
