import Link from "next/link";

export default function Cases() {
  const cases = [
    {
      title: "Операционная система delivery для 22 команд (B2C платформа)",
      problem: "Разрозненные процессы, отсутствие метрик и прозрачности",
      solution:
        "Единые метрики + разделение Discovery/Delivery в Jira, регламенты взаимодействия",
      effect: "Cycle time 5 → 2 дня",
      tools: ["Jira", "Confluence", "Flow metrics"],
    },
    {
      title: "OKR как механизм межкомандной синхронизации",
      problem: "Команды работают изолированно, нет общих целей",
      solution:
        "Масштабирование OKR на 22 команды, межкомандные доски, карта компетенций",
      effect: "Lead time 4 → 3 месяца, выручка +30%",
      tools: ["OKR framework", "Miro", "Jira Align"],
    },
    {
      title: "Техдолг как продукт: портфель, правило 10%, бизнес-планирование",
      problem: "Техдолг копится, блокирует развитие продукта",
      solution:
        "Единый подход к техдолгу, интеграция в планирование, правило 10% времени",
      effect: "TTM по техдолгу 8 → 3 месяца",
      tools: ["Tech Debt Portfolio", "Roadmapping", "Stakeholder alignment"],
    },
  ];

  return (
    <section
      id="cases"
      className="py-16 md:py-24 bg-gray-50"
      data-oid="j1kzstz"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="9ay17yw"
      >
        <div className="text-center mb-12" data-oid="gw1:foq">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="5xubk50"
          >
            Кейсы
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-oid="_kvineq"
          >
            Реальные примеры трансформации процессов и результаты
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          data-oid="xpurw:7"
        >
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-all"
              data-oid="zd1av47"
            >
              <h3
                className="text-xl font-bold text-gray-900 mb-4 leading-tight"
                data-oid="_24jgv3"
              >
                {caseItem.title}
              </h3>

              <div className="space-y-4 mb-6" data-oid="qiu.nvy">
                <div data-oid="w.76b81">
                  <div
                    className="text-xs font-semibold text-gray-500 uppercase mb-1"
                    data-oid="cb:ju1o"
                  >
                    Проблема
                  </div>
                  <p className="text-sm text-gray-700" data-oid="uw2ih_i">
                    {caseItem.problem}
                  </p>
                </div>

                <div data-oid="ndpjh4a">
                  <div
                    className="text-xs font-semibold text-gray-500 uppercase mb-1"
                    data-oid="9mf:vkm"
                  >
                    Решение
                  </div>
                  <p className="text-sm text-gray-700" data-oid="m6h5uyl">
                    {caseItem.solution}
                  </p>
                </div>

                <div data-oid="dmbwy_2">
                  <div
                    className="text-xs font-semibold text-gray-500 uppercase mb-1"
                    data-oid="b7d9ef-"
                  >
                    Эффект
                  </div>
                  <p
                    className="text-sm font-semibold text-gray-900"
                    data-oid="c.yw-ql"
                  >
                    {caseItem.effect}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2" data-oid="ttio1bu">
                {caseItem.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    data-oid="o3763wb"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-oid="9ok1wg0">
          <Link
            href="/cases"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105"
            data-oid="jg5xyo-"
          >
            Открыть все кейсы (подробнее)
          </Link>
        </div>
      </div>
    </section>
  );
}
