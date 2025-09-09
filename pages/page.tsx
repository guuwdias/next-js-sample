"use client";
import type { Metadata } from "next";
import Script from "next/script";
import React, { useMemo, useState } from "react";

// Next.js (App Router) — página única da Landing Page
// Coloque este arquivo em: /app/page.tsx
// Requisitos: Tailwind configurado (postcss + globals.css) e fonte/interações já padrão do seu projeto.

export const metadata: Metadata = {
  title: "Certificado Digital PJ A1 — Emissão Online | Sua Empresa",
  description:
    "Compre seu Certificado Digital PJ A1 (e-CNPJ) com emissão por videoconferência. Rápido, seguro e compatível com NF-e/NFS-e. Oferta para novos CNPJs.",
  openGraph: {
    title: "Certificado Digital PJ A1 — Emissão Online | Sua Empresa",
    description:
      "Compre seu Certificado Digital PJ A1 (e-CNPJ) com emissão por videoconferência. Rápido, seguro e compatível com NF-e/NFS-e.",
    type: "website",
  },
};

export default function Page() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", cnpj: "" });
  const [submitted, setSubmitted] = useState(false);

  const benefits = useMemo(
    () => [
      {
        title: "Assine NF-e e contratos",
        desc: "Autenticação ICP-Brasil para emitir notas fiscais eletrônicas e assinar documentos com validade jurídica.",
        icon: (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="4" width="18" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        title: "Em até 30 minutos",
        desc: "Validação por videoconferência: rápida, segura e sem sair do seu escritório.",
        icon: (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M4 7a3 3 0 013-3h6a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 10l-4 2v0l4 2V10z" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: "Segurança ICP-Brasil",
        desc: "Conformidade com as políticas do ITI/ICP-Brasil e LGPD, com criptografia de ponta a ponta.",
        icon: (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9.5 12.5l1.8 1.8 3.2-3.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Suporte humanizado",
        desc: "Time especialista para tirar dúvidas antes, durante e depois da emissão.",
        icon: (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM3 21a7 7 0 0118 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
    []
  );

  const faqs = [
    {
      q: "O que é o Certificado Digital PJ A1?",
      a: "É um arquivo digital emitido para a pessoa jurídica (CNPJ) que permite assinar NF-e, NFS-e, e documentos eletrônicos com validade jurídica por 12 meses.",
    },
    {
      q: "É necessário ir até um posto?",
      a: "Não. A validação pode ser feita por videoconferência com apresentação dos documentos exigidos pela ICP-Brasil.",
    },
    {
      q: "Em quanto tempo recebo?",
      a: "Após a validação e conferência de documentos, a emissão costuma levar minutos. Em geral, você utiliza no mesmo dia.",
    },
    {
      q: "Funciona em qualquer sistema de NF?",
      a: "Sim. O A1 é compatível com a maioria dos ERPs e prefeituras. Enviamos instruções para instalar no seu emissor.",
    },
  ];

  const price = {
    valuePromo: 139.0,
    valueOriginal: 229.0,
    features: [
      "Validade: 12 meses",
      "Emissão 100% online",
      "Instalação assistida",
      "Compatível com NF-e / NFS-e / e-CNPJ",
      "Atendimento em horário comercial",
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integração: chame sua API (Route Handler /api/lead) ou n8n aqui.
    setSubmitted(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Certificado Digital PJ A1",
    description:
      "Certificado Digital e-CNPJ A1 para emissão de NF-e/NFS-e e assinaturas com validade jurídica. Emissão online por videoconferência.",
    brand: { "@type": "Brand", name: "Sua Empresa de Certificação" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: 139.0,
      availability: "https://schema.org/InStock",
      url: "https://seu-checkout.com/pj-a1",
      priceValidUntil: new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 10),
    },
  } as const;

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* JSON-LD (SEO) */}
      <Script
        id="product-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="font-semibold tracking-tight">Certificados • PJ A1</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#preco" className="hover:opacity-70 transition">Preço</a>
            <a href="#como-funciona" className="hover:opacity-70 transition">Como funciona</a>
            <a href="#faq" className="hover:opacity-70 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5500000000000?text=Quero%20Certificado%20PJ%20A1"
              className="hidden sm:inline-flex rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#checkout"
              className="inline-flex items-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Certificado Digital <span className="inline-block bg-black text-white px-2.5 py-1 rounded-xl">PJ A1</span>
                <br /> rápido, seguro e 100% online.
              </h1>
              <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
                Emita NF-e e assine contratos com validade jurídica. Validação por videoconferência
                e ativação no mesmo dia.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#preco" className="inline-flex items-center rounded-2xl bg-black px-5 py-3 text-white hover:bg-neutral-800">
                  Ver oferta
                </a>
                <a href="#como-funciona" className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
                  Como funciona
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldIcon />
                  ICP-Brasil & LGPD
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon />
                  Em até 30 min
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon />
                  Suporte especialista
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-tr from-neutral-200 via-neutral-100 to-white" />
              <MockupCard />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 p-5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-2xl bg-neutral-100 flex items-center justify-center mb-3">{b.icon}</div>
              <h3 className="font-medium tracking-tight">{b.title}</h3>
              <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Oferta / Preço */}
      <section id="preco" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Oferta exclusiva para novos CNPJs</h2>
            <p className="mt-4 text-neutral-600">
              Garanta seu e-CNPJ A1 com emissão online e suporte para instalação. Perfeito para empresas que
              precisam emitir NF-e e assinar documentos digitais com rapidez e segurança.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              {price.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-black" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl border border-neutral-200 p-7 shadow-sm">
              <p className="text-sm text-neutral-500 line-through">De R$ {price.valueOriginal.toFixed(2)}</p>
              <div className="flex items-end gap-2 mt-1">
                <p className="text-5xl font-semibold tracking-tight">R$ {price.valuePromo.toFixed(2)}</p>
                <span className="text-sm text-neutral-500 mb-1">à vista no Pix</span>
              </div>
              <p className="text-neutral-600 mt-2">ou 12x no cartão • Boleto/Pix</p>
              <div className="mt-6 grid gap-3">
                <a id="checkout" href="https://seu-checkout.com/pj-a1" className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-white hover:bg-neutral-800">
                  Comprar agora
                </a>
                <a href="https://wa.me/5500000000000?text=Tenho%20d%C3%BAvidas%20sobre%20o%20PJ%20A1" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
                  Tirar dúvidas no WhatsApp
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
                {/* Substitua por Image otimizada se tiver o arquivo local */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ICP-Brasil_logo.svg/320px-ICP-Brasil_logo.svg.png" alt="ICP-Brasil" className="h-6 object-contain" />
                <span>LGPD • Emissão por vídeo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Como funciona</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Compra e agendamento",
              desc: "Finalize o checkout e escolha o melhor horário para sua validação por vídeo.",
            },
            {
              step: "2",
              title: "Validação de documentos",
              desc: "Apresente documentos do responsável legal e do CNPJ conforme regras do ITI.",
            },
            {
              step: "3",
              title: "Emissão e instalação",
              desc: "Geramos seu A1 e auxiliamos na instalação no seu ERP e emissor de NF.",
            },
          ].map((s, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white font-medium">{s.step}</span>
                <h3 className="font-medium tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-3 text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead capture */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-neutral-200 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Prefere falar com um especialista?</h2>
              <p className="mt-3 text-neutral-600">Preencha os dados e receba atendimento rápido no WhatsApp.</p>
              <ul className="mt-4 text-sm text-neutral-600 space-y-1">
                <li>• Resposta em minutos</li>
                <li>• Checklist de documentos</li>
                <li>• Suporte para instalação</li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="block text-sm mb-1">Nome</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="voce@empresa.com.br"
                    className="w-full rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Telefone (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    placeholder="(31) 9 0000-0000"
                    className="w-full rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">CNPJ</label>
                <input
                  type="text"
                  required
                  value={form.cnpj}
                  onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
                  placeholder="00.000.000/0001-00"
                  className="w-full rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-white hover:bg-neutral-800"
              >
                Receber contato no WhatsApp
              </button>
              {submitted && (
                <p className="text-sm text-emerald-600">Obrigado! Em instantes nossa equipe entrará em contato.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Perguntas frequentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <details key={i} className="group rounded-3xl border border-neutral-200 p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium tracking-tight">{item.q}</span>
                <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-600 group-open:rotate-180 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} Sua Empresa de Certificação. Todos os direitos reservados.</p>
            <p className="mt-1">Emissão conforme políticas ICP-Brasil / ITI. Dados tratados segundo a LGPD.</p>
          </div>
          <div className="flex md:justify-end gap-3 text-sm">
            <a href="#" className="hover:opacity-70">Política de Privacidade</a>
            <a href="#" className="hover:opacity-70">Termos de Uso</a>
            <a href="mailto:contato@suaempresa.com" className="hover:opacity-70">Suporte</a>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20meu%20Certificado%20PJ%20A1"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-white shadow-lg hover:bg-emerald-600"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
          <path d="M19.11 17.23c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.56.12-.12.28-.32.41-.49.14-.16.18-.28.27-.46.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2-.22-.53-.44-.46-.61-.47-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.31 0 1.36.99 2.67 1.13 2.86.14.18 1.95 2.98 4.73 4.19.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.2-.54-.34zM16.04 29C8.84 29 3 23.16 3 15.96 3 8.84 8.84 3 16.04 3 23.16 3 29 8.84 29 15.96 29 23.16 23.16 29 16.04 29z" fill="currentColor" />
        </svg>
        WhatsApp
      </a>
    </main>
  );
}

function LogoMark() {
  return (
    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" fill="currentColor" />
      </svg>
    </div>
  );
}

function MockupCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl">
        <div className="h-48 rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-white border border-neutral-200 flex items-center justify-center">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs text-white">
              <ShieldIcon /> PJ A1
            </span>
            <p className="mt-3 text-lg font-medium">Seu Certificado Digital</p>
            <p className="text-sm text-neutral-500">Arquivo .pfx seguro e compatível com NF-e</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="text-neutral-500">Validade</div>
            <div className="mt-1 font-medium">12 meses</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="text-neutral-500">Entrega</div>
            <div className="mt-1 font-medium">No mesmo dia</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="text-neutral-500">Compatível</div>
            <div className="mt-1 font-medium">NF-e / NFS-e</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <div className="text-neutral-500">Suporte</div>
            <div className="mt-1 font-medium">Especialista</div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] rounded-3xl bg-black text-white px-5 py-3 text-sm shadow-2xl">
        Oferta de lançamento: <span className="font-semibold">R$ 139,00</span> (de R$ 229,00)
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 3l2.9 5.9L21 10.2l-4.5 4.4L17.8 21 12 18.3 6.2 21l1.3-6.4L3 10.2l6.1-1.3L12 3z" fill="currentColor" />
    </svg>
  );
}
