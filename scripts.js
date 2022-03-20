const tombol = document.querySelector(".container-tombol");
const layarKalkulator = document.querySelector("#layar-kalkulator");
tombol.addEventListener("click", function (e) {
  let tombolClick = e.target;
  let nilaiTombolClick = tombolClick.innerText;

  if (nilaiTombolClick == "C") {
    layarKalkulator.value = "";
  } else if (nilaiTombolClick == "<") {
    layarKalkulator.value = layarKalkulator.value.slice(0, -1);
  } else if (nilaiTombolClick == "=") {
    layarKalkulator.value = eval(layarKalkulator.value);
  } else if (nilaiTombolClick == "=") {
    layarKalkulator.value -= layarKalkulator.value;
  } else if (nilaiTombolClick == "=") {
    layarKalkulator.value /= layarKalkulator.value;
  } else if (nilaiTombolClick == "=") {
    layarKalkulator.value *= layarKalkulator.value;
  } else {
    layarKalkulator.value = layarKalkulator.value + nilaiTombolClick;
  }
});

// ========== dark mode ========== 
const mode = document.getElementById("tombolMode");
const dark = document.querySelectorAll('.card');
const judulLight = document.querySelectorAll('.judul, #hubungi-saya');

// dark mode untuk semua card, body, text galeri 
mode.addEventListener("click", function () {
  document.body.classList.toggle("dakrModeBody");
  
  judulLight.forEach(function(jl){
    jl.classList.toggle('text-light');
  });

  dark.forEach(function(i){
    // dark untuk card
    i.classList.toggle('darkMode');
  });
  // for(let i = 0; i < dark.length; i++){
  //   dark[i].classList.toggle("darkMode");   
  // }
});


