var lista_places =  document.querySelectorAll(".lista_option")
var lista_infs =  document.querySelectorAll(".lista_option_infs")

function select_one(){
    lista_places[0].classList.add("green")
    lista_places[1].classList.remove("green")
    lista_places[2].classList.remove("green")
    lista_infs[0].style.display = "flex"
    lista_infs[1].style.display = "none"
    lista_infs[2].style.display = "none"

}

function select_two(){
    lista_places[1].classList.add("green")
    lista_places[0].classList.remove("green")
    lista_places[2].classList.remove("green")
    lista_infs[1].style.display = "flex"
    lista_infs[0].style.display = "none"
    lista_infs[2].style.display = "none"

}

function select_three(){
    lista_places[2].classList.add("green")
    lista_places[0].classList.remove("green")
    lista_places[1].classList.remove("green")
    lista_infs[2].style.display = "flex"
    lista_infs[0].style.display = "none"
    lista_infs[1].style.display = "none"

}

function top0(){
  window.scrollTo({
    top: 0,
  });
}

window.addEventListener('load', () => {
    select_one();
  });

