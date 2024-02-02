class Luta{
    /*
         valida BOOLEAN
         desafiado OBJECT
         desafiante OBJECT
         vencedor OBJECT
         duracao INT

    */

    constructor(L1, L2)
    {
        this.valida(L1.getCategoria(),L2.getCategoria())
        this.setDesafiado(L1),
        this.setDesafiador(L2), 
        this.vencedor(),
        this.rounds = 5
    }


    valida(C1,C2){
        if(C1 != C2)
        {
            return this.valida=false;
        }else 
        {
            return this.valida=true;
        }
    }

    vencedor(){
        var escolhido = Math.floor(Math.random()*3);
        // console.log(vencedor)
        switch(escolhido){
            case 0:
                this.vencedor = this.getDesafiado().getNome();
                this.getDesafiado().ganharLuta();
                this.getDesafiador().perderLuta();
                break;
                case 1:
                    this.vencedor = this.getDesafiador().getNome();
                    this.getDesafiador().ganharLuta();
                    this.getDesafiado().perderLuta();
                    break;
                    case 2:
                        this.vencedor = 'Empate';
                        this.getDesafiador().empatarLuta();
                        this.getDesafiado().empatarLuta();
        }
    }

    
    setDesafiado(nome){return this.desafiado = nome}
    setDesafiador(nome){return this.desafiador =nome}
    setRounds(){return this.rounds = 5}

    getDesafiado(){return this.desafiado}
    getDesafiador(){return this.desafiador}
    getRounds(){return this.rounds}


}

module.exports = Luta