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
exports.getSubscription = async (queryString) => {
  try {
    return chargebeeSDK.subscription
      .list(queryString)
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error);
        } else {
          console.log("res")
          for (var i = 0; i < result.list.length; i++) {
            var entry = result.list[i];
            console.log(entry);
            var subscription = entry.subscription;
            var customer = entry.customer;
            var card = entry.card;
          }
        }
      });
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
