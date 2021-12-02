import axios, { AxiosResponse } from "axios";
import { ProductInterface, CreateProductDto } from "../types";

export const getProducts = async (): Promise<ProductInterface[]> => {
  const response: AxiosResponse<ProductInterface[]> = await axios({
    method: "GET",
    url: "http://localhost:8000/products/",
  });
  return response.data;
};

export const createProduct = async (
  createProductDto: CreateProductDto
): Promise<ProductInterface> => {
  const response: AxiosResponse<ProductInterface> = await axios({
    method: "POST",
    url: "http://localhost:8000/products/",
    data: {
      ...createProductDto,
    },
  });
  return response.data;
};
