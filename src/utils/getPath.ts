import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  /*
   * Logic to handle i18n structure:
   * - english (default): src/content/blog/en/post.md -> /post
   * - polish: src/content/blog/pl/post.md -> /pl/post
   */
  const segments = filePath?.replace(BLOG_PATH, "").split("/").filter(Boolean) || [];

  // Detect locale (first segment)
  const locale = segments[0] === "en" || segments[0] === "pl" ? segments[0] : "en";

  // Remove locale and underscores from segments
  const validSegments = segments
    .filter(path => !path.startsWith("_") && path !== "pl" && path !== "en")
    .map(segment => slugifyStr(segment).replace(/\.mdx?$/, ""));

  // If we just want the slug (no base), return joined segments
  if (!includeBase) {
    return validSegments.length > 0 ? validSegments.join("/") : slugifyStr(id.replace(/\.mdx?$/, ""));
  }

  // Determine base path
  const basePath = locale === "pl" ? "/pl" : "";

  return [basePath, ...validSegments].join("/");
}
