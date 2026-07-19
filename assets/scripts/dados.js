import { VagaFrontEnd, VagaUXUI, VagaFullStack } from "./motor.js";

export async function carregarVagas() {
  const resposta = await fetch("./assets/dados/vagas.json");

  if (!resposta.ok) {
    throw new Error(`Erro ao carregar as vagas. Código: ${resposta.status}`);
  }

  const dados = await resposta.json();

  const vagas = dados.map((vaga) => {
    if (vaga.area === "front-end") {
      return new VagaFrontEnd(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.area,
        vaga.requisitos,
        vaga.experienciaMinima,
        vaga.salario,
        vaga.modalidade,
      );
    }

    if (vaga.area === "ui-ux") {
      return new VagaUXUI(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.area,
        vaga.requisitos,
        vaga.experienciaMinima,
        vaga.salario,
        vaga.modalidade,
      );
    }

      return new VagaFullStack(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.area,
        vaga.requisitos,
        vaga.experienciaMinima,
        vaga.salario,
        vaga.modalidade,
      );
  });

  return vagas;
}
