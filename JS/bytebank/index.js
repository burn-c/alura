import { Conta } from "./Conta/Conta.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

/**
 * Create customers
 */
const cliente1 = new Cliente("Ricardo", 11122233301);
const cliente2 = new Cliente("Alice", 22211144402);

/**
 * Create accounts
 */
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

/**
 * Deposits
 */
// contaCorrenteRicardo.depositar(500);
contaSalario.depositar(500);

/**
 * Transfers
 */

/**
 * Withdraw money
 */
// contaCorrenteRicardo.sacar(100)
contaSalario.sacar(100);

/**
 * Logs
 */

console.log("\n");

console.log(contaSalario);

console.log("\n");

console.log("Total de contas correntes: " + ContaCorrente.numeroDeContas);
