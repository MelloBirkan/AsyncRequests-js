function getAPOD() {
    const apiKey = 'SUA_CHAVE_AQUI'; // Sua chave de API recebida por email
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


    fetch(url)
      .then(response => response.json())
      .then(data => {console.log(data); 

          //verifica se o tipo de mídia é imagem ou vídeo
          if (data.media_type === 'image') {
              document.getElementById('apodImage').src = data.url;
              document.getElementById('apodImage').style.display = 'block';
              document.getElementById('apodVideo').style.display = 'none';
          } else if (data.media_type === 'video') {
              document.getElementById('apodVideo').src = data.url;
              document.getElementById('apodVideo').style.display = 'block';
              document.getElementById('apodImage').style.display = 'none';
          }

          document.getElementById('apodTitle').textContent = data.title;
          document.getElementById('apodExplanation').textContent = data.explanation;
      })
      .catch(error => console.log('Erro:', error));
}

getAPOD();
