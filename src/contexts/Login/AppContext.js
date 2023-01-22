import React, {useState} from "react";


const MyContext = React.createContext();

function AppContext(props) {
const [myUser, setMyUser] = useState(null);


  return (
	<MyContext.Provider value={{myUser, setMyUser}}>
		{props.children}
	</MyContext.Provider>
  )
}

export {MyContext};

export default AppContext;