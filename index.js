// Função que da vida a caixa de texto
const autoResizeTextarea = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + 2 + "px";
};

const textarea = document.getElementById("textoPrincipal");

textarea.addEventListener("input", () => autoResizeTextarea(textarea));

// Array para armazenar mensagens criptografadas
const historicoCriptografias = [];

const criptografarTexto = () => {
  const textoOriginal = document
    .getElementById("textoPrincipal")
    .value.toLowerCase();

  const criptoText = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  const boxCriptografado = document.querySelector(".boxCriptografado");
  boxCriptografado.querySelector(".texto1").innerText = "Texto criptografado:";
  boxCriptografado.querySelector(".texto2").innerText = criptoText;

  // Adiciona a mensagem criptografada ao histórico
  historicoCriptografias.push(criptoText);

  // Oculta a imagem
  const imagemCriptografada = boxCriptografado.querySelector("img");
  imagemCriptografada.style.display = "none";

  // Limpa o texto na textarea
  document.getElementById("textoPrincipal").value = "";
};

const descriptografarTexto = () => {
  const textoCriptografado = document
    .getElementById("textoPrincipal")
    .value.toLowerCase();

  const originalText = textoCriptografado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  const boxCriptografado = document.querySelector(".boxCriptografado");
  boxCriptografado.querySelector(".texto1").innerText =
    "Texto descriptografado:";
  boxCriptografado.querySelector(".texto2").innerText = originalText;

  // Oculta a imagem
  const imagemCriptografada = boxCriptografado.querySelector("img");
  imagemCriptografada.style.display = "none";
};

const resetarPagina = () => {
  // Recarrega a página para o estado inicial
  location.reload();
};

const exibirHistorico = () => {
  const modalHistorico = document.getElementById("modalHistorico");
  const historicoLista = document.getElementById("historicoLista");

  // Limpa a lista antes de adicionar os itens novamente
  historicoLista.innerHTML = "";

  // Adiciona cada mensagem criptografada à lista
  historicoCriptografias.forEach((mensagem) => {
    const itemLista = document.createElement("li");
    itemLista.textContent = mensagem;
    historicoLista.appendChild(itemLista);
  });

  // Exibe a div flutuante/modal
  modalHistorico.style.display = "block";
};

const fecharModalHistorico = () => {
  const modalHistorico = document.getElementById("modalHistorico");

  // Fecha a div flutuante/modal
  modalHistorico.style.display = "none";
};
