import { useState, useMemo } from "react";
import { converterGroups } from "@/constants/categories";
import type { ConverterCategory } from "@/constants/categories";

export interface SearchResult extends ConverterCategory {
  groupName: string;
  groupId: string;
}

export const useSearch = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matches: SearchResult[] = [];

    for (const group of converterGroups) {
      for (const cat of group.categories) {
        if (
          cat.name.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q)
        ) {
          matches.push({ ...cat, groupName: group.groupName, groupId: group.id });
        }
      }
    }

    return matches;
  }, [query]);

  const isSearching = query.trim().length > 0;
  const hasResults = results !== null && results.length > 0;
  const noResults = isSearching && results !== null && results.length === 0;

  return { query, setQuery, results, isSearching, hasResults, noResults };
};
