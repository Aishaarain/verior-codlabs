
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6f6a3f406bmshdd7efea0dd6c831p12be6fjsn94db8338f395',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const date = document.querySelector("#date-time");
const cityname=document.querySelector("#cityname");
const region=document.querySelector("#region");
const condition=document.querySelector(".condition");
const cent=document.querySelector(".centigrade");
const ferin=document.querySelector(".ferinheit");
const shead=document.querySelector(".small-head");
const head=document.querySelector(".head2");


function getdatetime(){
    let now= new Date(),
     hour=now.getHours(),
   minute=now.getMinutes();
   
  let days=[
"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

hour=hour>=13?hour%12 :hour
if(hour<10){
    hour="0"+hour;
}
if(minute<10){
    minute="0"+minute;
}
const ampm=hour>=12?"AM":"PM"
let daystring=days[now.getDay()];
return `${daystring},${hour}:${minute} `+ampm;

}

date.innerText=getdatetime();
setInterval(()=>{
    date.innerText=getdatetime();
},1000);
 

    const getWeatherData=(city)=>{
      
 fetch(url+city, options).then(response=>response.json())
 .then((response)=>{
  
  cityname.innerHTML=city;
    console.log(response);
    shead.innerHTML="°C";
    head.innerHTML="°C";
    region.innerHTML=response.location.region;
    temp_c.innerHTML=response.current.temp_c+ " "+"°C"
    wind_degree.innerHTML=response.current.wind_degree+ " "+"Deg"
    pressure_in.innerHTML=response.current.pressure_in+" "+"Pa"
    humidity.innerHTML=response.current.humidity+ " " +"g/m3."
    text.innerHTML =response.current.condition.text
    feelslike_c.innerHTML=response.current.feelslike_c+" "+ "°C"
    windchill_c.innerHTML=response.current.windchill_c+" "+"°C"
    heatindex_c.innerHTML=response.current.heatindex_c+ " "+"°C"
    dewpoint_c.innerHTML=response.current.dewpoint_c+ " "+"°C"

if(cent.addEventListener("click",()=>{
temp_c.innerHTML=response.current.temp_c+ " "+"°C"
    feelslike_c.innerHTML=response.current.feelslike_c+" "+ "°C"
    windchill_c.innerHTML=response.current.windchill_c+" "+"°C"
    heatindex_c.innerHTML=response.current.heatindex_c+ " "+"°C"
    dewpoint_c.innerHTML=response.current.dewpoint_c+ " "+"°C"
    shead.innerHTML="°C";
    head.innerHTML="°C";
}));
else if(ferin.addEventListener("click",()=>{
    temp_c.innerHTML=response.current.temp_f+ " "+"°F"
    feelslike_c.innerHTML=response.current.feelslike_f+" "+ "°F"
    windchill_c.innerHTML=response.current.windchill_f+" "+"°F"
    heatindex_c.innerHTML=response.current.heatindex_f+ " "+"°F"
    dewpoint_c.innerHTML=response.current.dewpoint_f+ " "+"°F"
    head.innerHTML="°F";
    shead.innerHTML="°F";
}));


condition.innerHTML=`
<img src="${response.current.condition.icon}" alt="weathericon">
`
         
}).catch(error=>
    console.log(error))
    }
    export let submit=document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeatherData(city.value);
})

getWeatherData("karachi");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersdata => {
      console.log(usersdata); 
      user.innerHTML = `
        
        <div class=user-card>
        <h2>fetched Users Data</h2><ul>
          ${usersdata.map(user => `
            <li>
              <strong>Name:</strong> ${user.name}<br>
              <strong>Username:</strong> ${user.username}<br>
              <strong>Email:</strong> ${user.email}
            </li><br>
          `).join('')}
        </ul></div>
      `;
    });