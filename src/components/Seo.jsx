import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* ============================================================
   Seo — per-page <head> manager for a CRA single-page app.
   The static tags in public/index.html are the site defaults;
   this component mutates those same tags in place (no
   duplicates) and restores the defaults on unmount.
   ============================================================ */

export const SITE_URL = 'https://cyberaries.com';
export const SITE_NAME = 'CyberAries';
export const DEFAULT_TITLE = 'CyberAries | Cybersecurity, VAPT & Compliance Services India';
export const DEFAULT_DESCRIPTION =
  'CyberAries provides RBI Cyber Security Framework audits, VAPT testing, network security, and compliance consulting for banks, NBFCs, and enterprises in India.';

const upsertMeta = (attrName, attrValue, content) => {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const applyMeta = ({ title, description, url, robots }) => {
  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  if (url) {
    upsertLink('canonical', url);
    upsertMeta('property', 'og:url', url);
  }
};

/**
 * @param {string}  title       Page <title> (also og:title / twitter:title)
 * @param {string}  description Meta description (also og / twitter description)
 * @param {string}  path        Route path ("/privacy-policy"); builds the
 *                              self-referencing canonical URL. Omit to leave
 *                              the canonical to CanonicalSync.
 * @param {boolean} noindex     Emit "noindex, follow" for placeholder pages.
 * @param {object|object[]} jsonLd  Schema.org block(s) injected as
 *                              application/ld+json and removed on unmount.
 */
const Seo = ({ title, description, path, noindex = false, jsonLd = null }) => {
  // Stringify so the effect depends on content, not object identity.
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    applyMeta({
      title: title || DEFAULT_TITLE,
      description: description || DEFAULT_DESCRIPTION,
      url: path ? `${SITE_URL}${path}` : null,
      robots: noindex ? 'noindex, follow' : 'index, follow',
    });

    const scripts = [];
    if (jsonLdString) {
      const blocks = JSON.parse(jsonLdString);
      (Array.isArray(blocks) ? blocks : [blocks]).forEach((block) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.setAttribute('data-seo-jsonld', 'true');
        s.text = JSON.stringify(block);
        document.head.appendChild(s);
        scripts.push(s);
      });
    }

    return () => {
      applyMeta({
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        url: null,
        robots: 'index, follow',
      });
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, noindex, jsonLdString]);

  return null;
};

/* Keeps rel=canonical and og:url self-referencing on every route change,
   replacing the hardcoded homepage canonical that previously marked every
   page as a duplicate of "/". Mount once inside the Router. */
export const CanonicalSync = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/\/+$/, '');
    const url = cleanPath === '' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;
    upsertLink('canonical', url);
    upsertMeta('property', 'og:url', url);
  }, [pathname]);

  return null;
};

export default Seo;
