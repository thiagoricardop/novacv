import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Instagram, MapPin, Phone } from "lucide-react";

import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ServiceCard } from "@/components/cards/service-card";
import { QuoteForm } from "@/components/quote-form";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  differentiators,
  heroHighlights,
  instagramCards,
  portfolioItems,
  processSteps,
  services,
  stats,
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,216,77,.2),transparent_22%)]" />
        <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="space-y-8">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                Comunicação visual em Pará de Minas com produção própria
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[4rem]">
                  A melhor solução em comunicação visual para empresas e eventos em Pará de Minas.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/85">
                  Desenvolvemos peças que fortalecem sua marca, melhoram a experiência do cliente e elevam o padrão visual do seu negócio.
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
                  <li key={highlight} className="flex items-start gap-3 rounded-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD84D]" />
                    <span className="text-sm leading-6 text-white/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="space-y-4 rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-glow backdrop-blur-xl sm:p-6">
              <div className="rounded-3xl bg-white p-5 text-brand-dark">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-pink">Destaque regional</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand-blue">Única fábrica de placas em Pará de Minas e região</h2>
                <p className="mt-3 text-sm leading-7 text-brand-dark/90">
                  Mais agilidade na produção, maior controle de qualidade e liberdade total para personalizar cada projeto.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/20 bg-white/10 p-4">
                    <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="section-shell grid gap-3 rounded-4xl border border-slate-200 bg-white p-5 shadow-card sm:grid-cols-3 sm:p-6">
          <p className="text-sm font-semibold text-brand-dark">Única fábrica de placas de sinalização da região</p>
          <p className="text-sm font-semibold text-brand-dark">Produção própria com acabamento profissional</p>
          <p className="text-sm font-semibold text-brand-dark">Atendimento rápido via WhatsApp</p>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell space-y-12">
          <SectionHeading
            eyebrow="Produtos e serviços"
            title="Soluções visuais para vender mais e posicionar sua marca"
            description="De comunicação para ponto de venda a premiações personalizadas, entregamos projetos com impacto e utilidade real."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.04} />
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
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-brand-dark p-8 text-white shadow-glow sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-pink">Diferencial competitivo</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                A única fábrica de placas de sinalização em Pará de Minas e região.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/85">
                Escolher a Nova CV significa ter parceiro local com qualidade consistente, prazo confiável e personalização completa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/produtos" variant="secondary">
                  Ver produtos
                </ButtonLink>
                <ButtonLink href={getWhatsAppLink("Olá! Quero falar sobre um projeto personalizado.")} variant="whatsapp">
                  Iniciar projeto
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-dark">{item.description}</p>
                  </article>
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
        <div className="section-shell space-y-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Portfólio"
              title="Projetos reais que elevam percepção de valor"
              description="Conheça exemplos de peças entregues para empresas, eventos esportivos e ações corporativas."
            />
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Ver portfólio completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <PortfolioCard key={item.title} {...item} delay={index * 0.04} />
            ))}
          </div>
          <div className="flex justify-center">
            <ButtonLink href="/portfolio" variant="primary">
              Ver todos os produtos no portfólio
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
          <SectionHeading
            eyebrow="Como funciona"
            title="Processo claro do orçamento à entrega"
            description="Fluxo simples para você aprovar mais rápido e receber com segurança."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-4xl border border-slate-200 bg-brand-light p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-brand-dark">{step}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-6 rounded-[2rem] bg-brand-gradient p-8 text-white shadow-glow sm:p-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Instagram"
              title="Acompanhe novidades e projetos publicados"
              description="Veja bastidores, acabamentos e inspirações de peças em produção e entregues."
              theme="inverse"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={siteConfig.instagramUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition hover:brightness-95">
                <Instagram className="h-4 w-4" />
                Acompanhar no Instagram
              </Link>
              <ButtonLink href="/portfolio" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                Ver portfólio
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {instagramCards.slice(0, 2).map((card) => (
              <article key={card.title} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD84D]">Destaque</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/85">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-shell">
        <div className="section-divider" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Solicite seu orçamento"
              title="Fale com a Nova Comunicação Visual e receba atendimento rápido"
              description="Se você busca comunicação visual Pará de Minas, placas de sinalização, troféus personalizados, medalhas ou plaquinhas PIX personalizadas, fale com a equipe."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
                <Phone className="h-6 w-6 text-brand-pink" />
                <p className="mt-4 font-display text-xl font-bold text-brand-dark">Telefones</p>
                <p className="mt-2 text-sm leading-7 text-brand-dark">
                  {siteConfig.phone}
                  <br />
                  {siteConfig.mobile}
                </p>
              </article>
              <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
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
              </article>
            </div>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-brand-pink" />
                <p className="font-display text-xl font-bold text-brand-dark">Atendimento digital ágil</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-brand-dark">
                Envie sua necessidade pelo WhatsApp e receba orientação completa para o melhor formato, material e acabamento.
              </p>
            </article>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
