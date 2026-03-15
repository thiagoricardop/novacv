import Link from "next/link";

import { ServiceCard } from "@/components/cards/service-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { audienceItems, differentiators, processSteps, services } from "@/data/content";
import { buildMetadata, getWhatsAppLink } from "@/lib/site";

export const metadata = buildMetadata({
	title: "Produtos | Nova Comunicação Visual",
	description:
		"Plaquinhas PIX personalizadas, placas de sinalização, troféus e medalhas em Pará de Minas com produção própria e acabamento profissional.",
	path: "/produtos",
});

export default function ProdutosPage() {
	return (
		<>
			<section className="bg-brand-gradient py-16 text-white sm:py-20">
				<div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
					<div className="space-y-6">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FFD84D]">Produtos</p>
						<h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
							Comunicação visual completa para empresas e eventos em Pará de Minas
						</h1>
						<p className="max-w-2xl text-base leading-8 text-white/85">
							Produzimos peças personalizadas para aumentar sua visibilidade, orientar ambientes e valorizar premiações com mais impacto visual.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
							<ButtonLink href="/contato" variant="secondary">
								Solicitar orçamento
							</ButtonLink>
							<ButtonLink
								href={getWhatsAppLink("Olá! Quero conhecer os produtos da Nova Comunicação Visual.")}
								variant="whatsapp"
							>
								Falar no WhatsApp
							</ButtonLink>
						</div>
					</div>
					<Reveal>
						<div className="rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur">
							<h2 className="font-display text-2xl font-bold">Atendemos:</h2>
							<div className="mt-5 grid gap-3 sm:grid-cols-2">
								{audienceItems.map((item) => {
									const Icon = item.icon;
									return (
										<div key={item.label} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
											<Icon className="h-5 w-5 text-[#FFD84D]" />
											<span className="text-sm font-semibold text-white">{item.label}</span>
										</div>
									);
								})}
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="py-20 sm:py-24">
				<div className="section-shell space-y-12">
					<SectionHeading
						eyebrow="Linha de produtos"
						title="Soluções personalizadas para vender mais e fortalecer sua marca"
						description="Trabalhamos com fabricação própria para garantir qualidade, consistência visual e prazo competitivo."
					/>
					<div className="grid gap-6 lg:grid-cols-3">
						{services.map((service, index) => (
							<ServiceCard key={service.title} {...service} delay={index * 0.04} />
						))}
					</div>
				</div>
			</section>

			<section className="py-20 sm:py-24">
				<div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
					<div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
						<SectionHeading
							eyebrow="Diferenciais"
							title="Por que escolher a Nova Comunicação Visual"
							description="Somos referência em comunicação visual Pará de Minas para negócios que querem agilidade e acabamento superior."
						/>
						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							{differentiators.map((item) => {
								const Icon = item.icon;
								return (
									<div key={item.title} className="rounded-3xl border border-slate-200 p-4">
										<Icon className="h-5 w-5 text-brand-pink" />
										<p className="mt-2 text-sm font-semibold text-brand-dark">{item.title}</p>
										<p className="mt-1 text-xs leading-6 text-brand-dark/90">{item.description}</p>
									</div>
								);
							})}
						</div>
					</div>

					<div className="rounded-[2rem] bg-brand-dark p-8 text-white shadow-glow sm:p-10">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">Como funciona</p>
						<h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
							Processo simples para você comprar com segurança
						</h2>
						<div className="mt-8 space-y-3">
							{processSteps.map((step, index) => (
								<div key={step} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
									<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white">
										{index + 1}
									</span>
									<p className="text-sm font-semibold text-white/90">{step}</p>
								</div>
							))}
						</div>
						<Link
							href={getWhatsAppLink("Olá! Quero iniciar um pedido com a Nova Comunicação Visual.")}
							className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5"
						>
							Iniciar pedido pelo WhatsApp
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
