import type { LucideIcon } from "lucide-react";
import {
	Award,
	BadgeCheck,
	Bike,
	Building2,
	Clock3,
	Medal,
	Palette,
	ShieldCheck,
	Sparkles,
	Store,
	Trophy,
	WalletCards,
} from "lucide-react";

export type NavItem = {
	label: string;
	href: string;
};

export type ServiceItem = {
	title: string;
	description: string;
	bullets: string[];
	icon: LucideIcon;
};

export type DifferentiatorItem = {
	title: string;
	description: string;
	icon: LucideIcon;
};

export type PortfolioItem = {
	title: string;
	category: string;
	description: string;
	imageHint: string;
	images?: string[];
	gradient: string;
	size: "sm" | "md" | "lg";
};

export type TestimonialItem = {
	name: string;
	business: string;
	text: string;
	city: string;
};

export const navigation: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Produtos", href: "/produtos" },
	{ label: "Portfólio", href: "/portfolio" },
	{ label: "Sobre Nós", href: "/sobre-nos" },
	{ label: "Contato", href: "/contato" },
];

export const heroHighlights = [
	"Única fábrica de placas de sinalização em Pará de Minas e região",
	"Produção própria com personalização exclusiva",
	"Atendimento rápido com orçamento pelo WhatsApp",
	"Materiais resistentes e acabamento profissional",
];

export const stats = [
	{ value: "100%", label: "Produção própria local" },
	{ value: "5 etapas", label: "Processo simples até a entrega" },
	{ value: "+1 região", label: "Atendimento para toda a região" },
];

export const services: ServiceItem[] = [
	{
		title: "Plaquinhas de PIX personalizadas",
		description:
			"Aumente a praticidade no pagamento e a credibilidade da sua marca com plaquinhas resistentes, modernas e exclusivas.",
		bullets: ["Modelos para balcão e caixa", "Identidade visual personalizada"],
		icon: WalletCards,
	},
	{
		title: "Placas de sinalização",
		description:
			"Soluções para segurança, orientação e organização de ambientes comerciais, corporativos e industriais.",
		bullets: ["Normas e padronização", "Durabilidade para uso contínuo"],
		icon: ShieldCheck,
	},
	{
		title: "Troféus personalizados",
		description:
			"Troféus criativos para eventos esportivos, escolares e corporativos com design que valoriza cada conquista.",
		bullets: ["Projetos exclusivos", "Alto impacto visual"],
		icon: Trophy,
	},
	{
		title: "Medalhas para eventos",
		description:
			"Medalhas personalizadas para campeonatos e premiações com acabamento caprichado e identidade do evento.",
		bullets: ["Fitas e formatos variados", "Ideal para torneios e escolas"],
		icon: Medal,
	},
	{
		title: "Comunicação visual para empresas",
		description:
			"Materiais sob medida para fortalecer presença de marca em lojas, restaurantes, escritórios e comércios locais.",
		bullets: ["Projetos sob demanda", "Foco em conversão e visibilidade"],
		icon: Building2,
	},
];

export const differentiators: DifferentiatorItem[] = [
	{
		title: "Produção própria",
		description: "Controle de qualidade do início ao fim para garantir padronização e agilidade.",
		icon: BadgeCheck,
	},
	{
		title: "Personalização exclusiva",
		description: "Cada peça é criada para o seu objetivo, identidade visual e público.",
		icon: Palette,
	},
	{
		title: "Material resistente",
		description: "Produtos pensados para durar e manter a estética profissional por mais tempo.",
		icon: ShieldCheck,
	},
	{
		title: "Ótimo acabamento",
		description: "Detalhes bem executados para transmitir confiança e valor à sua marca.",
		icon: Sparkles,
	},
	{
		title: "Atendimento rápido",
		description: "Retorno ágil no WhatsApp para facilitar escolha de modelo e aprovação.",
		icon: Clock3,
	},
	{
		title: "Entrega para toda a região",
		description: "Logística prática para Pará de Minas e cidades próximas, com compromisso no prazo.",
		icon: Bike,
	},
];

export const portfolioItems: PortfolioItem[] = [
	{
		title: "Plaquinhas PIX com identidade visual",
		category: "Plaquinhas PIX",
		description: "Modelos em acrílico com design vibrante para agilizar pagamentos e valorizar o ponto de venda.",
		imageHint: "Plaquinha PIX personalizada em balcão comercial",
		images: ["/PlaquinhaPIX.jpg"],
		gradient: "from-[#2E3192] via-[#7C3AED] to-[#E91E63]",
		size: "md",
	},
	{
		title: "Troféus para campeonato esportivo",
		category: "Troféus",
		description: "Peças personalizadas para torneios escolares e corporativos com visual de destaque.",
		imageHint: "Troféus personalizados para evento esportivo",
		images: ["/TrofeuEsportivo2.jpg", "/TrofeuMulher.jpg", "/TrofeuTorneio.png", "/Trofeu3.jpg"],
		gradient: "from-[#2E3192] via-[#4F46E5] to-[#60A5FA]",
		size: "lg",
	},
	{
		title: "Placas de segurança e hidrante",
		category: "Sinalização",
		description: "Sinalização técnica para empresas com foco em organização, segurança e conformidade.",
		imageHint: "Placas de sinalização de segurança empresarial",
		images: ["/Normasdeseguranca.jpg", "/SecuritySigns1.jpg", "/SecuritySigns2.jpg", "/SegurancaElevador.jpg", "/banheiroF.jpg", "/BanheiroM.jpg"],
		gradient: "from-[#1E293B] via-[#2E3192] to-[#4F46E5]",
		size: "lg",
	},
	{
		title: "Premiações corporativas",
		category: "Eventos corporativos",
		description: "Troféus e placas de reconhecimento para campanhas internas e eventos empresariais.",
		imageHint: "Prêmios corporativos personalizados",
		images: ["/PremiacaoCorporativa.png"],
		gradient: "from-[#0EA5E9] via-[#2E3192] to-[#7C3AED]",
		size: "sm",
	},
	{
		title: "Adesivo DTF em alto relevo",
		category: "Comunicação visual",
		description: "Adesivos de alto impacto para copos, brindes e materiais promocionais com ótimo acabamento.",
		imageHint: "Adesivo DTF UV com aplicação em produtos",
		images: ["/Adesivo.png", "/Adesivo2.png"],
		gradient: "from-[#0F172A] via-[#2E3192] to-[#EC4899]",
		size: "md",
	},
	{
		title: "Medalhas e troféus para torneios",
		category: "Eventos esportivos",
		description: "Kits completos para premiação esportiva com identidade do campeonato.",
		imageHint: "Premiação para evento esportivo escolar e regional",
		images: ["/Medalhas.jpg", "/medalhas2.jpg", "/TrofeuTorneio.png", "/TrofeuEsportivo2.jpg"],
		gradient: "from-[#0B132B] via-[#1C2541] to-[#E91E63]",
		size: "lg",
	},
];

export const processSteps = [
	"Contato via WhatsApp",
	"Escolha do modelo",
	"Personalização do produto",
	"Produção",
	"Entrega",
];

export const testimonials: TestimonialItem[] = [];

export const instagramCards = [
	{
		title: "Projetos reais",
		text: "Inspire-se com trabalhos publicados diariamente no perfil oficial.",
	},
	{
		title: "Novidades e tendências",
		text: "Acompanhe novos materiais, acabamentos e ideias para sua empresa.",
	},
	{
		title: "Bastidores da produção",
		text: "Veja como cada peça é criada com cuidado e qualidade.",
	},
];

export const audienceItems = [
	{ label: "Comércios locais", icon: Store },
	{ label: "Restaurantes", icon: Store },
	{ label: "Escolas", icon: Award },
	{ label: "Eventos esportivos", icon: Trophy },
	{ label: "Eventos corporativos", icon: Building2 },
];
