const constants = {
  /**
   * API base url
   */
  API_BASE_URL: "http://localhost:8000/api",

  /**
   * Validation Error Message
   */
  VALIDATION_ERROR_MESSAGE: {
    REQUIRED: (name: string) => `${name} is required.`,
  },

  /**
    * Json Response Code
    */
  JSON_RESPONSE: {
    HTTP_OK: 200,
  },
};

export default constants;
