function Alternative({
  letra,
  texto,
  selecionada,
  confirmada,
  correta,
  onClick,
  onSpeak,
}) {
  let estilo = "border-gray-200 bg-white";

  if (confirmada) {
    if (correta) {
      estilo = "border-green-500 bg-green-50";
    } else if (selecionada) {
      estilo = "border-red-500 bg-red-50";
    }
  } else if (selecionada) {
    estilo = "border-blue-500 bg-blue-50";
  }

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border-2 p-3 transition ${estilo}`}
    >
      <button
        onClick={onClick}
        disabled={confirmada}
        className="flex min-h-16 flex-1 items-center gap-4 rounded-xl p-3 text-left text-lg font-semibold disabled:cursor-default"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
            selecionada
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {letra}
        </span>

        <span>{texto}</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onSpeak();
        }}
        aria-label={`Ouvir alternativa ${letra}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl"
      >
        🔊
      </button>
    </div>
  );
}

export default Alternative;