import getData from "@ib/api";

import { apiMethods } from "../constants/APIConstants";

export const networkCallWithApisauce = async (
  api,
  url,
  requestObject,
  type = apiMethods.post
) => {
  let response = null;
  try {
    response = await getData(api, url, requestObject, type);
  } catch (error) {
    throw error;
  }
  return response;
};
