export type Course = { id: string; title: string; level: string; description: string; icon: string; color: string; lessons: number; progress: number; topic: string };
export const courses: Course[] = [
  { id: "fracoes", title: "Frações sem mistério", level: "Fundamental I · 5º ano", description: "Partes de um inteiro, equivalência e comparação com exemplos do dia a dia.", icon: "🍕", color: "peach", lessons: 8, progress: 38, topic: "Frações" },
  { id: "operacoes", title: "Aventura das operações", level: "Fundamental I · 4º ano", description: "Estratégias para somar, subtrair, multiplicar e dividir com confiança.", icon: "🧩", color: "blue", lessons: 12, progress: 65, topic: "Operações" },
  { id: "geometria", title: "Geometria ao nosso redor", level: "Fundamental I · 5º ano", description: "Formas, perímetro e área em objetos e lugares que conhecemos.", icon: "🔷", color: "green", lessons: 7, progress: 12, topic: "Geometria" },
  { id: "porcentagem", title: "Porcentagem na prática", level: "Fundamental II · 6º ano", description: "Descontos, aumentos e porcentagens explicados passo a passo.", icon: "🛍️", color: "purple", lessons: 9, progress: 0, topic: "Porcentagem" },
  { id: "funcoes", title: "Primeiros passos em funções", level: "Ensino Médio", description: "Descubra relações entre variáveis e leia gráficos com segurança.", icon: "📈", color: "yellow", lessons: 10, progress: 0, topic: "Funções" },
  { id: "calculo", title: "Cálculo: ideias iniciais", level: "Ensino Superior", description: "Uma introdução visual a limites, taxas de variação e derivadas.", icon: "🧠", color: "pink", lessons: 6, progress: 0, topic: "Cálculo" },
];

export const lesson = {
  id: "partes-iguais",
  title: "Frações representam partes iguais",
  courseId: "fracoes",
  duration: "8 min",
  objective: "Identificar numerador e denominador e explicar o que cada um representa.",
  blocks: [
    { heading: "Uma ideia para visualizar", body: "Imagine uma pizza dividida em 4 pedaços do mesmo tamanho. Se você come 1 pedaço, comeu 1 de 4 partes: isso é um quarto, escrito 1/4." },
    { heading: "O que os números contam?", body: "O número de baixo, chamado denominador, mostra em quantas partes iguais o inteiro foi dividido. O número de cima, o numerador, mostra quantas dessas partes estamos considerando." },
    { heading: "Exemplo resolvido", body: "Em 3/5, o inteiro foi dividido em 5 partes iguais e estamos considerando 3 delas. Se as partes não forem iguais, não podemos chamar cada uma de um quinto." },
  ],
  exercise: { question: "Uma barra foi dividida em 6 partes iguais. Se 2 partes estão coloridas, qual fração representa a parte colorida?", options: ["2/6", "6/2", "2/4", "4/6"], answer: 0, explanation: "O denominador é 6 porque há 6 partes iguais no total. O numerador é 2 porque duas partes estão coloridas." },
};

export const navItems = [
  { href: "/", label: "Início", icon: "⌂" },
  { href: "/academia", label: "Academia", icon: "▦" },
  { href: "/meus-cursos", label: "Meus cursos", icon: "▣" },
  { href: "/jogos", label: "Jogos", icon: "♧" },
  { href: "/desafios", label: "Desafios", icon: "✦" },
  { href: "/professor-virtual", label: "Tutor virtual", icon: "◉" },
  { href: "/desempenho", label: "Desempenho", icon: "↗" },
  { href: "/conquistas", label: "Conquistas", icon: "◇" },
  { href: "/perfil", label: "Meu perfil", icon: "○" },
  { href: "/configuracoes", label: "Configurações", icon: "⚙" },
];
