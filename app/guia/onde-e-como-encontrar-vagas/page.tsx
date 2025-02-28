"use client";

import { Search, Globe, Check, Copy } from "lucide-react";
import {
  PageHeader,
  GradientHeading,
  ContentGrid,
  FeatureCard,
} from "@/components/guia";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function OndeEncontrarVagasPage() {
  const keywords = [
    "USD compensation",
    "US Dollar ou US$",
    "Worldwide",
    "Work/remote from anywhere",
  ];

  const platforms = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      description: "É necessário prestar atenção nas descrições das vagas",
      color: "from-primary to-blue-600",
    },
    {
      name: "Wellfound",
      url: "https://wellfound.com/jobs",
      description: "Muito boa para encontrar vagas em startups",
      color: "from-primary to-blue-600",
    },
    {
      name: "We Work Remotely",
      url: "https://weworkremotely.com/",
      description: "Plataforma especializada em trabalho remoto",
      color: "from-primary to-blue-600",
    },
    {
      name: "Work at a Startup",
      url: "https://www.workatastartup.com/companies?demographic=any&hasEquity=any&hasSalary=any&industry=any&interviewProcess=any&jobType=any&layout=list-compact&locations=BR&remote=yes&remote=only&role=eng&sortBy=created_desc&tab=any&usVisaNotRequired=any",
      description:
        "Vagas de startups da YC, a maior incubadora de startups do mundo",
      color: "from-primary to-blue-600",
    },
  ];

  const [copied, setCopied] = useState(false);

  const query = `(site:lever.co OR site:greenhouse.io OR site:workday.com OR site:jobs.ashbyhq.com OR site:apply.workable.com OR site:breezy.hr OR site:smartrecruiters.com OR site:recruitee.com OR site:jobvite.com OR site:hirehive.com OR site:zoho.com OR site:taleo.net OR site:icims.com OR site:jazzhr.com) AND ("frontend engineer" OR frontend OR "front-end" OR "front end engineer" OR "front-end engineer" OR "full stack engineer" OR fullstack OR "full-stack" OR "product engineer" OR "fullstack engineer") AND (americas OR "south america" OR latam OR brazil OR "latin america" OR anywhere)`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(query);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <PageHeader
        title="Onde e como encontrar vagas"
        description="Guia prático para encontrar oportunidades de trabalho remoto em empresas estrangeiras."
      />

      <div className="prose prose-slate max-w-none">
        <p>
          Encontrar vagas para empresas estrangeiras é um pouco diferente de
          encontrar vagas em empresas brasileiras. Existem algumas
          palavras-chave e plataformas específicas que podem ajudar nessa busca.
        </p>

        <GradientHeading title="Palavras-chave úteis" />
        <ContentGrid columns={2} className="my-6">
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="flex items-center gap-2 p-4  bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
            >
              <Search className="h-5 w-5 text-primary" />
              <span className="font-medium">{keyword}</span>
            </div>
          ))}
        </ContentGrid>

        <GradientHeading title="Plataformas recomendadas" />
        <div className="space-y-4 my-6">
          <ContentGrid columns={2} className="mt-8">
            {platforms.map((platform) => (
              <FeatureCard
                key={platform.name}
                target="_blank"
                href={platform.url}
                icon={Globe}
                title={platform.name}
                description={platform.description}
                className="border bg-gradient-to-br from-slate-50 to-slate-100"
              />
            ))}
          </ContentGrid>
        </div>

        <GradientHeading title="Busca avançada no Google" />
        <p>
          Além das plataformas mencionadas, você pode usar o Google com
          operadores booleanos para encontrar vagas em sites de ATS (Applicant
          Tracking Systems).
        </p>

        <div className="my-6 p-5 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 relative group">
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Copy code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <pre className="text-sm text-slate-300 whitespace-pre-wrap break-words">
            <code>{query}</code>
          </pre>
        </div>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200  my-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Dica para busca avançada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm md:text-base">
              Modifique apenas a parte de cargos para personalizar sua busca,
              mantendo os sites de ATS e as palavras-chave de localidade. Isso
              ajudará a encontrar vagas mais relevantes para o seu perfil.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
