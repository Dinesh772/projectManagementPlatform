export const apiMethods = {
   post: 'POST',
   get: 'GET',
   delete: 'DELETE',
   put: 'PUT',
}

const INVALID_URL_TOKEN = 'INVALID_URL_TOKEN'
const INVALID_TOKEN = 'INVALID_TOKEN'
const INVALID_USER = 'INVALID_USER'
const NOT_AUTHORIZED_EXCEPTION = 'NotAuthorizedException'
const USER_NOT_FOUND_EXCEPTION = 'UserNotFoundException'
const INVALID_SESSION_TOKEN = 'INVALID_SESSION_TOKEN'
const REQUEST_TIMED_OUT = 'Endpoint request timed out'
const INTERNAL_SERVER_ERROR_CODE = 500
const NO_INTERNET_ERROR_CODE = 503
const BAD_REQUEST_ERROR_CODE = 400
const UNAUTHORIZED_ERROR_CODE = 401
const ACCESS_FORBIDDEN_ERROR_CODE = 403
const NOT_FOUND_ERROR_CODE = 404

export const resStatuses = {
   invalidURLToken: INVALID_URL_TOKEN,
   invalidToken: INVALID_TOKEN,
   invalidUser: INVALID_USER,
   notAuthorizedException: NOT_AUTHORIZED_EXCEPTION,
   userNotFoundException: USER_NOT_FOUND_EXCEPTION,
   invalidSessionToken: INVALID_SESSION_TOKEN,
   requestTimedOut: REQUEST_TIMED_OUT,
}

export const statusCodes = {
   internalServerErrorCode: INTERNAL_SERVER_ERROR_CODE,
   noInternetErrorCode: NO_INTERNET_ERROR_CODE,
   badRequestErrorCode: BAD_REQUEST_ERROR_CODE,
   unAuthorizedErrorCode: UNAUTHORIZED_ERROR_CODE,
   accessForbiddenErrorCode: ACCESS_FORBIDDEN_ERROR_CODE,
   notFoundErrorCode: NOT_FOUND_ERROR_CODE,
}

export const apiErrorProblems = {
   networkError: 'NETWORK_ERROR',
   timeoutError: 'TIMEOUT_ERROR',
}
