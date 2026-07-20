export class Vaga {
  constructor(
    id,
    empresa,
    cargo,
    area,
    requisitos,
    experienciaMinima,
    salario,
    modalidade,
  ) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.area = area;
    this.requisitos = requisitos;
    this.experienciaMinima = experienciaMinima;
    this.salario = salario;
    this.modalidade = modalidade;
    this.categoria = "Tecnologia";
  }

  calcularCompatibilidade(candidato) {
    const habilidadesEncontradas = this.requisitos.filter((requisito) =>
      candidato.habilidades.includes(requisito.toLowerCase()),
    );

    const habilidadesFaltantes = this.requisitos.filter(
      (requisito) => !candidato.habilidades.includes(requisito.toLowerCase()),
    );

    const percentual =
      this.requisitos.length === 0
        ? 0
        : (habilidadesEncontradas.length / this.requisitos.length) * 100;

    let classificacao;

    if (percentual >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (percentual >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    return {
      habilidadesEncontradas,
      habilidadesFaltantes,
      percentual,
      classificacao,
    };
  }

  obterCategoria() {
    return this.categoria;
  }
}

export class VagaFrontEnd extends Vaga {
  constructor(
    id,
    empresa,
    cargo,
    area,
    requisitos,
    experienciaMinima,
    salario,
    modalidade,
  ) {
    super(
      id,
      empresa,
      cargo,
      area,
      requisitos,
      experienciaMinima,
      salario,
      modalidade,
    );

    this.categoria = "Front-end";
  }
}

export class VagaUXUI extends Vaga {
  constructor(
    id,
    empresa,
    cargo,
    area,
    requisitos,
    experienciaMinima,
    salario,
    modalidade,
  ) {
    super(
      id,
      empresa,
      cargo,
      area,
      requisitos,
      experienciaMinima,
      salario,
      modalidade,
    );

    this.categoria = "UI/UX";
  }
}

export class VagaFullStack extends Vaga {
  constructor(
    id,
    empresa,
    cargo,
    area,
    requisitos,
    experienciaMinima,
    salario,
    modalidade,
  ) {
    super(
      id,
      empresa,
      cargo,
      area,
      requisitos,
      experienciaMinima,
      salario,
      modalidade,
    );
    this.categoria = "Full Stack";
  }
}

export function analisarVagas(candidato, vagas) {
  const vagasArea = vagas.filter((vaga) => vaga.area === candidato.area);
  const resultados = [];

  for (const vaga of vagasArea) {
    const resultado = vaga.calcularCompatibilidade(candidato);

    const atendeTodos = vaga.requisitos.every((requisito) =>
      candidato.habilidades.includes(requisito.toLowerCase()),
    );

    const atendeExperiencia = candidato.experiencia >= vaga.experienciaMinima;

    const recomendacao = atendeTodos
      ? "Você atende todos os requisitos da vaga!"
      : `Para aumentar sua compatibilidade com essa vaga, priorize estudar ${resultado.habilidadesFaltantes.join(", ")}.`;

    resultados.push({
      vaga,
      habilidadesEncontradas: resultado.habilidadesEncontradas,
      habilidadesFaltantes: resultado.habilidadesFaltantes,
      percentual: resultado.percentual,
      classificacao: resultado.classificacao,
      atendeExperiencia,
      recomendacao,
    });
  }
  return resultados;
}

export function encontrarMelhorVaga(resultados) {
  if (resultados.length === 0) {
    return null;
  }

  const melhorVaga = resultados.reduce((melhor, atual) => {
    if (atual.percentual > melhor.percentual) {
      return atual;
    }

    if (atual.percentual < melhor.percentual) {
      return melhor;
    }

    if (atual.atendeExperiencia && !melhor.atendeExperiencia) {
      return atual;
    }

    if (!atual.atendeExperiencia && melhor.atendeExperiencia) {
      return melhor;
    }

    if (
      atual.atendeExperiencia &&
      melhor.atendeExperiencia &&
      atual.vaga.experienciaMinima > melhor.vaga.experienciaMinima
    ) {
      return atual;
    }

    return melhor;
  });

  if (melhorVaga.percentual === 0) {
    return null;
  }

  return melhorVaga;
}
