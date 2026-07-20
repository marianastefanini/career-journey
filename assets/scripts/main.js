import {
  inicializarFormulario,
  atualizarStatusVagas,
  mostrarDashboard,
} from "./ui.js";

import { carregarVagas } from "./dados.js";

import { analisarVagas, encontrarMelhorVaga } from "./motor.js";

function criarContadorAnalises() {
  let totalAnalises = 0;

  return function () {
    totalAnalises += 1;
    return totalAnalises;
  };
}

const contarAnalises = criarContadorAnalises();

function receberCandidato(candidato, vagas) {
  const resultados = analisarVagas(candidato, vagas);
  const melhorVaga = encontrarMelhorVaga(resultados);

  const totalAnalises = contarAnalises();

  mostrarDashboard(candidato, resultados, melhorVaga, totalAnalises);
}

async function inicializarAplicacao() {
  atualizarStatusVagas("Carregando vagas...");

  try {
    const vagas = await carregarVagas();

    if (vagas.length === 0) {
      atualizarStatusVagas("Nenhuma vaga encontrada.");
      return;
    }

    atualizarStatusVagas("");

    inicializarFormulario((candidato) => {
      receberCandidato(candidato, vagas);
    });
  } catch (erro) {
    atualizarStatusVagas(
      "Não foi possível carregar as vagas. Tente novamente mais tarde.",
    );
  }
}

inicializarAplicacao();
