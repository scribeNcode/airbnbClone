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
        <>
        `
    })
})
}

fetchandDisplayData()