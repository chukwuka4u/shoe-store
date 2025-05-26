import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { saveUserDetails } from "./app";


const provider = new GoogleAuthProvider();

export const auth = getAuth();

const signUp = (form) => {
    const { email, password } = form;
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            console.log(userCredential)
            const user = userCredential.user;

            const uid = user.uid;
            await saveUserDetails(uid, form);

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage)
        });
}

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user.id)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const logIn = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

const logOut = () => {

    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful")
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}



//there is an auth instance ->
//when we login, this instance is populated with details for current user and uid
//when we signout, this instance is populated with same details
//when we return to site, we check auth instance.
//if current user is not null or undefined we login
//use uid to fetch all other details of user

export { signUp, logIn, logOut, signInWithGoogle };