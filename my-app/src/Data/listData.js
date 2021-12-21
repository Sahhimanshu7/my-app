export const ListData =new Promise(()=>{
fetch('https://imdb-api.com/en/API/SearchMovie/k_qojit1ic/inception 2010')
  .then(response => response.json())
  .then(data => {
    return data;
  })
});

  
