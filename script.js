function getInfo(){
    const newName= document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=3dd6ee3dd5f484224608e29262819138")
.then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[1].main.temp_min -313.23).toFixed(1)+"°";
    }
})