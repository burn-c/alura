import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Ricardo', 11122233301);
const cliente2 = new Cliente('Alice', 22211144402);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);

contaCorrenteRicardo.depositar(500);
conta2.depositar(500);



contaCorrenteRicardo.transferir(200, conta2)

console.log('\n')

console.log(conta2)

console.log('\n')





