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
            console.log(data[i].links.mission_patch_small)                                                                        
            var img=document.createElement('img')
            
    
            
            document.getElementById('id'+i).appendChild(img);
            
            newdata.innerHTML='<img src="${data[i].links.mission_patch_small}">'
            newdata.append(img);
            
           
            // newdata.innerHTML="<b>Mission Ids: <br> </b>"+data[i].mission_id;
        }
        console.log('working')
        // document.querySelector('#first').innerHTML="<b>Mission Id :</b>"+data[0].flight_number;
    })
 
    
