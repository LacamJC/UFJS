const Luta = require('./Luta')
const Lutador = require('./Lutador')

describe("Teste para o objeto lutas", () => {
    const Lutadores = [
    new Lutador('Pedro',     'Suiço',         75.3,  40,   6,   2, 5),
    new Lutador('Marcos',    'Europa',        75.2,  60,   2,   2, 2),
    new Lutador('Marcos',    'Europa',        20.2,  60,   2,   2, 2)]


    test("Deve criar o objeto de luta corretamente", () => {
        let luta = new Luta(Lutadores[0], Lutadores[1])

        expect(luta).toBeInstanceOf(Luta)
        expect(luta.getDesafiado()).toBeInstanceOf(Lutador)
        expect(luta.getDesafiador()).toBeInstanceOf(Lutador)
    })

    test("Se lutadores forem de categorias diferentes retorna FALSE", () => {
        const luta = new Luta(Lutadores[0], Lutadores[2])


        expect(luta.valida).toBe(false)
    })

    test("Se lutadores são da mesma categoria retorna TRUE", () => {
        const luta = new Luta(Lutadores[1], Lutadores[0])

        expect(luta.valida).toBe(true)
    })
})