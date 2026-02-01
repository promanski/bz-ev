import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getPreferredLanguage, shouldRedirectToPolish } from "../src/utils/browserLang";

describe("Language Detection", () => {
    let originalNavigator: any;

    beforeEach(() => {
        originalNavigator = global.navigator;
    });

    afterEach(() => {
        global.navigator = originalNavigator;
    });

    it("should detect Polish from navigator", () => {
        vi.stubGlobal("navigator", { language: "pl-PL", languages: ["pl-PL"] });
        expect(getPreferredLanguage()).toBe("pl");
    });

    it("should detect English from navigator", () => {
        vi.stubGlobal("navigator", { language: "en-US", languages: ["en-US"] });
        expect(getPreferredLanguage()).toBe("en");
    });

    it("should default to English if not Polish (simplified logic for this blog)", () => {
        vi.stubGlobal("navigator", { language: "fr-FR", languages: ["fr-FR"] });
        expect(getPreferredLanguage()).toBe("en");
    });
});

describe("Redirection Logic", () => {
    it("should redirect to Polish if preferred lang is PL and current path is root", () => {
        expect(shouldRedirectToPolish("/", "pl")).toBe(true);
    });

    it("should NOT redirect if already on Polish path", () => {
        expect(shouldRedirectToPolish("/pl/post", "pl")).toBe(false);
    });

    it("should NOT redirect if preferred lang is EN", () => {
        expect(shouldRedirectToPolish("/", "en")).toBe(false);
    });
});
