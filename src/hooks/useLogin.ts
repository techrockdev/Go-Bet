import { app } from '../config/firebase';
import { ChangeEvent,  useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const resetInputs = () => {
        setEmail("")
        setPassword("")
    }

    const auth = getAuth(app);
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCreditial) => {
                const user = userCreditial.user;
                console.log(user);
                alert(`${user.email} successfull created an account. `);
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode);
            })
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`Welcome Back ${user.email}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode);
            });
    }

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        resetInputs()
    }

    return { emailHandler, email, password, signUp, signIn, passwordHandler, onSubmitForm,  }

}