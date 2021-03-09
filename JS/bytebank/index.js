import { Conta } from "./Conta/Conta.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

/**
 * Create employees
 */
const diretor = new Diretor("Rodrigo", 10000, 12312312301);
const gerente = new Gerente("Ricardo", 5000, 12312312302);

/**
 * Create customers
 */
const cliente1 = new Cliente("Ricardo", 11122233301);
const cliente2 = new Cliente("Alice", 22211144402);

/**
 * Register Password
 */
diretor.cadastrarSenha("111");
gerente.cadastrarSenha("222");
cliente1.cadastrarSenha("333");

/**
 * Create accounts
 */
// const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

/**
 * Authentication
 */
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "111");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "222");
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, "333");

/**
 * Deposits
 */
// contaCorrenteRicardo.depositar(500);
// contaSalario.depositar(500);

/**
 * Transfers
 */

/**
 * Withdraw money
 */
// contaCorrenteRicardo.sacar(100)
// contaSalario.sacar(100);

/**
 * Logs
 */

console.log("\n");

console.log("\n");

console.log("Total de contas correntes: " + ContaCorrente.numeroDeContas);
