let data = document.querySelector("#data");
let btn = document.querySelector("#btn");
btn.addEventListener("click" , ()=>{
    if(data.value != ""){
        let countDownData = new Date(data.value).getTime();
        
        setInterval(()=>{
            let dateNow = new Date().getTime();        
            let diff = countDownData - dateNow;

            let days = Math.floor(diff / ( 1000 * 60 * 60 * 24 ));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / (1000)); 
        
            document.querySelector(".days").innerHTML = `${days}`; 
            if(days < 100){
                document.querySelector(".days").innerHTML = `0${days}`;
            }
            if(days < 10){
                document.querySelector(".days").innerHTML = `00${days}`;
            }
            
            document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours; 
            document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes; 
            document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds; 
        }, 1000);

        data.value = "";
    }else{
        alert("Please Fill Date")
    }
})
