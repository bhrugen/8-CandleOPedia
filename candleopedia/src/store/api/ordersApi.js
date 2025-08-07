import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  getDocs,
  query,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { baseApi } from "./baseApi";
import { ORDER_STATUS } from "../../utility/constants";

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      async queryFn(_, { getState }) {
        try {
          const { auth } = getState();
          if (!auth.isAdmin) {
            throw new Error("Only admin users can perform this action");
          }
          const q = query(
            collection(db, "orders"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);
          const orders = [];
          querySnapshot.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          console.log(orders);
          return { data: orders };
        } catch (error) {
          return { error: error.message };
        }
      },
      providesTags: ["Order"],
    }),
    getUserOrders: builder.query({
      async queryFn(_, { getState }) {
        try {
          const { auth } = getState();
          if (!auth?.user?.uid) {
            throw new Error("User not authenticated");
          }
          const q = query(
            collection(db, "orders"),
            where("userId", "==", auth.user.uid)
          );
          const querySnapshot = await getDocs(q);
          const orders = [];
          querySnapshot.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          console.log(orders);
          return { data: orders };
        } catch (error) {
          return { error: error.message };
        }
      },
      providesTags: ["Order"],
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

    updateOrder: builder.mutation({
      async queryFn({ orderId, orderData }, { getState }) {
        try {
          const { auth } = getState();
          if (!auth.isAdmin) {
            throw new Error("Only admin users can perform this action");
          }

          await updateDoc(doc(db, "orders", orderId), orderData);
          return {
            data: {
              id: orderId,
              ...orderData,
            },
          };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
} = ordersApi;
