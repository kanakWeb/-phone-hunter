// https://openapi.programming-hero.com/api/phones?search //api
const search=()=>{
    
    document.getElementById('phone-Info').innerText=' '
    const searchField=document.getElementById('search-field').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>displayPhone(json.data))
}



const displayPhone=(phones)=>{
    document.getElementById('details-card').innerHTML=' '
    const phoneInfo=document.getElementById('phone-Info')

    const phoneDataOneToTen=phones.slice(0,20)
    
    phoneDataOneToTen.forEach((phone)=> {
 
        const div=document.createElement('div')
        div.innerHTML=`<div class="card Small shadow w-100 h-20 col p-3 mb-3 ms-2 container  phoneInformation">
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



const details=(phoneID)=>{
    const detailsCard=document.getElementById('details-card')
    detailsCard.innerHTML=''
   const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`
   fetch(url)
   .then(Response=>Response.json())
   .then(json=>displayDetails(json.data))
}


 const displayDetails=(detailsID)=>{
    
  if(detailsID.releaseDate==''){
    const detailsCard=document.getElementById('details-card')
    const div=document.createElement('div')
    div.innerHTML=`<div class="text-center">
    <div class="card Small shadow p-4 m-3" style="width:350px; height=200px">
    <div  class="text-center"><img width="100px" class="img-fluid" src="${detailsID.image}" alt="phone"></div>
        <div class="card-body">
        <h5>ReleaseDate: No Release</h5>
        <h5>Name: ${detailsID.name}</h5>
            <p class="card-text">Storage:${detailsID.mainFeatures.storage}</p>
            <p class="card-text">DisplaySize:${detailsID.mainFeatures.displaySize}</p>
            <p class="card-text">ChipSet:${detailsID.mainFeatures.ChipSet}</p>
            <p class="card-text">Memory:${detailsID.mainFeatures.memory}</p>
            <p class="card-text">Sensors:${detailsID.mainFeatures.sensors}</p>
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
        <h5>ReleaseDate: ${detailsID.releaseDate}</h5>
        <h5>Name: ${detailsID.name}</h5>
            <p class="card-text">Storage:${detailsID.mainFeatures.storage}</p>
            <p class="card-text">DisplaySize:${detailsID.mainFeatures.displaySize}</p>
            <p class="card-text">ChipSet:${detailsID.mainFeatures.ChipSet}</p>
            <p class="card-text">Memory:${detailsID.mainFeatures.memory}</p>
            <p class="card-text">Sensors:${detailsID.mainFeatures.sensors}</p>
        </div>
    </div>
 </div>`
 detailsCard.appendChild(div)
  }

 }
 