

/**
 * Add entry into set.
 *
 * @param set Array list
 * @param entry Entry to add
 * @returns Entry index added
 */
export function addEntry<T>(set: T[], entry: T): number {
  let entryIndex = set.indexOf(entry);

  if (entryIndex === -1) {
    entryIndex = set.length;

    set[entryIndex] = entry;
  }

  return entryIndex;
}


/**
 * Delete entry from set.
 *
 * @param set Array list
 * @param entry Entry to delete
 * @returns Entry index deleted
 */
export function deleteEntry<T>(set: T[], entry: T): number {
  const entryIndex = set.indexOf(entry);

  if (entryIndex !== -1) {
    set.splice(entryIndex, 1);
  }

  return entryIndex;
}
