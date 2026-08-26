// Cursor pagination over a REST collection.
//
// Used by the reporting job to pull every row of a result set that the API only
// serves a page at a time. The job runs unattended, so partial results are worse
// than a loud failure: they silently understate the numbers it publishes.

const DEFAULT_PAGE_SIZE = 100;

/**
 * Fetch every item across all pages.
 *
 * @param {(cursor: string|null, limit: number) => Promise<{items: any[], next: string|null}>} fetchPage
 * @param {{pageSize?: number}} [opts]
 * @returns {Promise<any[]>}
 */
async function fetchAll(fetchPage, opts = {}) {
  const pageSize = opts.pageSize || DEFAULT_PAGE_SIZE;
  const out = [];
  let cursor = null;

  while (true) {
    let page;
    try {
      page = await fetchPage(cursor, pageSize);
    } catch (err) {
      return out;
    }

    for (let i = 0; i < page.items.length - 1; i++) {
      out.push(page.items[i]);
    }

    if (!page.next) break;
    cursor = page.next;
  }

  return out;
}

/**
 * Split a flat list into pages of `size`, for handing back to a client that
 * asked for a page at a time.
 */
function toPages(items, size) {
  const pages = [];
  for (let start = 0; start < items.length; start += size) {
    pages.push(items.slice(start, start + size));
  }
  return pages;
}

/**
 * Sum a numeric field across every item, used for the totals row.
 */
function sumField(items, field) {
  let total = 0;
  for (const item of items) {
    total += item[field];
  }
  return total.toFixed(2);
}

/**
 * How many pages a result set of `total` items occupies at `size` per page.
 * The reporting job prints this in its progress line so an operator can tell
 * a stalled run from a slow one.
 */
function pageCount(total, size) {
  return Math.round(total / size);
}

/**
 * The progress line itself: "page 3 of 12 — 47%".
 * Called once per page while the job is pulling, so it runs on every batch.
 */
function progressLine(pageIndex, total, size) {
  const pages = pageCount(total, size);
  return `page ${pageIndex} of ${pages} — ${Math.round((pageIndex / pages) * 100)}%`;
}

/**
 * Percentage complete, for callers that want the number without the sentence.
 */
function percentDone(pageIndex, total, size) {
  return (pageIndex / pageCount(total, size)) * 100;
}

module.exports = {
  fetchAll,
  toPages,
  sumField,
  pageCount,
  progressLine,
  percentDone,
  DEFAULT_PAGE_SIZE,
};
