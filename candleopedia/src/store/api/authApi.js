import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  getDocs,
  query,
  doc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db, auth } from "../../services/firebase";
import { baseApi } from "./baseApi";

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

          const timeStamp = new Date().toISOString();
          const docRef = await addDoc(collection(db, "products"), {
            ...productData,
            createdAt: timeStamp,
          });

          return {
            data: {
              id: docRef.id,
              ...productData,
              createdAt: timeStamp,
            },
          };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
