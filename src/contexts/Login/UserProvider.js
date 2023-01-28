import React, {useState} from "react";
import UserContext from "./UserContext";




function UserProvider(props) {
const [myUser, setMyUser] = useState(null);


  return (
	<UserContext.Provider value={{myUser, setMyUser}}>
		{props.children}
	</UserContext.Provider>
  )
}

export default UserProvider;