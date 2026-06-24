import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = 'https://gregcomstock.com';

function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMetaName(name, content) {
  const el = upsert(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  });
  el.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  const el = upsert(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  });
  el.setAttribute('content', content);
}

function setCanonical(href) {
  const el = upsert('link[rel="canonical"]', () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  });
  el.setAttribute('href', href);
}

/**
 * Per-route document title + description. Updates the browser tab and the tags Google reads
 * when it renders the page (Googlebot runs JS). Note: non-JS social scrapers (LinkedIn,
 * Slack, etc.) only see the static tags in index.html, so deep-link previews need prerendering;
 * this covers tab titles + search.
 */
export function useDocumentMeta({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaProperty('og:title', title);
      setMetaName('twitter:title', title);
    }
    if (description) {
      setMetaName('description', description);
      setMetaProperty('og:description', description);
      setMetaName('twitter:description', description);
    }
    const url = ORIGIN + pathname;
    setCanonical(url);
    setMetaProperty('og:url', url);
  }, [title, description, pathname]);
}
