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
import { ORDER_STATUS } from "../../utility/constants";

export const ordersApi = baseApi.injectEndpoints({
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

    createOrder: builder.mutation({
      async queryFn(orderData, { getState }) {
        try {
          const { auth: authState } = getState();
          if (!authState?.user?.uid) {
            throw new Error("User not authenticated");
          }
          const timeStamp = new Date().toISOString();
          const docRef = await addDoc(collection(db, "orders"), {
            ...orderData,
            createdAt: timeStamp,
            status: ORDER_STATUS.PENDING,
            userId: authState.user.uid,
          });

          return {
            data: {
              id: docRef.id,
              ...orderData,
              createdAt: timeStamp,
              status: ORDER_STATUS.PENDING,
              userId: authState.user.uid,
            },
          };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Order"],
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
} = ordersApi;
