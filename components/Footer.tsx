import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 relative z-30 w-full mt-auto">
      <div className="container mx-auto px-4 max-w-none">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Trabalhar na Gringa
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Guia 100% gratuito pra você conseguir seu primeiro emprego pra
              fora.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/aotakeda/trabalhar-na-gringa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arthurtakeda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
                <span className="sr-only">Linkedin</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Trabalhar pra Gringa. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
