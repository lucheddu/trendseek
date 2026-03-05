export const SITE_TITLE = 'TrendSeek';
export const SITE_DESCRIPTION = 'Discover trending topics, actionable guides, fascinating history and money-making insights, translated in your language.';

export const SUPPORTED_LANGS = [
    { code: 'en', label: 'English', flag: '🇬🇧', flagImg: 'https://flagcdn.com/24x18/gb.png' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹', flagImg: 'https://flagcdn.com/24x18/it.png' },
    { code: 'es', label: 'Español', flag: '🇪🇸', flagImg: 'https://flagcdn.com/24x18/es.png' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', flagImg: 'https://flagcdn.com/24x18/fr.png' },
];

// Map lang code → flag image URL (used by client-side JS to update the header button)
export const LANG_FLAG_URLS: Record<string, string> = Object.fromEntries(
    SUPPORTED_LANGS.map(l => [l.code, l.flagImg])
);
