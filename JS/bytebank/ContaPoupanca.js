import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  static numeroDeContas = 0;

  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
    ContaPoupanca.numeroDeContas += 1;

    // Verificar por que não está aceitando cliente.nome
    // console.log('Conta poupança de ' + this._cliente.nome + ' criada com sucesso!!')
  }
}