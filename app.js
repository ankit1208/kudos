fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res=>res.json())
    .then(data=>{
        newdata=''
        for(var i=data.length-1;i>=0;i--){
            var datain=document.createElement('div')
            datain.className = "data1"; 
            datain.id="id"+i                            
            var target= document.getElementById('targetrow'); 
            target.insertAdjacentElement("afterbegin", datain); 
            var newdata=document.querySelector('.data1')
            // console.log(data[i].links.mission_patch_small)                                                                        
            var img=document.createElement('img')
            document.getElementById('id'+i).appendChild(img);
            newdata.innerHTML+=`<img src="${data[i].links.mission_patch_small}">`
            newdata.append(img);
            newdata.innerHTML+=`<h2>${data[i].mission_name} #${data[i].flight_number}</h2>`;
            newdata.innerHTML+=`<b>Mission Ids: </b> ${data[i].mission_id}`
            newdata.innerHTML+=`<br><b>Launch Year:</b> ${data[i].launch_year}`;
            newdata.innerHTML+=`<br><b>Successful <br> Launch:</b> ${data[i].launch_success}`;
            console.log(data[i].rocket.first_stage.cores[0].land_success)
            newdata.innerHTML+=`<br><b>Successful <br> Landing:</b> ${data[i].rocket.first_stage.cores[0].land_success}`;

        }
       
    })

    
