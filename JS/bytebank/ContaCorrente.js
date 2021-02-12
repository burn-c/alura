export class ContaCorrente {
  agencia;
  cliente;
  /**
   * Private fields
   * https://github.com/tc39/proposal-class-fields
   */
  // #saldo = 0 
  _saldo = 0;

  sacar(valor) {
    if(this._saldo < valor) return console.log('Saldo insuficiente!!!');

    this._saldo -= valor;
    console.log('Conta de ' + this.cliente.nome + ' -> Sacado = R$ ' + valor)
    console.log('Saldo atualizado R$ ' + this._saldo)
      
    return valor;
  }

  depositar(valor) {
    if(valor <= 0) return console.log('Valor não pode ser menor que zero!');
    
    this._saldo += valor;
    console.log('Conta de ' + this.cliente.nome + ' -> Depositado R$ ' + valor)

    return console.log('Conta de ' + this.cliente.nome + ' -> Saldo atualizado R$ ' + this._saldo)
  }

  transferir(valor, conta) {
    console.log(
      'Tranferencia de ' + this.cliente.nome + ' para ' + conta.cliente.nome + ' de R$ ' + valor
    )
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    
  }
}
