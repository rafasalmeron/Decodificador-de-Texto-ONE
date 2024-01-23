var textarea = document.getElementById("auto-resize-textarea");

// Adiciona um ouvinte de eventos para monitorar as mudanças de conteúdo
textarea.addEventListener("input", function () {
  // Define a altura da textarea baseada no conteúdo
  this.style.height = "auto";
  this.style.height = this.scrollHeight + 2 + "px";
});
