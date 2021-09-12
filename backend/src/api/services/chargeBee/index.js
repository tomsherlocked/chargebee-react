const chargebeeSDK = require("chargebee");
const { chargeBeeConfig } = require("../../../config/vars");

chargebeeSDK.configure({
  site: chargeBeeConfig.siteName,
  api_key: chargeBeeConfig.apiKey,
});

exports.getCustomer = async (queryString) => {
  try {
    return chargebeeSDK.customer
      .list(queryString)
      .request(function (error, result) {});
  } catch (e) {
    /*
     * Super basic error handling.
     * You probably wouldn't want to return specific error details on the exposed frontend,
     * but it's useful for debugging
     */

    return {
      hasError: true,
      error: {
        code: 500, // default to generic error
        message: e,
      },
    };
  }
};
