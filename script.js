let countries = [
  "afghanistan",
  "albania",
  // "algeria",
  // "andorra",
  // "angola",
  // "argentina",
  // "armenia",
  // "australia",
  // "austria",
  // "azerbaijan",
];

let arrLenght = countries.length;
let modalCountriesArr = [];
let triggerCountriesArr = [];

for (let i = 0; i < arrLenght; i++) {
  modalCountriesArr.push(countries[i] + "-modal");
  triggerCountriesArr.push(countries[i] + "-trigger");

  var elemTrg = document.getElementById(triggerCountriesArr[i]);
  console.log(elemTrg);

  //   console.log(elemMod);

  elemTrg.onclick = function () {
    // alert("Got a clyick");
    var elemMod = document.getElementById(modalCountriesArr[i]);
    // setTimeout(() => {
    elemMod.classList.add("show");
    // }, 10);
  };

  for (let j = 0; j < arrLenght; j++) {
    var elemMod = document.getElementById(modalCountriesArr[j]);
    window.onclick = function () {
      if (elemMod.classList.contains("show")) {
        elemMod.remove("show");
      }
    };
  }
}
