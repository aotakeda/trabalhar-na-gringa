"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const PDFDownloadButton = dynamic(() => import("./PDFDownloadButton"), {
  ssr: false,
});

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

interface CV {
  name: string;
  contact: string;
  summary: string[];
  experience: Experience[];
}

const EditableCV = () => {
  const defaultCV: CV = {
    name: "NOME SOBRENOME",
    contact: "Cidade, País | E-mail | linkedin.com/in/seu-linkedin",
    summary: [
      "10 years of experience in software engineering and leading teams for global tech companies and startups with 60 to 2,000+ employees, and up to 9-figures in annual revenue.",
      "[Adicione pelo menos mais dois destaques das suas experiências]",
    ],
    experience: [
      {
        company: "XYZ Company",
        location: "San Francisco, USA (remote)",
        title: "Staff Software Engineer",
        period: "March/2023 – Present",
        description:
          "[Inclua com uma a duas linhas o que a empresa faz, seu alcance geográfico, o número de funcionários e a receita anual (e.g. 7, 8 dígitos).",
        achievements: [
          "[Adicione alguma responsabilidade e/ou resultado, coloque números e impactos relacionado a um objetivo de negócio]",
          "[Adicione algo relacionado ao escopo para dar ideia de sênioridade]",
          "[Adicione projetos relevantes e o que você fez em cada um deles]",
        ],
      },
      {
        company: "ABC Startup",
        location: "São Paulo, Brazil (remote)",
        title: "Senior Software Engineer",
        period: "Jan 2018 – Feb 2023",
        description:
          "ABC Startup is a global digital healthcare and AI startup that raised $1.2 billion. It serves 24 million customers in 15 countries.",
        achievements: [
          "Technical lead of the team that built the company's core product from scratch.",
          "Led cross-functional projects with Product, Design, and Engineering teams to launch the two main products of the company.",
          "Optimized the cloud infrastructure and reduced costs by 30% saving over $550,000 a year.",
          "Technically mentored 3 junior engineers, one mid-level engineer and 1 intern.",
        ],
      },
    ],
  };

  const [cv, setCV] = useState<CV>(() => {
    if (typeof window !== "undefined") {
      const savedCV = localStorage.getItem("userCV");
      return savedCV ? JSON.parse(savedCV) : defaultCV;
    }
    return defaultCV;
  });

  const [editing, setEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const editRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const cvRef = useRef<HTMLDivElement | null>(null);
  const [showPDF, setShowPDF] = useState(true);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const isDeleteInProgress = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userCV", JSON.stringify(cv));
    }
  }, [cv]);

  useEffect(() => {
    if (editing && editRef.current) {
      editRef.current.focus();
    }
  }, [editing]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        editing &&
        editRef.current &&
        event.target instanceof Node &&
        !editRef.current.contains(event.target)
      ) {
        saveEdit();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editing, editValue]);

  const startEdit = (path: string, value: string) => {
    setEditing(path);
    setEditValue(value);
  };

  const saveEdit = () => {
    if (!editing) return;

    const keys = editing.split(".");
    const newCV = { ...cv };

    if (keys.length === 1) {
      const key = keys[0] as keyof CV;
      if (key === "name" || key === "contact") {
        newCV[key] = editValue;
      }
    } else if (keys.length === 2) {
      if (keys[0] === "summary" && !isNaN(Number(keys[1]))) {
        const index = parseInt(keys[1]);
        newCV.summary[index] = editValue;
      }
    } else if (keys.length === 3) {
      if (keys[0] === "experience" && !isNaN(Number(keys[1]))) {
        const index = parseInt(keys[1]);
        const expKey = keys[2] as keyof Experience;
        if (expKey !== "achievements") {
          newCV.experience[index][expKey] = editValue;
        }
      }
    } else if (keys.length === 4) {
      if (
        keys[0] === "experience" &&
        !isNaN(Number(keys[1])) &&
        keys[2] === "achievements" &&
        !isNaN(Number(keys[3]))
      ) {
        const expIndex = parseInt(keys[1]);
        const achIndex = parseInt(keys[3]);
        newCV.experience[expIndex].achievements[achIndex] = editValue;
      }
    }

    setCV(newCV);
    setEditing(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    } else if (e.key === "Escape") {
      setEditing(null);
    }
  };

  const addSummaryBullet = () => {
    setCV((prev: CV) => ({
      ...prev,
      summary: [...prev.summary, "Novo item"],
    }));
  };

  const removeSummaryBullet = (index: number) => {
    setShowPDF(false);
    setCV((prev: CV) => {
      const newSummary = prev.summary.filter((_, i) => i !== index);

      if (newSummary.length === 0) {
        newSummary.push("");
      }

      return {
        ...prev,
        summary: newSummary,
      };
    });

    if (editing && editing.startsWith("summary.")) {
      const editingIndex = parseInt(editing.split(".")[1]);
      if (editingIndex >= index) {
        setEditing(null);
        setEditValue("");
      }
    }

    setTimeout(() => setShowPDF(true), 300);
  };

  const [lastAchievementAdded, setLastAchievementAdded] = useState<{
    expIndex: number;
    timestamp: number;
  } | null>(null);

  const addAchievement = (expIndex: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const currentTime = Date.now();

    if (
      lastAchievementAdded &&
      lastAchievementAdded.expIndex === expIndex &&
      currentTime - lastAchievementAdded.timestamp < 500
    ) {
      return;
    }

    setLastAchievementAdded({ expIndex, timestamp: currentTime });

    setCV((prev: CV) => {
      const newCV = JSON.parse(JSON.stringify(prev));
      newCV.experience[expIndex].achievements.push("Novo item");
      return newCV;
    });
  };

  const removeAchievement = (
    expIndex: number,
    achIndex: number,
    e?: React.MouseEvent
  ) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isDeleteInProgress.current) {
      return;
    }

    isDeleteInProgress.current = true;

    setShowPDF(false);

    setCV((prev: CV) => {
      const newExperience = JSON.parse(JSON.stringify(prev.experience));
      newExperience[expIndex].achievements = newExperience[
        expIndex
      ].achievements.filter((_: any, i: number) => i !== achIndex);
      return {
        ...prev,
        experience: newExperience,
      };
    });

    setTimeout(() => {
      setShowPDF(true);
      isDeleteInProgress.current = false;
    }, 300);
  };

  const addExperience = () => {
    setShowPDF(false);
    setCV((prev: CV) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "Nome da empresa",
          location: "Localização",
          title: "Cargo",
          period: "Data de início – Data de término",
          description: "Descrição da empresa",
          achievements: ["Primeiro feito", "Segundo feito", "Terceiro feito"],
        },
      ],
    }));
    setTimeout(() => setShowPDF(true), 300);
  };

  const removeExperience = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setShowPDF(false);
    setCV((prev: CV) => ({
      ...prev,
      experience: prev.experience.filter((_, i: number) => i !== index),
    }));
    setTimeout(() => setShowPDF(true), 300);
  };

  const resetCV = () => {
    setShowPDF(false);
    setCV(defaultCV);
    setTimeout(() => setShowPDF(true), 300);
    setConfirmResetOpen(false);
  };

  interface EditableFieldProps {
    path: string;
    value: string;
    className?: string;
    multiline?: boolean;
  }

  const EditableField = ({
    path,
    className,
    value,
    multiline = false,
  }: EditableFieldProps) => {
    const isEditing = editing === path;
    const localInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
      if (isEditing && localInputRef.current) {
        localInputRef.current.focus();

        if (
          localInputRef.current instanceof HTMLInputElement ||
          localInputRef.current instanceof HTMLTextAreaElement
        ) {
          const length = localInputRef.current.value.length;
          localInputRef.current.setSelectionRange(length, length);
        }
      }
    }, [isEditing, editValue]);

    if (isEditing) {
      return multiline ? (
        <textarea
          ref={(el) => {
            localInputRef.current = el;
            if (editRef)
              (editRef as RefObject<HTMLTextAreaElement | null>).current = el;
          }}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={saveEdit}
          className="w-full p-1 border border-gray-300 rounded resize-none"
          rows={value.split("\n").length + 1}
        />
      ) : (
        <input
          ref={(el) => {
            localInputRef.current = el;
            if (editRef)
              (editRef as RefObject<HTMLInputElement | null>).current = el;
          }}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={saveEdit}
          className="w-full p-1 border border-gray-300 rounded"
        />
      );
    }

    return multiline ? (
      <div
        className="cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
        onClick={() => {
          startEdit(path, value);
        }}
      >
        {value.split("\n").map((line: string, i: number) => (
          <div key={i}>
            {line || (
              <span className="italic text-gray-400">Clique para editar</span>
            )}
          </div>
        ))}
      </div>
    ) : (
      <span
        className={cn(
          "cursor-pointer hover:bg-gray-100 text-sm md:text-base p-1 rounded transition-colors",
          className
        )}
        onClick={() => {
          startEdit(path, value);
        }}
      >
        {value || (
          <span className="italic text-gray-400">Clique para editar</span>
        )}
      </span>
    );
  };

  return (
    <div className="mx-auto" id="editor-de-cv">
      <div className="flex justify-end items-center mb-6">
        <div className="flex gap-2">
          <Dialog open={confirmResetOpen} onOpenChange={setConfirmResetOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Resetar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Resetar CV</DialogTitle>
                <DialogDescription className="text-center px-1">
                  Tem certeza? Os dados que você inseriu serão perdidos. Esta
                  ação não pode ser revertida.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 py-4">
                <Button
                  variant="destructive"
                  onClick={resetCV}
                  className="w-full"
                >
                  Sim, resetar
                </Button>
                <DialogClose asChild>
                  <Button variant="outline" className="w-full">
                    Cancelar
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          {typeof window !== "undefined" && showPDF && (
            <PDFDownloadButton cv={cv} />
          )}
        </div>
      </div>

      <div className="bg-white border p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-3 lg:col-span-1" id="instructionsPanel">
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-4 sticky top-4">
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  Como usar o editor de CV
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-3 text-sm">
                <p>
                  <strong>1.</strong> Clique em qualquer texto do CV para
                  editá-lo.
                </p>
                <p>
                  <strong>2.</strong> Pressione Enter ou clique fora do campo
                  para salvar as alterações.
                </p>
                <p>
                  <strong>3.</strong> Use os botões "Adicionar" para incluir
                  novas seções ou itens.
                </p>
                <p>
                  <strong>4.</strong> Passe o mouse sobre itens para ver a opção
                  de excluir (ícone da lixeira).
                </p>
                <p>
                  <strong>5.</strong> Suas alterações são salvas automaticamente
                  no navegador.
                </p>
                <p>
                  <strong>6.</strong> Clique em "Baixar PDF" para baixar seu
                  currículo.
                </p>
                <p>
                  <strong>7.</strong> Clique em "Resetar" para voltar ao modelo
                  inicial.
                </p>
                <p>
                  <strong>PS:</strong> Essa seção não irá aparecer no seu
                  currículo final.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-3 md:col-span-2" id="cvContent" ref={cvRef}>
            <div className="text-center mb-6">
              <h1 className="font-bold mb-2">
                <EditableField
                  path="name"
                  value={cv.name}
                  className="text-3xl md:text-4xl"
                />
              </h1>
              <p className="text-sm">
                <EditableField path="contact" value={cv.contact} />
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold border-b pb-1 mb-3">SUMMARY</h2>
              <ul className="list-disc pl-5 space-y-2">
                {cv.summary.map((bullet: string, index: number) => (
                  <li key={`summary-${index}`} className="relative group pr-8">
                    <EditableField path={`summary.${index}`} value={bullet} />
                    <button
                      onClick={() => removeSummaryBullet(index)}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Remover item ${index + 1}`}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                size="sm"
                onClick={addSummaryBullet}
                className="mt-2 text-primary"
              >
                + Adicionar item
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-bold border-b pb-1 mb-4">
                PROFESSIONAL EXPERIENCE
              </h2>

              {cv.experience.map((exp: Experience, expIndex: number) => (
                <div
                  key={`experience-${expIndex}`}
                  className="mb-8 relative group pr-8"
                >
                  <div className="flex justify-between mb-1">
                    <div className="font-bold">
                      <EditableField
                        path={`experience.${expIndex}.company`}
                        value={exp.company}
                      />
                    </div>
                    <div className="text-right">
                      <EditableField
                        path={`experience.${expIndex}.location`}
                        value={exp.location}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">
                      <EditableField
                        path={`experience.${expIndex}.title`}
                        value={exp.title}
                      />
                    </div>
                    <div className="text-right">
                      <EditableField
                        path={`experience.${expIndex}.period`}
                        value={exp.period}
                      />
                    </div>
                  </div>

                  <div className="mb-3 italic text-sm">
                    <EditableField
                      path={`experience.${expIndex}.description`}
                      value={exp.description}
                      multiline={true}
                    />
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map(
                      (achievement: string, achIndex: number) => (
                        <li
                          key={`achievement-${expIndex}-${achIndex}`}
                          className="relative group pr-8"
                        >
                          <EditableField
                            path={`experience.${expIndex}.achievements.${achIndex}`}
                            value={achievement}
                          />
                          <button
                            onClick={(e) =>
                              removeAchievement(expIndex, achIndex, e)
                            }
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label={`Remover item ${achIndex + 1}`}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </button>
                        </li>
                      )
                    )}
                  </ul>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => addAchievement(expIndex, e)}
                    className="mt-2 text-primary"
                  >
                    + Adicionar item
                  </Button>

                  <button
                    onClick={(e) => removeExperience(expIndex, e)}
                    className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Remover experiência ${expIndex + 1}`}
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addExperience}
                className="mt-2"
              >
                + Adicionar experiência
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableCV;
