"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: "telegram" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "telegram") {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section
      id="contacts"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      data-oid="iu4p5qc"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="eqssekb"
      >
        <div className="max-w-3xl mx-auto text-center" data-oid="pg5_st-">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-oid="yby5w2q"
          >
            Если нужно ускорить delivery без потери качества — синхронизируемся
          </h2>
          <p className="text-lg text-gray-600 mb-10" data-oid="b2jz::0">
            Обсудим вашу ситуацию и найдём решение
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            data-oid=".u7hr4:"
          >
            <a
              href="https://t.me/digedon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center justify-center"
              data-oid="v3snimg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                data-oid="gvnm1q8"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.306.02.472z"
                  data-oid="iqbgx03"
                />
              </svg>
              Написать в Telegram
            </a>

            <button
              onClick={() => copyToClipboard("@digedon", "telegram")}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-base font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-all hover:scale-105 inline-flex items-center justify-center"
              data-oid="3gsuna3"
            >
              {copiedTelegram ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="iv5ik77"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      data-oid="k:-qyle"
                    />
                  </svg>
                  Скопировано!
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="nbrs3ge"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      data-oid="ehalg7a"
                    />
                  </svg>
                  Скопировать @digedon
                </>
              )}
            </button>
          </div>

          <div className="border-t border-gray-200 pt-8" data-oid="u-5_8r:">
            <button
              onClick={() => copyToClipboard("7mss@mail.ru", "email")}
              className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center text-sm"
              data-oid="v4gszci"
            >
              {copiedEmail ? (
                <>
                  <svg
                    className="w-4 h-4 mr-2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="rp-h4e-"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      data-oid="1_:xe0."
                    />
                  </svg>
                  Email скопирован
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="26kr6:1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      data-oid="3troxba"
                    />
                  </svg>
                  Показать email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
