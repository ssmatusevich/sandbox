export default function AIEnablement() {
  const areas = [
    {
      title: "Support",
      description:
        "Боты и AI-помощники для автоматизации рутины, снижение ручного труда",
      results: ["Нагрузка команд −30%", "Качество сервиса +10%"],
    },
    {
      title: "Engineering",
      description: "AI-ассистенты для кода, ревью, документации и регламентов",
      results: ["Скорость разработки ×1.5", "Discovery ×2 быстрее"],
    },
    {
      title: "Legal/Docs",
      description: "Ускорение обработки и анализа документов через AI",
      results: ["Обработка документов +50%", "Снижение ошибок"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" data-oid="ctde4_4">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="i4ukh7w"
      >
        <div className="text-center mb-12" data-oid="u3h84kc">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="f.i15w_"
          >
            AI в операционке: автоматизируем не «ради AI», а ради скорости и
            качества
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-oid="qaed9g5"
          >
            Внедрение AI-инструментов там, где они дают реальный эффект
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="7_-f8c6"
        >
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              data-oid="ntmshfd"
            >
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="m_zbtfh"
              >
                {area.title}
              </h3>
              <p
                className="text-gray-700 mb-6 leading-relaxed"
                data-oid="t0.ss94"
              >
                {area.description}
              </p>
              <div className="space-y-2" data-oid="uya6aj7">
                {area.results.map((result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className="flex items-center text-sm text-gray-900"
                    data-oid="_a1s1y_"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="vmivqp."
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        data-oid="sqd6hg8"
                      />
                    </svg>
                    {result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
