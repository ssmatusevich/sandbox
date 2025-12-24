import Link from "next/link";

export const metadata = {
  title: "Спикер-кит | Сергей Матусевич - выступления и воркшопы",
  description:
    "Темы выступлений по Scrum/LeSS на масштабе, OKR, метрикам потока, техдолгу и AI-enablement",
};

export default function SpeakerPage() {
  const topics = [
    {
      title: "Scrum/LeSS на масштабе: как управлять 20+ командами",
      duration: "45-60 мин",
      format: ["Доклад", "Воркшоп"],
      description:
        "Реальный опыт масштабирования Scrum на 22 кросс-функциональные команды. Как построить единую систему процессов, избежать хаоса и сохранить гибкость.",
      keyPoints: [
        "Выбор между Scrum at Scale, LeSS, SAFe",
        "Построение единой операционной системы delivery",
        "Метрики эффективности на масштабе",
        "Типичные ошибки и как их избежать",
      ],

      audience: [
        "Head of Engineering",
        "Agile Coaches",
        "Engineering Managers",
      ],
    },
    {
      title: "OKR: от теории к практике на 22 командах",
      duration: "45-60 мин",
      format: ["Доклад", "Воркшоп"],
      description:
        "Как внедрить OKR так, чтобы они стали реальным инструментом синхронизации, а не бюрократией. Кейс масштабирования OKR с результатами: Lead time −25%, выручка +30%.",
      keyPoints: [
        "OKR vs KPI: в чём разница и когда что использовать",
        "Как выстроить зависимости между OKR команд",
        "Визуализация и синхронизация",
        "Типичные проблемы внедрения и решения",
      ],

      audience: ["Product Leaders", "Engineering Leaders", "C-level"],
    },
    {
      title: "Метрики потока: Lead time, Cycle time, Flow efficiency",
      duration: "45-60 мин",
      format: ["Доклад", "Воркшоп"],
      description:
        "Практическое руководство по внедрению flow-метрик в Jira. Как перейти от «когда будет готово?» к прозрачным прогнозам на основе данных.",
      keyPoints: [
        "Основные flow-метрики и их значение",
        "Настройка метрик в Jira/Confluence",
        "Как команды и менеджмент используют метрики",
        "От метрик к непрерывному улучшению",
      ],

      audience: ["Scrum Masters", "Engineering Managers", "Product Managers"],
    },
    {
      title: "Техдолг как продукт: правило 10% и бизнес-планирование",
      duration: "45-60 мин",
      format: ["Доклад", "Воркшоп"],
      description:
        "Как управлять техдолгом системно, чтобы он не блокировал развитие продукта. Кейс: TTM по техдолгу 8 → 3 месяца.",
      keyPoints: [
        "Техдолг как портфель: оценка и приоритизация",
        "Правило 10% времени на техдолг",
        "Интеграция техдолга в roadmap",
        "Как объяснить ценность техдолга бизнесу",
      ],

      audience: ["Engineering Leaders", "Product Leaders", "CTOs"],
    },
    {
      title: "AI-enablement: где AI даёт реальный эффект",
      duration: "45-60 мин",
      format: ["Доклад", "Воркшоп"],
      description:
        "Практический опыт внедрения AI в support, engineering и legal. Результаты: нагрузка −30%, качество +10%, обработка документов +50%.",
      keyPoints: [
        "AI в support: боты и автоматизация",
        "AI в engineering: ассистенты для кода и документации",
        "AI в legal: обработка документов",
        "Prompt engineering для команд",
      ],

      audience: [
        "C-level",
        "Product & Engineering Leaders",
        "Operations Leaders",
      ],
    },
    {
      title: "Prompt engineering для Product и Engineering команд",
      duration: "90-120 мин (воркшоп)",
      format: ["Воркшоп"],
      description:
        "Практический воркшоп по эффективному использованию AI-инструментов в ежедневной работе продуктовых и инженерных команд.",
      keyPoints: [
        "Основы prompt engineering",
        "Практические паттерны для разных задач",
        "Создание библиотеки промптов команды",
        "Интеграция AI в workflow",
      ],

      audience: ["Product Managers", "Engineers", "Designers", "Analysts"],
    },
  ];

  const experience = [
    "Head of Scrum в ОКБ (22 команды)",
    "15+ лет в управлении проектами и delivery",
    "PSM I (Scrum.org)",
    "Опыт выступлений на внутренних конференциях",
  ];

  return (
    <div className="min-h-screen bg-white" data-oid="95q4xkr">
      {/* Simple Header */}
      <header
        className="bg-white border-b border-gray-200 sticky top-0 z-50"
        data-oid="aa:9fjg"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="mi8o1:e"
        >
          <div
            className="flex items-center justify-between h-16"
            data-oid="4edd-0u"
          >
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              data-oid="m5nhji5"
            >
              ← Назад на главную
            </Link>
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              data-oid="insd:wa"
            >
              Пригласить спикера
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        data-oid="x6jb8n0"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="wem2m-9"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="a6lz7b1">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              data-oid="cn:364o"
            >
              Выступления и воркшопы
            </h1>
            <p className="text-xl text-gray-600 mb-8" data-oid="dzciya9">
              Практический опыт масштабирования Agile, внедрения OKR и
              AI-автоматизации на уровне 20+ команд
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              data-oid="xiyeoxa"
            >
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
                  data-oid="vb5buyk"
                >
                  <span
                    className="text-sm font-medium text-gray-900"
                    data-oid=".ia2xxq"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16" data-oid="2t3ogrd">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="1o:pg95"
        >
          <div className="max-w-5xl mx-auto" data-oid="-q9nws5">
            <div className="text-center mb-12" data-oid="ohjyxe0">
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                data-oid="71i8cyj"
              >
                Темы выступлений
              </h2>
              <p className="text-lg text-gray-600" data-oid=".v0jx7z">
                Готовые темы или разработаем программу под вашу конференцию
              </p>
            </div>

            <div className="space-y-8" data-oid="96jynk7">
              {topics.map((topic, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
                  data-oid="r8:717y"
                >
                  <div
                    className="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
                    data-oid="k.n9534"
                  >
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-2 md:mb-0"
                      data-oid="2skzh.b"
                    >
                      {topic.title}
                    </h3>
                    <span
                      className="text-sm text-gray-600 whitespace-nowrap"
                      data-oid="nn.:.7u"
                    >
                      {topic.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4" data-oid="7gd68nd">
                    {topic.format.map((fmt, fmtIndex) => (
                      <span
                        key={fmtIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        data-oid="75rm29k"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-gray-700 mb-6 leading-relaxed"
                    data-oid="f1g6r98"
                  >
                    {topic.description}
                  </p>

                  <div className="mb-6" data-oid="1-bul:d">
                    <h4
                      className="text-sm font-semibold text-gray-900 uppercase mb-3"
                      data-oid="d0.w1m."
                    >
                      Ключевые моменты:
                    </h4>
                    <ul className="space-y-2" data-oid="ik8dp64">
                      {topic.keyPoints.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start text-gray-700"
                          data-oid="h:32m2d"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="9sajtni"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                              data-oid="i.0cclc"
                            />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div data-oid="duj_opw">
                    <h4
                      className="text-sm font-semibold text-gray-900 uppercase mb-2"
                      data-oid="ogx4npz"
                    >
                      Аудитория:
                    </h4>
                    <div className="flex flex-wrap gap-2" data-oid="fm-xe8e">
                      {topic.audience.map((aud, audIndex) => (
                        <span
                          key={audIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                          data-oid="5z.dolb"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Topics Section */}
      <section className="py-16 bg-gray-50" data-oid="zn4uj.a">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="4vv51f1"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="2r:aip7">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-oid="sspp.l."
            >
              Нужна другая тема?
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-oid=".i6pkg6">
              Могу разработать программу выступления или воркшопа под специфику
              вашей конференции или внутреннего мероприятия
            </p>
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105"
              data-oid="w:fjumg"
            >
              Обсудить программу
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" data-oid=".a11tt6">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="six._:z"
        >
          <div className="max-w-3xl mx-auto" data-oid="dfgq_5a">
            <h2
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              data-oid="vc:hz:1"
            >
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-6" data-oid="ucd26uv">
              <div
                className="bg-white p-6 rounded-xl border border-gray-200"
                data-oid="78-95kc"
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  data-oid="rxcz_-k"
                >
                  Какой формат выступлений предпочитаете?
                </h3>
                <p className="text-gray-700" data-oid="20d2cke">
                  Комфортно работаю в любом формате: доклады (30-60 мин),
                  воркшопы (90-180 мин), панельные дискуссии. Предпочитаю
                  интерактивные форматы с вовлечением аудитории.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl border border-gray-200"
                data-oid="10bunz1"
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  data-oid="36ly3yv"
                >
                  Можете адаптировать тему под нашу специфику?
                </h3>
                <p className="text-gray-700" data-oid="x6oae67">
                  Да, все темы можно адаптировать под вашу индустрию и
                  аудиторию. Перед выступлением обсуждаем контекст, задачи и
                  ожидания.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl border border-gray-200"
                data-oid="fzfghp2"
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  data-oid="14_7uji"
                >
                  Работаете с корпоративными мероприятиями?
                </h3>
                <p className="text-gray-700" data-oid="oz.ds81">
                  Да, провожу как публичные выступления, так и закрытые
                  корпоративные воркшопы и тренинги для команд.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl border border-gray-200"
                data-oid="g9v5_0-"
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  data-oid="89un_.y"
                >
                  Какая география?
                </h3>
                <p className="text-gray-700" data-oid="ac50yln">
                  Москва, готов к релокации (Кипр, ОАЭ, Сербия). Возможны
                  онлайн-выступления для других регионов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white" data-oid="281::9o">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="tkgyr4b"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid=".99nqrd">
            <h2 className="text-3xl font-bold mb-4" data-oid="4mmip_6">
              Пригласить спикера на мероприятие
            </h2>
            <p className="text-lg text-gray-300 mb-8" data-oid="ufic44g">
              Напишите в Telegram — обсудим тему, формат и детали
            </p>
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105"
              data-oid="jzfabyj"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
