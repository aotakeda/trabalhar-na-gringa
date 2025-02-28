import { Briefcase, Globe, File } from "lucide-react";
import { PageHeader, FeatureCard, ContentGrid } from "@/components/guia";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";

export default function GuiaPage() {
  const guides = [
    {
      href: "/guia/onde-e-como-encontrar-vagas",
      icon: Globe,
      title: "Onde e como encontrar vagas",
      description:
        "Plataformas e estratégias para encontrar oportunidades no exterior",
    },
    {
      href: "/guia/processo-seletivo",
      icon: Briefcase,
      title: "Processo seletivo",
      description:
        "Etapas, dicas e estratégias para se destacar nas entrevistas",
    },
    {
      href: "/guia/burocracias",
      icon: File,
      title: "Burocracias",
      description:
        "CNPJ, impostos, plano de saúde e outras questões administrativas",
    },
  ];

  return (
    <>
      <PageHeader
        title="Guia de Trabalho Remoto para Gringa"
        description="Dicas e orientações para profissionais brasileiros que desejam trabalhar remotamente para empresas no exterior."
      />

      <ContentGrid columns={3} className="mt-8">
        {guides.map((guide) => (
          <FeatureCard
            key={guide.href}
            href={guide.href}
            icon={guide.icon}
            title={guide.title}
            description={guide.description}
          />
        ))}
      </ContentGrid>

      <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200  my-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Sobre este guia
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm md:text-base space-y-4">
          <p className="text-muted-foreground">
            Este guia foi criado com base em experiências reais de profissionais
            brasileiros que trabalham remotamente para empresas no exterior. O
            objetivo é compartilhar conhecimento e ajudar outros profissionais a
            navegarem pelo processo de encontrar e conquistar oportunidades
            internacionais.
          </p>
          <p className="text-muted-foreground">
            Navegue pelas seções para encontrar informações detalhadas sobre
            cada etapa do processo, desde a busca por vagas até as questões
            burocráticas após a contratação.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
