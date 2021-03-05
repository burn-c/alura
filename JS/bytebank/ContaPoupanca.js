export class ContaPoupanca {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

    // Verificar por que não está aceitando cliente.nome
    console.log('Conta poupança de ' + this._cliente.nome + ' criada com sucesso!!')

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