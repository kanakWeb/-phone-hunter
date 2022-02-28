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
    <button type="button" class="btn btn-success ">Green</button>
</div>
</div>`

phoneInfo.appendChild(div)

});
}


{/* <div class="card border-warning phoneInformation">
                    <img src="" alt="phone">
                    <h4>Name:</h4>
                    <h5>Brand:</h5>
                </div> */}