import { useEffect } from "react";
import { falar } from "../../utils/falar";

function Result({ acertos, total, onRestart }) {
  const mensagem =
    acertos >= total / 2
      ? `Parabéns! Você acertou ${acertos} de ${total} questões.`
      : `Que pena! Você acertou ${acertos} de ${total} questões. Não desanime, continue praticando!`;

  useEffect(() => {
    falar(mensagem);
  }, [mensagem]);

  return (
    <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="mb-6 text-6xl">
        {acertos >= total / 2 ? "🎉" : "💪"}
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

       <footer className="mt-8 text-center">
      <a
        href="https://brunodev.dev.br"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 transition hover:text-blue-600"
      >
        Criado por <span className="font-semibold">BrunoDev</span>
      </a>
    </footer>
    </div>

   
  );
}

export default Result;