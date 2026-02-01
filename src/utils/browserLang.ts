export function getPreferredLanguage(acceptLanguageHeader?: string): "pl" | "en" {
    if (typeof navigator !== "undefined") {
        const lang = navigator.language || navigator.languages?.[0];
        if (lang?.startsWith("pl")) return "pl";
        return "en";
    }

    // Server-side fallback (if headers provided)
    if (acceptLanguageHeader) {
        if (acceptLanguageHeader.includes("pl")) return "pl";
    }

    return "en"; // Default
}

export function shouldRedirectToPolish(currentPath: string, preferredLang: "pl" | "en"): boolean {
    if (currentPath.startsWith("/pl")) return false; // Already on Polish
    return preferredLang === "pl";
}
