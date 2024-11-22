const axios = require('axios').default;
 
  console.log("Escribe el isbn:");
  const isbn = process.openStdin();
  
  isbn.addListener("data", (data) => {
    console.log(`=>${data.toString()}`)
  axios.get(`https://monicarmarin-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/${data.toString()}`)
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
      
})
