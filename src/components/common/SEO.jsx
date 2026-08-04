import { useEffect } from 'react';
import { SITE, getAbsoluteUrl } from '../../config/site';

/**
 * SEO Component
 *
 * Dynamically updates head metadata, Open Graph tags, Twitter Cards,
 * canonical links, and JSON-LD structured data per page using SITE configuration.
 */
export function SEO({
  title = SITE.title,
  description = SITE.description,
  keywords = SITE.keywords,
  canonical,
  ogImage,
  ogType = 'website',
  schemas = [],
}) {
  const resolvedCanonical = canonical ? getAbsoluteUrl(canonical) : SITE.url;
  const resolvedOgImage = ogImage ? getAbsoluteUrl(ogImage) : getAbsoluteUrl(SITE.ogImage);

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (nameAttr, valueAttr, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);
    updateMeta('name', 'author', SITE.author);
    updateMeta('name', 'application-name', SITE.name);
    updateMeta('name', 'theme-color', SITE.themeColor);
    updateMeta('name', 'color-scheme', 'light');
    updateMeta(
      'name',
      'robots',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    );

    // 3. Canonical Link
    updateLink('canonical', resolvedCanonical);

    // 4. Open Graph Tags
    updateMeta('property', 'og:type', ogType);
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:image', resolvedOgImage);
    updateMeta('property', 'og:image:width', '1200');
    updateMeta('property', 'og:image:height', '630');
    updateMeta('property', 'og:image:alt', title);
    updateMeta('property', 'og:url', resolvedCanonical);
    updateMeta('property', 'og:site_name', SITE.name);
    updateMeta('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', resolvedOgImage);
    updateMeta('name', 'twitter:creator', SITE.twitterHandle);
    updateMeta('name', 'twitter:site', SITE.twitterHandle);

    // 6. JSON-LD Schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
    existingScripts.forEach((script) => script.remove());

    if (schemas && schemas.length > 0) {
      schemas.forEach((schemaObj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.className = 'dynamic-schema';
        script.text = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, resolvedCanonical, resolvedOgImage, ogType, schemas]);

  return null;
}
