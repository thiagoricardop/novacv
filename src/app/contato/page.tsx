import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

import { QuoteForm } from "@/components/quote-form";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata, getWhatsAppLink, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
	title: "Contato | Nova Comunicação Visual",
	description:
		"Entre em contato com a Nova Comunicação Visual em Pará de Minas para solicitar orçamento de plaquinhas PIX, troféus, medalhas e placas de sinalização.",
	path: "/contato",
});

export default function ContatoPage() {
	return (
		<>
			<section className="bg-brand-soft py-16 sm:py-20">
				<div className="section-shell space-y-6">
					<p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">Contato</p>
					<h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
						Solicite seu orçamento e fale com a equipe da Nova Comunicação Visual
					</h1>
					<p className="max-w-3xl text-base leading-8 text-brand-dark">
						Atendimento rápido para empresas, escolas e organizadores de eventos que buscam comunicação visual em Pará de Minas e região.
					</p>
					<div className="flex flex-col gap-3 sm:flex-row">
						<ButtonLink
							href={getWhatsAppLink("Olá! Quero solicitar um orçamento com a Nova Comunicação Visual.")}
							variant="whatsapp"
						>
							Falar no WhatsApp
						</ButtonLink>
						<ButtonLink href="tel:+553732362730" variant="ghost">
							Ligar agora
						</ButtonLink>
					</div>
				</div>
			</section>

			<section className="py-20 sm:py-24">
				<div className="section-shell grid gap-10 lg:grid-cols-[.92fr_1.08fr]">
					<div className="space-y-6">
						<SectionHeading
							eyebrow="Canais de atendimento"
							title="Atendimento local com agilidade e proximidade"
							description="Envie sua necessidade, quantidades e prazo. Retornamos com orientação e proposta sob medida."
						/>

						<article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
							<div className="flex items-start gap-3">
								<Phone className="mt-1 h-5 w-5 text-brand-pink" />
								<div>
									<h2 className="font-display text-xl font-bold text-brand-dark">Telefones</h2>
									<p className="mt-2 text-sm leading-7 text-brand-dark">
										{siteConfig.phone}
										<br />
										{siteConfig.mobile}
									</p>
								</div>
							</div>
						</article>

						<article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
							<div className="flex items-start gap-3">
								<Instagram className="mt-1 h-5 w-5 text-brand-pink" />
								<div>
									<h2 className="font-display text-xl font-bold text-brand-dark">Instagram</h2>
									<Link href={siteConfig.instagramUrl} className="mt-2 inline-flex text-sm font-semibold text-brand-blue">
										{siteConfig.instagramHandle}
									</Link>
								</div>
							</div>
						</article>

						<article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
							<div className="flex items-start gap-3">
								<MapPin className="mt-1 h-5 w-5 text-brand-pink" />
								<div>
									<h2 className="font-display text-xl font-bold text-brand-dark">Endereço</h2>
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
						</article>

						<iframe
							title="Mapa Nova Comunicação Visual"
							src="https://www.google.com/maps?q=Rua+Carmo+da+Mata+69,+Par%C3%A1+de+Minas,+MG&output=embed"
							className="h-64 w-full rounded-4xl border border-slate-200"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<QuoteForm />
				</div>
			</section>
		</>
	);
}
