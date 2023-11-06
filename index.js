 const ACCESS_KEY =  "rIELSDhsdXEKC1huKKIDM3IKE5Jp3I8rgZZjZvV1IAs"

 const formEl = document.querySelector('form')
 const inputField = document.querySelector('.search-input')
 const searchBtn = document.querySelector('.search-btn')
 const searchResult = document.querySelector('.search-results')
 const resultBox = document.querySelector('.search-result')
 const showMoreBtn = document.querySelector('.showbtn')

 let inputVal;

 let page = 1;

  async function fetchData(){
    inputVal = inputField.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputVal}&client_id=${ACCESS_KEY}`

    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    const results = data.results

    if(page === 1){
        searchResult.innerHTML = ""
    }

    results.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('search-result')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResult.appendChild(imageWrapper)

    })
    page++;

    if(page>1){
        showMoreBtn.style.display = 'block'
    }

 }

 searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    page = 1;
    fetchData()
   })

   showMoreBtn.addEventListener("click", (e)=>{
    fetchData()
})
