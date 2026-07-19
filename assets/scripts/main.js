import { inicializarFormulario } from "./ui.js";

import { carregarVagas } from "./dados.js";

import { analisarVagas, encontrarMelhorVaga } from "./motor.js";

const vagas = await carregarVagas();

function receberCandidato(candidato) {
  const resultados = analisarVagas(candidato, vagas);
  const melhorVaga = encontrarMelhorVaga(resultados);

  console.log("Candidato:", candidato);

  console.log("Resultados:", resultados);

  console.log("Melhor vaga:", melhorVaga);
}

inicializarFormulario(receberCandidato);
