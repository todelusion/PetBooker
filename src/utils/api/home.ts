/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import {
  Filter,
  Hotel,
  HotelListSchema,
  HotelSchema,
  Pet,
} from "../../types/schema";
import { AxiosTryCatch, baseURL } from "../index";
import Header from "./Header";

export const useHotelList = (body: Filter) =>
  useQuery(["HotelList"], async () => {
    const res = await axios.post(`${baseURL}/hotel/hotelFilter`, body);
    // console.log(res);
    const result = HotelListSchema.safeParse(res.data);
    if (result.success) {
      return result.data;
    }
    console.log(result.error.format());
    return undefined;
  });

export const useHotel = (id: string, startDate: Date, endDate: Date) => {
  const start = format(startDate, "yyyy/MM/dd");
  const end = format(endDate, "yyyy/MM/dd");
  console.log(startDate.getDate(), endDate.getDate());

  return useQuery(["Hotel"], async () => {
    const data = await AxiosTryCatch<Hotel>(async () =>
      axios.get(
        `${baseURL}/hotel/hotelInfo?hotelId=${id}&startDate=${start}&endDate=${end}`
      )
    );
    // console.log(data);
    const result = HotelSchema.safeParse(data);
    if (result.success) {
      return result.data;
    }
    console.log(result.error.format());
    return undefined;
  });
};
