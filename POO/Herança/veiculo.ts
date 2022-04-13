class Carro {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Carro {
    constructor() {
        super()
        this.rodas = 2;
    }
}