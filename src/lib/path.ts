// src/lib/paths.ts
export const rawBase = import.meta.env.BASE_URL || '/';
export const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';

/** Join the configured base with a relative path (no double/missing slashes). */
export const withBase = (p = '') => base + String(p).replace(/^\//, '');
