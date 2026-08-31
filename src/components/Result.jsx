import { falar } from "../../utils/falar";

function Result({ acertos, total, onRestart}) {

  return (
    <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="mb-6 text-6xl">
        {acertos >= total / 2 ? "🎉" : "💪"}
        {acertos >= total / 2 ? falar(`Parabéns! Você acertou ${acertos} de ${total} questões.`) : falar(`Que pena! Você acertou ${acertos} de ${total} questões. Não desanime, continue praticando!`)}
      </div>

      <h1 className="mb-3 text-3xl font-bold text-gray-800">
        Simulado terminado!
      </h1>
      
      <p className="mb-8 text-xl text-gray-600">
        
        Você acertou{" "}
        <strong>
          {acertos} de {total}
        </strong>{" "}
        questões.
      </p>

      <button
        onClick={onRestart}
        className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-xl font-bold text-white transition hover:bg-blue-700"
      >
        Fazer novamente
      </button>
    </div>
  );
}

export default Result;