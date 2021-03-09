/**
Ser autenticavel significa ter um método autenticar

Duck Type
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      const estaLogado = autenticavel.autenticar(senha);

      estaLogado
        ? console.log(autenticavel._nome + " está logado! ✔️")
        : console.log(autenticavel._nome + " não está logado! ✖️");

      return estaLogado;
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
