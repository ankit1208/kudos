fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res=>res.json())
    .then(data=>{
        document.querySelector('#first').innerHTML="<b>Mission Id :</b>"+data[0].flight_number;
    })

