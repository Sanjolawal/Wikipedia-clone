const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const collect = (e) => {
  e.preventDefault();
  console.log(input.value);

  fetch(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
      input.value +
      "&utf8=&format=json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const result = data.query.search;

      console.log(result);

      let display = result.map((each) => {
        return `<a href="https://wikipedia.org/wiki/${each.title}" style="background:black;
     box-shadow: 0 0 20px rgb(5,0,255, 0.7); border-radius:8px;"><h1 style="font-size:
    clamp(24px, 2vw, 2.1vw); text-align:center; margin:1vh 0 1.4vh 0;">${each.title}</H1>
    <p style="text-align:center; padding: 0 1vw 1vh 1vw">${each.snippet}.....</p></a>`;
      });
      console.log(display.join(" "));

      const div = document.getElementById("div");

      div.innerHTML = display.join(" ");
    })
    .catch((err) => {
      console.log("error somewhere");
    });
};

btn.addEventListener("click", collect);
