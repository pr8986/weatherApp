const form=document.getElementById('WEATHER-FORM');
const weatherInfo=document.getElementById('WEATHER-INFO');
const degree=document.getElementById('DEGREE');
const state=document.getElementById('STATE');
const country=document.getElementById('COUNTRY');
const condition=document.getElementById('TEMPCONDITION');
const update=document.getElementById('UPDATE');
const tempf=document.getElementById('TEMPF');
const feels=document.getElementById('FEELS');
const humidity=document.getElementById('HUMIDITY');
const direction=document.getElementById('DIRECTION');
const carbon=document.getElementById('CARBON');
const nitrogen=document.getElementById('NITROGEN');
const ozone=document.getElementById('OZONE');
const sulpher=document.getElementById('SULPHER');
const pm=document.getElementById('PM');
const frstcondition1=document.getElementById('FRSTCONDITION1');
const frstday1=document.getElementById('FRSTDAY1');
const frstcondition2=document.getElementById('FRSTCONDITION2');
const frstday2=document.getElementById('FRSTDAY2');
//const container=document.getElementById('CONTAINER')

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const city=document.getElementById('CITY').value;
    const apikey='8ee77c570a8d4cf59e0190106241602';
    
    const url=`http://api.weatherapi.com/v1/forecast.json?key=8ee77c570a8d4cf59e0190106241602&q=${city}&days=2&aqi=yes&alerts=no`
    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);

        const temperature=data.current.temp_c;
        const cityName=data.location.name;
        const stateName=data.location.region;
        const countryName=data.location.country;
        const conditionTemp=data.current.condition.text;
        const LastUpdate=data.current.last_updated;
        const farhTemp=data.current.temp_f;
        const feel=data.current.feelslike_c;
        const humid=data.current.humidity;
        const dir=data.current.wind_dir;
        const carb=data.current.air_quality.co;
        const nitro=data.current.air_quality.no2;
        const ozo=data.current.air_quality.o3;
        const sulp=data.current.air_quality.so2;
        const ppm=data.current.air_quality.pm2_5;
        const forecastdate1=data.forecast.forecastday[0].date;
        const forecastcondition1=data.current.condition.text;
        const forecastdate2=data.forecast.forecastday[0].date;
        const forecastcondition2=data.current.condition.text;


        weatherInfo.innerHTML=`${cityName}`
        degree.innerHTML=`${temperature}&degC`
        state.innerHTML=`${stateName}`
        country.innerHTML=`${countryName}`
        condition.innerHTML=`${conditionTemp}`
        update.innerHTML=`${LastUpdate.substring(11)}`
        tempf.innerHTML=`${farhTemp}`
        feels.innerHTML=`${feel}`
        humidity.innerHTML=`${humid}`
        direction.innerHTML=`${dir}`
        carbon.innerHTML=`${carb}`
        nitrogen.innerHTML=`${nitro}`
        ozone.innerHTML=`${ozo}`
        sulpher.innerHTML=`${sulp}`
        pm.innerHTML=`${ppm}`
        frstcondition1.innerText=`${forecastcondition1}`
        frstday1.innerText=`${forecastdate1}`       
        frstcondition2.innerText=`${forecastcondition2}`
        frstday2.innerText=`${forecastdate2}`
    }
    catch(error)
    {
        console.log("error fetching weeather data",error);
       // cont.innerHTML=`<p>Error fetching weather data. Please try again.</p>`
    }
})