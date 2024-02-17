function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //jeito difícil de fazer o toggle
//  if(html.classList.contains('light')) {
//    html.classList.remove('light')
//  } else {
//    html.classList.add('light')
//  }


// pegar a tag img
  const img =document.querySelector("#profile img")
//substituir a img
  if(html.classList.contains('light')){
    //se tiver light mode usar img light
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    //se estiver sem ligh mode, manter a anterior
    img.setAttribute("src", './assets/avatar.png')
  }
}