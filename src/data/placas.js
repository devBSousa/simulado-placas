import paradaObrigatoria from "../assets/placas/parada-obrigatoria.webp";
import deAPreferencia from "../assets/placas/de-a-preferencia.webp";
import velocidadeMaxima from "../assets/placas/velocidade-maxima.webp";
import proibidoEstacionar from "../assets/placas/proibido-estacionar.webp";
import sentidoObrigatorio from "../assets/placas/sentido-obrigatorio.webp";
import proibidoUltrapassar from "../assets/placas/proibido-ultrapassar.webp";
import proibidoVirarEsquerda from "../assets/placas/proibido-virar-esquerda.webp";
import proibidoVirarDireita from "../assets/placas/proibido-virar-direita.webp";
import proibidoEstacionarParar from "../assets/placas/proibido-estacionar-parar.webp";
import sentidoObrigatorioDireita from "../assets/placas/sentido-obrigatorio-direita.webp";
import sentidoObrigatorioEsquerda from "../assets/placas/sentido-obrigatorio-esquerda.webp";



const placas = [
  {
    id: 1,
    imagem: paradaObrigatoria,
    pergunta: "Qual é o significado desta placa?",
    alternativas: [
      "Parada obrigatória",
      "Dê a preferência",
      "Proibido estacionar",
      "Sentido obrigatório",
    ],
    correta: 0,
  },
  {
    id: 2,
    imagem: deAPreferencia,
    pergunta: "Qual é o significado desta placa?",
    alternativas: [
      "Proibido ultrapassar",
      "Dê a preferência",
      "Parada obrigatória",
      "Velocidade máxima permitida",
    ],
    correta: 1,
  },

  {
  id: 3,
  imagem: velocidadeMaxima,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Velocidade máxima permitida",
    "Proibido ultrapassar",
    "Sentido obrigatório",
    "Proibido estacionar"
  ],
  correta: 0
},
{
  id: 4,
  imagem: proibidoEstacionar,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Parada obrigatória",
    "Proibido estacionar",
    "Dê a preferência",
    "Proibido ultrapassar"
  ],
  correta: 1
},
{
  id: 5,
  imagem: sentidoObrigatorio,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Sentido obrigatório",
    "Proibido virar à esquerda",
    "Velocidade máxima permitida",
    "Dê a preferência"
  ],
  correta: 0
},
{
  id: 6,
  imagem: proibidoUltrapassar,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Proibido estacionar",
    "Proibido ultrapassar",
    "Parada obrigatória",
    "Sentido obrigatório"
  ],
  correta: 1
},
{
  id: 7,
  imagem: proibidoVirarEsquerda,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Proibido virar à esquerda",
    "Proibido virar à direita",
    "Sentido obrigatório",
    "Proibido estacionar"
  ],
  correta: 0
},
{
  id: 8,
  imagem: proibidoVirarDireita,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Sentido obrigatório",
    "Proibido ultrapassar",
    "Proibido virar à direita",
    "Dê a preferência"
  ],
  correta: 2
},
{
  id: 9,
  imagem: proibidoEstacionarParar,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Proibido estacionar",
    "Proibido parar e estacionar",
    "Parada obrigatória",
    "Área de estacionamento"
  ],
  correta: 1
},
{
  id: 10,
  imagem: sentidoObrigatorioDireita,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Proibido virar à direita",
    "Sentido obrigatório à direita",
    "Proibido ultrapassar",
    "Dê a preferência"
  ],
  correta: 1
},
{
  id: 11,
  imagem: sentidoObrigatorioEsquerda,
  pergunta: "Qual é o significado desta placa?",
  alternativas: [
    "Proibido virar à esquerda",
    "Sentido obrigatório à esquerda",
    "Proibido estacionar",
    "Parada obrigatória"
  ],
  correta: 1
},
];

export default placas;