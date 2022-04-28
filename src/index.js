let quoteList = document.getElementById('quote-list')
let myForm = document.getElementById('new-quote-form')
let newQuote = document.getElementById('quote')
let quoteAuthor = document.getElementById('author')
let urllikes = "http://localhost:3000/likes"
let url_quotes = "http://localhost:3000/quotes?_embed=likes"



function fetchData(param){
   return fetch(param)
  .then(res => res.json())
}

fetchData(url_quotes).then(res => displayData(res))

function displayData(data){
  console.log(data)
  data.forEach(element => {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = `<button class='btn-success'>Likes: <span>${element.likes.length}</span></button>`
    let btn = document.createElement('button')
    btn.innerHTML = `<button class='btn-danger'>Delete</button>`
    // let quoteLikes = getLikes(element.id).then(res => {return res[0].likes}) 
    li.innerHTML = `<li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">${element.quote}</p>
        <footer class="blockquote-footer">${element.author}</footer>
        <br>
      </blockquote>
    </li>`
    li.appendChild(button)
    li.appendChild(btn)
    quoteList.appendChild(li)
    button.addEventListener('click', ()=>postLike(element))

  });
}

// fetchData(url_quotes, displayData)

function getLikes(quoteID){
  return fetch(`${urllikes}?quoteId=${quoteID}`)
  .then(res => res.json())
}

function postLike(element){
  console.log("working")
  return fetch(urllikes, {
        mothod : 'POST',
        headers : {
          "Content-type" : "application/json",
          Accept : 'application/json'
        },
        body : JSON.stringify({
          
        })
      })
      .then(res => res.json())
}
