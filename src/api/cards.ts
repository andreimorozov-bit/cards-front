import axios, { AxiosResponse } from "axios";
import {
  CardInterface,
  CreateCardDto,
  CardFilterInterface,
  CardListResponseInterface,
} from "../types";

export const getCardList = async (
  cardFilter: CardFilterInterface
): Promise<CardListResponseInterface> => {
  const params: Partial<CardFilterInterface> = {};
  let key: keyof typeof cardFilter;
  for (key in cardFilter) {
    if (cardFilter[key] !== "") {
      params[key] = cardFilter[key];
    }
  }
  const response: AxiosResponse<CardListResponseInterface> = await axios({
    method: "GET",
    url: "http://localhost:8000/cards/",
    params: params,
  });
  return response.data;
};

export const getCard = async (id: string): Promise<CardInterface> => {
  const response: AxiosResponse<CardInterface> = await axios({
    method: "GET",
    url: `http://localhost:8000/cards/${id}/`,
  });
  return response.data;
};

export const createCards = async (
  createCardDto: CreateCardDto
): Promise<void> => {
  const response: AxiosResponse = await axios({
    method: "POST",
    url: `http://localhost:8000/cards-collection/`,
    data: {
      series: createCardDto.series,
      credit: createCardDto.credit,
      expiration_months: createCardDto.expiration_months,
      quantity: createCardDto.quantity,
    },
  });
  return response.data;
};

export const setCardStatus = async (
  id: string,
  status: string
): Promise<CardInterface> => {
  const response: AxiosResponse<CardInterface> = await axios({
    method: "PATCH",
    url: `http://localhost:8000/cards/${id}/`,
    data: {
      activation_status: status,
    },
  });
  return response.data;
};

export const deleteCard = async (id: string): Promise<void> => {
  await axios({
    method: "DELETE",
    url: `http://localhost:8000/cards/${id}/`,
  });

  return;
};
