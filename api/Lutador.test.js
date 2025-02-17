
const Lutador = require('./Lutador')

describe("Teste para o objeto do lutador ", () => {
    const lutador = new Lutador('Minotauro', 'Brasileiro',    87.2,  42,   12,  4, 0)
    test("Deve criar o objeto do lutador corretamente", () => {
        
        expect(lutador).toBeInstanceOf(Lutador)
        expect(lutador.nome).toBe(lutador.nome)
        expect(lutador.idade).toBe(lutador.idade)
    })


    

})