const Lutador = require('./Lutador.js')
const Luta = require('./Luta.js')


const Lutadores = [
    new Lutador('Pedro',     'Suiço',         75.3,  40,   6,   2, 5),
    new Lutador('Marcos',    'Europa',        65.2,  60,   2,   2, 2),
    new Lutador('Pelé',      'Brasileiro',    70.6,  25,   7,   2, 3),
    new Lutador('Amazon',    'Texas',         80.2,  42,   5,   2, 6),
    new Lutador('Tyler',     'Inglaterra',    90.4,  35,   4,   2, 3),
    new Lutador('Minotauro', 'Brasileiro',    87.2,  42,   12,  4, 0),
    new Lutador('Spider',    'EUA',           100.2, 43,   15,  5, 0),
    new Lutador('Juliano',   'Italiano',      53.2,  19,   5,   3, 2),
    new Lutador('Ferroz',    'Frances',       51.2,  23,   5,   4, 2),
]
const luta = new Luta(Lutadores[0], Lutadores[2])

console.table(luta)


module.exports = Lutadores
