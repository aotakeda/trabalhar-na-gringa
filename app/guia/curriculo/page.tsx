import React from "react";
import {
  FileText,
  Award,
  Briefcase,
  Globe,
  Languages,
  BookOpen,
  Check,
  Star,
  Linkedin,
  Settings,
  FileEdit,
} from "lucide-react";
import {
  PageHeader,
  GradientHeading,
  InfoAlert,
  FeatureCard,
  ContentGrid,
  NavigationCard,
  EditableCVWrapper,
} from "@/components/guia";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TipsList } from "@/components/guia/TipsList";

export default function CurriculoPage() {
  const sections = [
    {
      id: "editor-de-cv",
      icon: FileEdit,
      title: "Editor de CV Interativo",
      description: "Editor interativo para criar seu currículo internacional",
    },
    {
      id: "estrutura-basica",
      icon: FileText,
      title: "Estrutura Básica",
      description: "Como organizar as seções do seu currículo",
    },
    {
      id: "experiencia-profissional",
      icon: Briefcase,
      title: "Experiência Profissional",
      description: "Como destacar suas realizações e impacto",
    },
    {
      id: "idiomas-certificacoes",
      icon: Languages,
      title: "Idiomas e Certificações",
      description: "Como apresentar suas competências linguísticas e técnicas",
    },
    {
      id: "linkedin-otimizacao",
      icon: Globe,
      title: "LinkedIn Otimizado",
      description:
        "Como criar um perfil de LinkedIn atrativo para recrutadores internacionais",
    },
    {
      id: "dicas-otimizacao",
      icon: Award,
      title: "Dicas de Otimização",
      description: "Como adaptar seu currículo para o mercado internacional",
    },
  ];

  const estruturaBasica = [
    "Informações de contato (nome, e-mail, LinkedIn, GitHub)",
    "Summary (resumo profissional em inglês)",
    "Professional Experience",
    "Formação Acadêmica (opcional)",
    "Certificações (opcional)",
    "Projetos relevantes (opcional)",
  ];

  const dicasGerais = [
    "Mantenha seu currículo em uma única página (máximo duas para experiências muito extensas)",
    "Use o idioma inglês",
    "Adapte-o para cada vaga, destacando habilidades relevantes para a posição",
    "Utilize o formato PDF para envio, garantindo que a formatação seja preservada",
    "Não use designs exagerados, mantenha o currículo simples e objetivo",
    "Estruture o conteúdo de forma lógica e de fácil leitura (espaçamento adequado)",
    "Evite fotos, idade, estado civil ou informações que podem levar a vieses inconscientes",
    "Inclua seu GitHub e LinkedIn atualizados",
  ];

  const dicasExperiencia = [
    "Foque em resultados e impacto, não apenas responsabilidades",
    "Use verbos de ação em primeira pessoa (implemented, developed, designed)",
    "Quantifique suas realizações sempre que possível (melhorou a performance em X%, reduziu custos em Y%)",
    "Destaque projetos complexos em que você teve autonomia e tomada de decisão",
    "Mencione tecnologias e ferramentas utilizadas em cada experiência",
    "Adapte a descrição para destacar experiências relevantes para a vaga (obviamente nunca crie uma experiência que não exista)",
  ];

  const formatarIdiomas = [
    {
      nivel: "Fluent",
      descricao: "Capaz de se comunicar com total fluidez",
    },
    {
      nivel: "Advanced",
      descricao: "Ótima capacidade de comunicação",
    },
    {
      nivel: "Intermediate",
      descricao: "Capaz de entender e se comunicar com limitações",
    },
    {
      nivel: "Basic",
      descricao:
        "Conhecimento limitado, pode ser omitido a menos que em desenvolvimento",
    },
  ];

  const exemplosRealizacoes = [
    '"Led a cross-functional team to develop a new product feature that increased revenue by 30%"',
    '"Implemented CI/CD pipeline reducing deployment time by 70% and error rate by 45%"',
    '"Led the refactoring of a legacy codebase, improving performance by 60% and maintainability"',
    '"Developed a React component library that decreased development time of new features by 30%"',
    '"Optimized database queries resulting in 40% improvement in application response time"',
    '"Implemented automated testing strategy achieving 85% code coverage and reducing bugs by 65%"',
  ];

  const recursosUteis = [
    {
      nome: "Overleaf",
      url: "https://www.overleaf.com/gallery/tagged/cv",
      descricao: "Templates profissionais de currículo em LaTeX",
    },
    {
      nome: "GitHub Resume",
      url: "https://github.com/resume/resume.github.com",
      descricao: "Gera currículo baseado em sua atividade no GitHub",
    },
  ];

  const dicasOtimizacao = [
    "Como geralmente são milhares de currículos para serem analisados, formate seu currículo para ser o mais fácil de ler possível",
    "Destaque experiências com equipes multiculturais ou clientes internacionais caso tenha",
    "Adapte termos brasileiros para equivalentes internacionais (ex: PJ → Contractor/Freelancer)",
    "Nunca use gírias, siglas ou termos específicos do mercado brasileiro",
    "Descreva cargos com títulos que façam sentido no mercado internacional",
  ];

  return (
    <>
      <PageHeader
        title="Currículo para Vagas Internacionais"
        description="Como criar e otimizar seu currículo para aumentar suas chances de conquistar uma vaga remota no exterior."
      />

      <div className="prose prose-slate max-w-none">
        <p>
          Nesta seção, vamos abordar as melhores práticas para criar um
          currículo que destaque suas habilidades e experiências para empresas
          estrangeiras.
        </p>

        <ContentGrid columns={3} className="my-8">
          {sections.map((section) => (
            <FeatureCard
              key={section.id}
              icon={section.icon}
              title={section.title}
              description={section.description}
              href={`#${section.id}`}
            />
          ))}
        </ContentGrid>

        <InfoAlert type="warning" className="my-6">
          <p>
            Currículos devem ser sempre concisos e diretos, focando em
            realizações mensuráveis e impacto, em vez de apenas listar
            responsabilidades.
          </p>
        </InfoAlert>

        <GradientHeading title="Modelo de Currículo" />

        <p>
          Use nossa ferramenta interativa para criar um currículo profissional
          seguindo as melhores práticas para vagas internacionais.
        </p>

        <div className="my-6">
          <EditableCVWrapper />
        </div>

        <GradientHeading
          title="Estrutura Básica"
          id="estrutura-basica"
          className="mt-12 scroll-mt-20"
        />

        <p>
          Um currículo bem estruturado facilita a leitura e ajuda recrutadores a
          encontrarem rapidamente as informações que procuram. Para vagas
          internacionais, recomenda-se a seguinte estrutura:
        </p>

        <div className="my-6 space-y-3">
          {estruturaBasica.map((item, index) => (
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

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Dicas Gerais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <TipsList tips={dicasGerais} />
            </div>
          </CardContent>
        </Card>

        <GradientHeading
          title="Experiência Profissional"
          id="experiencia-profissional"
          className="mt-12 scroll-mt-20"
        />

        <p>
          A seção de experiência profissional é a mais importante do seu
          currículo. Para vagas internacionais, é essencial focar em realizações
          e impacto, utilizando dados quantitativos sempre que possível.
        </p>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Como destacar sua experiência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <TipsList tips={dicasExperiencia} />
            </div>
          </CardContent>
        </Card>

        <GradientHeading title="Exemplos de realizações" />

        {exemplosRealizacoes.map((exemplo, index) => (
          <TipsList key={index} tips={[exemplo]} />
        ))}

        <GradientHeading
          title="Idiomas e Certificações"
          id="idiomas-certificacoes"
          className="mt-12 scroll-mt-20"
        />

        <p>
          Para vagas internacionais, o nível de proficiência em idiomas
          (especialmente inglês) não é um diferencial e sim um{" "}
          <strong>requisito básico</strong>. Utilize esses níveis para descrever
          seu nível de inglês.
        </p>

        <ContentGrid columns={2} className="my-8">
          {formatarIdiomas.map((idioma, index) => (
            <Card key={index}>
              <CardHeader className="p-6 pb-3">
                <CardTitle className="font-semibold text-lg">
                  {idioma.nivel}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-muted-foreground text-sm md:text-base">
                  {idioma.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </ContentGrid>

        <InfoAlert className="my-6">
          <p>
            Se você tiver certificações de proficiência em idiomas (como TOEFL,
            IELTS, Cambridge), inclua-as com o score e a data. O mesmo vale para
            certificações técnicas relevantes para a área.
          </p>
        </InfoAlert>

        <GradientHeading
          title="LinkedIn Otimizado"
          id="linkedin-otimizacao"
          className="mt-12 scroll-mt-20"
        />

        <p>
          O LinkedIn é uma ferramenta essencial para profissionais que buscam
          oportunidades internacionais. Um perfil bem otimizado aumenta
          significativamente suas chances de ser encontrado por recrutadores e
          empresas estrangeiras.
        </p>

        <div className="grid gap-6 md:grid-cols-2 my-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                  <Linkedin className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Perfil em inglês</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Configure seu perfil para ter uma versão em inglês, que será
                exibida automaticamente para usuários internacionais.
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Acesse seu perfil - "Ver perfil"</li>
                <li>2. Clique em "Adicionar perfil em outro idioma"</li>
                <li>
                  3. Selecione "English" e preencha cuidadosamente todos os
                  campos
                </li>
                <li>
                  4. Certifique-se de traduzir todas as experiências,
                  habilidades e resumo
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
                  <Settings className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">
                  Configurações de visibilidade
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Ajuste as configurações para aumentar sua visibilidade para
                recrutadores internacionais:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ative "Open to Work" apenas para recrutadores;</li>
                <li>
                  • Configure sua localização atual,{" "}
                  <strong>não coloque por exemplo que está nos EUA</strong>, se
                  você mora no Brasil, isso só fará você e o recrutador perder
                  tempo.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <GradientHeading
          title="Seções essenciais do LinkedIn"
          className="text-xl mt-8"
        />

        <div className="my-6 space-y-3">
          <Card className="bg-secondary border-none">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="mt-1.5 text-primary">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="font-medium">Headline otimizada</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Além do seu cargo atual, você pode incluir suas principais
                  habilidades e áreas de expertise. Exemplo: "Senior Frontend
                  Engineer | React | TypeScript | 8+ years building scalable
                  applications"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="mt-1.5 text-primary">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="font-medium">About (resumo profissional)</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Escreva em primeira pessoa, destacando principais realizações,
                  experiências e o que procura. Use parágrafos curtos e inclua
                  palavras-chave relevantes para sua área.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="mt-1.5 text-primary">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="font-medium">
                  Experiência profissional detalhada
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  Siga as mesmas diretrizes do currículo, focando em resultados
                  e impacto. Adicione mídia (links para projetos, apresentações)
                  quando relevante.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="mt-1.5 text-primary">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="font-medium">Skills & Endorsements</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Adicione habilidades técnicas relevantes para sua área e
                  organize-as por ordem de importância. Solicite recomendações
                  de colegas, especialmente para suas principais habilidades.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary border-none">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="mt-1.5 text-primary">
                <Star className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="font-medium">Personalize seu URL</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Crie um URL personalizado com seu nome para facilitar o
                  compartilhamento. Exemplo: linkedin.com/in/seunome
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Dicas para melhorar sua visibilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <TipsList
                tips={[
                  "Publique e compartilhe conteúdo relevante para sua área regularmente",
                  "Participe ativamente de grupos relacionados à sua área de atuação",
                  "Conecte-se com recrutadores e profissionais de empresas internacionais",
                  "Solicite recomendações de ex-colegas e líderes",
                  "Utilize hashtags relevantes em suas publicações para aumentar o alcance",
                  "Configure alertas de vagas relacionadas às suas habilidades e interesses",
                ]}
              />
            </div>
          </CardContent>
        </Card>

        <GradientHeading
          title="Dicas de Otimização"
          id="dicas-otimizacao"
          className="mt-12 scroll-mt-20"
        />

        <p>
          Para aumentar suas chances de passar pelo processo de triagem e chamar
          a atenção dos recrutadores internacionais, considere estas dicas de
          otimização:
        </p>

        <div className="space-y-4 my-6">
          <TipsList tips={dicasOtimizacao} />
        </div>

        <GradientHeading title="Recursos Úteis" className="text-xl" />

        <ContentGrid columns={2} className="my-8">
          {recursosUteis.map((recurso, index) => (
            <Card key={index}>
              <CardHeader className="p-6 pb-3">
                <CardTitle className="font-semibold text-lg">
                  <a
                    href={recurso.url}
                    className="text-primary hover:text-primary/80 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {recurso.nome}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-muted-foreground text-sm md:text-base">
                  {recurso.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </ContentGrid>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 my-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Leitura complementar</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base space-y-4">
            <p>
              Antes de finalizar seu currículo, solicite feedback de colegas que
              trabalham em empresas internacionais ou de mentores da sua área.
              Eles podem oferecer insights valiosos sobre como tornar seu
              currículo mais atrativo para recrutadores estrangeiros.
            </p>
            <p>
              Lembre-se de que seu currículo deve evoluir constantemente.
              Atualize-o regularmente com novas experiências, projetos e
              habilidades adquiridas, mantendo-o relevante e competitivo.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <NavigationCard
          prevLink={{
            href: "/guia",
            title: "Guia",
          }}
          nextLink={{
            href: "/guia/onde-e-como-encontrar-vagas",
            title: "Onde e como encontrar vagas",
          }}
        />
      </div>
    </>
  );
}
