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
import { db } from "../../services/firebase";
import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      async queryFn() {
        try {
          const q = query(
            collection(db, "products"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);
          const products = [];
          querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
          });
          console.log(products);
          return { data: products };
        } catch (error) {
          return { error: error.message };
        }
      },
      providesTags: ["Product"],
    }),

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
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      async queryFn({ id, ...productData }) {
        try {
          const updateData = {
            ...productData,
          };
          await updateDoc(doc(db, "products", id), updateData);
          return {
            data: {
              id,
              ...productData,
            },
          };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      async queryFn(id) {
        try {
          await deleteDoc(doc(db, "products", id));
          return {
            data: {
              id,
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

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
} = productsApi;
