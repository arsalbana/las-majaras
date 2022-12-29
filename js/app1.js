

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')



punto.forEach( ( cadaPunto , i )=> {
  
    punto[i].addEventListener('click',()=>{

        let posicion  = i 
        let operacion = posicion * -25

        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

