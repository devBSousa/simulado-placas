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
    categoria: "Legislação",
    pergunta: "Ao se aproximar de uma faixa de pedestres com uma pessoa atravessando, o motorista deve:",
    alternativas: [
      "Acelerar para passar primeiro",
      "Parar e dar preferência ao pedestre",
      "Buzinar para o pedestre sair da frente",
      "Passar pelo lado do pedestre"
    ],
    correta: 1
  },
  {
    id: 2,
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
    id: 3,
    categoria: "Mecânica",
    pergunta: "O que pode acontecer quando os pneus estão muito desgastados?",
    alternativas: [
      "O veículo fica mais seguro",
      "Aumenta o risco de perder a aderência",
      "O motor fica mais potente",
      "O veículo passa a gastar menos combustível"
    ],
    correta: 1
  },
  {
    id: 4,
    imagem: deAPreferencia,
    pergunta: "Qual é o significado desta placa?",
    alternativas: [
      "Proibido ultrapassar",
      "Dê a preferência",
      "Parada obrigatória",
      "Velocidade máxima permitida"
    ],
    correta: 1
  },
  {
    id: 5,
    categoria: "Primeiros Socorros",
    pergunta: "Ao presenciar um acidente de trânsito, qual deve ser uma das primeiras atitudes?",
    alternativas: [
      "Retirar todas as pessoas dos veículos imediatamente",
      "Manter a calma e acionar o socorro",
      "Oferecer comida para a vítima",
      "Dar água para a vítima"
    ],
    correta: 1
  },
  {
    id: 6,
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
    id: 7,
    categoria: "Mecânica",
    pergunta: "Qual é a função principal do óleo do motor?",
    alternativas: [
      "Lubrificar e ajudar a proteger as peças do motor",
      "Encher os pneus",
      "Limpar o para-brisa",
      "Aumentar o volume do rádio"
    ],
    correta: 0
  },
  {
    id: 8,
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
    id: 9,
    categoria: "Legislação",
    pergunta: "O que o motorista deve fazer quando o semáforo está vermelho?",
    alternativas: [
      "Parar o veículo",
      "Aumentar a velocidade",
      "Buzinar e continuar",
      "Parar somente se houver pedestre"
    ],
    correta: 0
  },
  {
    id: 10,
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
    id: 11,
    categoria: "Primeiros Socorros",
    pergunta: "Em um acidente, uma pessoa está ferida. O que devemos evitar?",
    alternativas: [
      "Acionar o socorro",
      "Proteger o local do acidente",
      "Movimentar a vítima sem necessidade",
      "Manter a calma"
    ],
    correta: 2
  },
  {
    id: 12,
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
    id: 13,
    categoria: "Legislação",
    pergunta: "O cinto de segurança deve ser usado por quem está no veículo?",
    alternativas: [
      "Somente pelo motorista",
      "Somente pelos passageiros da frente",
      "Por todos os ocupantes do veículo",
      "Somente em rodovias"
    ],
    correta: 2
  },
  {
    id: 14,
    imagem: paradaObrigatoria,
    pergunta: "Qual é o significado desta placa?",
    alternativas: [
      "Parada obrigatória",
      "Dê a preferência",
      "Proibido estacionar",
      "Sentido obrigatório"
    ],
    correta: 0
  },
  {
    id: 15,
    categoria: "Mecânica",
    pergunta: "Qual é a função do sistema de freios?",
    alternativas: [
      "Aumentar a velocidade do veículo",
      "Diminuir a temperatura do motor",
      "Reduzir a velocidade e parar o veículo",
      "Aumentar a pressão dos pneus"
    ],
    correta: 2
  },
  {
    id: 16,
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
    id: 17,
    categoria: "Legislação",
    pergunta: "É permitido dirigir um veículo depois de consumir bebida alcoólica?",
    alternativas: [
      "Sim, se beber pouco",
      "Sim, somente durante o dia",
      "Não",
      "Sim, se estiver dirigindo devagar"
    ],
    correta: 2
  },
  {
    id: 18,
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
    id: 19,
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
  {
    id: 20,
    imagem: proibidoUltrapassar,
    pergunta: "Qual é o significado desta placa?",
    alternativas: [
      "Proibido estacionar",
      "Proibido ultrapassar",
      "Parada obrigatória",
      "Sentido obrigatório"
    ],
    correta: 1
  }
];


export default placas;