import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      async queryFn(productData) {
        try {
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
    }),
  }),
});

export const { useAddProductMutation } = productsApi;
