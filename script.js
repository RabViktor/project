function showwtxt(){
    const txt = document.getElementById("animation-st")
    setTimeout(() => {
        txt.innerText = "Kezdődik a varázslat!"        
    }, 3000);
}
showwtxt()

function vissza(){
    const countdown = document.getElementById('countdown')
    let colors = ["orange","purple","red","Cadetblue","yellow","coral","green","cyan","DeepPink","Dodgerblue"]
    let seged = 10
    let seged1 = 0
    const intersz = setInterval(() => {
        countdown.innerText = seged--
        countdown.style.color = colors[seged1++]
        if(seged < 0){
            clearInterval(intersz)
            countdown.innerText = "Az esemény elkezdődött!"
            
        }
    }, 1000);
}  
vissza()


function functionst(){
    let seged = 0
    const addli = setInterval(() => {
        
        
        const ul = document.getElementById("dynamic-list")
        let li = document.createElement('li')
        li.textContent = "Új elem"
        ul.appendChild(li)
        seged++
        if(seged == 3){
            clearInterval(addli)
        }

    }, 2000);
}


function functionst(){
    let seged = 0
    const addli = setInterval(() => {
        
        
        const ul = document.getElementById("dynamic-list")
        let li = document.createElement('li')
        li.textContent = "Új elem"
        ul.appendChild(li)
        seged++
        if(seged == 3){
            clearInterval(addli)
        }

    }, 2000);
}