const fetchData = () => {
  const xhttp = new XMLHttpRequest();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=36";
  const httpMethod = "GET";
  xhttp.onload = function () {
    const response = JSON.parse(this.responseText);
    console.log(response);
    const results = response.results;

    let data = "";
    for (i = 0; i < results.length; i++) {
      data = data + `<p>${results[i].name}</p>`;
    }

    document.getElementById("result").innerHTML = data;
  };
  xhttp.open(httpMethod, url);
  xhttp.send();
};
