"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { getWhatsAppLink } from "@/lib/site";

const productOptions = [
	"Plaquinha de PIX personalizada",
	"Placa de sinalização",
	"Troféu personalizado",
	"Medalha para evento",
	"Comunicação visual para empresa",
	"Outro",
];

export function QuoteForm() {
	const [name, setName] = useState("");
	const [business, setBusiness] = useState("");
	const [phone, setPhone] = useState("");
	const [product, setProduct] = useState(productOptions[0]);
	const [details, setDetails] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const message = [
			"Olá, Nova Comunicação Visual!",
			"Quero solicitar um orçamento.",
			`Nome: ${name}`,
			`Empresa/Evento: ${business || "Não informado"}`,
			`Telefone: ${phone}`,
			`Produto: ${product}`,
			`Detalhes: ${details || "Sem detalhes adicionais."}`,
		].join("\n");

		window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
	}

	return (
		<form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card sm:p-8">
			<p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-pink">Orçamento rápido</p>
			<h3 className="mt-3 font-display text-3xl font-bold text-brand-dark">Receba sua proposta no WhatsApp</h3>
			<p className="mt-3 text-sm leading-7 text-brand-dark">
				Preencha os dados principais e envie. A equipe retorna com orientação e orçamento personalizado.
			</p>

			<div className="mt-6 grid gap-4">
				<label className="grid gap-2 text-sm font-semibold text-brand-dark">
					Nome
					<input
						required
						value={name}
						onChange={(event) => setName(event.target.value)}
						className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-pink"
						placeholder="Seu nome"
					/>
				</label>

				<label className="grid gap-2 text-sm font-semibold text-brand-dark">
					Empresa ou evento
					<input
						value={business}
						onChange={(event) => setBusiness(event.target.value)}
						className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-pink"
						placeholder="Ex.: Torneio Escolar, Loja X"
					/>
				</label>

				<label className="grid gap-2 text-sm font-semibold text-brand-dark">
					Telefone
					<input
						required
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-pink"
						placeholder="(37) 99999-9999"
					/>
				</label>

				<label className="grid gap-2 text-sm font-semibold text-brand-dark">
					Produto de interesse
					<select
						value={product}
						onChange={(event) => setProduct(event.target.value)}
						className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-pink"
					>
						{productOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>

				<label className="grid gap-2 text-sm font-semibold text-brand-dark">
					Detalhes do pedido
					<textarea
						value={details}
						onChange={(event) => setDetails(event.target.value)}
						rows={4}
						className="resize-none rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-brand-pink"
						placeholder="Quantidade, prazo, referência de arte, acabamento..."
					/>
				</label>
			</div>

			<button
				type="submit"
				className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
			>
				<Send className="h-4 w-4" />
				Enviar pedido no WhatsApp
			</button>
		</form>
	);
}
