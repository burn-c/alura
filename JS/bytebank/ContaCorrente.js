import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;


    // console.log('Conta corrente de ' + this.cliente.nome + ' criada com sucesso!!')
  }
}
