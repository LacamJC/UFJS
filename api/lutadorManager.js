let lutadores = [
    {
        id: 1,
        nome: 'Pedro',
        nacionalidade: 'Suiço',
        peso: 75.3,
        categoria: 'Médio',
        idade: 40,
        vitorias: 6,
        derrotas: 2,
        empates: 5,
        winrate: '42'
    },
    {
        id: 2,
        nome: 'Marcos',
        nacionalidade: 'Europa',
        peso: 65.2,
        categoria: 'Leve',
        idade: 60,
        vitorias: 2,
        derrotas: 2,
        empates: 5,
        winrate: '33'
    },
    {
        id: 3,
        nome: 'Pelé',
        nacionalidade: 'Brasileiro',
        peso: 70.6,
        categoria: 'Médio',
        idade: 25,
        vitorias: 7,
        derrotas: 2,
        empates: 3,
        winrate: '61'
    },
    {
        id: 4,
        nome: 'Amazon',
        nacionalidade: 'Texas',
        peso: 80.2,
        categoria: 'Médio',
        idade: 42,
        vitorias: 5,
        derrotas: 2,
        empates: 6,
        winrate: '38'
    },
    {
        id: 5,
        nome: 'Tyler',
        nacionalidade: 'Inglaterra',
        peso: 90.4,
        categoria: 'Pesado',
        idade: 35,
        vitorias: 4,
        derrotas: 2,
        empates: 3,
        winrate: '44'
    },
    {
        id: 6,
        nome: 'Minotauro',
        nacionalidade: 'Brasileiro',
        peso: 87.2,
        categoria: 'Pesado',
        idade: 42,
        vitorias: 12,
        derrotas: 4,
        empates: 0,
        winrate: '75'
    },
    {
        id: 7,
        nome: 'Spider',
        nacionalidade: 'EUA',
        peso: 100.2,
        categoria: 'Pesado',
        idade: 43,
        vitorias: 15,
        derrotas: 5,
        empates: 0,
        winrate: '75'
    },
    {
        id: 8,
        nome: 'Juliano',
        nacionalidade: 'Italiano',
        peso: 53.2,
        categoria: 'Leve',
        idade: 19,
        vitorias: 5,
        derrotas: 3,
        empates: 2,
        winrate: '50'
    },
    {
        id: 9,
        nome: 'Ferroz',
        nacionalidade: 'Frances',
        peso: 51.2,
        categoria: 'Inválido',
        idade: 23,
        vitorias: 5,
        derrotas: 4,
        empates: 2,
        winrate: '45'
    }
];

function adicionarLutador(lutador)
{
    lutadores.push(lutador)
}

function obterLutadores()
{
    return lutadores
}

module.exports = { adicionarLutador, obterLutadores}