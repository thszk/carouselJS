var flavours = [
              'img/ubuntu.png',
              'img/kubuntu.svg',
              'img/lubuntu.svg',
              'img/ubuntuBudgie.png',
              'img/ubuntuMate.png',
              'img/xubuntu.png'
            ]
var position = 0
var max = flavours.length
var timeToNext = 4000

var image = document.createElement('img')
    image.setAttribute('src', flavours[position])

var stage = document.querySelector('.stage')
    stage.appendChild(image)

var next = document.querySelector('.next')
var prev = document.querySelector('.prev')

// Site das distros
var linkStage = document.querySelector('.linkStage')

var title = document.querySelector('.title')
    title.innerHTML = '<h2>Sites oficiais:</h2>'

linkStage.appendChild(title)

var links = document.querySelector('.links')
    links.innerHTML = '\
      <p><a href="https://www.ubuntu.com/">Ubuntu</p> \
      <p><a href="https://kubuntu.org/">Kubuntu</p> \
      <p><a href="https://lubuntu.me/">Lubuntu</p> \
      <p><a href="https://ubuntubudgie.org/">Ubuntu Budgie</p> \
      <p><a href="https://ubuntu-mate.org/">Ubuntu MATE</p> \
      <p><a href="https://xubuntu.org/">Xubuntu</p>'

linkStage.appendChild(links)
//

next.addEventListener('click', function() {
  position++
  if (position >= max) position = 0

  image.setAttribute('src', flavours[position])
})

prev.addEventListener('click', function() {
  position--
  if (position < 0) position = max-1

  image.setAttribute('src', flavours[position])
})

setInterval(function() {
  position++
  if (position >= max) position = 0

  image.setAttribute('src', flavours[position])
}, timeToNext)
