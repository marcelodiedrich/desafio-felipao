class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: 'a magia',
            soldado: 'a granada',
            drácula: 'os dentes',
            pirata: 'o gancho'
        };

        const ataque = ataques[this.tipo] || '...não consegue atacar';
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Execução do ataque
const heroi1 = new Hero('Rambo', 43, 'soldado');
heroi1.atacar(); 

const heroi2 = new Hero('Caôio', 35, 'pirata');
heroi2.atacar(); 
