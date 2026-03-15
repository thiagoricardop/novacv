"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { getWhatsAppLink } from "@/lib/site";

export function WhatsAppFloat() {
	return (
		<div className="fixed bottom-5 right-5 z-[60]">
			<span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 blur-sm animate-pulseRing" />
			<Link
				href={getWhatsAppLink("Olá! Vim pelo site e quero solicitar um orçamento.")}
				aria-label="Falar no WhatsApp"
				className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105"
			>
				<MessageCircle className="h-7 w-7" />
			</Link>
		</div>
	);
}
