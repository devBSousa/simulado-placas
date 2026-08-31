import Alternative from "./Alternative";
import { falar } from "../../utils/falar";

function Question({
  questao,
  resposta,
  confirmada,
  onAnswer,
  onConfirm,
}) {
  

  const letras = ["A   ", "B   ", "C   ", "D   "];

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-500">
          Questão {questao.id}
        </span>

        <span className="text-lg font-semibold text-gray-500">
          Simulado
        </span>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex justify-center">
          <img
            src={questao.imagem}
            alt="Placa de trânsito"
            className="h-52 w-52 object-contain"
          />
        </div>

        <div className="mb-6 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">
            {questao.pergunta}
          </h1>

          <button
            onClick={() => falar(questao.pergunta)}
            aria-label="Ouvir pergunta"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl"
          >
            🔊
          </button>
        </div>

        <div className="space-y-3">
          {questao.alternativas.map((alternativa, index) => (
            <Alternative
              key={alternativa}
              letra={letras[index]}
              texto={alternativa}
              selecionada={resposta === index}
              confirmada={confirmada}
              correta={index === questao.correta}
              onClick={() => onAnswer(index)}
              onSpeak={() =>
                falar(`${letras[index]}. ${alternativa}`)
              }
            />
          ))}
        </div>

        {!confirmada && resposta !== null && (
          <button
            onClick={onConfirm}
            className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-4 text-xl font-bold text-white transition hover:bg-blue-700"
          >
            ✅ Confirmar resposta
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;