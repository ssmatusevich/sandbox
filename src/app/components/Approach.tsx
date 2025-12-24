export default function Approach() {
  const steps = [
    {
      number: "01",
      title: "Диагностика потока",
      description:
        "Lead/Cycle/Flow efficiency, WIP, анализ bottlenecks и точек роста",
    },
    {
      number: "02",
      title: "Система целей",
      description: "OKR + визуализация зависимостей между командами",
    },
    {
      number: "03",
      title: "Delivery OS",
      description:
        "Настройка Jira/Confluence, разделение Discovery/Delivery, DoR/DoD",
    },
    {
      number: "04",
      title: "Техдолг как портфель",
      description:
        "Правило времени (10%) + бизнес-планирование технических задач",
    },
    {
      number: "05",
      title: "AI-автоматизация",
      description:
        "Шаблоны, ассистенты, снижение ручного труда в support/dev/legal",
    },
    {
      number: "06",
      title: "Культура и capability",
      description:
        "Коучинг команд, повышение eNPS, обучение prompt-инжинирингу",
    },
  ];

  return (
    <section
      id="approach"
      className="py-16 md:py-24 bg-gray-50"
      data-oid="7l11kqk"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="jr-.l9n"
      >
        <div className="text-center mb-12" data-oid="u4n4bg:">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="mt0tn3d"
          >
            Мой подход
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-oid="_nzc7t."
          >
            Системная методология трансформации delivery-процессов
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-oid=".zp5_x6">
          <div className="space-y-6" data-oid="wy1a_qh">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                data-oid="ww50b_r"
              >
                <div
                  className="flex items-start gap-4 md:gap-6"
                  data-oid="eu-2t2f"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center text-lg md:text-xl font-bold"
                    data-oid="_:0t1n5"
                  >
                    {step.number}
                  </div>
                  <div className="flex-1" data-oid="yenat5d">
                    <h3
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                      data-oid="x8fz40-"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="o70k5it"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
