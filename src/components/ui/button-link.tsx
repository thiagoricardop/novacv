import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
	href: string;
	children: ReactNode;
	className?: string;
	variant?: "primary" | "secondary" | "whatsapp" | "ghost";
};

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
	primary: "bg-brand-gradient text-white shadow-glow hover:brightness-110",
	secondary: "bg-white text-brand-blue hover:bg-white/90",
	whatsapp: "bg-[#25D366] text-white hover:brightness-110",
	ghost: "border border-slate-300 text-brand-dark hover:bg-brand-light",
};

export function ButtonLink({ href, children, className, variant = "primary" }: ButtonLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200",
				variants[variant],
				className,
			)}
		>
			{children}
		</Link>
	);
}
