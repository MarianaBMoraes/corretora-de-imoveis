const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");

const db = [];

let proxId = 1;

const modelo = (id = proxId++) => {
  const nome = prompt("Digite o nome: ");

  corretora.index();
  const id_corretora = parseInt(prompt("ID CORRETORA: "));

  if (nome != "" && corretora.show(id_corretora)) {
    return {
      id,
      nome,
      id_corretora,
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  // ou const criar = () => {}

  const novo = modelo();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  // ou const listar = () => {}  -- listar os dados
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }
  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id); // retorna um registro válido ou undefined, mas ela não cria, apenas acha.

const update = () => {
  // const atualizar = () => {}
  if (index()) {
    const id = parseInt(prompt("Id: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo();

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso!");
      }
    } else {
      console.log("Registro não encontrado.");
    }
  }
};

const destroy = () => {
  // const remover = () => {}
  if (index()) {
    const id = parseInt(prompt("Id: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso.");
    } else {
      console.log("Registro não encontrado.");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
