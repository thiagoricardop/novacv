"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Nova Comunicação Visual">
          <Image src="/logo.svg" alt="Nova Comunicação Visual" width={42} height={42} className="h-10 w-10" />
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-brand-blue">NOVA</p>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-dark">Comunicação Visual</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-sm font-semibold transition hover:text-brand-pink", active ? "text-brand-pink" : "text-brand-dark")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contato" className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
            Solicitar orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex rounded-full border border-slate-200 p-2 text-brand-blue md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                    active ? "bg-brand-pink/10 text-brand-pink" : "text-brand-dark hover:bg-brand-light",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contato" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-gradient px-5 py-3 text-center text-sm font-semibold text-white">
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
