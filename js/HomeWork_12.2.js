function getPhoto() {
  let url = 'https://jsonplaceholder.typicode.com/photos'
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function(event) {
      event.target.status === 200 ? resolve(JSON.parse(this.response)) : reject('Что-то пошло не так')
    }
  })
}
getPhoto().then((response) => {
  let arr = response;
  let chosenId = arr.filter(item => item.id === 1 || item.id === 3 || item.id === 5 || item.id === 7 || item.id === 9)
  let body = document.querySelector('body');
  (function() {
    for (let i = 0; i < chosenId.length; i++) {
      let img = document.createElement('img');
      img.src = chosenId[i].url
      body.appendChild(img);
    }
  })(chosenId)
}).catch((response) => console.log(response))