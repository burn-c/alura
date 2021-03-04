import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
   /**
   * Private fields
   * https://github.com/tc39/proposal-class-fields
   */
  // #saldo = 0 
  _saldo = 0;
  _cliente;

  set cliente(novoValor) { if( novoValor instanceof Cliente) this._cliente = novoValor; }

  get cliente() { return this._cliente; }

  get saldo() { return this._saldo; }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
  }

  sacar(valor) {
    if(this._saldo < valor) return console.log('Saldo insuficiente!!!');

    this._saldo -= valor;
    console.log('Conta de ' + this._cliente.nome + ' -> Sacado = R$ ' + valor)
    console.log('Saldo atualizado R$ ' + this._saldo)
      
    return valor;
  }

  depositar(valor) {
    if(valor <= 0) return console.log('Valor não pode ser menor que zero!');
    
    this._saldo += valor;
    console.log('Conta de ' + this._cliente.nome + ' -> Depositado R$ ' + valor)

    return console.log('Conta de ' + this._cliente.nome + ' -> Saldo atualizado R$ ' + this._saldo)
  }

  transferir(valor, conta) {
    console.log(
      'Tranferencia de ' + this._cliente.nome + ' para ' + conta._cliente.nome + ' de R$ ' + valor
    )
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    
  }
}
