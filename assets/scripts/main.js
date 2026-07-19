import { inicializarFormulario } from "./ui.js";

inicializarFormulario();

import { carregarVagas } from "./dados.js";

const vagas = await carregarVagas();
