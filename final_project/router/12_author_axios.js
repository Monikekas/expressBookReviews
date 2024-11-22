
const axios = require('axios').default;
console.log("Escribe el author:");
const author = process.openStdin();

author.addListener("data", (data) => {
  console.log(`=>${data.toString()}`)
axios.get(`https://monicarmarin-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/author/${data.toString()}`)
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