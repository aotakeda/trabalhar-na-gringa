import { Building2, Receipt, HeartPulse } from "lucide-react";
import {
  PageHeader,
  GradientHeading,
  InfoAlert,
  FeatureCard,
  ContentGrid,
  NavigationCard,
} from "@/components/guia";

export default function BurocraciasPage() {
  const sections = [
    {
      id: "criando-seu-cnpj",
      icon: Building2,
      title: "Criando seu CNPJ",
      description: "Como abrir sua empresa para trabalhar como PJ",
    },
    {
      id: "impostos",
      icon: Receipt,
      title: "Impostos",
      description:
        "Informações sobre tributação para trabalho remoto internacional",
    },
    {
      id: "plano-de-saúde",
      icon: HeartPulse,
      title: "Plano de saúde",
      description: "Como contratar plano de saúde como PJ",
    },
  ];

  return (
    <>
      <PageHeader
        title="Burocracias"
        description="Informações sobre aspectos burocráticos do trabalho remoto para empresas estrangeiras."
      />

      <div className="prose prose-slate max-w-none space-y-6">
        <p>
          A modalidade de contratação mais comum é PJ (contractor), mas é
          possível que a empresa ofereça CLT por meio de uma empresa
          terceirizada, usando o modelo de Employer of Record (EOR). As dicas
          abaixo são voltadas para quem vai trabalhar como{" "}
          <strong>contractor</strong>.
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

        <GradientHeading
          title="Criando seu CNPJ"
          id="criando-seu-cnpj"
          className="mt-12 scroll-mt-20"
        />

        <InfoAlert type="warning" className="my-6">
          <p>
            Não sou contador, recomendo procurar por uma empresa de
            contabilidade que faça esse trabalho por você.
          </p>
        </InfoAlert>

        <p>
          O processo de abertura de empresa vai depender de qual cidade você vai
          abrir a empresa, recomendo procurar por uma empresa de contabilidade
          que faça esse trabalho por você, algumas como a{" "}
          <a
            href="https://www.contabilizei.com.br/"
            className="text-primary hover:text-primary/80 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contabilizei
          </a>{" "}
          fazem o processo de graça se você fechar o plano de contabilidade com
          eles.
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 p-5  my-6">
          <p className="text-sm italic">
            PS: não sou parceiro/afiliado da Contabilizei, só recomendo por
            experiência própria, pesquise bastante antes de tomar uma decisão.
          </p>
        </div>

        <GradientHeading
          title="Impostos"
          id="impostos"
          className="mt-12 scroll-mt-20"
        />
        <p>
          Trabalhando para fora do Brasil, você vai ter algumas isenções de
          impostos, na minha experiência, você pode esperar em torno de 10% de
          impostos sobre o salário bruto.
        </p>
        <p>
          Mas, novamente, isso vai depender de cada caso, recomendo conversar
          com seu contador sobre isso.
        </p>

        <GradientHeading
          title="Plano de saúde"
          id="plano-de-saúde"
          className="mt-12 scroll-mt-20"
        />
        <p>
          Você vai ser responsável pela contratação de plano de saúde, recomendo
          procurar por uma empresa de seguros ou a própria empresa de
          contabilidade que você escolher pode te ajudar com isso.
        </p>
        <p>
          Quanto mais PJs se juntarem para contratar planos de saúde, mais
          barato vai ser o plano. Por isso, empresas de contabilidade geralmente
          ajudam com isso.
        </p>
      </div>

      <div className="mt-12">
        <NavigationCard
          prevLink={{
            href: "/guia/processo-seletivo",
            title: "Processo seletivo",
          }}
        />
      </div>
    </>
  );
}
