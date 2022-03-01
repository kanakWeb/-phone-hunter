// https://openapi.programming-hero.com/api/phones?search //api
const search=()=>{
    
    document.getElementById('phone-Info').innerText=' '
    const searchField=document.getElementById('search-field').value;
    const errorShow=document.getElementById('error-handle').innerHTML=``
    document.getElementById('sppiner').style.display='block'
    if(searchField==''){
        const errorShow=document.getElementById('error-handle')
        const div=document.createElement('div')
        div.innerHTML=`<h6 class="text-danger mt-auto">Not found please enter right information!</h6>`
        errorShow.appendChild(div)
        document.getElementById('sppiner').style.display='block'
    }
    
   else{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>displayPhone(json.data))
    document.getElementById('sppiner').style.display='none'

   }
}



const displayPhone=(phones)=>{
    document.getElementById('details-card').innerHTML=' '
    const phoneInfo=document.getElementById('phone-Info')


    if(phones){
        const phoneDataOneToTen=phones.slice(0,20)
    
        phoneDataOneToTen.forEach((phone)=> {
     
            const div=document.createElement('div')
            div.classList.add('col','mb-3')
            div.innerHTML=`<div class="card  shadow   p-3 ">
            <div  class="text-center"><img width="100px" height="" class="img-fluid" src="${phone.image}" alt="phone"></div>
            <h4 class="font-size">Name: ${phone.phone_name}</h4>
            <h5 class="font-size">Brand:${phone.brand}</h5>
            <div class="allButton">
            <button onclick="details('${phone.slug}')" id="details-id" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" class="btn btn-success ">Details</button>
            </div>
            </div>`
    
            phoneInfo.appendChild(div)
    
        }); 
    }

    else{
        
        const errorShow=document.getElementById('error-handle')
        const div=document.createElement('div')
        div.innerHTML=`<h6 class="text-danger mt-auto">Not found please enter right information!</h6>`
        errorShow.appendChild(div)
        document.getElementById('sppiner').style.display='block'
    
}

}




const details=(phoneID)=>{
    const detailsCard=document.getElementById('details-card')
    detailsCard.innerHTML=''
   const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`
   fetch(url)
   .then(Response=>Response.json())
   .then(json=>displayDetails(json.data))
}


 const displayDetails=(detailsID)=>{
    
    if(detailsID.releaseDate==''|| detailsID.others==''){
        if(detailsID.others==''){
            const detailsCard=document.getElementById('details-card')
            const div=document.createElement('div')
            div.innerHTML=`<div class="text-center">
            <div class="card Small shadow p-4 m-3" style="width:350px; height=200px">
            <div  class="text-center"><img width="100px" class="img-fluid" src="${detailsID.image}" alt="phone"></div>
                <div class="card-body">
                <h5>ReleaseDate: No Release</h5>
                <h5>Name: ${detailsID.name}</h5>
                    <h4 class="card-text">Storage:</h4><p>${detailsID.mainFeatures.storage}</p>
                    <h4 class="card-text">DisplaySize:</h4> <p>${detailsID.mainFeatures.displaySize}</p>
                    <h4 class="card-text">ChipSet:</h4> <p>${detailsID.mainFeatures.chipSet}</p>
                    <h4 class="card-text">Memory:</h4> <p>${detailsID.mainFeatures.memory}</p>
                    <h4 class="card-text">Sensors:</h4> <p>${detailsID.mainFeatures.sensors}</p>
                    <hr>
                
                    <h3>Others:</h3>
                    <h5>Empty</h5>
            
                </div>
            </div>
                </div>`
                detailsCard.appendChild(div)
        }
        else{
            const detailsCard=document.getElementById('details-card')
            const div=document.createElement('div')
            div.innerHTML=`<div class="text-center">
            <div class="card Small shadow p-4 m-3" style="width:350px; height=200px">
            <div  class="text-center"><img width="100px" class="img-fluid" src="${detailsID.image}" alt="phone"></div>
                <div class="card-body">
                <h5>ReleaseDate: No Release</h5>
                <h5>Name: ${detailsID.name}</h5>
                    <h4 class="card-text">Storage:</h4><p>${detailsID.mainFeatures.storage}</p>
                    <h4 class="card-text">DisplaySize:</h4> <p>${detailsID.mainFeatures.displaySize}</p>
                    <h4 class="card-text">ChipSet:</h4> <p>${detailsID.mainFeatures.chipSet}</p>
                    <h4 class="card-text">Memory:</h4> <p>${detailsID.mainFeatures.memory}</p>
                    <h4 class="card-text">Sensors:</h4> <p>${detailsID.mainFeatures.sensors}</p>
                    <hr>
                
                    <h3>Others:</h3>
                    <h5>WLAN</h5>: <p>${detailsID.others.WLAN}</p>
                    <h5>Bluetooth:</h5> <p>${detailsID.others.Bluetooth}</p>
                    <h5>GPS:</h5> <p>${detailsID.others.GPS}</p>
                    <h5>NFC:</h5> <p>${detailsID.others.NFC}</p>
                    <h5>Radio:</h5> <p>${detailsID.others.Radio}</p>
                    <h5>USB:</h5> <p>${detailsID.others.USB}</p>
            
                </div>
            </div>
            </div>`
            detailsCard.appendChild(div)
        }
  
    }
    
 




  else{
        const detailsCard=document.getElementById('details-card')
        const div=document.createElement('div')
        div.innerHTML=`<div class="text-center">
        <div class="card Small shadow p-4 m-3" style="width:350px; height=200px">
        <div  class="text-center"><img width="100px" class="img-fluid" src="${detailsID.image}" alt="phone"></div>
            <div class="card-body">
            <h5>ReleaseDate: ${detailsID.releaseDate}</h5>
            <h5>Name: ${detailsID.name}</h5>
                <h4 class="card-text">Storage:</h4><p>${detailsID.mainFeatures.storage}</p>
                <h4 class="card-text">DisplaySize:</h4> <p>${detailsID.mainFeatures.displaySize}</p>
                <h4 class="card-text">ChipSet:</h4> <p>${detailsID.mainFeatures.chipSet}</p>
                <h4 class="card-text">Memory:</h4> <p>${detailsID.mainFeatures.memory}</p>
                <h4 class="card-text">Sensors:</h4> <p>${detailsID.mainFeatures.sensors}</p>
            </div>
        </div>
        </div>`
        detailsCard.appendChild(div)
    } 
}