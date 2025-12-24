export default function Results() {
  const results = [
    {
      metric: "Cycle Time −60%",
      description: "5 → 2 дня",
    },
    {
      metric: "Lead Time −25%",
      description: "4 → 3 месяца",
    },
    {
      metric: "Выручка +30%",
      description: "через OKR и синхронизацию",
    },
    {
      metric: "TTM по техдолгу −62%",
      description: "8 → 3 месяца",
    },
    {
      metric: "Нагрузка команд −30%",
      description: "AI-автоматизация",
    },
    {
      metric: "Качество сервиса +10%",
      description: "метрики и процессы",
    },
    {
      metric: "Обработка документов +50%",
      description: "AI в Legal",
    },
    {
      metric: "eNPS +15% / текучесть −20%",
      description: "культура и развитие",
    },
  ];

  return (
    <section
      id="results"
      className="py-16 md:py-24 bg-white"
      data-oid="w_91rvj"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="o7p2lhm"
      >
        <div className="text-center mb-12" data-oid="rcysnfv">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="_iwii-p"
          >
            Результаты в цифрах
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-oid="xee3-nx"
          >
            Измеримые эффекты трансформации delivery-процессов
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="4ef.c7n"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              data-oid="xxmzbb5"
            >
              <div
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                data-oid="u9a_5c."
              >
                {result.metric}
              </div>
              <div className="text-sm text-gray-600" data-oid="dtwyjw5">
                {result.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
