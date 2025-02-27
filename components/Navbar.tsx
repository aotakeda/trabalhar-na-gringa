"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 shadow-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#onde-e-como-encontrar-vagas"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Onde Encontrar Vagas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Processo Seletivo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <Link href="#visao-geral" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium">Visão Geral</div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                          O que esperar de um processo seletivo de empresas fora
                          do Brasil
                        </div>
                      </NavigationMenuLink>
                    </Link>
                    <hr className="my-2" />
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="#entrevista-com-recrutamento"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            1. Entrevista com recrutamento
                          </div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">
                            Perguntas comuns e dicas para a primeira etapa
                            eliminatória
                          </div>
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="#entrevistas-e-testes-técnicos"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">
                            2. Entrevistas e testes técnicos
                          </div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">
                            Tipos de desafios técnicos, dicas de preparação e
                            estudo
                          </div>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="#entrevista-cultural" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">
                            3. Entrevista cultural
                          </div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">
                            Perguntas mais comuns e dicas para esta etapa
                          </div>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="#reference-check" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">
                            4. Reference check
                          </div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">
                            Etapa de referência com quem você já trabalhou
                          </div>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="#oferta" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">5. Oferta</div>
                          <div className="line-clamp-2 text-xs text-muted-foreground">
                            Fase final, entre a empresa e você
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#burocracias" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Burocracias
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`text-sm font-medium py-2 transition-colors ${
                  pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="py-2">
                <div
                  className={`text-sm font-medium ${
                    pathname === "/content" ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  Processo Seletivo
                </div>
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link
                    href="#visao-geral"
                    className="text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Visão Geral
                  </Link>
                  <Link
                    href="#entrevista-com-recrutamento"
                    className="text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    1. Entrevista com recrutamento
                  </Link>
                  <Link
                    href="#entrevistas-e-testes-técnicos"
                    className="text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    2. Entrevistas e testes técnicos
                  </Link>
                  <Link
                    href="#entrevista-cultural"
                    className="text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    3. Entrevista cultural
                  </Link>
                  <Link
                    href="#oferta"
                    className="text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    4. Oferta e burocracias
                  </Link>
                </div>
              </div>

              <Link
                href="#onde-e-como-encontrar-vagas"
                className={`text-sm font-medium py-2 transition-colors text-gray-700 hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Onde Encontrar Vagas
              </Link>

              <Link
                href="#burocracias"
                className={`text-sm font-medium py-2 transition-colors text-gray-700 hover:text-blue-600`}
                onClick={() => setIsMenuOpen(false)}
              >
                Burocracias
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
