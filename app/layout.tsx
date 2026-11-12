import "./globals.css";

export const metadata = {
  title: "Matemática Sem Medo",
  description: "Aprender matemática nunca foi tão divertido!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
