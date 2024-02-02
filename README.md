# UFJS Ultimate Fight Javascript
<p>Esta é uma aplicação com api propria, estou adicionando novas funções para no futuro poder simular lutas entre os lutadores cadastrados no banco de dados. </p> 

<p>Também é possivel puxar os dados da api caso queira com as informaçoes dos lutadores desta maneira </p>

### Fetch para pegar dados dos lutadores ( caso use o sua propria maquina para rodar o projeto)
```javascript
fetch('http://localhost:3000/LutadoresJSON')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao obter dados dos lutadores:', error);
  });
```