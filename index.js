const autoResizeTextarea = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + 2 + "px";
};

const textarea = document.getElementById("auto-resize-textarea");

textarea.addEventListener("input", () => autoResizeTextarea(textarea));