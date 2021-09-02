# VTEX-IO-Colorizer

VTEX IO Colorizer é um script feito para facilitar o desenvolvimento em relação as cores na plataforma VTEX IO. Quando há muitas cores, cadastrar cor por cor no código,
pode consumir muito tempo e ser repetitivo. Resumidamente o script lê as colunas de hexadecimal e nome da cor no excel, e converte em sass e na estrutura de classes usada em 
blocos dos componentes VTEX IO.

O script lê um excel supondo que a primeira coluna é uma coluna de cores em hexadecimal sem o # (apenas os caracteres). E também supõe que a segunda coluna é respectivamente
a coluna dos nomes das cores. Todos os caracteres serão minúsculos, sem acentos, craze, apóstrofe e caracteres especiais, como por exemplo " ! ", será substituidos por " - ".

A partir disto ele monta toda estrutura de variáveis, de cada nome de cor, pra cada valor hexadecimal respectivamente, o código estará no arquivo "color.txt".

Em seguida, a partir destas variáveis, constrói todas as variações de cor no bloco SKU Selector das vitrines, o código estará no arquivo "home.txt".

Logo após, é montado toda estrutura para estilizar os filtros de departamento e categoria, o código estará no arquivo "filter.txt".

OBS: Todos os arquivos estarão dentro da pasta " Código sass cores "

Requerimentos: 

- Ter o NodeJS instalado
- Ter o excel com a relação de cores e nomes na mesma pasta do app.js


Modo de uso: 

- Ao abrir o app.js no seu editor de código na linha xlsxFile('./NOMEDOARQUIVO.xlsx') substitua o nome do arquivo pelo respectivo nome do seu excel.
- Pelo windows explorer, vá na aba de endereço e digite cmd ( abrir o cmd no diretório do app.js e da planilha ).
- Dentro do cmd digite: node app.js, caso receba a mensagem "Bem sucedido! Pasta com códigos criada." uma pasta chamada "Código sass cores" será criada na mesma pasta do app.js







