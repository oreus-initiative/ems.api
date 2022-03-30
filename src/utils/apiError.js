module.exports = class ApiError {
  constructor(code, method, message, stack = undefined) {
    this.method = method;
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
  static badRequest(method, message, stack = undefined) {
    return new ApiError(400, method, message, stack);
  }

  /**
   * 401 HTTP Unauthorized
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static unauthorized(method, message, stack = undefined) {
    return new ApiError(401, method, message, stack);
  }

  /**
   * 403 HTTP Forbidden
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static forbidden(method, message, stack = undefined) {
    return new ApiError(403, method, message, stack);
  }

  /**
   * 404 HTTP Not Found
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static notFound(method, message, stack = undefined) {
    return new ApiError(404, method, message, stack);
  }

  /**
   * 409 HTTP Conflict
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static conflict(method, message, stack = undefined) {
    return new ApiError(409, method, message, stack);
  }

  /**
   * 410 HTTP Gone
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static gone(method, message, stack = undefined) {
    return new ApiError(410, method, message, stack);
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
  static internal(method, stack = undefined) {
    return new ApiError(500, method, 'An Internal Error Occured.', stack);
  }

  /**
   * 501 HTTP Not Implemented
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static notImplemented(method, stack = undefined) {
    return new ApiError(501, method, 'Not Implemented.', stack);
  }

  /**
   * 503 HTTP Service Unavailable
   * https://developer.mozilla.org/fr/docs/Web/HTTP/Status/503
   *
   * @param {string} message Verbose error
   * @param {string} stack Error stack trace
   */
  static serviceUnavailable(method, stack = undefined) {
    return new ApiError(503, method, 'Service Unavailable.', stack);
  }
};
