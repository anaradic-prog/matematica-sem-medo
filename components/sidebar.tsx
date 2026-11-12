import Link from "next/link";
import { navItems } from "@/lib/content";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-[260px] shrink-0 border-r border-slate-200/80 bg-white px-5 py-7 lg:flex lg:flex-col">
      <Link href="/" className="mb-9 flex items-center gap-3" aria-label="Matemática Sem Medo, início">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-xl font-black text-white">M</span>
        <span><span className="block text-xs font-bold uppercase tracking-[.15em] text-slate-400">Aprender com leveza</span><span className="text-lg font-black">Sem Medo</span></span>
      </Link>
      <nav className="space-y-1" aria-label="Navegação principal">
        {navItems.map((item, index) => <Link key={item.href + item.label} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition hover:bg-lilac hover:text-brand ${index === 0 ? "bg-lilac text-brand" : "text-slate-600"}`}><span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-base">{item.icon}</span>{item.label}</Link>)}
      </nav>
      <div className="mt-auto rounded-2xl bg-[#f0efff] p-4">
        <div className="text-2xl" aria-hidden="true">🌱</div>
        <p className="mt-2 text-sm font-bold">Um pouquinho todo dia</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">Cada exercício é um passo a mais. Você consegue!</p>
      </div>
    </aside>
  );
}
