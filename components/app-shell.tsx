import Link from "next/link";
import { Sidebar } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen lg:flex"><Sidebar /><div className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</div><nav className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-5 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden" aria-label="Navegação móvel">{[{ href: "/", label: "Início", icon: "⌂" }, { href: "/academia", label: "Academia", icon: "▦" }, { href: "/jogos", label: "Jogos", icon: "♧" }, { href: "/professor-virtual", label: "Tutor", icon: "◉" }, { href: "/perfil", label: "Perfil", icon: "○" }].map((item) => <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-slate-600"><span className="text-xl" aria-hidden="true">{item.icon}</span>{item.label}</Link>)}</nav></div>;
}
