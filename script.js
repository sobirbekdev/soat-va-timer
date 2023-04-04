let elTitlt = document.querySelector("#title");
let elForm = document.querySelector("#form");
let elH2 = document.querySelector("#form__title");
let elBtn = document.querySelector("#btn");
let elH1 = document.querySelector("#year");

setInterval(() => {
    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let second = new Date().getSeconds();
    let year = new Date().getFullYear();
    let oy = new Date().getMonth();
    let kun = new Date().getDay();
    function getdate(params) {
        return String(params).padStart(2,0);
        
    }

    
    let S= String(hour).padStart(2 ,0);
    let min= String(minut).padStart(2 ,0);
    let sec= String(second).padStart(2 ,0);
    
    
    elH1.innerHTML = `${getdate(year)}:${getdate(oy)}:${getdate(kun)}`;     
    elTitlt.innerHTML = `${S}:${min}:${sec}`;
    
});




elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    let {soat,minut,second} = evt.target.elements;
    
    
    
    let soatValue = soat.value -0;
    let minutValue = minut.value -0;
    let secodValue = second.value -0;
    
    
    let timerInterval = setInterval(()=>{
        
        if(secodValue==0 && minutValue > 0){
            secodValue =59;
            minutValue --;
            elH2.innerHTML=`${soatValue}:${minutValue}:${secodValue}`
        }
        else if( minutValue == 0 && soatValue >0){
            minutValue =59;
            soatValue --;
            elH2.innerHTML=`${soatValue}:${minutValue}:${secodValue}` 
        }
        else if(soatValue == 0 && minutValue ==0 && secodValue==0){
            elH2.innerHTML= `00:00:00`;
            clearInterval(timerInterval)
        }else{
            secodValue --;
            elH2.innerHTML =`${soatValue}:${minutValue}:${secodValue}`
        }
    },1000)
});

