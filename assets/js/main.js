
const valueOfSearch = document.querySelector('#valueOfSearch')


valueOfSearch.addEventListener('input', function (e) {
    const filter = this.value.toLowerCase()
    const allRs = document.querySelectorAll('.solution')
    const rs = document.querySelectorAll('.name-price p')
    for(let i = 0 ; i < allRs.length ; i++){
        const rss = allRs[i].querySelector(".name-price p")
       
            const txtContent = rss.textContent.toLowerCase()
            if(txtContent.indexOf(filter) > -1){
                allRs[i].style.display = ""
            }
            else{
                allRs[i].style.display = "none"
            }
        
       
    }
})

// const rs = document.querySelectorAll('.name-price p')
//     rs.forEach(function(array){
//         console.log(array.textContent.toLowerCase());
//     })

