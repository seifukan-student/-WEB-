import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "青楓館高等学院 ポータル",
  description: "青楓館高等学院 教員・生徒向けポータル"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen relative bg-slate-50 text-slate-900">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
        >
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute inset-[-10%] bg-[url('/brand/logo-watermark.png')] bg-no-repeat bg-center bg-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl sm:text-4xl font-black tracking-[0.25em] text-slate-900/40 select-none mix-blend-multiply">
                青楓館高等学院
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

