let axios = require("axios");

function getJsonAPI() {
    return new Promise((resolve) => {
        axios.get("http://jsonplaceholder.typicode.com/posts/1")
            .then((json) => {
                resolve(json.data);
            })
    })
}

getJsonAPI()
    .then((result) => {
        console.log(result)
    })