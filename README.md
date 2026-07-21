# CareerJourney

Projeto Avaliativo Final do Módulo 01 da turma de Programação Front-End React — Turma 02.

## Sobre o projeto

O CareerJourney é uma aplicação web desenvolvida como Projeto Avaliativo Final do Módulo 01 da formação Front-End React.

O projeto surgiu como evolução do mini-projeto SkillMatch JS, que realizava toda a análise de um perfil de candidato com vagas fictícias apenas pelo console do navegador. Nesta versão, a aplicação recebeu uma interface completa, acessível proporcionando uma experiência mais próxima de um sistema real de recrutamento.

A aplicação foi dividida em duas etapas:

Onboarding: uma landing page onde a pessoa informa seus dados profissionais, habilidades e experiência.

Dashboard: após a análise, a aplicação apresenta estatísticas do perfil, destaca automaticamente a vaga mais compatível e exibe todas as oportunidades em cards gerados dinamicamente pelo JavaScript.

Além disso, os dados da pessoa candidata permanecem salvos utilizando localStorage. Dessa forma, ao atualizar ou reabrir a aplicação, o dashboard é reconstruído automaticamente sem a necessidade de preencher novamente o formulário.

## Objetivo

O sistema recebe as informações de uma pessoa e compara suas habilidades com os requisitos das vagas disponíveis.

A análise permite:

- identificar as habilidades que atendem aos requisitos de cada vaga;
- identificar as habilidades que ainda precisam ser desenvolvidas;
- calcular o percentual de compatibilidade;
- classificar a compatibilidade obtida;
- gerar recomendações de estudo;
- identificar a vaga mais compatível com o perfil informado;
- utilizar a experiência profissional como critério de desempate;
- manter o perfil salvo entre diferentes acessos.

## Processo de criação da interface

Antes do desenvolvimento da aplicação, toda a interface foi planejada no Figma com apoio de ferramentas de inteligência artificial para pesquisa de referências visuais.

Durante essa fase foram definidos:

- identidade visual;
- organização do onboarding;
- estrutura básica do dashboard;
- cores;

### Protótipo

![alt text](/assets/images/image.png)

## Funcionalidades

- cadastro do perfil da pessoa candidata;
- validação dos campos do formulário;
- mensagens de erro acessíveis;
- carregamento das vagas por meio de `fetch`;
- tratamento dos estados de carregamento, lista vazia e erro;
- transformação dos dados do JSON em instâncias de classes;
- cálculo de compatibilidade para cada vaga;
- identificação das habilidades encontradas;
- identificação das habilidades faltantes;
- classificação da compatibilidade:
- recomendação personalizada de estudo;
- identificação da melhor vaga;
- desempate utilizando a experiência da pessoa candidata;
- geração dinâmica dos cards utilizando JavaScript;
- contador de análises realizadas durante a sessão;
- salvamento do perfil no `localStorage`;
- recuperação automática do perfil após recarregar a página;
- opção para refazer a análise;
- interface responsiva para dispositivos móveis e desktop.

## Classificação de compatibilidade

| Percentual | Classificação |
|---|---|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

# Critério da melhor vaga

A melhor vaga é definida seguindo esta ordem:

1. maior percentual de compatibilidade;
2. em caso de empate, prioridade para a vaga cuja experiência mínima é atendida;
3. permanecendo o empate, prioridade para a vaga com maior experiência mínima;
4. quando todas as vagas apresentam 0% de compatibilidade, nenhuma delas recebe o destaque de melhor vaga.

A experiência profissional é considerada um requisito desejável e um critério de priorização. Ela não impede que uma pessoa candidata atenda aos requisitos técnicos da vaga.

## Fluxo da aplicação

A aplicação segue o seguinte fluxo:

1. O usuário acessa o onboarding.
2. As vagas são carregadas utilizando `fetch`.
3. O formulário é preenchido.
4. Os dados são enviados para o motor de análise.
5. A compatibilidade é calculada.
6. O dashboard é renderizado dinamicamente.
7. O perfil é salvo utilizando localStorage.
8. Ao atualizar a página, o dashboard é reconstruído automaticamente.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript;
- JSON;
- Git;
- GitHub;
- GitHub Desktop;
- Visual Studio Code.

## Extensões e ferramentas utilizadas

- Live Server;
- Prettier;
- DevTools do Google Chrome e Microsoft Explorer;
- Lighthouse;
- GitHub Projects;

Durante o desenvolvimento foram utilizadas ferramentas de apoio para pesquisa, esclarecimento de dúvidas e organização do projeto, como documentação, materiais do curso e IA.

## Conceitos utilizados

- HTML
- CSS
- JavaScript
- Métodos de Array
- Programação Orientada a Objetos (POO)
- Callback
- Closure
- Async/Await e Promises
- Carregamento dos Dados
- Persistência com localStorage
- Manipulação do DOM
- Formulário e Validação
- Variáveis e Escopo
- Acessibilidade
- SEO
- Responsividade
- Depuração (Debugger)

# Registro da depuração

![alt text](/assets/images/debug.png)

# Organização em Módulos
- main.js: inicialização e controle do fluxo da aplicação;
- ui.js: formulário, eventos e manipulação do DOM;
- motor.js: classes e regras de negócio;
- dados.js: carregamento das vagas e persistência no localStorage.

# Persistência dos dados

Após a análise, o perfil informado pela pessoa candidata é armazenado utilizando **localStorage**.

Quando a aplicação é aberta novamente ou a página é atualizada, os dados armazenados são recuperados automaticamente, permitindo que o dashboard seja reconstruído sem a necessidade de preencher novamente o formulário.

Caso uma nova análise seja desejada, o botão **Refazer análise** remove os dados armazenados e reinicia o fluxo da aplicação.

## Como executar

Por utilizar módulos ES e uma requisição fetch, o projeto não deve ser executado abrindo diretamente o arquivo index.html com o protocolo file://.

É necessário utilizar um servidor local.

# Utilizando o Live Server

- Faça o download ou clone o repositório
- Abra a pasta do projeto no Visual Studio Code.
- Instale a extensão Live Server, caso ainda não esteja instalada.
- Abra o arquivo index.html.
- Clique com o botão direito e selecione:
- Open with Live Server
- A aplicação será aberta automaticamente no navegador.

Este projeto não precisa de Node.js, banco de dados ou instalação de dependências.

## Como utilizar

- Abra a aplicação com o Live Server.
- Preencha o nome.
- Selecione uma área de interesse.
- Informe as habilidades separadas por virgula conforme indicado no formulário.
- Informe o tempo de experiência em meses.
- Selecione o botão para realizar a análise.
- Consulte as vagas e seus percentuais de compatibilidade.
- Utilize a recomendação apresentada para identificar possíveis estudos.
- Selecione ""Refazer análise" para apagar o perfil salvo e preencher novamente o formulário.

## Organização

O desenvolvimento foi organizado em tarefas utilizando um quadro Kanban.

As funcionalidades foram desenvolvidas em branches específicas e posteriormente integradas à branch develop.

## Links

Repositório: [GitHub](https://github.com/marianastefanini/career-journey)
Kanban: [GitHub Projects ou Trello](https://github.com/users/marianastefanini/projects/3/views/1)
Vídeo de apresentação: [docs: atualiza README e documentação final](https://drive.google.com/file/d/18C9v9JinmwBwhKs6Eq3lMovZW7UcpqYD/view?usp=sharing)