
const formulario = document.querySelector("#formulario-perfil");

const campoNome = document.querySelector("#nome");
const campoArea = document.querySelector("#area");
const campoHabilidades = document.querySelector("#habilidades");
const campoExperiencia = document.querySelector("#experiencia");

const erroNome = document.querySelector("#erro-nome");
const erroArea = document.querySelector("#erro-area");
const erroHabilidades = document.querySelector("#erro-habilidades");
const erroExperiencia = document.querySelector("#erro-experiencia");


export function inicializarFormulario() {
    formulario.addEventListener("submit", validarFormulario);
    
}

function validarFormulario(event) {
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

    console.log(candidato);

}

function mostrarErro(campo, erro, mensagem) {
    erro.textContent = mensagem;
}

function limparMensagensErro() {
    erroNome.textContent = "";
    erroArea.textContent = "";
    erroHabilidades.textContent = "";
}