import { default as axiosInit } from "axios"

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const axios = axiosInit.create({ baseURL });