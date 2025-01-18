# Landing Page - DevReboCar

## Descrição

Este projeto é uma landing page fictícia para a DevReboCar, uma empresa fictícia de seguros automotivos. Ele inclui um formulário de inscrição que valida os campos de e-mail e senha antes de submeter os dados.

---

## Instruções para rodar o projeto localmente

### 1. Pré-requisitos

- Um editor de código (recomendado: Visual Studio Code).
- Navegador atualizado (Chrome, Firefox, etc.).
- [Node.js](https://nodejs.org/) (opcional, se desejar usar um servidor local).

### 2. Estrutura de arquivos do projeto

```
root/
├── index.html              # Página principal
├── styles/
│   └── styles.css          # Estilo da página
├── scripts/
│   └── formValidation.js   # Script de validação do formulário
└── components/img/
    └── seguro de carro.png # Imagem usada na página
```

### 3. Instruções para execução

#### Sem servidor:

1. Baixe o projeto em formato ZIP ou clone o repositório.

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Extraia o conteúdo do ZIP (se necessário).

3. Abra o arquivo `index.html` em um navegador.

   - Clique duas vezes no arquivo.
   - Ou, arraste-o para uma nova aba do navegador.

#### Com servidor:

1. Navegue até a pasta do projeto.

2. Instale o pacote HTTP server (opcional) se estiver usando Node.js:

   ```bash
   npm install -g http-server
   ```

3. Inicie o servidor local na pasta do projeto:

   ```bash
   http-server
   ```

4. Acesse o endereço fornecido no terminal (geralmente `http://127.0.0.1:8080`).

### 4. Testando o formulário

1. Preencha o campo de e-mail com um endereço válido.
2. Preencha o campo de senha com pelo menos 6 caracteres.
3. Clique em "Enviar".
4. Mensagens de sucesso ou erro aparecerão com base na validação.

---

## Personalização

- Alterações no estilo podem ser feitas no arquivo `styles/styles.css`.
- Regras de validação e lógica podem ser ajustadas no script `scripts/formValidation.js`.

---

## Contato

Para dúvidas ou sugestões, entre em contato com Plínio Alcântara pelo e-mail [plinio.alcantara@dcx.ufpb.br](mailto\:plinio.alcantara@dcx.ufpb.br)

