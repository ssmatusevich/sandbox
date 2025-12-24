export default function Credibility() {
  const companies = [
    { name: "ОКБ", role: "Head of Scrum" },
    { name: "IT Partner", role: "Delivery Manager" },
    { name: "e-arena", role: "Project Manager" },
    { name: "Искра", role: "Consultant" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" data-oid="sc5.v_i">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="emr20zs"
      >
        <div className="text-center mb-12" data-oid="btzts3o">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="22008hc"
          >
            Опыт и экспертиза
          </h2>
        </div>

        <div className="max-w-4xl mx-auto" data-oid="b73ckrn">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            data-oid="tf5jlxu"
          >
            <div
              className="bg-white p-6 rounded-xl border border-gray-200"
              data-oid="pnk_92n"
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-4"
                data-oid="9djhq6y"
              >
                Опыт в компаниях
              </h3>
              <div className="space-y-3" data-oid="y2j7anz">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start"
                    data-oid="peyfi0l"
                  >
                    <span
                      className="font-medium text-gray-900"
                      data-oid="kp-pn.b"
                    >
                      {company.name}
                    </span>
                    <span className="text-sm text-gray-600" data-oid="gpftt3o">
                      {company.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white p-6 rounded-xl border border-gray-200"
              data-oid="x-7:_o6"
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-4"
                data-oid="k7jzil7"
              >
                Сертификации и навыки
              </h3>
              <div className="space-y-3" data-oid="wzbks_:">
                <div className="flex items-center" data-oid="u8b79sy">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="cp0na_x"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      data-oid="ky5n79a"
                    />
                  </svg>
                  <span className="text-gray-900" data-oid="0b-ntwp">
                    PSM I (Scrum.org)
                  </span>
                </div>
                <div className="flex items-center" data-oid="z3dugvy">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid=".pdfvn1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      data-oid="57dcf43"
                    />
                  </svg>
                  <span className="text-gray-900" data-oid="m5wh.9d">
                    Русский (native)
                  </span>
                </div>
                <div className="flex items-center" data-oid="h.glxw8">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="k92y16q"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      data-oid="ypaa7ko"
                    />
                  </svg>
                  <span className="text-gray-900" data-oid="t3m0ih9">
                    English (B1)
                  </span>
                </div>
                <div className="flex items-center" data-oid="pw0_eg4">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="ap2r29p"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      data-oid="3m_lyco"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      data-oid="jsg4plv"
                    />
                  </svg>
                  <span className="text-gray-900" data-oid="avl-4cj">
                    Москва, релокация возможна
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-xl border border-gray-200"
            data-oid="-hm_jsa"
          >
            <p className="text-sm text-gray-600 text-center" data-oid="a.fd8zn">
              Опыт работы с финтехом, маркетплейсами, ритейлом и интеграторами.
              Готовность к релокации: Кипр, ОАЭ, Сербия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
