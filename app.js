// https://openapi.programming-hero.com/api/phones?search //api
const search=()=>{
    /* search button clickable to search */

    document.getElementById('phone-Info').innerText=' '

    const searchField=document.getElementById('search-field').value;

    document.getElementById('see-btn').style.display = 'block'

    const errorShow=document.getElementById('error-handle').innerHTML=``

    document.getElementById('sppiner').style.display='block'

    // input field error handle
    if(searchField===''){
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
  

// all phone card display
const displayPhone=(phones)=>{
    document.getElementById('details-card').innerHTML=' '
    const phoneInfo=document.getElementById('phone-Info')


    if(phones.length!==0){
        // loop throw 1-20
        const phoneData=phones.slice(0,20)
    
        phoneData.forEach((phone)=> {
     
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


    // error handle part
    else{
        
        const errorShow=document.getElementById('error-handle')
        const div=document.createElement('div')
        div.innerHTML=`<h6 class="text-danger mt-auto">Not found please enter right information!</h6>`
        errorShow.appendChild(div)
        document.getElementById('sppiner').style.display='block'
    
    }




// see more part
    const seeMoreButton = document.getElementById('see-btn')
seeMoreButton.addEventListener("click" ,()=>{
    document.getElementById('phone-Info').innerHTML = ' '
    // loop throw 20-40
    const phoneData = phones.slice(20,40)
    console.log(phoneData)
    const phoneInfo=document.getElementById('phone-Info')
    phoneData.forEach((phone)=> {
     
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

        


          document.getElementById('see-btn').style.display = 'block'
          phoneInfo.appendChild(div)
        })       

        })

}



// details part 
const details=(phoneID)=>{
    const detailsCard=document.getElementById('details-card')
    detailsCard.innerHTML=''
   const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`
   fetch(url)
   .then(Response=>Response.json())
   .then(json=>displayDetails(json.data))
}

//  display details...
 const displayDetails=(detailsID)=>{
    
    if(detailsID.releaseDate==''|| detailsID.others===undefined){
        if(detailsID.others===undefined){
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
                <hr>
                <h5>ReleaseDate: No Release</h5>
                <h5>Name: ${detailsID.name}</h5>
                    <h4 class="card-text">Storage:</h4><p>${detailsID.mainFeatures.storage}</p>
                    <h4 class="card-text">DisplaySize:</h4> <p>${detailsID.mainFeatures.displaySize}</p>
                    <h4 class="card-text">ChipSet:</h4> <p>${detailsID.mainFeatures.chipSet}</p>
                    <h4 class="card-text">Memory:</h4> <p>${detailsID.mainFeatures.memory}</p>
                    <h4 class="card-text">Sensors:</h4> <p>${detailsID.mainFeatures.sensors}</p>
                    <hr>
                
                    <h3>Others:</h3>
                    <h5>WLAN:</h5> <p>${detailsID.others.WLAN}</p>
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
