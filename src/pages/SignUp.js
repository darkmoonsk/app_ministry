import { auth } from "../services/firebaseConfig"
import { useAuthState } from "react-firebase-hooks/auth"
import SignUpBox from "../components/signUp/SignUpBox"
import SignUpContainer from "../components/signUp/SignUpContainer"
import { Navigate } from "react-router-dom"



function SignUp() {
	const [user, loading] = useAuthState(auth);

	if(!loading) {
		if(user) {
			return <Navigate to="/dashboard" />
		}
	}

  return (
	<SignUpContainer>
		<SignUpBox />
	</SignUpContainer>
  )
}

export default SignUp