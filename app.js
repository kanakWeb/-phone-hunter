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
    div.innerHTML=`<div class="card border-warning phoneInformation">
    <img src="${phone.image}" alt="phone">
    <h4>Name: ${phone.phone_name}</h4>
    <h5>Brand:${phone.brand}</h5>
</div>`

phoneInfo.appendChild(div)

});
}


{/* <div class="card border-warning phoneInformation">
                    <img src="" alt="phone">
                    <h4>Name:</h4>
                    <h5>Brand:</h5>
                </div> */}