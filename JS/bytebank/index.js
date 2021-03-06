import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';

/**
* Create customers
*/
const cliente1 = new Cliente('Ricardo', 11122233301);
const cliente2 = new Cliente('Alice', 22211144402);

/**
* Create accounts
*/
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

/**
* Deposits
*/
contaCorrenteRicardo.depositar(500);

/**
* Transfers
*/

/**
* Withdraw money 
*/
contaCorrenteRicardo.sacar(100)

/**
* Logs
*/

console.log('\n')

console.log(contaPoupanca)

console.log('\n')

console.log('Total de contas correntes: ' + ContaCorrente.numeroDeContas)