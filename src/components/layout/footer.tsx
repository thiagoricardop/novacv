import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Instagram, MapPin, Phone } from "lucide-react";

import { navigation } from "@/data/content";
import { getGoogleMapsEmbedLink, getGoogleMapsLink, getWhatsAppLink, siteConfig } from "@/lib/site";

export function Footer() {
  const mapsLink = getGoogleMapsLink();
  const mapsEmbedLink = getGoogleMapsEmbedLink();

  return (
    <footer className="border-t border-white/10 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_.8fr_1.1fr] lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt={siteConfig.name} width={44} height={44} />
            <div>
              <p className="font-display text-xl font-bold text-white">Nova Comunicação Visual</p>
              <p className="text-sm text-slate-300">Soluções visuais com produção própria.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-200">
            Especialistas em plaquinhas PIX personalizadas, placas de sinalização, troféus, medalhas e comunicação visual para empresas em Pará de Minas e região.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={getWhatsAppLink("Olá! Quero solicitar um orçamento.")}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver Instagram
            </Link>
          </div>
        </div>

        <div>
          <p className="font-display text-lg font-bold text-white">Páginas</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-pink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="font-display text-lg font-bold text-white">Contato</p>
            <ul className="mt-4 space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-pink" />
                <div>
                  <p>{siteConfig.phone}</p>
                  <p>{siteConfig.mobile}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 text-brand-pink" />
                <Link href={siteConfig.instagramUrl} className="transition hover:text-brand-pink">
                  {siteConfig.instagramHandle}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-pink" />
                <div>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.district}</p>
                  <p>
                    {siteConfig.address.city} / {siteConfig.address.region}
                  </p>
                  <p>CEP {siteConfig.address.postalCode}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-display text-lg font-bold text-white">Localização</p>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Mapa Nova Comunicação Visual"
              src={mapsEmbedLink}
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Link
            href={mapsLink}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir no Google Maps
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Nova Comunicação Visual. Todos os direitos reservados.
      </div>
    </footer>
  );
}
