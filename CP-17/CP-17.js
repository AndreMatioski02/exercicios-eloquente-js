var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function requestEloquentAuthor(type) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://viacep.com.br/ws/89300116/json/", false);
  request.setRequestHeader("accept", type);
  request.send(null);
  return console.log(request.responseText);
}

requestEloquentAuthor("application/json");

const requestTypes = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

requestTypes.forEach(type => {
  try {
    console.log(type + ":\n", requestEloquentAuthor(type), "\n");
  } catch (error) {
    console.log(error);
  }
});