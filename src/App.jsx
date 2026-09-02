import { useEffect, useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import placas from "./data/placas";

function App() {
  const [questaoAtual, setQuestaoAtual] = useState(0);

  const [respostas, setRespostas] = useState([]);

  const [confirmada, setConfirmada] = useState(false);

  const [finalizado, setFinalizado] = useState(false);

  const respostaAtual = respostas[questaoAtual] ?? null;

  useEffect(() => {
    localStorage.removeItem("simulado-questao");
    localStorage.removeItem("simulado-respostas");
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "simulado-questao",
      questaoAtual
    );

    localStorage.setItem(
      "simulado-respostas",
      JSON.stringify(respostas)
    );
  }, [questaoAtual, respostas]);

  const responder = (indice) => {
    if (confirmada) {
      return;
    }

    const novasRespostas = [...respostas];

    novasRespostas[questaoAtual] = indice;

    setRespostas(novasRespostas);
  };

  const confirmarResposta = () => {
    if (respostaAtual === null) {
      return;
    }

    setConfirmada(true);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })

  };

  const proximaQuestao = () => {
    if (questaoAtual < placas.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setConfirmada(false);
    } else {
      setFinalizado(true);
    }
  };

  const reiniciar = () => {
    localStorage.removeItem("simulado-questao");
    localStorage.removeItem("simulado-respostas");

    setQuestaoAtual(0);
    setRespostas([]);
    setConfirmada(false);
    setFinalizado(false);
  };

  const acertos = respostas.filter(
    (resposta, index) =>
      resposta === placas[index]?.correta
  ).length;

  if (finalizado) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <Result
          acertos={acertos}
          total={placas.length}
          onRestart={reiniciar}
        />
      </main>
    );
  }

  const questao = placas[questaoAtual];

  return (
    <main className="flex min-h-screen justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl py-8">
        <Question
          questao={questao}
          resposta={respostaAtual}
          confirmada={confirmada}
          onAnswer={responder}
          onConfirm={confirmarResposta}
        />

        {confirmada && (
          <div className="mt-4">
            <div
              className={`mb-4 rounded-2xl p-4 text-center text-lg font-bold ${respostaAtual === questao.correta
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >
              {respostaAtual === questao.correta
                ? "Muito bem! Você acertou! 🎉"
                : `Resposta correta: ${questao.alternativas[questao.correta]}`
              }
            </div>

            <button
              id="proxima"
              onClick={proximaQuestao}
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-xl font-bold text-white hover:bg-blue-700"
            >
              {questaoAtual === placas.length - 1
                ? "Ver resultado"
                : "➡️ Próxima questão"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;