function fetchandDisplayData(){
    let url = 'data.json'
let airbnbPoductsGrid = document.querySelector(".airbnbsGrid")
    fetch(url)
.then((res)=>{
    if(!res.ok){
        console.error(res.json())
    }else{
        return res.json()
    }
})

.then((data)=>{
 const display = data.map((datum)=>{
        return `
        <div>
        <div class = "apartmentImageDiv">
        <img src= ${datum.img} alt="" srcset="">
        </div>
        <div class="airbnbInfo">
        <div class="locationRatingDiv">
        <p>${datum.apartmentName}</p>
        <div class="ratingLevel">
                <object
              data="./assets/icons/ratingstar.svg"
              width=""
              type="image/svg+xml"
            ></object>
            <p>${datum.rating}</p>
        </div>

        </div>
        <p class="apartmentView">${datum.view}</p>
        <p class="apartmentView">${datum.date}</p>
        <p class="apartmentView">${datum.price}</p>
    
        </div>
        
        </div>
        `
    })

    airbnbPoductsGrid.innerHTML = display
})
}

fetchandDisplayData()