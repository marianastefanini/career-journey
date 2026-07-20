const onboarding = document.querySelector("#onboarding");
const dashboard = document.querySelector("#dashboard");

const formulario = document.querySelector("#formulario-perfil");
const botaoRefazer = document.querySelector("#botao-refazer");

const campoNome = document.querySelector("#nome");
const campoArea = document.querySelector("#area");
const campoHabilidades = document.querySelector("#habilidades");
const campoExperiencia = document.querySelector("#experiencia");

const erroNome = document.querySelector("#erro-nome");
const erroArea = document.querySelector("#erro-area");
const erroHabilidades = document.querySelector("#erro-habilidades");

const statusVagas = document.querySelector("#status-vagas");

const saudacaoCandidato = document.querySelector("#saudacao-candidato");
const resumoCompatibilidade = document.querySelector("#resumo-compatibilidade");
const resumoVagas = document.querySelector("#resumo-vagas");
const resumoHabilidades = document.querySelector("#resumo-habilidades");
const quantidadeResultados = document.querySelector("#quantidade-resultados");
const listaVagas = document.querySelector("#lista-vagas");

export function atualizarStatusVagas(mensagem) {
  statusVagas.textContent = mensagem;
}

export function inicializarFormulario(receberCandidato) {
  formulario.addEventListener("submit", (event) =>
    validarFormulario(event, receberCandidato),
  );

  botaoRefazer.addEventListener("click", refazerAnalise);
}

function refazerAnalise() {
  dashboard.hidden = true;
  onboarding.hidden = false;

  formulario.reset();
  limparMensagensErro();

  listaVagas.textContent = "";
  statusVagas.textContent = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  campoNome.focus();
}

function validarFormulario(event, receberCandidato) {
  event.preventDefault();

  limparMensagensErro();

  let formularioValido = true;

  if (campoNome.value.trim() === "") {
    mostrarErro(erroNome, "Digite seu nome.");
    formularioValido = false;
  }

  if (campoArea.value === "") {
    mostrarErro(erroArea, "Selecione sua área de atuação.");
    formularioValido = false;
  }

  if (campoHabilidades.value.trim() === "") {
    mostrarErro(erroHabilidades,"Digite pelo menos uma habilidade.");
    formularioValido = false;
  }

  if (!formularioValido) {
    return;
  }

  const candidato = criarCandidato();

  receberCandidato(candidato);
}

function mostrarErro(erro, mensagem) {
  erro.textContent = mensagem;
}

function limparMensagensErro() {
  erroNome.textContent = "";
  erroArea.textContent = "";
  erroHabilidades.textContent = "";
}

function criarCandidato() {
  const candidato = {
    nome: campoNome.value.trim(),
    area: campoArea.value,
    habilidades: campoHabilidades.value
      .split(",")
      .map((habilidade) => habilidade.trim().toLowerCase()),
    experiencia: Number(campoExperiencia.value),
  };

  return candidato;
}

export function mostrarDashboard(candidato, resultados, melhorVaga) {
  onboarding.hidden = true;
  dashboard.hidden = false;

  dashboard.classList.remove(
    "dashboard-front-end",
    "dashboard-ui-ux",
    "dashboard-full-stack",
  );

  dashboard.classList.add(`dashboard-${candidato.area}`);

  saudacaoCandidato.textContent = `Olá, ${candidato.nome}!`;

  resumoCompatibilidade.textContent = `${Math.round(melhorVaga.percentual)}%`;

  resumoVagas.textContent = resultados.length;

  resumoHabilidades.textContent = candidato.habilidades.length;

  quantidadeResultados.textContent = `${resultados.length} vagas encontradas`;

  listaVagas.textContent = "";

  resultados.forEach((resultado) => {
    const card = criarCardVaga(resultado, melhorVaga);
    listaVagas.append(card);
  });
}

function criarCardVaga(resultado, melhorVaga) {
  const card = document.createElement("article");
  card.classList.add("card-vaga");

  const ehMelhorVaga = resultado === melhorVaga;

  if (ehMelhorVaga) {
    card.classList.add("melhor-vaga");
  }

  const informacoes = document.createElement("div");
  informacoes.classList.add("informacoes-vaga");

  const categoria = document.createElement("span");
  categoria.classList.add("categoria-vaga");
  categoria.textContent = resultado.vaga.obterCategoria();

  const seloMelhorVaga = document.createElement("span");
  seloMelhorVaga.classList.add("selo-melhor-vaga");
  seloMelhorVaga.textContent = "★ Melhor vaga";

  const titulo = document.createElement("h4");
  titulo.textContent = resultado.vaga.cargo;

  const empresa = document.createElement("p");
  empresa.classList.add("empresa-vaga");
  empresa.textContent = resultado.vaga.empresa;

  const detalhes = document.createElement("p");
  detalhes.classList.add("detalhes-vaga");
  detalhes.textContent = `${resultado.vaga.modalidade} • ${resultado.vaga.experienciaMinima} meses`;

  const salario = document.createElement("p");
  salario.classList.add("salario-vaga");
  salario.textContent = `R$ ${resultado.vaga.salario}`;

  if (ehMelhorVaga) {
    informacoes.append(
      seloMelhorVaga,
      categoria,
      titulo,
      empresa,
      detalhes,
      salario,
    );
  } else {
    informacoes.append(categoria, titulo, empresa, detalhes, salario);
  }

  const blocoCompatibilidade = document.createElement("div");
  blocoCompatibilidade.classList.add("bloco-compatibilidade");

  const tituloCompatibilidade = document.createElement("span");
  tituloCompatibilidade.textContent = "Compatibilidade";

  const percentual = document.createElement("strong");
  percentual.textContent = `${Math.round(resultado.percentual)}%`;

  const barra = document.createElement("div");
  barra.classList.add("barra-compatibilidade");

  const preenchimento = document.createElement("div");
  preenchimento.classList.add("preenchimento-compatibilidade");
  preenchimento.style.width = `${Math.round(resultado.percentual)}%`;

  barra.append(preenchimento);

  const classificacao = document.createElement("p");
  classificacao.classList.add("classificacao-vaga");
  classificacao.textContent = resultado.classificacao;

  blocoCompatibilidade.append(
    tituloCompatibilidade,
    percentual,
    barra,
    classificacao,
  );

  const blocoHabilidades = document.createElement("div");
  blocoHabilidades.classList.add("bloco-habilidades");

  const tituloHabilidades = document.createElement("span");
  tituloHabilidades.textContent = "Principais habilidades";

  const listaHabilidades = document.createElement("div");
  listaHabilidades.classList.add("lista-habilidades-card");

  resultado.vaga.requisitos.forEach((habilidade) => {
    const item = document.createElement("span");
    item.classList.add("habilidade-vaga");
    item.textContent = habilidade;

    listaHabilidades.append(item);
  });

  blocoHabilidades.append(tituloHabilidades, listaHabilidades);

  const recomendacao = document.createElement("p");
  recomendacao.classList.add("recomendacao-vaga");
  recomendacao.textContent = resultado.recomendacao;

  card.append(
    informacoes,
    blocoCompatibilidade,
    blocoHabilidades,
    recomendacao,
  );

  return card;
}
