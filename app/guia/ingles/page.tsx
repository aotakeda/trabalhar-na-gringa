import React from "react";
import {
  Baby,
  CalendarClock,
  Waypoints,
  BookCheck,
  TrendingUp,
  Check,
  CheckCircle,
  Users,
} from "lucide-react";
import {
  PageHeader,
  InfoAlert,
  TimelineStep,
  Timeline,
  SectionCard,
  NavigationCard,
  GradientHeading,
  ContentGrid,
  FeatureCard,
} from "@/components/guia";
import { TipsList } from "@/components/guia/TipsList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeVideoView } from '@/components/guia/YouTubeVideoView';

export default function InglesPage() {

  const passoApassoMineracaoDeSentencas = [
    {
      title: "Estudo de textos com áudio",
      description:
        "Escolha materiais que contenham texto e áudio simultaneamente. Estude o conteúdo até entender cerca de 80–90% dele.",
    },
    {
      title: "Identificação de frases relevantes",
      description: "Durante o estudo, identifique palavras ou estruturas que você ainda não domina.",
    },
    {
      title: "Criação de flashcards",
      description: "Adicione essas frases ao Anki, criando flashcards com a frase em inglês na frente e sua tradução ou explicação no verso.",
    },
    {
      title: "Revisão com repetição espaçada",
      description: "Utilize o Anki para revisar os flashcards regularmente, aproveitando o sistema de repetição espaçada para reforçar a memória de longo prazo.",
    },
  ];

  const passoApassoEstudosDeTexto = [
    {
      title: "Escolha um material com áudio e texto",
      description:
        "Pode ser uma entrevista, um podcast, um vídeo com legendas ou até séries com transcrição. O importante é que tenha o áudio e o texto correspondente.",
    },
    {
      title: "Estude o texto com calma",
      description: "Leia tudo com atenção. Se encontrar palavras ou expressões que não conhece, procure o significado e anote. Entenda bem o que está sendo dito, frase por frase.",
    },
    {
      title: "Ouça e leia ao mesmo tempo",
      description: "Escute o áudio acompanhando com o texto. Isso ajuda a ligar a pronúncia às palavras escritas. Repita esse processo algumas vezes, até se sentir mais confortável com o conteúdo.",
    },
    {
      title: "Ouça o áudio sem ler",
      description: "Depois de estudar bem, escute o mesmo áudio sem olhar o texto. Isso treina sua audição e memória. Você vai perceber que entende muito mais do que antes.",
    },
    {
      title: "Repita ao longo dos dias",
      description:
        "Reescute esse mesmo material nos dias seguintes. A repetição ajuda a fixar o que você aprendeu e a deixar o inglês mais automático.",
    },
  ];

  const imersaoEmIngles = [
    "Assista a vídeos, filmes e séries em inglês (mesmo que não entenda tudo), pode ser com Legenda (também em inglês).",
    "Veja shorts, reels e outros conteúdos nas redes sociais — em inglês.",
    "Mude o idioma dos seus aparelhos eletrônicos.",
    "Leia textos em inglês.",
    "Ouça músicas, podcasts e áudios em inglês.",
    "Use o inglês o máximo possível, no seu dia a dia.",
  ];

  const englishLevelsSections = [
    {
      id: "a1-b1",
      icon: TrendingUp,
      title: "De A1 até B1",
      description:
        "Você está começando agora, ainda sente insegurança, e precisa expandir seu vocabulário e melhorar a compreensão auditiva. Aqui, o foco será ganhar confiança e construir uma base sólida.",
    },
    {
      id: "b2-c1",
      icon: TrendingUp,
      title: "De B2 até C2",
      description:
        "Você já tem um bom vocabulário — provavelmente conhece mais de mil palavras — e consegue manter conversas simples e entender bem o que ouve. Vamos trabalhar sua fluência, ampliar seu vocabulário com técnicas avançadas e te expor a diferentes contextos e interações reais para consolidar sua comunicação.",
    },
  ];

  const englishTests = [
    {
      name: "Teste Simples - 15 Minutos",
      url: "https://www.efset.org/quick-check/",
      description: "Ideal para uma prática rápida. Avalie seu nível de inglês em poucos minutos. Pode ser feito quantas vezes quiser, mas não oferece certificado.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Teste de leitura e compreensão auditiva - 50 Minutos",
      url: "https://www.efset.org/ef-set-50/",
      description: "Avalie suas habilidades de leitura e compreensão auditiva em menos de uma hora. Ao final, receba um certificado com seu nível de inglês.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Teste Completo de Inglês - 90 Minutos",
      url: "https://www.efset.org/4-skill/",
      description: "Exame completo que avalia leitura, audição, fala e escrita. Ideal para comprovar sua proficiência com um certificado detalhado.",
      color: "from-primary to-blue-600",
    },
  ];

  const tips = [
    "Faça o teste com calma, sem pressão. Escolha um momento tranquilo do seu dia, use fones de ouvido e, se possível, um computador para melhor aproveitamento da experiência.",
    "Evite interrupções: Avise pessoas próximas que você estará concentrado por um tempo e silencie notificações do celular.",
    "Não chute por chutar: Se não souber uma resposta, tente raciocinar com base no que você já sabe. Isso torna a avaliação mais precisa.",
    "Não volte para corrigir respostas: Muitos testes de nivelamento simulam situações reais de escuta e leitura. Tente responder com confiança e seguir em frente, como faria em uma conversa real.",
    "Evite comparar com os outros: O objetivo é medir seu progresso, não competir. O foco é no seu desenvolvimento.",
    "Faça prints ou anote o resultado: Ter um registro vai ajudar quando você refizer o teste no futuro e quiser comparar seu avanço.",
  ];

  const dicasOficinaisMairoVergara = [
    "Comece com áudios curtos (1 a 3 minutos) para não se cansar.",
    "Estude todos os dias, mesmo que por poucos minutos.",
    "Use fones de ouvido para focar melhor nos sons.",
    "Escolha temas que você goste ou ache interessantes.",
    "Crie um caderno ou arquivo digital para anotar vocabulário novo.",
    "Repita cada áudio por vários dias seguidos, até se sentir confortável.",
  ];

  const dicasMineracaoDeSentencas = [
    "Evite criar frases do zero; prefira extrair sentenças autênticas de materiais que você está estudando.",
    "Comece com um número gerenciável de frases por dia (por exemplo, 5 a 10) para evitar sobrecarga durante as revisões.",
    "Utilize ferramentas como Reverso Context ou Tatoeba para encontrar frases de exemplo com palavras ou estruturas específicas.",
    "Combine a Mineração de Sentenças com outras técnicas, como shadowing (imitação da fala) e tradução bidirecional, para reforçar ainda mais o aprendizado.",
  ];

  const timelineSteps: TimelineStep[] = [
    {
      icon: CalendarClock,
      title: "Quanto tempo leva ?",
      description:
        "Descubra em quanto tempo você pode chegar no tão sonhado B2 — sem mistério!",
      link: "#quanto-tempo-leva",
    },
    {
      icon: Baby,
      title: "Comece por aqui",
      description:
        "Como um bebê aprendendo a andar, vamos descobrir onde você está e dar juntos os primeiros passos rumo ao seu objetivo.",
      link: "#comece-aqui",
    },
    {
      icon: Waypoints,
      title: "Definindo os próximos passos",
      description:
        "A partir do resultado de seus testes vamos decidir quais serão suas próximas fases.",
      link: "#primeiros-passos",
    },
  ];

  const platforms = [
    {
      name: "Episoden",
      url: "https://www.episoden.com/",
      description: "O Episoden oferece um serviço de conversação com sessões de sete minutos, muito bom para falar com diversas pessoas sobre diferentes temas.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Free4talk",
      url: "https://www.free4talk.com/",
      description: "Uma comunidade para praticar qualquer idioma. onde estão pessoas do mundo todo com quem você poderá interagir das mais diversas maneiras.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Discord - English",
      url: "https://discord.gg/uNRYzH2j",
      description: "Pratique inglês de GRAÇA com falantes nativos e mais de 750 mil aprendizes ao redor do mundo! Participe de conversas ao vivo e aulas guiadas por especialistas.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Discord - English Hub",
      url: "https://discord.gg/FkgS9uj8",
      description:
        "Somos um servidor de aprendizagem e queremos que você tenha a melhor experiência de aprendizado possível. Nosso objetivo é garantir que você desenvolva seu inglês em um ambiente amigável, ativo e acolhedor.",
      color: "from-primary to-blue-600",
    },
  ];

  const platformsAI = [
    {
      name: "Character AI",
      url: "https://character.ai/",
      description: "Fácil, prático e permite conversar com vários personagens sem precisar usar prompts.",
      color: "from-primary to-blue-600",
    },
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      description: "Muito bom, embora dependa de prompts específicos e utilize apenas uma única voz.",
      color: "from-primary to-blue-600",
    },
  ];

  const videosRecomendados = [
    {
      url: "https://www.youtube.com/watch?v=O9FKqo_YJUI",
    },
    {
      url: "https://www.youtube.com/watch?v=KDpfN0TA4c4",
    },
    {
      url: "https://www.youtube.com/watch?v=yrObUSFpJtk",
    },
    {
      url: "https://www.youtube.com/watch?v=XXJw42yW3MQ",
    },
    {
      url: "https://www.youtube.com/watch?v=AfBOIEROBI8",
    },
    {
      url: "https://www.youtube.com/watch?v=70AxWAzmObA",
    },
    {
      url: "https://www.youtube.com/watch?v=-qWX4KnuQcs",
    },
    {
      url: "https://www.youtube.com/watch?v=gxeUqcXGLaE",
    },
    {
      url: "https://www.youtube.com/watch?v=AfZmcOuKtkE",
    },
    {
      url: "https://www.youtube.com/watch?v=RCpG2PziPus",
    },
    {
      url: "https://www.youtube.com/watch?v=bLssu8v7jus",
    },
    {
      url: "https://www.youtube.com/watch?v=TR0JZiapxXM",
    },
    {
      url: "https://www.youtube.com/watch?v=o7w34qAxnGk",
    },
    {
      url: "https://www.youtube.com/watch?v=-P-5RC17BHw",
    },
    {
      url: "https://www.youtube.com/watch?v=WWTEqVniLzw",
    },
    {
      url: "https://www.youtube.com/watch?v=bo47JoSxl1s",
    },
    {
      url: "https://www.youtube.com/watch?v=9PXluC2FMD0",
    },
    {
      url: "https://www.youtube.com/watch?v=bq6GBbh3uhU",
    },
  ];

  const dicionariosOnline = [
    {
      name: "Reverso Context",
      url: "https://context.reverso.net/traduccion/ingles-portugues/",
      description: "O serviço de tradução em linha gratuito da Reverso que traduz os seus textos entre inglês e francês, espanhol e outros idiomas, perfeito para ver as traduções e frases formadas com a palavra que você busca.",
      color: "from-primary to-blue-600",
    },
    {
      name: "Oxford Learners Dictionaries",
      url: "https://www.oxfordlearnersdictionaries.com/us/",
      description: "O maior e mais confiável dicionário online gratuito para estudantes de inglês britânico e americano com definições, imagens e muito mais.",
      color: "from-primary to-blue-600",
    },
  ];

  return (
    <>
      <PageHeader
        title="Guia prático de inglês"
        description="Como otimizar seus estudos de inglês focando em alcançar o nível mínimo exigido no mercado internacional (B2)."
      />

      <InfoAlert type="warning" className="my-6">
        <p>
          Este conteúdo é gratuito e tem fins informativos. Alguns materiais são de terceiros, com devidos créditos e fontes indicadas. Nosso compromisso é com a transparência, o respeito aos direitos autorais e a valorização dos autores.
        </p>
      </InfoAlert>

      <div className="prose prose-slate max-w-none">
        <p>
          Nesta seção, vamos apresentar as melhores práticas para que você atinja o nível B2 de forma eficiente e gratuita.
        </p>

        <section className="my-12">
          <Timeline steps={timelineSteps} />
        </section>

        <section className="mb-16" id="quanto-tempo-leva">
          <SectionCard
            title="Quanto tempo leva ?"
            description='Essa é uma dúvida comum, mas quero ser direto: não vou indicar exatamente quanto tempo você deve passar em cada etapa. Não é sobre "um mês praticando a técnica X" ou "duas semanas na técnica Y". Cada pessoa tem seu próprio ritmo.'
            badge="Etapa 1"
          >
            <p>
              Neste material, vou apresentar os conteúdos em etapas, mas é <strong>fundamental que você leia todo o documento antes de começar a praticar</strong>. Assim, você terá uma visão clara do que está por vir, conseguirá se preparar melhor e evitar frustrações.
            </p>
            <p>
              O inglês exige dedicação contínua. Somente com <strong>consistência</strong> você vai conseguir assimilar o idioma e falar com naturalidade com o tempo.
            </p>
            <p>
              <strong>Mais uma vez:</strong> não vou te dizer quanto tempo você vai levar para alcançar seus objetivos. Isso porque o aprendizado não é uma corrida com linha de chegada visível – é uma jornada contínua.
            </p>
            <p>
              <strong>Mas uma coisa é certa: </strong>
              Você não deve praticar "listening" sem antes ter expandido seu vocabulário. E também não faz sentido focar em "speaking" sem antes ter trabalhado bem o "listening" e o vocabulário. Cada etapa depende da anterior.
            </p>
            <p>
              <strong>Leve o tempo que for necessário, mas siga a ordem do documento para não se frustrar.</strong>
            </p>
            <p>
              <strong>Você pode alcançar o objetivo mais rápido ou mais devagar – e tudo bem!</strong> O importante é <strong>focar nos SEUS objetivos e respeitar o SEU tempo.</strong>
            </p>

          </SectionCard>
        </section>

        <section className="mb-16" id="comece-aqui">
          <SectionCard
            title="Comece por aqui"
            description='Um dos pontos mais importantes, na minha opinião, é saber exatamente em que nível você está hoje.
                        Com essa clareza, você consegue focar nos aspectos que realmente precisam de atenção, facilitando o progresso e tornando o aprendizado de inglês muito mais eficiente.'
            badge="Etapa 2"
          >
            <p>
              Comece fazendo um teste de nivelamento gratuito e confiável,
              como o {" "}
              <a
                href="https://www.efset.org/"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                EF SET
              </a>{" "}. Ele fornece uma estimativa do seu nível com base no Quadro Europeu Comum de Referência para Línguas (CEFR), indo do A1 (iniciante) até o C2 (fluente).
            </p>

            <GradientHeading title="Testes de inglês gratuitos disponíveis pelo EF SET" />

            <div className="space-y-4 my-6">
              <ContentGrid columns={1} className="mt-8">
                {englishTests.map((test) => (
                  <FeatureCard
                    key={test.name}
                    target="_blank"
                    href={test.url}
                    icon={BookCheck}
                    title={test.name}
                    description={test.description}
                    className="border bg-gradient-to-br from-slate-50 to-slate-100"
                  />
                ))}
              </ContentGrid>
            </div>

            <div>
              <GradientHeading title="Dicas" />

              <div className="space-y-4">
                <TipsList tips={tips} />
              </div>
            </div>

            <InfoAlert type="info" className="mb-12">
              <p>
                Para as próximas etapas, recomendo que você realize o Teste Completo. Dessa forma, terá uma visão precisa do seu nível de inglês e poderá focar nos pontos que precisam ser aprimorados.
              </p>
            </InfoAlert>
          </SectionCard>
        </section>

        <section className="mb-16" id="primeiros-passos">
          <SectionCard
            title="Definindo os próximos passos"
            description='Um dos pontos mais importantes, na minha opinião, é saber exatamente em que nível você está hoje.
                        Com essa clareza, você consegue focar nos aspectos que realmente precisam de atenção, facilitando o progresso e tornando o aprendizado de inglês muito mais eficiente.'
            badge="Etapa 3"
          >

            <GradientHeading title="Escolha a opção que se adequada ao seu resultado do teste EF SET e siga as instruções" />
            <ContentGrid columns={2} className="my-8">
              {englishLevelsSections.map((section) => (
                <FeatureCard
                  key={section.id}
                  icon={section.icon}
                  title={section.title}
                  description={section.description}
                  href={`#${section.id}`}
                />
              ))}
            </ContentGrid>
          </SectionCard>
        </section>

        <section className="mb-16" id="a1-b1">
          <SectionCard
            title="Construindo as Bases do Inglês"
            description='Você provavelmente ainda conhece poucas palavras em inglês. Por isso, o primeiro passo é aumentar o seu vocabulário.'
          >

            <InfoAlert type="info" className="mb-12">
              <p>
                <strong>Vai ser desconfortável.</strong> <br></br>
                Seu cérebro está acostumado com dopamina de conteúdos rápidos, mas será necessário assistir a vídeos mais longos — de 10, 15 minutos ou até mais.
                Tenha disciplina. Não adianta ter o melhor motor se você não sabe usá-lo.
              </p>
            </InfoAlert>

            <GradientHeading title="Mas então, como vamos aumentar seu vocabulário?" className="text-x1" />

            <p>
              Para isto, sugiro que você siga as técnicas do {" "}
              <a
                href="https://www.youtube.com/@mairovergara"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mairo Vergara
              </a>{" "} através das seguintes metodologias:
            </p>

            <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 my-6">
              <CardContent className="p-6 space-y-3 text-sm md:text-base">
                <p>
                  <strong>1.</strong> Estudos de texto com áudio (
                  <a
                    href="https://www.youtube.com/live/y5fH2sMH-Pk?si=WyibcbaaFfq3tjMn"
                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Confira o vídeo oficial na íntegra clicando aqui
                  </a>)
                </p>
                <p>
                  <strong>2.</strong> Mineração de sentenças (
                  <a
                    href="https://www.youtube.com/live/oN1hkQ7yq3A?si=jeIR9n2vzynDwdO-"
                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Confira o vídeo oficial na íntegra clicando aqui
                  </a>)
                </p>
              </CardContent>
            </Card>

            <GradientHeading
              title="Estudos de texto com áudio"
            />
            <InfoAlert type="info" className="mb-12">
              <p>
                <strong>Meu conselho é:</strong> <br></br>
                Reserve um tempo para assistir à aula completa na íntegra (
                <a
                  href="https://www.youtube.com/live/y5fH2sMH-Pk?si=WyibcbaaFfq3tjMn"
                  className="text-primary hover:text-primary/80 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clicando aqui
                </a>), {" "} Isso vai te ajudar a entender melhor o conteúdo e esclarecer possíveis dúvidas.
              </p>
            </InfoAlert>
            <p>
              Esta técnica do Mairo Vergara é uma forma eficiente de aprender inglês usando materiais que tenham <strong>áudio e transcrição (texto escrito)</strong>. A ideia é aprender de forma natural, entendendo o que se ouve e lendo ao mesmo tempo, o que ajuda a desenvolver tanto a <strong>compreensão auditiva</strong> quanto o <strong>vocabulário</strong>.
            </p>

            <GradientHeading title="Em resumo, como funciona ?" className="text-xl" />

            <div className="my-6 space-y-3">
              {passoApassoEstudosDeTexto.map((item, index) => (
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

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Dicas oficiais do Mairo Vergara para Aproveitar Melhor o Método
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TipsList tips={dicasOficinaisMairoVergara} />
                </div>
              </CardContent>
            </Card>

            <GradientHeading
              title="Mineração de sentenças"
            />
            <InfoAlert type="info" className="mb-12">
              <p>
                <strong>Mais uma vez, meu conselho é:</strong> <br></br>
                Reserve um tempo para assistir à aula completa na íntegra (
                <a
                  href="https://www.youtube.com/live/oN1hkQ7yq3A"
                  className="text-primary hover:text-primary/80 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clicando aqui
                </a>), {" "} Isso vai te ajudar a entender melhor o conteúdo e esclarecer possíveis dúvidas.
              </p>
            </InfoAlert>
            <p>
              A Mineração de Sentenças consiste em extrair frases reais de materiais em inglês — como textos com áudio, livros, séries, podcasts ou artigos — e adicioná-las a um sistema de repetição espaçada, como o Anki. O objetivo é aprender vocabulário e estruturas gramaticais no contexto em que são usados, o que facilita a memorização e a fluência.
            </p>

            <GradientHeading title="Como aplicar a técnica na prática" className="text-xl" />

            <div className="my-6 space-y-3">
              {passoApassoMineracaoDeSentencas.map((item, index) => (
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

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Dicas adicionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TipsList tips={dicasMineracaoDeSentencas} />
                </div>
              </CardContent>
            </Card>

            <GradientHeading
              title="Dicionários Bilíngues Online"
              className="mt-12 scroll-mt-20"
            />

            <p>
              Neste estágio, será necessário pesquisar o significado de palavras e identificar frases no nível I+1. Para isso, recomendo utilizar um dos dicionários abaixo:
            </p>

            <div className="space-y-4 my-6">
              <ContentGrid columns={2} className="mt-8">
                {dicionariosOnline.map((dicionario) => (
                  <FeatureCard
                    key={dicionario.name}
                    target="_blank"
                    href={dicionario.url}
                    icon={Users}
                    title={dicionario.name}
                    description={dicionario.description}
                    className="border bg-gradient-to-br from-slate-50 to-slate-100"
                  />
                ))}
              </ContentGrid>
            </div>

            <GradientHeading title="E agora?" />

            <p>
              Depois de algum tempo colocando em prática os ensinamentos que compartilhamos anteriormente, é provável que você já tenha expandido seu vocabulário o suficiente para avançar para as próximas etapas.
              <br /><br />
              Antes disso, vamos verificar se você já domina as <strong>1.000 palavras mais comuns da língua inglesa</strong>.
              <br /><br />
              O site {" "}
              <a
                href="https://www.gonaturalenglish.com/"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Natural English
              </a> {" "}
              disponibiliza uma lista com essas palavras. Você pode acessá-la {" "}
              <a
                href="https://www.gonaturalenglish.com/1000-most-common-words-in-the-english-language/"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                clicando aqui
              </a>.
              <br /><br />
              Se ainda não aprendeu todas, anote as palavras que não conhece e comece a praticá-las com o auxílio da <strong>técnica de mineração de sentenças</strong> vista anteriormente.
            </p>
          </SectionCard>
        </section>

        <section className="mb-16" id="b2-c1">
          <SectionCard
            title="Rumo à Fluência Avançada"
            description='Você provavelmente já conhece mais de mil palavras em inglês e consegue se comunicar, mesmo que ainda com alguma hesitação ou insegurança. Nesta etapa, vamos trabalhar para fortalecer sua confiança, melhorar sua fluência e ampliar sua compreensão.
Também vamos apresentar técnicas mais avançadas para expandir ainda mais seu vocabulário.'
          >

            <InfoAlert type="warning" className="my-6">
              <p>
                É <strong>fundamental</strong> que você conheça, no mínimo, as 1000 palavras mais comuns em inglês e tenha um vocabulário razoável para conseguir participar de conversas básicas. Isso facilitará significativamente a aplicação das próximas dicas.<br></br>
                Se você ainda sente dificuldades com a <strong>compreensão auditiva ou com o vocabulário</strong>, recomendamos que retorne à seção <i>Construindo as Bases do Inglês</i> para reforçar esses aspectos antes de avançar.
              </p>
            </InfoAlert>

            <GradientHeading title="Mão na massa: melhorando sua pronuncia e compreensão auditiva" className="text-x1" />

            <p>
              Para isto, vamos uma técnica especifica do {" "}
              <a
                href="https://www.youtube.com/@mairovergara"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mairo Vergara
              </a>{" "}:
            </p>
            <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 my-6">
              <CardContent className="p-6 space-y-3 text-sm md:text-base">
                <p>
                  <strong>1.</strong> A técnica do MAR (
                  <a
                    href="https://www.youtube.com/watch?v=9qHRPkiXrBk"
                    className="text-primary hover:text-primary/80 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Confira o vídeo oficial na íntegra clicando aqui
                  </a>)
                </p>
              </CardContent>
            </Card>

            <GradientHeading
              title="Como funciona?"
              className="mt-12 scroll-mt-20"
            />

            <p>
              Nessa fase, você vai explorar conteúdos em inglês que estejam alinhados aos seus gostos e interesses pessoais — como séries, vídeos do YouTube, palestras, podcasts, entrevistas, documentários, falar com pessoais reais, entre outros.
              <br></br>
              O principal objetivo é que o inglês se integre ao seu cotidiano de maneira natural, por meio de materiais que realmente chamem sua atenção e motivem seu aprendizado.
              <br></br>
              <br></br>
              <strong>Esqueça promessas milagrosas: fluência leva tempo e necessita deprática real</strong><br></br>
              Muitas pessoas vendem cursos e estratégias prometendo fluência em inglês em “X” meses. Mas a verdade é que aprender um idioma não acontece de forma mágica — é um processo, e você precisa respeitar o seu tempo.
              <br></br>
              Aprender inglês é como aprender a falar quando somos crianças.
              <br></br>
              Pense bem: uma criança, ao nascer, não sabe andar, não sabe falar — não sabe absolutamente nada.
              Ela aprende <strong>observando, ouvindo e imitando</strong> o que está ao seu redor.
              <br></br>
              Uma criança aprende a expressar fome, tristeza ou alegria ao perceber os gestos, expressões e palavras das pessoas próximas.
              <br></br>
              Ninguém diz para uma criança: <i>"Quando estiver com fome, diga: ‘Estou com fome’" ou "Se gostar de alguém, diga: ‘Eu gosto de você’"</i>. Okay, algumas pessoas falam essas coisas para seus filhos, mas vamos esquecer estas exceções.
              <br></br>
              Elas(crianças) simplesmente <strong>absorvem</strong> tudo com o tempo, porque estão imersas naquele ambiente.
            </p>

            <GradientHeading
              title="Agora, você deve estar se perguntando o que fazer, não é mesmo?"
              className="mt-12 scroll-mt-20"
            />

            <div className="my-6 space-y-3">
              {imersaoEmIngles.map((item, index) => (
                <Card key={index} className="bg-secondary border-none">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1.5 text-primary">
                      <Check className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <p>{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <GradientHeading title="Melhore seu inglês conversando com pessoas reais" />
            <p>
              A melhor forma de aprender é praticando. Quando você conversa com pessoas de verdade, você aprende expressões do dia a dia, ganha confiança e percebe que é capaz. Não tenha medo de errar — cada conversa é uma chance de evoluir.
              <br></br>
              Prepare-se para evoluir! A seguir, veja locais gratuitos onde você pode praticar sua conversação em inglês com pessoas reais de diversas partes do mundo.
            </p>
            <div className="space-y-4 my-6">
              <ContentGrid columns={2} className="mt-8">
                {platforms.map((platform) => (
                  <FeatureCard
                    key={platform.name}
                    target="_blank"
                    href={platform.url}
                    icon={Users}
                    title={platform.name}
                    description={platform.description}
                    className="border bg-gradient-to-br from-slate-50 to-slate-100"
                  />
                ))}
              </ContentGrid>
            </div>

            <GradientHeading title="Treine seu inglês com uma IA interativa" />
            <p>
              Se você ainda tem receio ou vergonha de praticar, experimente começar com um dos modelos de IA interativos abaixo — é uma forma leve e segura de dar os primeiros passos.
            </p>
            <div className="space-y-4 my-6">
              <ContentGrid columns={2} className="mt-8">
                {platformsAI.map((platform) => (
                  <FeatureCard
                    key={platform.name}
                    target="_blank"
                    href={platform.url}
                    icon={Users}
                    title={platform.name}
                    description={platform.description}
                    className="border bg-gradient-to-br from-slate-50 to-slate-100"
                  />
                ))}
              </ContentGrid>
            </div>

            <GradientHeading title="Plataforma de streaming americana (grátis)" />
            <p>
              <strong>TubiTV</strong> é uma plataforma de streaming americana que oferece muitos filmes e séries grátis para você assistir quando quiser. Tem uma variedade legal de conteúdos, desde os clássicos até produções independentes, tudo disponível sem precisar pagar nada. O serviço é mantido por anúncios, mas é uma ótima opção para curtir entretenimento sem complicação.
            </p>

            <InfoAlert type="warning" className="my-6">
              <p>
                Por ser um serviço de streaming americano, o acesso ao TubiTV é restrito aos Estados Unidos. No entanto, é possível usar o serviço de qualquer lugar por meio de uma VPN.
              </p>
            </InfoAlert>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Como usar o serviço de streaming estando fora dos Estados Unidos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base space-y-4">
                <p>
                  <strong>1.</strong> Escolha um serviço de VPN confiável, Opte por uma VPN que tenha servidores nos Estados Unidos e ofereça boa velocidade e segurança (ex: Proton VPN).
                </p>
                <p>
                  <strong>2.</strong> Baixe e instale o aplicativo da VPN no seu computador, smartphone ou smart TV.
                </p>
                <p>
                  <strong>3.</strong> Abra o aplicativo da VPN e escolha um servidor localizado nos Estados Unidos.
                </p>
                <p>
                  <strong>4.</strong> Acesse o site da TubiTV em{" "}
                  <a
                    href="http://tubi.tv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    http://tubi.tv/
                  </a>
                </p>
                <p>
                  <strong>5.</strong> Crie uma conta ou faça login (caso queira salvar seu histórico de filmes e séries favoritas).
                </p>
              </CardContent>
            </Card>

            <GradientHeading title="Eleve Sua Pronúncia ao Próximo Nível" />
            <p>
              Eleve sua pronúncia ao próximo nível com o Youglish! Ouça palavras em vídeos reais de falantes nativos e aprenda a falar com mais naturalidade, ritmo e confiança.
              <br></br>
              Você pode acessar o Youglish gratuitamente <a
                href="https://youglish.com/"
                className="text-primary hover:text-primary/80 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clicando aqui
              </a> {" "}.
              <br></br>
              <i>Lembre-se de selecionar a opção [us] ao buscar pronúncias para filtrar apenas o inglês americano, caso prefira.</i>
            </p>

            <GradientHeading title="Conteúdo complementar" />
            <p>
              No meio de tanto vídeo e informação rolando por aí, fica difícil saber o que realmente vale a pena ver. Por isso, a gente separou alguns conteúdos que <strong>realmente fazem sentido pra você agora</strong> — vídeos que ajudam a entender melhor o assunto, ver na prática ou só deixar tudo mais claro e interessante.
              Tipo aquele empurrãozinho que faltava pra tudo fazer “click”.
            </p>
            <div className="space-y-4 my-6">
              <ContentGrid columns={3} className="mt-8">
                {videosRecomendados.map((video) => (
                  <YouTubeVideoView
                    youtubeUrl={video.url}
                    size="medium"
                  />
                ))}
              </ContentGrid>
            </div>
          </SectionCard>
        </section>
      </div>

      <div className="mt-12">
        <NavigationCard
          prevLink={{
            href: "/guia/burocracias",
            title: "Burocracias",
          }}
        />
      </div>
    </>
  );
}
