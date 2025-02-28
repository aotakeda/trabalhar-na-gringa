import React from "react";
import {
  Users,
  Code,
  MessageSquare,
  CheckCircle,
  Briefcase,
  Database,
  Server,
  Network,
  Cloud,
  Lightbulb,
  Clock,
  ArrowLeft,
  Home,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PageHeader,
  GradientHeading,
  InfoAlert,
  Timeline,
  SectionCard,
  ContentGrid,
  TimelineStep,
  QuestionCard,
} from "@/components/guia";
import Link from "next/link";
import { TipsList } from "@/components/guia/TipsList";

export default function ProcessoSeletivoPage() {
  const timelineSteps: TimelineStep[] = [
    {
      icon: Briefcase,
      title: "Entrevista com recrutamento",
      description:
        "Entrevista inicial com RH para entender suas experiências e objetivos",
      link: "#recrutamento",
    },
    {
      icon: Code,
      title: "Entrevistas técnicas",
      description:
        "Avaliação das suas habilidades técnicas através de testes e desafios",
      link: "#testes-técnicos",
    },
    {
      icon: MessageSquare,
      title: "Entrevista cultural",
      description:
        "Conversa com hiring manager e/ou fundadores para avaliar fit cultural",
      link: "#entrevista-cultural",
    },
    {
      icon: Users,
      title: "Reference check",
      description:
        "Verificação de referências com ex-colegas e líderes (não tão comum)",
      link: "#4-referencias",
    },
    {
      icon: CheckCircle,
      title: "Oferta",
      description: "Proposta formal de contratação",
      link: "#5-oferta",
    },
  ];

  const commonQuestions = [
    "Por que você está buscando uma vaga nessa empresa?",
    "Expectativa salarial (em dólares)",
    "Por quê você quer sair da empresa atual?",
    "Me conte sobre o projeto mais complexo que você participou:",
    "Qual foi seu papel nele?",
    "Quais foram os resultados?",
    "Quais foram os desafios?",
    "Quais foram as tecnologias envolvidas?",
  ];

  const tips = [
    "Não minta, quem tem bastante experiência em entrevistas consegue saber quando a pessoa está mentindo.",
    "Tenha alguns projetos em mente antes dessa conversa, recomendo utilizar o método STAR.",
    "Faça o cálculo da sua pretensão salarial, calcule quanto ganha atualmente mais os benefícios (convênio, VA/VR, ações, etc.) coloque uma margem a mais que faça valer a pena a troca de emprego.",
    "Pense nos motivos que faça você querer mudar de emprego, alguns exemplos mais comuns: trabalho 100% remoto, carreira internacional, maiores desafios técnicos, interesse pelo mercado, trabalhar com tecnologia X.",
  ];

  const technicalChallenges = [
    "Teste técnico com tempo limitado",
    "Take home project (exercício para fazer async)",
    "Live coding (desafio técnico de programação)",
    "System design (desafio de arquitetura)",
    "Conversa técnica (um pouco mais rara que as outras)",
    "Perguntas sobre projetos anteriores",
    "Perguntas sobre linguagens e frameworks",
    "Perguntas sobre design patterns",
    "Perguntas sobre arquitetura de software",
  ];

  const takeHomeProjectItems = [
    {
      title: "README completo",
      description:
        "Inclua arquitetura do projeto, tradeoffs, decisões de design, racional da escolha das tecnologias, como executar o projeto, como rodar os testes e link para um vídeo de demo.",
    },
    {
      title: "Testes unitários",
      description: "Demonstre que você se preocupa com a qualidade do código.",
    },
    {
      title: "Dockerização",
      description: "Facilite a execução do projeto para quem vai avaliar.",
    },
    {
      title: "Separação de concerns",
      description: "Mantenha o código organizado e bem estruturado.",
    },
    {
      title: "Código simples e legível",
      description:
        "Priorize código de fácil entendimento, com nomes auto-explicativos.",
    },
  ];

  const technicalTestTips = [
    "Pratique regularmente em plataformas como LeetCode, HackerRank ou CodeSignal",
    "Estude os padrões comuns de problemas (Two Pointers, Sliding Window, etc.)",
    "Ao resolver problemas, verbalize seu pensamento e explique sua abordagem",
    "Teste sua solução com casos de borda e exemplos variados",
  ];

  const takeHomeProjectConcepts = [
    {
      icon: Lightbulb,
      title: "Documentação clara",
      description:
        "Inclua um README detalhado com instruções de instalação, execução e testes do projeto.",
    },
    {
      icon: Code,
      title: "Qualidade de código",
      description:
        "Mantenha o código limpo, bem organizado e seguindo boas práticas de desenvolvimento.",
    },
    {
      icon: Server,
      title: "Arquitetura sólida",
      description:
        "Implemente uma arquitetura bem estruturada com separação clara de responsabilidades.",
    },
    {
      icon: CheckCircle,
      title: "Testes automatizados",
      description:
        "Inclua testes unitários e de integração para demonstrar a qualidade do seu código.",
    },
  ];

  const takeHomeProjectTips = [
    "Busque fazer a sua solução a mais simples possível, evite over engineering",
    "Limite o uso de bibliotecas externas ao essencial (a menos que seja especificado nos requisitos)",
    "Deixe o código extensível e reutilizável para facilitar futuras modificações",
    "Prepare-se para explicar as decisões de design e tradeoffs que você fez na sua solução",
  ];

  const liveCodingConcepts = [
    {
      icon: MessageSquare,
      title: "Comunicação clara",
      description:
        "Explique seu raciocínio em voz alta enquanto resolve o problema, compartilhando sua linha de pensamento.",
    },
    {
      icon: Code,
      title: "Abordagem estruturada",
      description:
        "Divida o problema em partes menores e resolva cada uma delas de forma metódica e organizada.",
    },
    {
      icon: Database,
      title: "Estruturas de dados adequadas",
      description:
        "Escolha as estruturas de dados mais apropriadas para o problema, justificando sua escolha.",
    },
    {
      icon: Network,
      title: "Análise de complexidade",
      description:
        "Analise a complexidade de tempo e espaço da sua solução e proponha otimizações quando possível.",
    },
  ];

  const liveCodingTips = [
    "Tire todas as suas dúvidas sobre o problema antes de começar a implementar",
    "Comunique seu plano de solução antes de começar a codificar",
    "Teste seu código com exemplos simples e casos de borda",
    "Considere otimizações após ter uma solução funcional",
  ];

  const liveCodingExamples = [
    {
      title: "Estrutura de dados",
      quote:
        "For this challenge I believe using hashmaps is the best way forward because it has O(1) lookup time and it's pretty straightforward to implement.",
    },
    {
      title: "Lógica de implementação",
      quote:
        "I'll use this hashmap to store the numbers and their indices. Then, I'll iterate through the array, and for each element, I'll check if the complement (target - current element) exists in the hashmap. If it does, I'll return the indices of the two numbers. If it doesn't, I'll add the current element and its index to the hashmap and continue until the pair is found.",
    },
  ];

  const culturalQuestions = [
    "Por que você quer trabalhar nessa empresa?",
    "Qual foi o pior feedback que você já recebeu e como você reagiu a ele?",
    "Você prefere ambientes mais dinâmicos ou mais calmos?",
    "Como você lida com incertezas?",
    "Me conte sobre um projeto que você se orgulha e por quê?",
    "Como você geralmente aprende novas tecnologias?",
    "Quais são suas expectativas com o cargo?",
  ];

  const culturalTips = [
    "Seja objetivo nas respostas, caso a pessoa queira saber mais detalhes, ela vai te perguntar.",
    "Antes da entrevista, relembre os projetos mais relevantes da sua carreira e como foi sua participação neles (igual na entrevista com recrutamento, mas com um nível mais aprofundado de tecnologia e impacto).",
    "De novo, não minta sobre suas experiências, o mundo de tecnologia é pequeno e não vale a pena se queimar.",
    "Faça perguntas sobre a empresa, sobre o cargo, sobre a equipe, sobre o ambiente de trabalho, sobre a empresa em si, essa entrevista é uma oportunidade pra você conhecer mais sobre a empresa, a vaga e o time que você trabalharia.",
  ];

  const offerQuestions = [
    "O salário vai ser pago em dólares?",
    "Há possibilidade de promoções/aumentos?",
    "O formato de contratação é CLT ou PJ (mais comum)?",
    "Qual o fuso horário que você terá que trabalhar?",
    "Usarei equipamento próprio ou a empresa fornecerá?",
    "Há política de PTO (paid time off)? Feriados nacionais estão incluídos?",
    "Há benefícios como VA/VR, plano de saúde, etc.?",
    "Prazo para início do trabalho?",
  ];

  const systemDesignConcepts = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Geralmente não é obrigatório saber tudo sobre AWS por exemplo, mas é bom saber os conceitos que são base de todas as soluções cloud.",
    },
    {
      icon: Server,
      title: "Escalabilidade",
      description:
        "Entenda como escalar sistemas horizontalmente e verticalmente, e quando usar cada abordagem.",
    },
    {
      icon: Network,
      title: "Performance",
      description:
        "Conheça técnicas para melhorar a performance de sistemas, como caching, otimização de consultas, etc.",
    },
    {
      icon: Database,
      title: "Banco de dados",
      description:
        "Entenda diferentes tipos de bancos de dados (SQL, NoSQL) e quando usar cada um.",
    },
  ];

  const systemDesignAdvanced = [
    {
      title: "Modelos de Consistência",
      items: ["Consistência forte, eventual e causal", "Teorema CAP"],
    },
    {
      title: "Padrões Arquiteturais",
      items: [
        "Arquitetura baseada em eventos",
        "CQRS (Command Query Responsibility Segregation)",
        "Arquitetura serverless",
        "Padrões de API gateway",
      ],
    },
    {
      title: "Sistemas Distribuídos",
      items: [
        "Service discovery",
        "Cache distribuído (Redis, Memcached)",
        "Mensageria (Kafka, RabbitMQ)",
      ],
    },
    {
      title: "Infraestrutura",
      items: [
        "Conteinerização (Docker) e orquestração (Kubernetes)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Observabilidade (logs, monitoramento, tracing)",
      ],
    },
    {
      title: "Além da parte técnica",
      items: [
        "Relação custo-benefício, seja em termos de tempo de desenvolvimento, custos, escalabilidade, performance, etc.",
        "Considerações sobre time-to-market (quanto antes a solução estiver no ar com clientes testando, melhor, a iteração rápida é essencial)",
        "Designs flexíveis que se adaptam às necessidades do negócio (é muito comum em startups criar MVPs com uma solução em mente mas ter que mudar completamente com o feedback do mercado)",
        "Soluções simples que minimizam o trabalho de manutenção",
      ],
    },
  ];

  const typesOfTechnicalTests = [
    {
      icon: Cloud,
      title: "Teste com tempo limitado",
      description:
        "Geralmente as empresas utilizam alguma plataforma como o HackerRank. Antes de fazer o teste, teste a plataforma, veja as features disponíveis e depois de entender como ela funciona, já pode começar a fazer o teste.",
    },
    {
      icon: Home,
      title: "Take home project",
      description:
        "Leia bem os requisitos do desafio antes de começar a resolver, caso tenha alguma dúvida, mande mensagem pro recrutador pra entender melhor o que é esperado.",
    },
  ];

  const systemDesignInterviewTips = [
    {
      title: "1. Clarificar requisitos",
      description:
        "Recomendo fazer perguntas pra entender os requisitos funcionais e não-funcionais.",
    },
    {
      title: "2. Começar pelo alto nível",
      description:
        "Inicie com um diagrama de arquitetura simplificado, e vai evoluindo conforme a solução vai sendo discutida.",
    },
    {
      title: "3. Identificar gargalos",
      description:
        "Fale de forma proativa potenciais gargalos na sua solução e como você resolveria eles (se o entrevistador quiser mais detalhes, ele vai te perguntar, não vá muito a fundo para não perder tempo de entrevista).",
    },
    {
      title: "4. Explicar tradeoffs",
      description: "Explique claramente os prós e contras das suas escolhas.",
    },
  ];

  const technicalTestConcepts = [
    {
      icon: Code,
      title: "Algoritmos e Estruturas de Dados",
      description:
        "Entenda os principais algoritmos de ordenação, busca e manipulação de dados, além das estruturas como arrays, listas, árvores e grafos.",
    },
    {
      icon: Server,
      title: "Complexidade de Tempo e Espaço",
      description:
        "Saiba analisar a eficiência de algoritmos em termos de tempo de execução e uso de memória (notação Big O).",
    },
    {
      icon: Database,
      title: "Manipulação de Dados",
      description:
        "Conheça técnicas para processar, filtrar e transformar dados de forma eficiente.",
    },
    {
      icon: Network,
      title: "Resolução de Problemas",
      description:
        "Desenvolva a habilidade de decompor problemas complexos em partes menores e mais gerenciáveis.",
    },
  ];

  const technicalTestAdvanced = [
    {
      title: "Algoritmos Fundamentais",
      items: [
        "Busca binária e suas variações",
        "Algoritmos de ordenação (QuickSort, MergeSort)",
        "Programação dinâmica",
        "Algoritmos gulosos (Greedy)",
      ],
    },
    {
      title: "Estruturas de Dados",
      items: [
        "Hashmaps e Sets",
        "Árvores (Binária, BST, AVL)",
        "Heaps e Filas de Prioridade",
        "Grafos e algoritmos de travessia",
      ],
    },
    {
      title: "Técnicas de Otimização",
      items: [
        "Two pointers e sliding window",
        "Divide and conquer",
        "Backtracking",
        "Memoização e tabulation",
      ],
    },
    {
      title: "Para Frontend",
      items: [
        "Manipulação do DOM",
        "Gerenciamento de estado",
        "Renderização e performance",
        "Acessibilidade e responsividade",
        "SEO e HTML semântico",
      ],
    },
    {
      title: "Além do código",
      items: [
        "Comunicação clara do seu raciocínio",
        "Validação de inputs e tratamento de edge cases",
        "Testes e verificação da solução",
        "Refatoração e melhoria de código",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Processo Seletivo"
        description="Entenda as etapas do processo seletivo para vagas remotas em empresas estrangeiras."
      />

      <div className="prose prose-slate max-w-none mt-8">
        <p className="leading-relaxed text-sm md:text-base">
          Quando você é chamado para uma entrevista, você pode esperar que o
          processo tenha pelo menos três fases. É importante se preparar
          adequadamente para cada uma delas.
        </p>
      </div>

      <section className="my-12">
        <Timeline steps={timelineSteps} />
      </section>

      <InfoAlert type="info" className="mb-12">
        <p>
          Espere que as entrevistas sejam <strong>totalmente</strong> em inglês
          (mesmo com brasileiros te entrevistando), prepare-se para isso.
        </p>
      </InfoAlert>

      <section className="mb-16" id="recrutamento">
        <SectionCard
          title="Entrevista com recrutamento"
          description="Essa etapa (eliminatória) é basicamente uma entrevista de RH para entender suas experiências, objetivos de carreira e porquê você está buscando uma vaga nessa empresa."
          badge="Etapa 1"
        >
          <div>
            <GradientHeading title="Perguntas comuns nessa etapa" />
            <ContentGrid columns={2}>
              {commonQuestions.map((question, index) => (
                <QuestionCard key={index} question={question} />
              ))}
            </ContentGrid>
          </div>

          <div>
            <GradientHeading title="Dicas" />

            <div className="space-y-4">
              <TipsList tips={tips} />
            </div>
          </div>
        </SectionCard>
      </section>

      <section className="mb-16" id="testes-técnicos">
        <SectionCard
          title="Entrevistas e testes técnicos"
          description="Passando da entrevista com recrutamento, a próxima fase geralmente são as entrevistas técnicas (mas é possível que seja com o seu possível líder)."
          badge="Etapa 2"
        >
          <div>
            <GradientHeading title="Possíveis desafios nessa etapa" />
            <ContentGrid columns={2}>
              {technicalChallenges.map((challenge, index) => (
                <QuestionCard key={index} question={challenge} />
              ))}
            </ContentGrid>
          </div>

          <div id="tipos-testes-tecnicos" className="mt-12">
            <GradientHeading title="Tipos de testes técnicos" />
            <p className="text-sm md:text-base mb-6">
              Existem diferentes formatos de testes técnicos que as empresas
              podem utilizar para avaliar suas habilidades. É importante se
              preparar para cada um deles.
            </p>

            <InfoAlert>
              Se nunca fez um teste técnico cronometrado, recomendo treinar
              alguns desafios <strong>easy</strong> e <strong>medium</strong> no
              Leetcode antes de fazer o teste, com tempo cronometrado pra você
              se acostumar com a pressão do tempo.
            </InfoAlert>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              {typesOfTechnicalTests.map((test, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                        {React.createElement(test.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg">{test.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {test.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Conceitos fundamentais" />

            <div className="grid gap-6 md:grid-cols-2 my-8">
              {technicalTestConcepts.map((concept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                        {React.createElement(concept.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg">{concept.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {concept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Conceitos avançados" />

            <div className="my-6 space-y-8">
              {technicalTestAdvanced.map((concept, index) => (
                <Card key={index}>
                  <CardHeader className="p-6 pb-3">
                    <CardTitle className="font-semibold text-lg">
                      {concept.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <ul className="space-y-4 text-muted-foreground">
                      {concept.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm md:text-base">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Dicas para se preparar" />

            <div className="space-y-6 my-6">
              <TipsList tips={technicalTestTips} />
            </div>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Dicas de estudo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground">
                <p>
                  Para vagas em startups mais consolidadas recomendo estudar
                  algoritmos e estrutura de dados. Recomendo{" "}
                  <Link
                    href="https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    este livro de algoritmos
                  </Link>
                  , o canal do{" "}
                  <Link
                    href="https://www.youtube.com/@NeetCode"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Neetcode
                  </Link>{" "}
                  e a própria plataforma do{" "}
                  <Link
                    href="https://leetcode.com"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leetcode
                  </Link>
                  .
                </p>
                <p>
                  Eu também tenho um site com conteúdos visuais pros algoritmos
                  mais comuns em entrevistas, caso queira dar uma olhada, é o{" "}
                  <Link
                    href="https://standoutdev.com/visualize/algorithms"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Standout Dev
                  </Link>
                  .
                </p>
                <p>
                  É possível que vagas de front cobrem também, mas recomendo
                  focar em exercícios práticos envolvendo HTML, CSS, JS/TS puro
                  e também treinar frameworks como React e TailwindCSS.
                  Recomendo usar o{" "}
                  <Link
                    href="https://www.greatfrontend.com/"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Great Frontend
                  </Link>{" "}
                  pra treinar.
                </p>
              </CardContent>
            </Card>
          </div>

          <div id="take-home-projects" className="mt-12">
            <GradientHeading title="Dicas para Take Home Projects" />
            <p className="text-sm md:text-base mb-6">
              Coloque-se no lugar da pessoa que vai revisar o seu teste, o que
              você gostaria que tivesse na solução de um candidato?
            </p>

            <InfoAlert>
              Muitas empresas, se você passar dessa fase, podem fazer o live
              coding com base no seu teste. Prepare-se para explicar
              detalhadamente as decisões que tomou no desenvolvimento.
            </InfoAlert>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              {takeHomeProjectConcepts.map((concept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                        {React.createElement(concept.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg">{concept.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {concept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="O que incluir no seu projeto" />

            <div className="my-6 space-y-3">
              {takeHomeProjectItems.map((item, index) => (
                <Card key={index} className="bg-secondary border-none">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1.5 text-primary">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Dicas importantes" />

            <div className="space-y-6 my-6">
              <TipsList tips={takeHomeProjectTips} />
            </div>
          </div>

          <div id="live-coding" className="mt-12">
            <GradientHeading title="Dicas para Live Coding" />
            <p className="text-sm md:text-base mb-6">
              O live coding é uma das etapas mais desafiadoras do processo
              seletivo. É importante se preparar adequadamente e manter a calma
              durante a entrevista.
            </p>

            <InfoAlert>
              Mesmo que você já tenha se deparado com um problema parecido ou
              igual nos seus estudos, é essencial tirar todas as dúvidas sobre
              possíveis edge cases e tradeoffs antes de começar a implementar.
            </InfoAlert>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              {liveCodingConcepts.map((concept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                        {React.createElement(concept.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg">{concept.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {concept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Passos importantes" />

            <div className="space-y-6 my-6">
              <TipsList tips={liveCodingTips} />
            </div>

            <GradientHeading title="Exemplos de comunicação" />

            <div className="my-6 space-y-8">
              {liveCodingExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader className="p-6 pb-3">
                    <CardTitle className="font-semibold text-lg">
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="mt-2 p-3 bg-secondary text-sm">
                      <p className="italic">"{example.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Pontos a considerar" />

            <div className="my-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="p-6 pb-3">
                  <CardTitle className="font-semibold text-lg">
                    Pontos gerais
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="text-sm md:text-base">
                      • Complexidade de tempo
                    </li>
                    <li className="text-sm md:text-base">
                      • Complexidade de espaço
                    </li>
                    <li className="text-sm md:text-base">
                      • Boas práticas de linguagem
                    </li>
                    <li className="text-sm md:text-base">
                      • Legibilidade do código
                    </li>
                    <li className="text-sm md:text-base">• Extensibilidade</li>
                    <li className="text-sm md:text-base">• Reusabilidade</li>
                    <li className="text-sm md:text-base">• Testabilidade</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-6 pb-3">
                  <CardTitle className="font-semibold text-lg">
                    Para desafios de frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="text-sm md:text-base">• Acessibilidade</li>
                    <li className="text-sm md:text-base">• Performance</li>
                    <li className="text-sm md:text-base">• Responsividade</li>
                    <li className="text-sm md:text-base">• SEO</li>
                    <li className="text-sm md:text-base">• Usabilidade</li>
                    <li className="text-sm md:text-base">• Componentização</li>
                    <li className="text-sm md:text-base">• Reusabilidade</li>
                    <li className="text-sm md:text-base">• Extensibilidade</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div id="system-design" className="mt-12">
            <GradientHeading title="System Design" />
            <p className="text-sm md:text-base mb-6">
              Para essa fase, recomendo estudar boas práticas de arquitetura de
              software e design patterns. Além disso, é importante se aprofundar
              em diversos conceitos fundamentais.
            </p>

            <InfoAlert>
              Não há respostas certas, o importante é demonstrar conhecimento e
              aprendizados de um bom desenvolvedor sênior.
            </InfoAlert>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              {systemDesignConcepts.map((concept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                        {React.createElement(concept.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg">{concept.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {concept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Conceitos avançados" />

            <div className="my-6 space-y-8">
              {systemDesignAdvanced.map((concept, index) => (
                <Card key={index}>
                  <CardHeader className="p-6 pb-3">
                    <CardTitle className="font-semibold text-lg">
                      {concept.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <ul className="space-y-4 text-muted-foreground">
                      {concept.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm md:text-base">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Na hora da entrevista" />

            <div className="space-y-6 my-6">
              <TipsList
                tips={systemDesignInterviewTips.map((tip) => tip.description)}
              />
            </div>

            <InfoAlert>
              O mais importante dessa fase é o entrevistador entender como você
              pensa sobre o problema e como você aborda o problema, o que você
              aprendeu com suas experiências passadas e como você utiliza esses
              conhecimentos para resolver problemas de arquitetura.
            </InfoAlert>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Dicas de estudo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base space-y-4">
                <p className="text-muted-foreground">
                  Recomendo estudar o{" "}
                  <Link
                    href="https://dataintensive.net/buy.html"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Designing Data-Intensive Applications
                  </Link>{" "}
                  e o{" "}
                  <Link
                    href="https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    System Design Interview
                  </Link>{" "}
                  pra essa fase.
                </p>
                <p className="text-muted-foreground">
                  Esse{" "}
                  <Link
                    href="https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/"
                    className="text-primary hover:text-primary/80 font-medium hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    site
                  </Link>{" "}
                  tem uma lista com os 10 casos mais comuns de system design e
                  os racionais de cada uma dessas soluções.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionCard>
      </section>

      <section className="mb-16" id="entrevista-cultural">
        <SectionCard
          title="Entrevista cultural"
          description="Essa etapa é basicamente uma conversa com o seu possível líder e/ou fundadores para entender como você se encaixa na cultura da empresa. É possível que tenha algum componente técnico nessa entrevista, mas geralmente é mais uma conversa sobre como você se encaixaria na cultura da empresa e do time."
          badge="Etapa 3"
        >
          <div>
            <GradientHeading title="Perguntas comuns nessa etapa" />
            <ContentGrid columns={2}>
              {culturalQuestions.map((question, index) => (
                <QuestionCard key={index} question={question} />
              ))}
            </ContentGrid>
          </div>

          <div>
            <GradientHeading title="Dicas" />
            <div className="space-y-4">
              <TipsList tips={culturalTips} />
            </div>
          </div>
        </SectionCard>
      </section>

      <section className="mb-16" id="4-referencias">
        <SectionCard
          title="Reference check"
          description="Essa etapa é menos comum mas se fizer parte do processo, é uma etapa para a empresa validar suas experiências e também para entender como é trabalhar com você."
          badge="Etapa 4"
        >
          <div className="space-y-4 text-sm md:text-base">
            <p>
              Geralmente te pedem para fornecer alguns contatos de ex-colegas e
              líderes diretos.
            </p>
            <p>
              Antes de fornecer esses contatos, recomendo conversar com eles
              para saber se tudo bem mandar o contato deles.
            </p>
          </div>
        </SectionCard>
      </section>

      <section className="mb-16" id="5-oferta">
        <SectionCard
          title="Oferta"
          description="Se tudo deu certo, a empresa vai marcar uma reunião com você para fazer a oferta ou já te enviar uma oferta por email."
          badge="Etapa 5"
        >
          <div>
            <GradientHeading title="Oferta" />
            <p className="text-sm md:text-base mb-6">
              Se tudo deu certo, a empresa vai marcar uma reunião com você para
              fazer a oferta ou já te enviar uma oferta por email.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 my-6">
            <CardContent className="p-6 space-y-6 text-sm md:text-base">
              <p>
                <strong>1.</strong> Leia a oferta com calma, não se sinta
                pressionado a aceitar logo de cara, principalmente se tem outros
                processos em andamento que queira ir até o final.
              </p>
              <p>
                <strong>2.</strong> Caso tenha outros processos em andamento,
                recomendo alinhar com o recrutador sobre o status de cada
                processo e o prazo de resposta que você tem para dar aceitar ou
                não a oferta.
              </p>
            </CardContent>
          </Card>

          <div>
            <GradientHeading title="Perguntas importantes nessa etapa" />
            <ContentGrid columns={2}>
              {offerQuestions.map((question, index) => (
                <QuestionCard key={index} question={question} />
              ))}
            </ContentGrid>
          </div>
        </SectionCard>
      </section>
    </>
  );
}
