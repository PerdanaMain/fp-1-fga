const fetchData = () => {
  const xhttp = new XMLHttpRequest();
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const httpMethod = "GET";
  xhttp.onload = function () {
    const response = JSON.parse(this.responseText);
    console.log(response);
    const id = response.id;
    const name = response.name;
    const image = response.sprites.front_default;
    const type = response.types[0].type.name;

    // let data = "";
    // for (i = 0; i < results.length; i++) {
    //   data = data + `<p>${results[i].name}</p>`;
    // }

    document.getElementById("result").innerHTML = `
    <p>${id} : ${name}</p>
<img
  src="${image}"
  alt="pikachu"
/>
<p>${type}</p>
    `;
  };
  xhttp.open(httpMethod, url);
  xhttp.send();
};
