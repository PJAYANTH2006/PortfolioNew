import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <span>Built with Next.js, Tailwind, and Framer Motion.</span>
      </div>
    </footer>
  );
}
