/**
Ser autenticavel significa ter um método autenticar
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    const estaLogado = autenticavel.autenticar(senha);

    estaLogado
      ? console.log(autenticavel._nome + " está logado! ✔️")
      : console.log(autenticavel._nome + " não está logado! ✖️");

    return estaLogado;
  }
}
