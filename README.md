
# Ultimate Fight Javascript

Este projeto simula um sistema de lutas, onde lutadores competem entre si, e o vencedor é determinado aleatoriamente. O sistema mantém o histórico das vitórias, derrotas e empates de cada lutador, além de calcular a taxa de vitórias (winrate).

## Funcionalidades
- Cadastro e gerenciamento de lutadores.
- Simulação de lutas entre dois lutadores.
- Cálculo de categoria de cada lutador baseado no peso.
- Cálculo da taxa de vitórias (winrate).
- Registro de vitórias, derrotas e empates após cada luta.
- Exibição dos lutadores e suas estatísticas.

## Tecnologias Utilizadas
- **JavaScript**: Para implementação das lógicas do sistema.
- **Node.js**: Para execução do projeto.

## Estrutura de Arquivos

- **api/Luta.js**: Classe que gerencia as lutas entre dois lutadores, verificando se a luta é válida (mesma categoria) e determinando o vencedor aleatoriamente.
- **api/Lutador.js**: Classe que representa um lutador com suas características, como nome, nacionalidade, peso, idade, vitórias, derrotas e empates.
- **api/index.js**: Inicializa os lutadores e cria uma luta de exemplo.
- **api/lutadorManager.js**: Gerencia a adição e obtenção dos lutadores.

## Como Rodar o Projeto

1. Clone o repositório:
```bash
    git clone https://github.com/SeuUsuario/SistemaDeLutas.git
    cd .\UFJS_API\
```

2. Instale as dependências (se necessário) e inicie o servidor Node.js:
```bash
    npm install
    node api/index.js
```

3. Veja o resultado no console, onde as informações sobre a luta e os lutadores serão exibidas.

## Exemplo de Luta
O projeto cria uma luta entre dois lutadores e exibe a tabela de informações sobre a luta, como o vencedor e o histórico de vitórias e derrotas dos lutadores.

## Como Funciona a Luta

- A luta só é válida se os dois lutadores tiverem a mesma categoria de peso.
- O vencedor é determinado aleatoriamente entre o desafiante e o desafiado.
- Após cada luta, o número de vitórias, derrotas e empates dos lutadores é atualizado, e a taxa de vitórias (winrate) é recalculada.

## Atribuições

Este projeto foi inspirado no sistema de lutas e gerenciamento de lutadores, onde cada lutador tem atributos como nome, peso, categoria e histórico de vitórias/derrotas.
