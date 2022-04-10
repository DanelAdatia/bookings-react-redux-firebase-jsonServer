import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth();

export const SignUpWithEmailAndPassword = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};
export const LoginWithEmailAndPassword = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};
