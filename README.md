# Readme
## Chamadas assíncronas

Neste projeto, foi utilizado um estilo de request JavaScript anterior ao ES8. Isso significa que foi optado por usar Promises e a sintaxe padrão do ES6, sem recorrer a funcionalidades mais recentes, como async/await, que foram introduzidas no ES8.

O `fetch` é uma função JavaScript que permite que façamos requisições HTTP para obter dados de servidores externos, como APIs, de forma assíncrona.  

A função `fetch(url)` é usada para fazer a requisição HTTP. Ela retorna uma **Promise**, que será resolvida assim que a resposta estiver disponível. No código, estamos lidando com a resposta usando o método `.then()`.

```javascript
fetch(url)
  .then(response => response.json())
````

A primeira parte da função usa `response.json()` para transformar a resposta em um objeto JavaScript. Isso é necessário porque os dados da API geralmente vêm no formato JSON.

Depois que os dados foram convertidos para JSON, podemos acessá-los e usá-los. Neste exemplo, verificamos se o tipo de mídia retornada pela API é uma imagem ou um vídeo e exibimos na página.

```javascript
.then(data => {
  console.log(data); // Mostra os dados no console


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

````
Aqui, estamos atualizando o src (a URL da imagem ou vídeo) e ajustando a visibilidade dos elementos HTML com style.display. 

O método `document.getElementById()` é usado para selecionar um elemento HTML específico com base no seu id. Ele permite que o JavaScript acesse e modifique esse elemento diretamente, atualizando o título e a explicação com os dados fornecidos pela API.


Caso ocorra algum erro durante a requisição, usamos o método .catch() para capturar e exibir o erro no console.

```javascript
.catch(error => console.log('Erro:', error));
````

[Imagem1]

Usamos a API da NASA para obter a "Astronomy Picture of the Day" (Imagem Astronômica do Dia). Para isso, usamos uma URL que inclui nossa chave de API. Essa chave serve para autenticar nossa aplicação ao acessar os dados da NASA.

```javascript
const apiKey = 'SUA_CHAVE_AQUI'; // Sua chave de API recebida por email
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey

````

### Como gerar a chave da API no site da NASA:
Para usar a API da NASA e acessar os dados, você precisa de uma chave de acesso primeiro:

1. Acesse o site oficial da API da NASA: https://api.nasa.gov/
2. No site, encontre "Generate API Key" (Gerar Chave de API).
3. Preencha o formulário de inscrição com as informações necessárias, como nome e email.
4. Depois de se inscrever, você receberá um email com a sua chave de API.

[Imagem2]

