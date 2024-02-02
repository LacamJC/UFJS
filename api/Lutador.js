class Lutador{
    constructor(nome, nacionalidade,peso,idade, vitorias, derrotas, empates)
    {
        this.setNome(nome),
        this.setNacionalidade(nacionalidade),
        this.setPeso(peso),
        this.setIdade(idade),
        this.setVitorias(vitorias),
        this.setDerrotas(derrotas),
        this.setEmpates(empates)
        this.setWinrate()
    }


    ganharLuta(){
        this.setVitorias(this.getVitorias()+ 1)
        this.setWinrate()
    }

    perderLuta(){
        this.setDerrotas(this.getDerrotas()+1)
        this.setWinrate();
    }

    empatarLuta(){
        this.setEmpates(this.getEmpates()+1)
        this.setWinrate()
    }


    setNome(nome)
    {
        this.nome = nome
    }

    setNacionalidade(nacionalidade)
    {
        this.nacionalidade = nacionalidade
    }
    setPeso(peso)
    {
        this.peso = peso 
        this.setCategoria()
    }
    
    setCategoria(){
        // this.categoria = categoria
        var peso = this.peso 
        if(peso < 52)
        {
            this.categoria = 'Inválido'
        }else if(peso < 70.3) {
            this.categoria = 'Leve'
        }else if(peso < 83){
            this.categoria = 'Médio'
        }else if(peso < 120)
        {
            this.categoria = 'Pesado'
        }
    }

    setIdade(idade){ this.idade = idade }
    setVitorias(vitorias){ this.vitorias = vitorias }
    setDerrotas(derrotas){ this.derrotas = derrotas }   
    setEmpates(empates){ this.empates = empates }

    setWinrate(){
        // console.log("CALCULANDO WINRATE")
        var vitorias = this.getVitorias()
        var derrotas = this.getDerrotas()
        var empates = this.getEmpates()
        var totalLutas = vitorias + derrotas + empates 
        var winrate = vitorias / totalLutas * 100

        if(totalLutas <= 0){ this.winrate='???'}
        else {
            // console.log(winrate)
            return this.winrate = Math.floor(winrate)
        }
    }

    getNome(){return this.nome}
    getNacionalidade(){return this.nacionalidade}
    getPeso(){return this.peso}
    getCategoria(){return this.categoria}
    getIdade(){return this.idade}
    getVitorias(){return this.vitorias}
    getDerrotas(){return this.derrotas}
    getEmpates(){return this.empates}
    getWinrate(){return this.winrate}
}


module.exports = Lutador;