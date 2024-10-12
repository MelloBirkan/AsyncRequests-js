# Async/Await no ES8 e Exemplo de Encurtador de URL

## Introdução ao Async/Await

Async/await é um recurso introduzido no ECMAScript 2017 (ES8) que fornece uma maneira mais intuitiva de trabalhar com operações assíncronas em JavaScript. Ele se baseia em Promises e permite que você escreva código assíncrono que parece e se comporta mais como código síncrono, tornando-o mais fácil de ler e manter.

### Conceitos-Chave

1. **Funções Async**: Funções declaradas com a palavra-chave `async` sempre retornam uma Promise.
2. **Operador Await**: A palavra-chave `await` só pode ser usada dentro de uma função async. Ela pausa a execução da função até que a Promise seja resolvida ou rejeitada.

## Sintaxe

```javascript
async function minhaFuncaoAsync() {
  try {
    const resultado = await algumaOperacaoAssincrona();
    // Faça algo com o resultado
  } catch (erro) {
    // Trate qualquer erro
  }
}
```

## Benefícios do Async/Await

1. **Código Mais Limpo**: Elimina a necessidade de múltiplas cadeias de `.then()`.
2. **Melhor Tratamento de Erros**: Permite o uso de blocos try/catch para tratamento de erros.
3. **Depuração Mais Fácil**: O código se parece mais com código síncrono, tornando-o mais fácil de seguir e depurar.

## Exemplo: Aplicação de Encurtamento de URL

Vamos analisar o exemplo de código fornecido de uma aplicação de encurtamento de URL que usa async/await.

### Análise do Código

```javascript
const apiKey = 'SUA_CHAVE_AQUI';
const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    });
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

### Componentes Principais

1. **Configuração da API**:
    - `apiKey`: Chave de autenticação para a API Rebrandly.
    - `url`: Endpoint da API Rebrandly.

2. **Elementos DOM**:
    - `inputField`: Input para a URL a ser encurtada.
    - `shortenButton`: Botão para acionar o processo de encurtamento.
    - `responseField`: Área para exibir a URL encurtada.

3. **Função Assíncrona - `shortenUrl`**:
    - Declarada com a palavra-chave `async`.
    - Usa `await` para lidar com operações assíncronas.

4. **Tratamento de Erros**:
    - Usa um bloco try/catch para lidar com possíveis erros.

5. **Manipulação de Eventos**:
    - A função `displayShortUrl` previne o envio padrão do formulário e limpa as respostas anteriores.
    - Ouvinte de evento anexado ao botão de encurtar.

### Uso do Async/Await

A função `shortenUrl` demonstra o uso de async/await:

1. É declarada como uma função assíncrona: `const shortenUrl = async () => { ... }`
2. Dentro da função, `await` é usado duas vezes:
    - `const response = await fetch(url, { ... })`: Espera a conclusão da solicitação à API.
    - `const jsonResponse = await response.json()`: Espera que a resposta seja analisada como JSON.

Essa abordagem permite que o código lide com operações assíncronas de uma maneira que se parece mais com código síncrono, melhorando a legibilidade e a manutenibilidade.

# Análise do Projeto "Palavra Fácil" usando Async/Await

## Visão Geral do Projeto

O projeto "Palavra Fácil" é uma aplicação web que utiliza a API Datamuse para sugerir adjetivos relacionados a uma palavra inserida pelo usuário. Este projeto demonstra o uso de funções assíncronas com async/await em JavaScript para fazer requisições à API e manipular as respostas.

## Análise do Código

Vamos analisar o código em detalhes:

```javascript
// Informações para acessar a API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecionando elementos da página
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Função assíncrona
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery

  try {
    const response = await fetch(endpoint, {cache: "no-cache"})
    if(response.ok) {
      const jsonResponse = await response.json()
      renderResponse(jsonResponse)
    }
  } catch(error) {
    console.log(error);
  }
}

// Limpa resultados anteriores e exibe resultados na página web
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
```

### Componentes Principais

1. **Configuração da API**:
    - `url`: URL base da API Datamuse.
    - `queryParams`: Parâmetro de consulta para buscar adjetivos relacionados ('rel_jja=').

2. **Elementos do DOM**:
    - `inputField`: Campo de entrada para a palavra do usuário.
    - `submit`: Botão para enviar a consulta.
    - `responseField`: Área para exibir as sugestões.

3. **Função Assíncrona - `getSuggestions`**:
    - Declarada com a palavra-chave `async`.
    - Usa `await` para lidar com operações assíncronas.

4. **Manipulação de Eventos**:
    - `displaySuggestions`: Função que previne o comportamento padrão do formulário, limpa respostas anteriores e chama `getSuggestions`.
    - Event listener anexado ao botão de envio.

### Uso do Async/Await

A função `getSuggestions` demonstra o uso de async/await:

1. É declarada como uma função assíncrona: `const getSuggestions = async () => { ... }`
2. Dentro da função, `await` é usado duas vezes:
    - `const response = await fetch(endpoint, {cache: "no-cache"})`: Espera a conclusão da requisição à API.
    - `const jsonResponse = await response.json()`: Espera que a resposta seja analisada como JSON.

### Fluxo de Execução

1. O usuário insere uma palavra no campo de entrada e clica no botão de envio.
2. O evento de clique aciona a função `displaySuggestions`.
3. `displaySuggestions` limpa quaisquer resultados anteriores e chama `getSuggestions`.
4. `getSuggestions` constrói a URL da API com a palavra do usuário.
5. Uma requisição fetch é feita à API Datamuse.
6. A resposta da API é aguardada e então convertida para JSON.
7. Os dados JSON são passados para a função `renderResponse` (não mostrada no código) para exibição na página.

### Tratamento de Erros

O código utiliza um bloco try/catch para lidar com possíveis erros durante a requisição à API ou o processamento da resposta. Se ocorrer um erro, ele será registrado no console.

## Benefícios do Uso de Async/Await neste Projeto

1. **Código Mais Limpo**: A estrutura async/await torna o código mais fácil de ler e entender comparado ao uso de Promises encadeadas.
2. **Melhor Tratamento de Erros**: O uso do bloco try/catch facilita o tratamento de erros em operações assíncronas.
3. **Fluxo de Controle Simplificado**: A função `getSuggestions` parece mais com código síncrono, tornando o fluxo de execução mais claro.


# Conclusão: Uso de Fetch e Async/Await nos Projetos 'Link Rápido' e 'Palavra Fácil'

## Comparação do Uso de Fetch

Ambos os projetos, "Link Rápido" e "Palavra Fácil", utilizam a API Fetch para realizar requisições HTTP assíncronas. No entanto, há diferenças sutis na implementação:

### Projeto "Link Rápido"

```javascript
const response = await fetch(url, {
  method: 'POST',
  body: data,
  headers: {
    'Content-type': 'application/json',
    'apikey': apiKey
  }
});
```

- Utiliza um método POST para enviar dados ao servidor.
- Inclui um corpo (body) na requisição com os dados a serem enviados.
- Define cabeçalhos específicos, incluindo uma chave de API para autenticação.

### Projeto "Palavra Fácil"

```javascript
const response = await fetch(endpoint, {cache: "no-cache"});
```

- Utiliza um método GET (padrão) para recuperar dados do servidor.
- Não inclui um corpo na requisição, pois os parâmetros são passados via URL.
- Usa a opção `cache: "no-cache"` para evitar o armazenamento em cache da resposta.

## Análise do Uso de Async/Await

Ambos os projetos aproveitam as vantagens do async/await para lidar com operações assíncronas de forma mais limpa e legível.

### Similaridades

1. **Declaração de Função Assíncrona**: Ambos os projetos declaram suas funções principais como assíncronas usando a sintaxe `async`:

   ```javascript
   const shortenUrl = async () => { ... }  // Link Rápido
   const getSuggestions = async () => { ... }  // Palavra Fácil
   ```

2. **Uso do Await com Fetch**: Ambos utilizam `await` para esperar a conclusão da requisição fetch:

   ```javascript
   const response = await fetch(...);
   ```

3. **Processamento da Resposta**: Ambos usam `await` novamente para processar a resposta JSON:

   ```javascript
   const jsonResponse = await response.json();
   ```

4. **Tratamento de Erros**: Ambos implementam blocos try/catch para lidar com possíveis erros durante as operações assíncronas.

### Diferenças Sutis

1. **Complexidade da Requisição**:
    - "Link Rápido" tem uma requisição mais complexa, com método POST e cabeçalhos personalizados.
    - "Palavra Fácil" tem uma requisição mais simples, usando GET e apenas uma opção de cache.

2. **Manipulação de Dados**:
    - "Link Rápido" prepara dados para envio (`JSON.stringify()`).
    - "Palavra Fácil" constrói a URL de consulta concatenando strings.

3. **Verificação de Resposta**:
    - "Link Rápido" verifica explicitamente `if(response.ok)`.
    - "Palavra Fácil" não faz esta verificação explícita.

## Benefícios do Uso de Async/Await em Ambos os Projetos

1. **Código Mais Limpo e Legível**:
    - Evita o "callback hell" ou encadeamento excessivo de Promises.
    - A estrutura do código se assemelha mais a operações síncronas, facilitando a leitura.

2. **Melhor Tratamento de Erros**:
    - O uso de blocos try/catch torna o tratamento de erros mais intuitivo e centralizado.

3. **Fluxo de Controle Simplificado**:
    - As operações assíncronas parecem ser executadas em sequência, simplificando a lógica do programa.

4. **Fácil Integração com APIs**:
    - Async/await facilita a interação com APIs externas, tornando o código mais modular e manutenível.

## Conclusão Final

O uso de fetch combinado com async/await nos projetos "Link Rápido" e "Palavra Fácil" demonstra como essas tecnologias modernas do JavaScript podem simplificar significativamente o desenvolvimento de aplicações web assíncronas. Essa abordagem não só melhora a legibilidade e manutenibilidade do código, mas também proporciona uma maneira mais intuitiva de lidar com operações que dependem de recursos externos, como APIs.

Ambos os projetos ilustram como diferentes tipos de requisições (POST vs GET, com ou sem cabeçalhos personalizados) podem ser facilmente gerenciados usando a mesma estrutura básica de async/await. Isso destaca a flexibilidade e poder dessas ferramentas no desenvolvimento web moderno.

A adoção dessas práticas resulta em um código mais robusto, mais fácil de debugar e mais adaptável a mudanças futuras, tornando-as ferramentas essenciais no arsenal de qualquer desenvolvedor JavaScript contemporâneo.


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


Caso ocorra algum erro durante a requisição, usamos o método `.catch()` para capturar e exibir o erro no console.

```javascript
.catch(error => console.log('Erro:', error));
````

[Imagem1]

Usamos a API da NASA para obter a "Astronomy Picture of the Day" (Imagem Astronômica do Dia). Para isso, usamos uma URL que inclui nossa chave de API. Essa chave serve para autenticar nossa aplicação ao acessar os dados da NASA.

```javascript
const apiKey = 'SUA_CHAVE_AQUI'; // Sua chave de API recebida por email
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

````

### Como gerar a chave da API no site da NASA:
Para usar a API da NASA e acessar os dados, você precisa de uma chave de acesso primeiro:

1. Acesse o site oficial da API da NASA: https://api.nasa.gov/
2. No site, encontre "Generate API Key" (Gerar Chave de API).
3. Preencha o formulário de inscrição com as informações necessárias, como nome e email.
4. Depois de se inscrever, você receberá um email com a sua chave de API.

[Imagem2]

