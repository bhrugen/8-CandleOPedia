import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  getDocs,
  query,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { db, auth } from "../../services/firebase";
import { baseApi } from "./baseApi";

const createUserData = (user, role = "customer") => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  role: role,
});

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      async queryFn({ email, password, displayName }) {
        try {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const user = userCredentials.user;
          await updateProfile(user, { displayName });
          console.log("✅ Firebase Auth user created:", user.uid);
          const userData = {
            uid: user.uid,
            email: user.email,
            displayName,
            role: "customer",
            createdAt: new Date().toISOString(),
          };

          const docRef = await setDoc(doc(db, "users", user.uid), userData);

          return {
            data: createUserData(user, "customer"),
          };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    logoutUser: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return {
            data: null,
          };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLogoutUserMutation } = authApi;
