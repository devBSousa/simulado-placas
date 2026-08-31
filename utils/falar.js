export function falar(texto) {
  window.speechSynthesis.cancel();

  const fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";
  fala.rate = 0.85;

  window.speechSynthesis.speak(fala);
}