keyword = document.querySelector(".search-box__input")
searchBtn = document.querySelector(".search-box__button")

keyword.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){
    fetchAlbums()
  }
})
searchBtn.addEventListener('click', (event) => {
  fetchAlbums()
})

fetchAlbums = function(){
  if (!keyword.value.trim()){
    alert('검색어를 입력하세요.')
    return
  }
  const API_KEY = 'e44cfc6c46914966130e767e97be226a'
  const requestUrl = 'https://ws.audioscrobbler.com/2.0/?method=album.search&format=json'
  const params = {
    api_key: API_KEY,
    album: keyword.value,
    page: 1,
    limit: 100,
  }
  axios.get(requestUrl, { params })
  .then(res => {
    album = res.data.results.albummatches.album
    album.forEach(elem => {
      keyword.value = ''
      const cardImg = document.createElement('img')
      const cardText = document.createElement('div')
      cardText.classList.add('search-result__text')
      const artist = document.createElement('h2')
      const album_name = document.createElement('p')
      const card = document.createElement('div')
      card.classList.add('search-result__card')
      cardImg.src = elem.image[1]['#text']
      artist.innerText = elem.artist
      album_name.innerText = elem.name
      cardText.append(artist)
      cardText.append(album_name)
      card.append(cardImg)
      card.append(cardText)
      document.querySelector(".search-result").appendChild(card)
    }
    )
})
  .catch(res => {
    console.log('잠시 후 다시 실행해 주세요')
  })
  }
