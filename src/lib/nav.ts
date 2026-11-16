import type { NavItem } from '@/data/types';

/** Find a nav item by id. Returns undefined for pages outside the nav (e.g. 404). */
export function findNavItem(
  items: readonly NavItem[],
  id: string | undefined,
): NavItem | undefined {
  if (id === undefined) return undefined;
  return items.find((item) => item.id === id);
}

/** 1-based position of an item, used by the status bar ("2/7"). */
export function navPosition(items: readonly NavItem[], id: string | undefined): number | undefined {
  const index = items.findIndex((item) => item.id === id);
  return index === -1 ? undefined : index + 1;
}
