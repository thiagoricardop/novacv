import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Instagram, MapPin, Phone } from "lucide-react";

import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ServiceCard } from "@/components/cards/service-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { QuoteForm } from "@/components/quote-form";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  differentiators,
  heroHighlights,
  portfolioItems,
  processSteps,
  services,
  testimonials,
} from "@/data/content";
import { buildMetadata, getWhatsAppLink, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Nova Comunicação Visual | Comunicação visual em Pará de Minas",
  description:
    "Plaquinhas PIX personalizadas, placas de sinalização, troféus e medalhas com produção própria em Pará de Minas, MG.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient pb-16 pt-14 text-white sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,216,77,.24),transparent_20%)]" />
        <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <div className="space-y-7">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/95 backdrop-blur">
                Comunicação visual em Pará de Minas com produção própria
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[4rem]">
                  A melhor solução em comunicação visual para empresas e eventos em Pará de Minas.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/85">
                  Plaquinhas PIX personalizadas, placas de sinalização, troféus e medalhas com acabamento profissional para destacar sua marca.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contato" variant="secondary">
                  Solicitar orçamento
                </ButtonLink>
                <ButtonLink href={getWhatsAppLink("Olá! Quero solicitar um orçamento com a Nova Comunicação Visual.")} variant="whatsapp">
                  Falar no WhatsApp
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="grid gap-3 sm:grid-cols-1">
                {heroHighlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 rounded-3xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD84D]" />
                    <span className="text-sm leading-6 text-white/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur-xl sm:p-5">
              <div className="mb-4 rounded-2xl bg-white px-4 py-3 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-pink">Destaque regional</p>
                <p className="mt-1 text-sm font-semibold text-brand-dark">Única fábrica de placas em Pará de Minas e região</p>
              </div>
              <div className="rounded-[1.75rem] bg-white p-5 text-brand-dark sm:p-6">
                <div className="rounded-3xl bg-brand-soft p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">Nova CV</p>
                  <h2 className="mt-2 font-display text-xl font-bold text-brand-blue sm:text-2xl">Produção própria com design moderno e entrega ágil</h2>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Plaquinhas PIX personalizadas",
                    "Placas de sinalização",
                    "Troféus e medalhas",
                    "Comunicação visual para negócios",
                  ].map((item, index) => (
                    <div key={item} className="rounded-3xl border border-slate-200 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-dark">0{index + 1}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-brand-dark sm:max-w-[20ch]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-brand-gradient p-4 text-white">
                  <p className="text-sm font-semibold">Atendimento rápido por WhatsApp e orçamento sem complicação.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="section-shell">
          <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-pink">Confiança regional</p>
            <div className="mt-3 grid gap-3 text-sm font-semibold text-brand-dark sm:grid-cols-3">
              <p>Única fábrica de placas de sinalização em Pará de Minas e região</p>
              <p>Produção própria com controle de qualidade em cada etapa</p>
              <p>Atendimento rápido via WhatsApp para orçamento imediato</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell space-y-12">
          <SectionHeading
            eyebrow="Produtos e serviços"
            title="Soluções que unem impacto visual e resultado comercial"
            description="Cada categoria foi pensada para resolver um objetivo real: vender mais, orientar melhor e valorizar eventos."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.05} />
            ))}
          </div>

          <div className="flex justify-center">
            <ButtonLink href={getWhatsAppLink("Olá! Quero orçamento para comunicação visual.")} variant="whatsapp">
              Solicitar orçamento agora
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell space-y-8 sm:space-y-10">
          <Reveal>
            <div className="rounded-[2rem] bg-brand-dark p-7 text-white shadow-glow sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-pink">Diferencial competitivo</p>
              <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                A única fábrica de placas de sinalização em Pará de Minas e região.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
                Mais controle de qualidade, mais velocidade na produção e liberdade para criar peças exclusivas para empresas e eventos.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-brand-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-dark">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell space-y-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Portfólio"
              title="Projetos pensados para vender mais e valorizar premiações"
              description="Exemplos de peças que ajudam negócios e eventos a transmitirem mais profissionalismo."
            />
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Ver portfólio completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.title} {...item} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Como funciona"
            title="Processo simples, rápido e pensado para facilitar sua compra"
            description="Você envia a ideia, a equipe ajusta o modelo, produz e entrega com praticidade."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-4xl border border-slate-200 bg-brand-light p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-brand-dark">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell space-y-12">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Clientes locais reconhecem a qualidade e o atendimento"
            description="Relatos inspirados em negócios e organizadores da região."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell rounded-[2rem] bg-brand-gradient p-8 text-white shadow-glow sm:p-10">
          <SectionHeading
            eyebrow="Instagram"
            title="Veja trabalhos reais e novidades no perfil da Nova CV"
            description="Acompanhe projetos entregues para empresas e eventos da região e inspire seu próximo pedido."
            theme="inverse"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={siteConfig.instagramUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition hover:brightness-95">
              <Instagram className="h-4 w-4" />
              Acompanhar no Instagram
            </Link>
            <ButtonLink href="/portfolio" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
              Ver portfólio completo
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-start">
          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Dúvidas comuns antes de solicitar orçamento"
              description="Informações rápidas para quem busca comunicação visual Pará de Minas com agilidade e qualidade."
            />
            <div className="mt-8 space-y-4">
              <details className="group rounded-3xl border border-slate-200 p-4" open>
                <summary className="cursor-pointer text-sm font-semibold text-brand-dark">
                  Vocês atendem somente Pará de Minas?
                </summary>
                <p className="mt-3 text-sm leading-7 text-brand-dark">
                  Atendemos Pará de Minas e cidades da região com entrega planejada para manter prazos e qualidade.
                </p>
              </details>
              <details className="group rounded-3xl border border-slate-200 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-brand-dark">
                  Quais produtos vocês produzem com mais frequência?
                </summary>
                <p className="mt-3 text-sm leading-7 text-brand-dark">
                  Plaquinhas PIX personalizadas, placas de sinalização, troféus personalizados e medalhas para eventos esportivos e corporativos.
                </p>
              </details>
              <details className="group rounded-3xl border border-slate-200 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-brand-dark">
                  Como faço para enviar minha referência?
                </summary>
                <p className="mt-3 text-sm leading-7 text-brand-dark">
                  Você pode enviar imagem, logo, texto e quantidade diretamente no WhatsApp e receber orientação da equipe.
                </p>
              </details>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-brand-dark p-8 text-white shadow-glow sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">SEO local</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
              Referência em comunicação visual em Pará de Minas
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Procurando por <strong>placas de sinalização Pará de Minas</strong>, <strong>troféus personalizados Minas Gerais</strong> ou <strong>plaquinhas PIX personalizadas</strong>? A Nova Comunicação Visual oferece fabricação própria, personalização completa e atendimento rápido.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/produtos" variant="secondary">
                Ver produtos
              </ButtonLink>
              <ButtonLink href="/contato" variant="whatsapp">
                Solicitar orçamento
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Solicite seu orçamento"
              title="Fale com a Nova Comunicação Visual e receba atendimento rápido"
              description="Se você busca comunicação visual Pará de Minas, placas de sinalização, troféus personalizados, medalhas ou plaquinhas PIX personalizadas, fale com a equipe."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
                <Phone className="h-6 w-6 text-brand-pink" />
                <p className="mt-4 font-display text-xl font-bold text-brand-dark">Telefones</p>
                <p className="mt-2 text-sm leading-7 text-brand-dark">
                  {siteConfig.phone}
                  <br />
                  {siteConfig.mobile}
                </p>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
                <MapPin className="h-6 w-6 text-brand-pink" />
                <p className="mt-4 font-display text-xl font-bold text-brand-dark">Endereço</p>
                <p className="mt-2 text-sm leading-7 text-brand-dark">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.district}
                  <br />
                  {siteConfig.address.city} / {siteConfig.address.region}
                  <br />
                  CEP {siteConfig.address.postalCode}
                </p>
              </div>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-brand-pink" />
                <p className="font-display text-xl font-bold text-brand-dark">Atendimento digital ágil</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-brand-dark">
                Envie sua necessidade pelo WhatsApp e receba orientação completa para o melhor modelo.
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
