import { LanguageToggle } from '@/components/language-toggle';
import { ModeToggle } from '@/components/mode-toggle';

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-background text-foreground">
      <LanguageToggle />
      <ModeToggle />
    </main>
  );
}
