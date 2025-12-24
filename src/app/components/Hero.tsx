export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white"
      data-oid="6rrg-et"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="tp:m.dk"
      >
        <div className="max-w-4xl mx-auto text-center" data-oid="_lic6ri">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            data-oid="mwpv2u:"
          >
            Сергей Матусевич — AI-first Head of Scrum / Delivery Transformation
            Lead
          </h1>

          <p
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            data-oid="3lt--d4"
          >
            Масштабирую delivery на уровне 20+ команд: метрики → OKR → техдолг →
            AI-автоматизация. Результат — быстрее Time-to-Market, выше
            прозрачность и управляемость.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-oid="02urhop"
          >
            <div
              className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
              data-oid="9vvjy4z"
            >
              <span
                className="text-sm font-medium text-gray-900"
                data-oid="sdv:ddl"
              >
                22 команды под управлением
              </span>
            </div>
            <div
              className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
              data-oid="n:g-:m-"
            >
              <span
                className="text-sm font-medium text-gray-900"
                data-oid="gg64.eh"
              >
                Scrum/LeSS, OKR, Jira/Confluence
              </span>
            </div>
            <div
              className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
              data-oid="j:qoa90"
            >
              <span
                className="text-sm font-medium text-gray-900"
                data-oid="2s4of_5"
              >
                PSM I (Scrum.org)
              </span>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="o:p_i_7"
          >
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105"
              data-oid="w.01ej5"
            >
              Обсудить трансформацию
            </a>
            <button
              onClick={() => scrollToSection("cases")}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-base font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-all hover:scale-105"
              data-oid="e5vosjf"
            >
              Смотреть кейсы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
