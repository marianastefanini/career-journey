export async function carregarVagas() {
    const resposta = await fetch("./assets/dados/vagas.json");

    const vagas = await resposta.json();

    return vagas;
}