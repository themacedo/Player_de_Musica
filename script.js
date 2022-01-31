let musicas = [
  {
    titulo: 'I Just Wanna Be Great',
    artista: 'NEFFEX',
    src: 'Músicas/I Just Wanna Be Great - NEFFEX.mp3',
    img: 'imagens/rock.jpg'
  },
  {
    titulo: 'Shadoma',
    artista: 'Mini Vandals',
    src: 'Músicas/Shadoma - Mini Vandals.mp3',
    img: 'imagens/classica.jpg'
  },

  {
    titulo: 'This is Not a Christmas Song',
    artista: 'NEFFEX',
    src: 'Músicas/This is Not a Christmas Song - NEFFEX.mp3',
    img: 'imagens/punk.jpg'
  }
]

let musica = document.querySelector('audio')
let musicaIndex = 0

let duracaoMusica = document.querySelector('.tempo .fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

duracaoMusica.textContent = segparamim(Math.floor(musica.duration))

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarmusica)

document.querySelector('.botao-pause').addEventListener('click', pararmusica)

musica.addEventListener('timeupdate', progresso)

document.querySelector('.anterior').addEventListener('click', () => {
  musicaIndex--
  if (musicaIndex < 0) {
    musicaIndex = 2
  }
  renderizarMusica(musicaIndex)
})

document.querySelector('.proxima').addEventListener('click', () => {
  musicaIndex++
  if (musicaIndex > 2) {
    musicaIndex = 0
  }
  renderizarMusica(musicaIndex)
})

// Funções

function renderizarMusica(musicaIndex) {
  musica.setAttribute('src', musicas[musicaIndex].src);

  musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musicas[musicaIndex].titulo
    nomeArtista.textContent = musicas[musicaIndex].artista
    imagem.src = musicas[musicaIndex].img

    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
  })

  document.body.append(musica)
}

function tocarmusica() {
  musica.play()
  document.querySelector('.botao-pause').style.display = 'block'
  document.querySelector('.botao-play').style.display = 'none'
}

function pararmusica() {
  musica.pause()
  document.querySelector('.botao-play').style.display = 'block'
  document.querySelector('.botao-pause').style.display = 'none'
}

function progresso() {
  let barra = document.querySelector('progress')
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + '%'
  let tempodecorrido = document.querySelector('.inicio')
  tempodecorrido.textContent = segparamim(Math.floor(musica.currentTime))
}

function segparamim(segundos) {
  let campoMinuto = Math.floor(segundos / 60)
  let campoSegundos = segundos % 60
  if (campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos
  }
  return campoMinuto + ':' + campoSegundos
}


