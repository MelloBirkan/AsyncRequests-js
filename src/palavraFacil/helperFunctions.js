const renderResponse = (res) => {
  if(!res){
    console.log(res.status);
  }
  if(!res.length){
    responseField.innerHTML = "<p>Tente novamente!</p><p>Nenhuma sugestão foi encontrada!</p>";
    return;
  }

  let wordList = [];
  for(let i = 0; i < Math.min(res.length, 10); i++){
    wordList.push(`<li>${res[i].word}</li>`);
  }
  wordList = wordList.join("");

  responseField.innerHTML = `<p>Você pode se interessar por:</p><ol>${wordList}</ol>`;
  return;
}
