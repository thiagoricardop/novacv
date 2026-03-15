import { PortfolioMasonry } from "@/components/portfolio-masonry";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioItems } from "@/data/content";
import { buildMetadata, getWhatsAppLink } from "@/lib/site";

export const metadata = buildMetadata({
	title: "Portfólio | Nova Comunicação Visual",
	description:
		"Conheça projetos de troféus personalizados, medalhas, plaquinhas PIX e placas de sinalização em Pará de Minas e região.",
	path: "/portfolio",
});

export default function PortfolioPage() {
	return (
		<>
			<section className="relative overflow-hidden bg-brand-soft py-16 sm:py-20">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,49,146,.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(233,30,99,.14),transparent_32%)]" />
				<div className="section-shell space-y-6">
					<p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">Portfólio</p>
					<h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
						Trabalhos que comprovam nossa qualidade em comunicação visual
					</h1>
					<p className="max-w-3xl text-base leading-8 text-brand-dark">
						Veja projetos de comunicação visual em Pará de Minas com foco em presença de marca, clareza visual e valorização de eventos.
					</p>
					<div className="flex flex-col gap-3 sm:flex-row">
						<ButtonLink href="/contato">Solicitar projeto semelhante</ButtonLink>
						<ButtonLink
							href={getWhatsAppLink("Olá! Vi o portfólio e quero um orçamento personalizado.")}
							variant="whatsapp"
						>
							Orçar no WhatsApp
						</ButtonLink>
					</div>
				</div>
			</section>

			<section className="py-20 sm:py-24">
				<div className="section-shell space-y-12">
					<SectionHeading
						eyebrow="Galeria premium"
						title="Explore projetos por categoria"
						description="Use os filtros para navegar por plaquinhas PIX personalizadas, placas de sinalização, troféus e medalhas para eventos."
					/>
					<PortfolioMasonry items={portfolioItems} />
				</div>
			</section>

			<section className="pb-20 sm:pb-24">
				<div className="section-shell rounded-[2rem] bg-brand-gradient p-8 text-white shadow-glow sm:p-10">
					<SectionHeading
						eyebrow="Pronto para seu projeto?"
						title="Envie sua ideia e receba uma proposta sob medida"
						description="A equipe da Nova Comunicação Visual orienta no melhor formato para seu objetivo e entrega com qualidade profissional."
						theme="inverse"
					/>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<ButtonLink href="/contato" variant="secondary">
							Solicitar orçamento
						</ButtonLink>
						<ButtonLink
							href={getWhatsAppLink("Olá! Quero enviar minha referência para orçamento.")}
							variant="whatsapp"
						>
							Falar no WhatsApp
						</ButtonLink>
					</div>
				</div>
			</section>
		</>
	);
}
