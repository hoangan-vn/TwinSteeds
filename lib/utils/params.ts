import { routing } from '@/i18n/routing';

export type LocaleType = 'vi' | 'en';

export interface LocaleParams {
  locale: string;
}

export async function getSafeLocale(params?: Promise<LocaleParams>): Promise<LocaleType> {
  try {
    if (!params) {
      return routing.defaultLocale;
    }

    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    // Validate locale
    if (routing.locales.includes(locale as LocaleType)) {
      return locale as LocaleType;
    }

    // Fallback to default if invalid
    return routing.defaultLocale;
  } catch (error) {
    console.error('Error resolving locale params:', error);
    return routing.defaultLocale;
  }
}

export function isValidLocale(locale: string): locale is LocaleType {
  return routing.locales.includes(locale as LocaleType);
}
