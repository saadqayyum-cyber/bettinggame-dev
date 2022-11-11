import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "../../../components/Layout";
import { getError } from "../../../utils/error";
import * as moment from "moment";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true, errorUpdate: "" };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false, errorUpdate: "" };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}
export default function AdminProductEditScreen() {
  const { query } = useRouter();
  const orderId = query.id;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/orders/${orderId}`);
        dispatch({ type: "FETCH_SUCCESS" });
        setValue("userAddress", data.userAddress);
        setValue("orderItems", data.orderItems);
        setValue("payment", data.payment);
        setValue("transactionId", data.transactionId);
        setValue("createdAt", data.createdAt);
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    fetchData();
  }, [orderId, setValue]);

  return (
    <Layout title={`Order Detail ${orderId}`}>
      <div className="grid md:grid-cols-1 md:gap-5">
        <div className="md:col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form className="mx-auto max-w-screen-md">
              <h1 className="mb-4 text-xl">{`Order ${orderId} Details`}</h1>
              <div className="mb-4">
                <label htmlFor="name">User Address</label>
                <input
                  readOnly
                  type="text"
                  className="w-full"
                  id="name"
                  autoFocus
                  {...register("userAddress", {})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="slug">Amount Paid (Sol)</label>
                <input
                  readOnly
                  type="text"
                  className="w-full"
                  id="slug"
                  {...register("payment", {})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="slug"> Transaction ID </label>
                <input
                  readOnly
                  type="text"
                  className="w-full"
                  id="slug"
                  {...register("transactionId", {})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image">Date and Time</label>
                <input
                  readOnly
                  type="text"
                  className="w-full"
                  id="image"
                  {...register("createdAt", {})}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="teamName2"> Selected Teams </label>
                <textarea
                  readOnly
                  type="text"
                  className="w-full"
                  id="teams"
                  {...register("orderItems")}
                />
              </div>
              <div className="mb-4">
                <Link href={`/admin/orders`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminProductEditScreen.auth = { adminOnly: true };
