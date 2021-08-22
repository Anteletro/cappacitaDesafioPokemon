function elementos(tipo) {
const elemento = {}
if (tipo == "Normal") {
    elemento = {
    superEfetivo: [],
    resitente: [],
    Fraco: ["Lutador"],
    Imune: ["Fantasma"]
}} else if (tipo == "Lutador") { 
    elemento = { 
        superEfetivo: ["Normal", "Pedra", "Aço","Gelo","Noturno"],
        resitente: ["Noturno", "Pedra", "Inseto"],
        Fraco: ["Voador", "Psíquico","Fada"],
        Imune: [""]
}}
return elemento
}
/*
const Normal = {
    superEfetivo: [],
    resitente: [],
    Fraco: ["Lutador"],
    Imune: ["Fantasma"]
}

const Lutador = {
    superEfetivo: ["Normal", "Pedra", "Aço","Gelo","Noturno"],
    resitente: ["Noturno", "Pedra", "Inseto"],
    Fraco: ["Voador", "Psíquico","Fada"],
    Imune: [""]
}

const Voador = {
    superEfetivo: ["Lutador", "Inseto", "Planta"],
    resitente: ["Planta", "Lutador", "Inseto"],
    Fraco: ["Elétrico", "Pedra", "Gelo"],
    Imune: ["Terrestre"]
}

const Venenoso = {
    superEfetivo: ["Venenoso", "Pedra", "Aço", "Fogo", "Elétrico"],
    resitente: ["Venenoso", "Pedra"],
    Fraco: ["Água", "Planta", "Gelo"],
    Imune: []
}

const Terrestre = {
    superEfetivo: ["Planta", "Fada"],
    resitente: ["Venenoso", "Lutador", "Inseto","Fada","Planta"],
    Fraco: ["Terrestre", "Psíquico"],
    Imune: ["Elétrico"]
}

const Pedra = {
    superEfetivo: ["Voador", "Inseto", "Fogo" , "Gelo"],
    resitente: ["Venenoso", "Normal", "Fogo", "Voador"],
    Fraco: ["Psíquico", "Fada"],
    Imune: []
}

const Inseto = {
    superEfetivo: ["Planta", "Psíquico", "Noturno"],
    resitente: ["Lutador", "Planta" ,"Terrestre"],
    Fraco: ["Fogo", "Voador", "Pedra"],
    Imune: []
}

const Fantasma = {
    superEfetivo: ["Fantasma", "Psíquico"],
    resitente: ["Venenoso", "Inseto"],
    Fraco: ["Fantasma", "Noturno"],
    Imune: ["Normal", "Lutador"]
}

const Aço = {
    superEfetivo: ["Pedra", "Gelo", "Fada"],
    resitente: ["Gelo", "Normal", "Planta", "Voador", "Pedra", "Psíquico", "Dragão", "Fada", "Aço", "Inseto"],
    Fraco: ["Fogo", "Terrestre", "Lutador"],
    Imune: ["Venenoso"]
}

const Fogo = {
    superEfetivo: ["Inseto", "Aço", "Planta", "Gelo"],
    resitente: ["Aço", "Fogo", "Planta", "Gelo", "Inseto", "Fada"],
    Fraco: ["Fogo", "Terrestre", "Pedra"],
    Imune: []
}

const Água = {
    superEfetivo: ["Terrestre", "Pedra", "Fogo"],
    resitente: ["Fogo", "Água", "Gelo" , "Aço"],
    Fraco: ["Planta", "Elétrico"],
    Imune: []
}

const Planta = {
    superEfetivo: ["Terrestre", "Pedra", "Água"],
    resitente: ["Água", "Planta", "Terrestre", "Elétrico"],
    Fraco: ["Fogo", "Voador", "Gelo", "Venenoso", "Inseto"],
    Imune: []
}

const Elétrico = {
    superEfetivo: ["Voador", "Água"],
    resitente: ["Elétrico", "Voador", "Aço"],
    Fraco: ["Terrestre"],
    Imune: []
}

const Psíquico = {
    superEfetivo: ["Lutador", "Venenoso"],
    resitente: ["Psíquico", "Lutador"],
    Fraco: ["Inseto", "Fantasma", "Noturno"],
    Imune: []
}

const Gelo = {
    superEfetivo: ["Voador", "Terrestre", "Planta", "Dragão"],
    resitente: ["Gelo"],
    Fraco: ["Fogo", "Pedra", "Lutador", "Aço"],
    Imune: []
}

const Dragão = {
    superEfetivo: ["Dragão"],
    resitente: ["Elétrico", "Fogo", "Água", "Inseto"],
    Fraco: ["Gelo", "Dragão", "Fada"],
    Imune: []
}

const Fada = {
    superEfetivo: ["Lutador", "Dragão" ,"Noturno"],
    resitente: ["Noturno", "Lutador", "Inseto"],
    Fraco: ["Venenoso", "Aço"],
    Imune: ["Dragão"]
}

const Noturno = {
    superEfetivo: ["Fantasma", "Psíquico"],
    resitente: ["Noturno", "Fantasma"],
    Fraco: ["Lutador", "Inseto", "Fada"],
    Imune: ["Psíquico"]
}



*/

//termina esse code pra mim