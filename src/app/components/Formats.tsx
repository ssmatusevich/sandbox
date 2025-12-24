import Link from "next/link";

export default function Formats() {
  const formats = [
    {
      title: "Transformation Lead / Head of Delivery",
      description:
        "Полноценная роль внутри компании для построения и масштабирования delivery-процессов",
      tags: ["Full-time", "Remote/Hybrid"],
    },
    {
      title: "Построение OKR и межкомандной синхронизации",
      description:
        "Внедрение системы целей и прозрачности для согласованной работы команд",
      tags: ["Project", "3-6 месяцев"],
    },
    {
      title: "AI-операционка: внедрение ассистентов",
      description:
        "Автоматизация процессов в delivery/support/legal через AI-инструменты",
      tags: ["Project", "2-4 месяца"],
    },
    {
      title: "Выступления / воркшопы",
      description:
        "Scrum/LeSS на масштабе, OKR, метрики потока, техдолг, prompt-инжиниринг",
      tags: ["Speaking", "Workshop"],
    },
  ];

  return (
    <section id="topics" className="py-16 md:py-24 bg-white" data-oid="cb768u3">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="oe19_hl"
      >
        <div className="text-center mb-12" data-oid="etxj-8_">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="e77ct55"
          >
            Где могу быть полезен
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-oid="p4qdp3l"
          >
            Форматы взаимодействия под разные задачи
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          data-oid="4x20j3o"
        >
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              data-oid="_51.i_0"
            >
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                data-oid="s04r01_"
              >
                {format.title}
              </h3>
              <p
                className="text-gray-700 mb-4 leading-relaxed"
                data-oid="i03pry8"
              >
                {format.description}
              </p>
              <div className="flex flex-wrap gap-2" data-oid="1w4id0m">
                {format.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-300"
                    data-oid="cy8ubkj"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-oid="t5ifr4i">
          <Link
            href="/speaker"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105"
            data-oid="l996lsp"
          >
            Запросить спикера
          </Link>
        </div>
      </div>
    </section>
  );
}
