document.addEventListener('DOMContentLoaded', function () {
    const videoItems = document.querySelectorAll('.video-item');
    const relatedItems = document.querySelectorAll('.related-item');
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const watchButton = document.getElementById('watch-button');

    // Função para atualizar o iframe do vídeo
    function updateVideo(url, title) {
        videoPlayer.src = url;
        videoTitle.textContent = title;
        watchButton.href = url;
    }

    // Adiciona evento de clique para os vídeos da galeria
    videoItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoUrl = item.getAttribute('data-video');
            const videoTitleText = item.querySelector('img').alt;
            updateVideo(videoUrl, videoTitleText);
        });
    });

    // Adiciona evento de clique para os vídeos relacionados
    relatedItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoUrl = item.getAttribute('data-video');
            const videoTitleText = item.querySelector('h3').textContent;
            updateVideo(videoUrl, videoTitleText);
        });
    });
});
