function getInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=3dd6ee3dd5f484224608e29262819138")
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[1].main.temp_min - 313.23).toFixed(1) + "°";
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max:" + Number(data.list[1].main.temp_max - 313.23).toFixed(1) + "°";
        }
        for (i = 0; i < 5; i++) {
            document.getElementById("img" + (i + 1)).src = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        })


    .catch(err => alert("Something Went Wrong"))
}


const d =new Date();
const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day){
    if(day +d.getDay() > 6){
        return day +day.getDay()-7;
    }
    else{
        return day +day.getDay();
    }
}

for(i=0;1<5;i++){
    document.getElementById("day"+(1+1)).innerHTML = weekday[checkDay(1)];
}