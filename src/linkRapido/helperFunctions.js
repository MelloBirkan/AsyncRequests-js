const renderResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>Desculpe, não foi possível formatar sua URL.</p><p>Tente novamente.</p>";
  } else {
    responseField.innerHTML = `<p>Sua URL encurtada é: </p><p> ${res.shortUrl} </p>`;
  }
}

