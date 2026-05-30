const base = (import.meta.env.PUBLIC_SITE_URL ?? '').replace(/\/$/, '');
const pageExtn = import.meta.env.PUBLIC_SITE_PAGE_EXTN ?? '';

function path(p: string) {
	return p.startsWith('/') ? p : `/${p}`;
}

/** Site URL helpers — single source of truth for env-based links. */
export const site = {
	base,
	pageExtn,
	home: () => base,
	asset: (p: string) => `${base}${path(p)}`,
	/** Routable page; appends PUBLIC_SITE_PAGE_EXTN (e.g. .html). */
	page: (p: string) => `${base}${path(p)}${pageExtn}`,
	/** Path without page extension (e.g. /tools/). */
	dir: (p: string) => `${base}${path(p)}`,
};
