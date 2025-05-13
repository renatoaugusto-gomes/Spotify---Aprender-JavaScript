document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Henrique & Juliano', image: 'img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: 'img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: 'img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: 'img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: 'img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: 'img/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise', artist: 'Sleepy John', image: 'img/album-white-noise.jpg' },
        { name: 'O céu explica tudo (ao vivo)', artist: 'Henrique & Juliano', image: 'img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Luisa Sonza', image: 'img/album-caju.jpg' },
    ];

    const artistsGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')


    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `
        artistsGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do ${album.name}">
        <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        </div>
        `

        albumsGrid.appendChild(albumCard)
    })


})
