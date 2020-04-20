import getData from '@ib/api'

import { apiMethods } from '../constants/APIConstants'

export const networkCallWithApisauce = async (
  api,
  url,
  requestObject,
  type = apiMethods.post
) => {
  let response = null
  try {
    response = await getData(api, url, requestObject, type)
  } catch (error) {
    throw error
  }
  return response
}

export const getUserDisplayableErrorMessage = (error) => {
  const defaultMessage = 'Something went wrong please try again'
  try {
    if (error && error.message) {
      return JSON.parse(error).originalError.message
    }
  } catch (exception) {}
  return defaultMessage
}
