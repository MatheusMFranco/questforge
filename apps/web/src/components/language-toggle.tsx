import { Check, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
] as const;

export function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage ?? 'pt';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            title={t('language.toggle')}
            aria-label={t('language.toggle')}
            className="cursor-pointer"
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">{t('language.toggle')}</span>
          </Button>
        }
      />

      <DropdownMenuContent align="end">
        {languages.map(({ code, label }) => (
          <DropdownMenuItem key={code} onClick={() => i18n.changeLanguage(code)}>
            {currentLanguage.startsWith(code) && <Check className="mr-2 h-4 w-4" />}
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
