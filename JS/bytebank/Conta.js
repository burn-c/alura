import { Cliente } from "./Cliente.js";

export class Conta {
  static numeroDeContas = 0;

  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) {
      throw new Error('⚠️  Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata!  ⚠️');
    }

    this._saldo = saldoInicial;
    this.cliente = cliente;
    this.agencia = agencia;

    Conta.numeroDeContas += 1;
    console.log('Conta corrente de ' + cliente.nome + ' criada com sucesso!!')
  }
  
  /**
   * Private fields
   * https://github.com/tc39/proposal-class-fields
   */
  // #saldo = 0 

  set cliente(novoValor) { if( novoValor instanceof Cliente) this._cliente = novoValor; }

  get cliente() { return this._cliente; }

  get saldo() { return this._saldo; }

  // Método abstrato
  sacar(valor) {
    throw new Error('O método Sacar da conta é abstrato!')
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if(this._saldo < valorSacado) {
      console.log('Saldo insuficiente!!!');
      return 0;
    }

    this._saldo -= valorSacado;
    console.log('Saque conta de ' + this.cliente.nome + ' -> Valor R$ ' + valor + ' + Taxa R$ ' + (valorSacado - valor) + ' = Total R$ ' + valorSacado)
    console.log('Saldo atualizado R$ ' + this._saldo)
      
    return valor;
  }

  depositar(valor) {
    if(valor <= 0) return console.log('Valor não pode ser menor que zero!');
    
    return this._saldo += valor;
    // console.log('Conta de ' + this.cliente.nome + ' -> Depositado R$ ' + valor)

    // return console.log('Conta de ' + this._cliente.nome + ' -> Saldo atualizado R$ ' + this._saldo)
  }

  transferir(valor, conta) {
    console.log(
      'Tranferencia de ' + this._cliente.nome + ' para ' + conta._cliente.nome + ' de R$ ' + valor
    )
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    
  }
}