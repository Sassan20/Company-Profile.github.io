const coba = async function(){
  const news = await fet()
  let cards = ''
      news.forEach( n => cards += `<div class="col-md-4 my-3">
      <div class="w-100 h-100">
        <img src="${n.urlToImage}" class="card-img-top">
        <div>
        <h1>${n.title}</h1>
        <h6 style="color:white;">${n.description}</h6>
        <a href="#" class="btn btn-primary"></a>
        </div>
      </div>
      </div>`)
      const berita = document.querySelector('.berita')
      berita.innerHTML = cards
}
coba()

function fet(){
  return fetch('https://newsapi.org/v2/everything?q=apple&from=2022-11-07&to=2022-11-07&sortBy=popularity&apiKey=e28e4a829bd644bca73a7b1d7268e4af')
  .then(response => response.json())
  .then(response => response.articles)
}
