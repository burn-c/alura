import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente();
// const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233301;

// cliente2.nome = 'Alice';
// cliente2.pdf = 11122233302;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
// conta2.cliente.nome = 'Alice';
// conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(333, conta2)
console.log('\n')

console.log(conta2.saldo)

console.log('\n')





