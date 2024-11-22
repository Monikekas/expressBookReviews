const axios = require('axios').default;
axios.get('https://monicarmarin-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });