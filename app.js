// https://openapi.programming-hero.com/api/phones?search
const search=()=>{
    document.getElementById('phone-Info').innerText=' '
    const searchField=document.getElementById('search-field').value;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>displayPhone(json.data))
}
const displayPhone=(phones)=>{
    const phoneInfo=document.getElementById('phone-Info')

    const phoneDataOneToTen=phones.slice(0,10)
    
    phoneDataOneToTen.forEach((phone)=> {
 
        const div=document.createElement('div')
        div.innerHTML=`<div class=" m-3 p-3 container  phoneInformation">
        <div  class="text-center"><img width="90px" height="60" class="img-fluid" src="${phone.image}" alt="phone"></div>
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
   .then(json=>getDetails(json.data))
}
 const getDetails=(detailsID)=>{
   const detailsCard=document.getElementById('details-card')
   const div=document.createElement('div')
   div.innerHTML=`<div class="text-center">
   <div class="card p-4" style="width:400px">
   <div  class="text-center"><img width="100px" class="img-fluid" src="${detailsID.image}" alt="phone"></div>
       <div class="card-body">
       <h5>Phone Name: ${detailsID.name}</h5>
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
 