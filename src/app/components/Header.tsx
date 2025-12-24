"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      data-oid="_woa5-."
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="nepekmt"
      >
        <div
          className="flex items-center justify-between h-16 md:h-20"
          data-oid="v8rd8va"
        >
          <div
            className="text-lg md:text-xl font-semibold text-gray-900"
            data-oid=":ykt6pa"
          >
            Сергей Матусевич
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-oid="d1g3k8f"
          >
            <button
              onClick={() => scrollToSection("results")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              data-oid="iuf3ia_"
            >
              Результаты
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              data-oid="hp-20ly"
            >
              Кейсы
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              data-oid="1fr.4ni"
            >
              Подход
            </button>
            <button
              onClick={() => scrollToSection("topics")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              data-oid="c1yo56e"
            >
              Темы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              data-oid="be8do05"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-4" data-oid="ov8eyex">
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-gray-900 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              data-oid="bpb6zrr"
            >
              Обсудить задачу
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
              data-oid="zorudbh"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="x-i171o"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    data-oid="lj721vb"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="3x._je5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    data-oid="5o506xu"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-gray-200 bg-white"
            data-oid="tgki3_f"
          >
            <div className="flex flex-col space-y-3" data-oid="30zf2cz">
              <button
                onClick={() => scrollToSection("results")}
                className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                data-oid="pl6ilex"
              >
                Результаты
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                data-oid="9ohlc7b"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                data-oid="ih7i33g"
              >
                Подход
              </button>
              <button
                onClick={() => scrollToSection("topics")}
                className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                data-oid="q9gsqh0"
              >
                Темы
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                data-oid="e8s:cqu"
              >
                Контакты
              </button>
              <a
                href="https://t.me/digedon"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors text-center"
                data-oid="y3nyrl4"
              >
                Обсудить задачу
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
