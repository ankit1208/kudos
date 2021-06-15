fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res=>res.json())
    .then(data=>{
        for(var i=data.length-1;i>=0;i--){
            console.log(i)
            var datain=document.createElement('div')
            datain.className = "data1";
            var target= document.getElementById('targetrow'); 
            target.insertAdjacentElement("afterbegin", datain); 
            var newdata=document.querySelector('.data1')
            newdata.innerHTML="<b>Mission Id :</b>"+data[i].flight_number;
        }
        // document.querySelector('#first').innerHTML="<b>Mission Id :</b>"+data[0].flight_number;
    })

