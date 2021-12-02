import axios, { AxiosResponse } from "axios";
import { PurchaseInterface } from "../types";

export const getPurchaseList = async (
  id: string
): Promise<PurchaseInterface[]> => {
  const response: AxiosResponse<PurchaseInterface[]> = await axios({
    method: "GET",
    url: `http://localhost:8000/purchases/?card=${id}`,
  });
  return response.data;
};

export const deletePurchase = async (id: string): Promise<void> => {
  const response: AxiosResponse<void> = await axios({
    method: "DELETE",
    url: `http://localhost:8000/purchases/${id}/`,
  });
  return response.data;
};
