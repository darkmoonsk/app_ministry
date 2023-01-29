import React, {useState} from "react";
import UserContext from "./UserContext";




function UserProvider(props) {
const [myUser, setMyUser] = useState(null);
const [userData, setUserData] = useState({});


  return (
	<UserContext.Provider value={{myUser, setMyUser, userData, setUserData}}>
		{props.children}
	</UserContext.Provider>
  )
}

export default UserProvider;