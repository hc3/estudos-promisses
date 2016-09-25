# Repositório com anotaçoes sobre o estudo de promisses


O javascript é assincrono e para operações I/O é sempre bom usar assincrono a operações blocantes, e para isso temos os callbacks
que nos dão uma ajuda para fazer chamadas assincronas um exemplo comum de se encontrar é o de ler um arquivo no disco q seria algo do tipo:
````js
function readJSONSync(file) {
  return JSON.parse(fs.readFileSync(file,'utf'));
}
````
um grande problema de fazer isso é que aplicação fica travada esperando completar a leitura do arquivo usando um callback estamos sendo assincronos e com isso a aplicação não fica a espera da leitura do arquivo pq com o callback quando o arquivo for lido o callback retorna vamos ao exemplo:
````js
function readJSON(file, callback) {
  fs.readFile(fileName, 'utf-8', function(err, res) {
    if(err) return callback(err);
    callback(null, JSON.parse(res))
  });
}
````
aqui já podemos ver assuntos que são básicos do javascript como res q é passado no callback é um exemplo prático de closure, nesse caso não estamos nem fazendo o tratamento de erro, o codigo seria bem maior se fosse fazer... e ainda tem outra coisa se no lugar de 1 arquivo fossem 50? ai nos topariamos com o chamado callback hell, qnd usamos callbacks e encadeamos varios callbacks fica algo muito macarronico onde o codigo fica realmente feio. entao vamos as promisses.

### Promise
<ul>
  <li>Encapsula operaçoes assincronas</li>
  <li>não tem parametro no callback</li>
  <li>representa resultado de uma operaçao assincrona</li>
</ul>
a Promise ela tem tres estados:
<ul>
  <li>Pending - incial</li>
  <li>Fulfilled - sucesso</li>
  <li>Rejected - falha</li>
</ul>
então uma promise ou ela ainda não foi invocada e esta <b>pending</b> desse estado ou ela obteve sucesso ou falha, não existe outra opção ou é sucesso ou é falha.
