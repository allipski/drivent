import axios, { AxiosResponse } from "axios";
import { requestError } from "@/errors";
import { ViaCEPFull } from "@/protocols";

async function get(url: string) {
  try {
    const result: AxiosResponse<ViaCEPFull> = await axios.get(url);
    return result;
  } catch (error) {
    const {
      status,
      statusText
    } = error.response;

    throw requestError(status, statusText);
  }
}

export const request = {
  get,
};

