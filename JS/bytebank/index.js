class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  /**
   * Private fields
   * https://github.com/tc39/proposal-class-fields
   */
  // #saldo = 0 
  _saldo = 0;

  sacar(valor) {
    if(this._saldo < valor) return console.log('Saldo insuficiente!!!');

    this._saldo -= valor;
    console.log('Sacado = R$ ' + valor)
    console.log('Saldo atualizado R$ ' + this._saldo)
      
    return valor;
  }

  depositar(valor) {
    if(valor <= 0) return console.log('Valor não pode ser menor que zero!');
    
    this._saldo += valor;
    console.log('Depositado R$ ' + valor)
    
    return console.log('Saldo atualizado R$ ' + this._saldo)
  }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;

cliente2.nome = "Alice";
cliente2.pdf = 11122233302;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.sacar(50)



