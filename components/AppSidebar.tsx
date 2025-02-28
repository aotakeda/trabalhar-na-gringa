import { Briefcase, Globe, File, ChevronRight, Book } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Guia",
    url: "/guia",
    icon: Book,
  },
  {
    title: "Onde e como encontrar vagas",
    url: "/guia/onde-e-como-encontrar-vagas",
    icon: Globe,
  },
  {
    title: "Processo seletivo",
    url: "/guia/processo-seletivo",
    icon: Briefcase,
    subItems: [
      {
        title: "Recrutamento",
        url: "/guia/processo-seletivo#recrutamento",
      },
      {
        title: "Testes técnicos",
        url: "/guia/processo-seletivo#testes-técnicos",
      },
      {
        title: "Cultural",
        url: "/guia/processo-seletivo#entrevista-cultural",
      },
      {
        title: "Referências",
        url: "/guia/processo-seletivo#4-referencias",
      },
      { title: "Oferta", url: "/guia/processo-seletivo#5-oferta" },
    ],
  },
  {
    title: "Burocracias",
    url: "/guia/burocracias",
    icon: File,
    subItems: [
      { title: "Criando seu CNPJ", url: "/guia/burocracias#criando-seu-cnpj" },
      { title: "Impostos", url: "/guia/burocracias#impostos" },
      { title: "Plano de saúde", url: "/guia/burocracias#plano-de-saúde" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Trabalhe na Gringa</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="group/collapsible">
                  {item.subItems ? (
                    <>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
