### Gerenciamento de Corretora de Imóveis

Este projeto consiste em um sistema de gerenciamento para uma corretora de imóveis, implementado em Node.js. Ele permite o cadastro, listagem, atualização e exclusão de registros relacionados a corretoras, clientes, corretores, imóveis e vendas. 
Abaixo está a estrutura do projeto e instruções para utilização:

---

#### Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **`index.js`**: Ponto de entrada do sistema. Implementa um menu principal para navegação entre os diferentes módulos.
  
- **`./modulos/corretora.js`**: Módulo responsável pelo gerenciamento de corretoras.
  
- **`./modulos/cliente.js`**: Módulo responsável pelo gerenciamento de clientes.
  
- **`./modulos/corretor.js`**: Módulo responsável pelo gerenciamento de corretores.
  
- **`./modulos/imovel.js`**: Módulo responsável pelo gerenciamento de imóveis.
  
- **`./modulos/venda.js`**: Módulo responsável pelo gerenciamento de vendas.

Cada módulo (`corretora`, `cliente`, `corretor`, `imovel`, `venda`) implementa funções para cadastro, listagem, atualização e exclusão de registros específicos.

---

#### Instruções de Uso

1. **Configuração Inicial**:
   - Certifique-se de ter o Node.js instalado em seu ambiente.

2. **Execução**:
   - Abra um terminal na pasta raiz do projeto.
   - Execute o comando `node index.js` para iniciar o sistema.

3. **Menu Principal**:
   - No menu principal, escolha o módulo que deseja gerenciar digitando o número correspondente.
   - Cada módulo tem seu próprio menu com opções para cada operação (cadastrar, listar, atualizar, excluir).

4. **Operações Disponíveis**:
   - **Cadastrar**: Insere um novo registro no banco de dados.
   - **Listar**: Mostra todos os registros existentes.
   - **Atualizar**: Permite modificar as informações de um registro existente.
   - **Excluir**: Remove um registro do banco de dados.

5. **Funcionalidades Adicionais**:
   - O módulo `venda` depende da existência prévia de registros nos módulos `corretor`, `imovel` e `cliente` para vincular as vendas corretamente.

6. **Finalização**:
   - Para sair do sistema, no menu principal ou em qualquer menu de módulo, digite `0`.

---

Este sistema fornece uma interface simples para gerenciar informações de uma corretora de imóveis, facilitando operações básicas de CRUD (criar, ler, atualizar, excluir) para os diferentes tipos de dados manipulados.
