import Link from "next/link";

export const metadata = {
  title: "Кейсы трансформации delivery | Сергей Матусевич",
  description:
    "Детальные кейсы внедрения Agile, OKR и AI-автоматизации на масштабе 20+ команд",
};

export default function CasesPage() {
  const detailedCases = [
    {
      id: 1,
      title: "Операционная система delivery для 22 команд (B2C платформа)",
      company: "ОКБ - Объединённое Кредитное Бюро",
      duration: "12 месяцев",
      context:
        "Крупное БКИ с платформой 'Кредистория' для физлиц. 22 кросс-функциональные команды работали изолированно, отсутствовали единые процессы и метрики.",
      problem: [
        "Разрозненные процессы delivery без единых стандартов",
        "Отсутствие прозрачности: невозможно понять, когда задача будет готова",
        "Нет метрик для оценки эффективности команд",
        "Постоянные конфликты между Discovery и Delivery",
      ],

      solution: [
        "Построение единой системы метрик потока (Lead time, Cycle time, Flow efficiency, WIP)",
        "Разделение Discovery и Delivery в Jira с чёткими этапами и переходами",
        "Внедрение регламентов взаимодействия и Definition of Ready/Done",
        "Настройка дашбордов для команд и менеджмента",
        "Обучение команд работе с метриками",
      ],

      results: [
        "Cycle time сократился с 5 до 2 дней (−60%)",
        "Прозрачность потока: любой стейкхолдер видит статус задач",
        "Снижение конфликтов между командами",
        "Команды начали самостоятельно оптимизировать процессы на основе метрик",
      ],

      tools: ["Jira", "Confluence", "Flow metrics", "Scrum", "LeSS"],
    },
    {
      id: 2,
      title: "OKR как механизм межкомандной синхронизации",
      company: "ОКБ - Объединённое Кредитное Бюро",
      duration: "6 месяцев",
      context:
        "22 команды работали над своими задачами без понимания общей картины и зависимостей.",
      problem: [
        "Команды не понимают, как их работа связана с бизнес-целями",
        "Отсутствие синхронизации между зависимыми командами",
        "Невозможно приоритизировать задачи на уровне продукта",
        "Низкая вовлечённость: команды не видят влияния своей работы",
      ],

      solution: [
        "Масштабирование OKR на все 22 команды с единой методологией",
        "Визуализация зависимостей между OKR разных команд",
        "Создание межкомандных досок для синхронизации",
        "Внедрение карты компетенций для понимания capability команд",
        "Регулярные синхронизации и ретроспективы OKR",
      ],

      results: [
        "Lead time сократился с 4 до 3 месяцев (−25%)",
        "Выручка выросла на 30% благодаря фокусу на ключевых инициативах",
        "Команды начали проактивно искать синергии",
        "eNPS вырос на 15 п.п. - команды видят смысл в работе",
      ],

      tools: ["OKR framework", "Miro", "Jira Align", "Confluence"],
    },
    {
      id: 3,
      title: "Техдолг как продукт: портфель, правило 10%, бизнес-планирование",
      company: "ОКБ - Объединённое Кредитное Бюро",
      duration: "8 месяцев",
      context:
        "Накопленный техдолг блокировал развитие продукта. Команды тратили всё время на feature-разработку, техдолг копился.",
      problem: [
        "Техдолг не учитывается в планировании",
        "Невозможно понять масштаб и критичность техдолга",
        "Бизнес не видит ценности работы над техдолгом",
        "Time-to-Market для технических задач — 8 месяцев",
      ],

      solution: [
        "Создание единого портфеля техдолга с оценкой рисков и приоритетами",
        "Внедрение правила 10% времени на техдолг в каждом спринте",
        "Интеграция техдолга в roadmap и бизнес-планирование",
        "Визуализация влияния техдолга на бизнес-метрики",
        "Регулярный review портфеля с продуктовыми менеджерами",
      ],

      results: [
        "TTM по техдолгу сократился с 8 до 3 месяцев (−62%)",
        "Стабильность системы выросла, количество инцидентов снизилось на 40%",
        "Команды получили возможность работать быстрее за счёт чистой кодовой базы",
        "Бизнес понял ценность работы над техдолгом",
      ],

      tools: [
        "Tech Debt Portfolio",
        "Roadmapping",
        "Stakeholder alignment",
        "Risk assessment",
      ],
    },
    {
      id: 4,
      title: "AI-enablement: автоматизация рутины в support, dev и legal",
      company: "ОКБ - Объединённое Кредитное Бюро",
      duration: "9 месяцев (ongoing)",
      context:
        "Команды тратили значительное время на рутинные задачи: ответы в поддержке, документирование, обработка юридических документов.",
      problem: [
        "Support тонет в однотипных запросах",
        "Разработчики тратят время на документацию и код-ревью",
        "Legal медленно обрабатывает договоры и запросы",
        "Нет стандартизации подходов к документации",
      ],

      solution: [
        "Внедрение AI-ботов и помощников в support для автоматизации ответов",
        "Интеграция AI-ассистентов для кода, ревью и документации в dev",
        "Автоматизация обработки юридических документов через AI",
        "Обучение команд prompt-инжинирингу",
        "Создание библиотеки промптов и best practices",
      ],

      results: [
        "Нагрузка на команды снизилась на 30%",
        "Качество сервиса support выросло на 10%",
        "Обработка документов ускорилась на 50%",
        "Discovery процессы стали в 2 раза быстрее",
        "Команды получили новый навык (prompt engineering)",
      ],

      tools: [
        "ChatGPT/GPT-4",
        "GitHub Copilot",
        "Custom AI assistants",
        "Prompt libraries",
      ],
    },
    {
      id: 5,
      title: "Культурная трансформация: от команд к единой системе",
      company: "ОКБ - Объединённое Кредитное Бюро",
      duration: "Непрерывный процесс",
      context:
        "22 команды работали как изолированные острова, низкая вовлечённость, высокая текучесть.",
      problem: [
        "eNPS на низком уровне, команды не видят смысла в работе",
        "Высокая текучесть кадров (особенно в dev)",
        "Низкий CSI и NPS — клиенты недовольны",
        "Нет культуры непрерывного улучшения",
      ],

      solution: [
        "Коучинг команд и лидеров по Agile-практикам",
        "Создание сообществ практик (Scrum Masters, Product Owners)",
        "Регулярные ретроспективы на всех уровнях",
        "Внедрение системы признания и feedback",
        "Обучение новым навыкам (AI, OKR, метрики)",
      ],

      results: [
        "eNPS вырос на 15 п.п.",
        "Текучесть снизилась на 20%",
        "CSI вырос на 7 п.п., NPS на 12 п.п.",
        "Команды начали проактивно предлагать улучшения",
        "Сформировалась культура экспериментов и обучения",
      ],

      tools: [
        "Retrospective techniques",
        "Coaching",
        "Communities of practice",
        "Learning programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-oid="15nv_b3">
      {/* Simple Header */}
      <header
        className="bg-white border-b border-gray-200 sticky top-0 z-50"
        data-oid="hdyn.h8"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="3_aanng"
        >
          <div
            className="flex items-center justify-between h-16"
            data-oid="j-grysg"
          >
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              data-oid="tnabhvy"
            >
              ← Назад на главную
            </Link>
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              data-oid="8wswxah"
            >
              Обсудить задачу
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        data-oid="ao9:rf3"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="-byxa0l"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="xq3j5om">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-oid="93p0vgf"
            >
              Кейсы трансформации delivery
            </h1>
            <p className="text-xl text-gray-600" data-oid="18rxsbs">
              Реальные истории масштабирования Agile, внедрения OKR и
              AI-автоматизации на уровне 20+ команд
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16" data-oid="q9ntv3p">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="y8a8j_:"
        >
          <div className="max-w-5xl mx-auto space-y-16" data-oid="zd8azha">
            {detailedCases.map((caseItem) => (
              <article
                key={caseItem.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                data-oid="gn_w5oy"
              >
                <div className="p-8 md:p-12" data-oid="ql02qk9">
                  <div className="mb-6" data-oid="yyx4yte">
                    <h2
                      className="text-3xl font-bold text-gray-900 mb-3"
                      data-oid="t9w300r"
                    >
                      {caseItem.title}
                    </h2>
                    <div
                      className="flex flex-wrap gap-4 text-sm text-gray-600"
                      data-oid="v8tj0kc"
                    >
                      <span className="flex items-center" data-oid="wqso68n">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="kh136d7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            data-oid="hvmh18-"
                          />
                        </svg>
                        {caseItem.company}
                      </span>
                      <span className="flex items-center" data-oid="dsos9y8">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="wkmgjpj"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            data-oid="fzl29i."
                          />
                        </svg>
                        {caseItem.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8" data-oid="sqt6g:3">
                    <div data-oid="o3kdryr">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-3"
                        data-oid="8j_n043"
                      >
                        Контекст
                      </h3>
                      <p
                        className="text-gray-700 leading-relaxed"
                        data-oid="s4gty0a"
                      >
                        {caseItem.context}
                      </p>
                    </div>

                    <div data-oid="u7pc976">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-3"
                        data-oid="8z:ihj2"
                      >
                        Проблема
                      </h3>
                      <ul className="space-y-2" data-oid="zjye6qs">
                        {caseItem.problem.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700"
                            data-oid="9nf53dw"
                          >
                            <svg
                              className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="h256rd1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                data-oid="z.0g5i-"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div data-oid="1myjziy">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-3"
                        data-oid="bxyd5o7"
                      >
                        Решение
                      </h3>
                      <ul className="space-y-2" data-oid="qgw6xf:">
                        {caseItem.solution.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700"
                            data-oid="g2b-5i2"
                          >
                            <svg
                              className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="au_fx6v"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="1fj-2i9"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="bg-green-50 p-6 rounded-xl border border-green-200"
                      data-oid="u6-8c_x"
                    >
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-3"
                        data-oid="g67-ruy"
                      >
                        Результаты
                      </h3>
                      <ul className="space-y-2" data-oid="w09u0lb">
                        {caseItem.results.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-900 font-medium"
                            data-oid="e2ucv49"
                          >
                            <svg
                              className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="whhngtz"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                                data-oid="e4.stai"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div data-oid="isl:noj">
                      <h3
                        className="text-sm font-semibold text-gray-500 uppercase mb-3"
                        data-oid="y:wtrrf"
                      >
                        Инструменты и технологии
                      </h3>
                      <div className="flex flex-wrap gap-2" data-oid="ddf4f.z">
                        {caseItem.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            data-oid="7-74iaj"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50" data-oid="2y8p5_z">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="a1gcsg2"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid=":u7barb">
            <h2
              className="text-3xl font-bold text-gray-900 mb-6"
              data-oid="y7ou9b_"
            >
              Обсудим вашу ситуацию
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-oid="08y389u">
              Расскажите о своих задачах — найдём решение
            </p>
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105"
              data-oid=":vioo7q"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
