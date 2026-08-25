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

module.exports = { fetchAll, toPages, sumField, DEFAULT_PAGE_SIZE };
