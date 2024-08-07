const prompt = require("prompt-sync")();

const corretor = require("./corretor.js");
const imovel = require("./imovel.js");
const cliente = require("./cliente.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  corretor.index();
  const id_corretor = parseInt(prompt("ID do(a) corretor(a): "));

  imovel.index();
  const id_imovel = parseInt(prompt("ID do(a) imóvel: "));

  cliente.index();
  const id_cliente = parseInt(prompt("ID do(a) cliente: "));

  if (
    corretor.show(id_corretor) &&
    imovel.show(id_imovel) &&
    cliente.show(id_cliente)
  ) {
    return {
      id,
      id_corretor,
      id_imovel,
      id_cliente,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
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
