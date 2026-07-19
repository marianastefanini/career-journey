
const formulario = document.querySelector("#formulario-perfil");

const campoNome = document.querySelector("#nome");
const campoArea = document.querySelector("#area");
const campoHabilidades = document.querySelector("#habilidades");
const campoExperiencia = document.querySelector("#experiencia");

const erroNome = document.querySelector("#erro-nome");
const erroArea = document.querySelector("#erro-area");
const erroHabilidades = document.querySelector("#erro-habilidades");
const erroExperiencia = document.querySelector("#erro-experiencia");


export function inicializarFormulario(receberCandidato) {
    formulario.addEventListener("submit", (event) => 
        validarFormulario(event, receberCandidato));
    
}

function validarFormulario(event, receberCandidato) { 
    event.preventDefault();

   limparMensagensErro();

    let formularioValido = true;

    if (campoNome.value.trim() === "") {
        mostrarErro(campoNome, erroNome, "Digite seu nome.");
        formularioValido = false;
    }

    if (campoArea.value === "") {
        mostrarErro(campoArea, erroArea, "Selecione sua área de atuação.");
        formularioValido = false;
    }

    if (campoHabilidades.value.trim() === "") {
        mostrarErro(campoHabilidades, erroHabilidades, "Digite pelo menos uma habilidade.");
        formularioValido = false;
    }

    if (!formularioValido) {
        return;
    }

    const candidato = criarCandidato();

    receberCandidato(candidato);

}

function mostrarErro(campo, erro, mensagem) {
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
        habilidades: campoHabilidades.value.split(",").map(habilidade => habilidade.trim().toLowerCase()),
        experiencia: Number(campoExperiencia.value)
    }

    return candidato;
}