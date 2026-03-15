import { Award, Factory, ShieldCheck, Sparkles, Users } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata, getWhatsAppLink } from "@/lib/site";

const values = [
	{
		title: "Qualidade em cada detalhe",
		description: "Acabamento profissional e materiais resistentes para transmitir confiança.",
		icon: ShieldCheck,
	},
	{
		title: "Criatividade com estratégia",
		description: "Design pensado para destacar sua marca e facilitar decisões de compra.",
		icon: Sparkles,
	},
	{
		title: "Atendimento próximo",
		description: "Relacionamento humano e suporte rápido para empresas e organizadores de eventos.",
		icon: Users,
	},
	{
		title: "Compromisso com resultado",
		description: "Prazos realistas, execução consistente e foco total no objetivo do cliente.",
		icon: Award,
	},
];

export const metadata = buildMetadata({
	title: "Sobre Nós | Nova Comunicação Visual",
	description:
		"Conheça a Nova Comunicação Visual, referência em comunicação visual em Pará de Minas com fabricação própria e soluções personalizadas.",
	path: "/sobre-nos",
});

export default function SobreNosPage() {
	return (
		<>
			<section className="bg-brand-soft py-16 sm:py-20">
				<div className="section-shell grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
					<div className="space-y-6">
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-pink">Sobre nós</p>
						<h1 className="font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
							A Nova Comunicação Visual transforma ideias em peças que valorizam marcas e eventos
						</h1>
						<p className="text-base leading-8 text-brand-dark">
							Somos uma empresa de Pará de Minas especializada em fabricação e personalização de produtos de comunicação visual para negócios, escolas, campeonatos e eventos corporativos.
						</p>
						<p className="text-base leading-8 text-brand-dark">
							Nosso maior diferencial é sermos a única fábrica de placas de sinalização em Pará de Minas e região, com controle total da produção e alto padrão de acabamento.
						</p>
					</div>
					<div className="rounded-[2rem] bg-brand-gradient p-8 text-white shadow-glow sm:p-10">
						<div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
							<Factory className="h-7 w-7 text-[#FFD84D]" />
						</div>
						<h2 className="mt-5 font-display text-3xl font-bold leading-tight">Única fábrica de placas na região</h2>
						<p className="mt-4 text-sm leading-7 text-white/85">
							Mais velocidade, personalização real e padrão de qualidade consistente para quem precisa de resultado profissional em comunicação visual.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<ButtonLink href="/contato" variant="secondary">
								Solicitar orçamento
							</ButtonLink>
							<ButtonLink
								href={getWhatsAppLink("Olá! Quero conhecer melhor a Nova Comunicação Visual.")}
								variant="whatsapp"
							>
								Conversar no WhatsApp
							</ButtonLink>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 sm:py-24">
				<div className="section-shell space-y-12">
					<SectionHeading
						eyebrow="Nossa essência"
						title="Valores que orientam cada projeto"
						description="Do atendimento à entrega, mantemos foco em confiança, clareza e resultado para o cliente."
						align="center"
					/>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{values.map((item) => {
							const Icon = item.icon;

							return (
								<article key={item.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-card">
									<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-4 font-display text-xl font-bold text-brand-dark">{item.title}</h3>
									<p className="mt-2 text-sm leading-7 text-brand-dark">{item.description}</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
