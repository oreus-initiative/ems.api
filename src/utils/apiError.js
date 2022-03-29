module.exports = class ApiError {
  constructor(code, message, stack = undefined) {
    this.code = code;
    this.message = message;
    this.stack = stack;
  }

  // *********************************************************************** //
  // ****************************    400    ******************************** //
  // *********************************************************************** //

  /**
   * 400 HTTP Bad Request
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static badRequest(message, stack = undefined) {
    return new ApiError(400, message, stack);
  }

  /**
   * 401 HTTP Unauthorized
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static unauthorized(message, stack = undefined) {
    return new ApiError(401, message, stack);
  }

  /**
   * 403 HTTP Forbidden
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static forbidden(message, stack = undefined) {
    return new ApiError(403, message, stack);
  }

  /**
   * 404 HTTP Not Found
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static notFound(message, stack = undefined) {
    return new ApiError(404, message, stack);
  }

  /**
   * 409 HTTP Conflict
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static conflict(message, stack = undefined) {
    return new ApiError(409, message, stack);
  }

  /**
   * 410 HTTP Gone
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static gone(message, stack = undefined) {
    return new ApiError(410, message, stack);
  }

  // *********************************************************************** //
  // ****************************    500    ******************************** //
  // *********************************************************************** //

  /**
   * 500 HTTP Internal Server Error (Default error, possibly unhandled)
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static internal(stack = undefined) {
    return new ApiError(500, 'An Internal Error Occured.', stack);
  }

  /**
   * 501 HTTP Not Implemented
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static notImplemented(stack = undefined) {
    return new ApiError(501, 'Not Implemented.', stack);
  }

  /**
   * 503 HTTP Service Unavailable
   * https://developer.mozilla.org/fr/docs/Web/HTTP/Status/503
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static serviceUnavailable(stack = undefined) {
    return new ApiError(503, 'Service Unavailable.', stack);
  }
};
