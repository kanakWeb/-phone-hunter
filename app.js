// https://openapi.programming-hero.com/api/phones?search
const search=()=>{
    
    const searchSield=document.getElementById('search-field').value
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchSield}`
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>allphone(json.data))
}
const allphone=(phones)=>{
    const phoneInfo=document.getElementById('phone-Info')
phones.forEach((phone)=> {
 
    const div=document.createElement('div')
    div.innerHTML=`<div class="card  m-3 p-3 container w-100 border-warning phoneInformation">
    <div  class="text-center"><img width="100px" class="img-fluid" src="${phone.image}" alt="phone"></div>
    <h4 class="font-size">Name: ${phone.phone_name}</h4>
    <h5 class="font-size">Brand:${phone.brand}</h5>
    <div class="allButton">
    <button type="button" class="btn  btn-secondary">Grey</button>
    <button onclick="details('${phone.slug}')" id="details-id" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" class="btn btn-success ">Details</button>
</div>
</div>`

phoneInfo.appendChild(div)

});

}
const details=(phoneID)=>{
    
    
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
       <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
       <div class="card-body">
       <div  class="text-center"><img width="100px" class="img-fluid" src="${phone.image}" alt="phone"></div>
           <p class="card-text">Storage:${detailsID.mainFeatures.storage}</p>
           <p class="card-text">DisplaySize:</p>
           <p class="card-text">ChipSet:</p>
           <p class="card-text">Memory:</p>
           <p class="card-text">Ssensors:</p>

       </div>
   </div>
</div>`
detailsCard.appendChild(div)

 }
 