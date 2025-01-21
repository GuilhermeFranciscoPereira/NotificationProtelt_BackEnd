# <img src="./src/assets/RumoLogo.png" width="50" /> Sistema de notificações - Protelt (Backend) <img src="./src/assets/RumoLogo.png" width="50" />

## 📌 Sobre o sistema

### Este backend foi desenvolvido para fornecer suporte à criação, gerenciamento e organização de notificações de autuação por infração de velocidade máxima permitida, integrando-se com o frontend do sistema.

## 🧠 Critérios pontuados para o backend
- ✔️ Expor endpoints RESTful para as seguintes funcionalidades:
  - Visualizar todas as notificações.
  - Buscar infrações por placa.
  - Criar novas infrações.
  - Editar ou deletar infrações.
- ✔️ Conectar-se a um banco de dados MySQL para persistência de dados.

## 🎯 Objetivos principais com este backend
- ✔️ Garantir a integridade e consistência dos dados.
- ✔️ Suportar operações de alto desempenho para o frontend.
- ✔️ Facilitar futuras manutenções e expansões do sistema.

#

## 🖥 Tecnologias Utilizadas
<div align='center'>

!['NodeJS'](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
!['Express'](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
!['MySQL'](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

</div>

- Node.js
- Express.js
- DotEnv
- MySQL WorkBench / NPM

## Versões utilizadas:
- Node.js: 20.15.1
- Express.js: 4.21.2
- DotEnv: 16.4.7
- MySQL npm: 2.18.1
- MySQL WorkBench : 8.0.40

#

## 🙋🏻‍♂ Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./src`

## 🛈 Como o projeto está estruturado

- `./src/assets:` Onde está todas as fotos e arquivos estáticos que vão ser usadas no projeto.

#

## ❔ Como rodar o projeto na minha máquina?

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
        brew install git
        ```
        
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

### Instalar o Node.js
O Node.js é necessário para executar o backend. Instale a versão LTS (Long Term Support) do Node.js:

- Windows/macOS/Linux: Baixe o instalador oficial [aqui](https://nodejs.org).
- Verifique a instalação: Após instalar o Node.js, execute no terminal para verificar se tudo está funcionando:
  ```bash
  node -v
  ```
  ```bash
  npm -v
  ```
  Esses comandos devem exibir as versões instaladas do Node.js e do npm (Node Package Manager).

#

## 2. Clonar o repositório

1. Abra o terminal (ou o Git Bash, se estiver no Windows).
2. Navegue até o diretório onde deseja armazenar o projeto:
   ```bash
   cd caminho/do/seu/diretorio
   ```
3. Clone o repositório:
   ```bash
   git clone https://github.com/GuilhermeFranciscoPereira/NotificationProtelt_BackEnd.git
   ```
4. Acesse a pasta do projeto clonado:
   ```bash
   cd NotificationProtelt_BackEnd
   ```

#

## 3. Instalar as dependências

Após clonar o projeto, você precisa instalar as dependências do Node.js para que ele funcione corretamente.

1. Execute o seguinte comando no terminal:
   ```bash
   npm install
   ```
   Isso instalará todas as bibliotecas e pacotes listados no arquivo `package.json`.

#

## 4. Configurar variáveis de ambiente

O projeto usa variáveis de ambiente para armazenar informações sensíveis, como conexões com o banco de dados. Crie um arquivo `.env` na raiz do projeto e adicione os valores necessários. 

Exemplo de um arquivo `.env` básico:
```
PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=sua_base_de_dados
```

#

## 5. Rodar o servidor

Agora que as dependências estão instaladas e as variáveis de ambiente configuradas, você pode iniciar o servidor.

1. Execute o seguinte comando:
   ```bash
   npm run dev
   ```
2. Se tudo estiver configurado corretamente, o servidor estará rodando

## ⚠️ Informações adicionais

1. Banco de dados: Certifique-se de que o banco de dados (MySQL) está configurado e rodando no ambiente local. 
   - Crie a base de dados usando o script SQL fornecido no projeto (se disponível).
   - Verifique as credenciais no arquivo `.env`.

2. Editor de código: Recomenda-se usar o [VS Code](https://code.visualstudio.com/) para editar o código. Para abrir o projeto no VS Code:
   ```bash
   code .
   ```

#

## 🎉 É isso! Esse é o Back-End nosso sistema, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu LinkedIn:

> Link do meu LinkedIn: <a href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283" target="_blank">https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283</a>

### 🚀 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros repositórios? 👋🏻