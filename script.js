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
