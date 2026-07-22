
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { LengthUnit } from "@/constants/lengthUnits";

interface UnitComboboxProps {
  value: string;
  units: LengthUnit[];
  unitsByGroup: Record<string, LengthUnit[]>;
  onChange: (id: string) => void;
  exclude?: string;
  placeholder?: string;
  label?: string;
}

const UnitCombobox = ({
  value,
  units,
  unitsByGroup,
  onChange,
  exclude,
  placeholder = "Search units…",
  label,
}: UnitComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const selectedUnit = units.find((u) => u.id === value);

  // Filter units by query
  const q = query.trim().toLowerCase();
  const filtered: LengthUnit[] = q
    ? units.filter(
        (u) =>
          u.id !== exclude &&
          (u.name.toLowerCase().includes(q) || u.symbol.toLowerCase().includes(q))
      )
    : units.filter((u) => u.id !== exclude);

  // Grouped filtered results
  const filteredByGroup: Record<string, LengthUnit[]> = q
    ? { "Search Results": filtered }
    : Object.fromEntries(
        Object.entries(unitsByGroup).map(([group, groupUnits]) => [
          group,
          groupUnits.filter((u) => u.id !== exclude),
        ])
      );

  const flatFiltered = filtered;

  const openDropdown = useCallback(() => {
    setOpen(true);
    setQuery("");
    setHighlightedId(value);
    setTimeout(() => {
      inputRef.current?.focus();
      // Scroll highlighted item into view
      const el = listRef.current?.querySelector(`[data-id="${value}"]`) as HTMLElement | null;
      el?.scrollIntoView({ block: "nearest" });
    }, 10);
  }, [value]);

  const closeDropdown = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const selectUnit = useCallback(
    (id: string) => {
      onChange(id);
      closeDropdown();
    },
    [onChange, closeDropdown]
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, closeDropdown]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown();
      }
      return;
    }

    const idx = flatFiltered.findIndex((u) => u.id === highlightedId);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = flatFiltered[idx + 1] ?? flatFiltered[0];
      if (next) {
        setHighlightedId(next.id);
        const el = listRef.current?.querySelector(`[data-id="${next.id}"]`) as HTMLElement | null;
        el?.scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = flatFiltered[idx - 1] ?? flatFiltered[flatFiltered.length - 1];
      if (prev) {
        setHighlightedId(prev.id);
        const el = listRef.current?.querySelector(`[data-id="${prev.id}"]`) as HTMLElement | null;
        el?.scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedId) selectUnit(highlightedId);
      else if (flatFiltered.length === 1) selectUnit(flatFiltered[0].id);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
    }
  };

  // Highlight first result on query change
  useEffect(() => {
    if (query) {
      setHighlightedId(flatFiltered[0]?.id ?? null);
    }
  }, [query, flatFiltered]); // Added 'flatFiltered' to dependencies

  return (
    <div ref={containerRef} className="relative w-full min-w-0">
      {label && (
        <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {label}
        </span>
      )}

      {/* Trigger button */}
      {!open ? (
        <button
          type="button"
          onClick={openDropdown}
          onKeyDown={handleKeyDown}
          className="w-full flex items-center justify-between gap-2 bg-background/80 border border-border hover:border-primary/40 focus:border-primary/60 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground outline-none transition-colors duration-200 cursor-pointer text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            {selectedUnit ? (
              <>
                <span className="text-primary/80 font-mono text-xs shrink-0 bg-primary/10 border border-primary/20 rounded-md px-1.5 py-0.5">
                  {selectedUnit.symbol}
                </span>
                <span className="truncate">{selectedUnit.name}</span>
              </>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground/60 shrink-0" />
        </button>
      ) : (
        /* Search input (shown when open) */
        <div className="flex items-center gap-2 bg-background border border-primary/50 rounded-xl px-3 py-2.5 shadow-lg ring-1 ring-primary/20">
          <Search className="w-3.5 h-3.5 text-primary/60 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 min-w-0 bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground/40 outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-muted-foreground/50 hover:text-foreground transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={closeDropdown}
              className="text-muted-foreground/50 hover:text-foreground transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Dropdown list */}
      {open && (
        <div
          ref={listRef}
          className="absolute z-50 top-full left-0 right-0 mt-1.5 bg-background border border-border rounded-xl shadow-2xl overflow-y-auto max-h-64"
          style={{ scrollbarWidth: "thin" }}
        >
          {flatFiltered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center px-4">
              <Search className="w-6 h-6 text-muted-foreground/30 mb-2" />
              <p className="text-sm text-muted-foreground">No units match &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-muted-foreground/50 mt-1">Try the symbol or full name</p>
            </div>
          ) : (
            Object.entries(filteredByGroup).map(([group, groupUnits]) => {
              if (groupUnits.length === 0) return null;
              return (
                <div key={group}>
                  <div className="sticky top-0 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 bg-muted/60 backdrop-blur-sm border-b border-border/40">
                    {group}
                  </div>
                  {groupUnits.map((unit) => {
                    const isSelected = unit.id === value;
                    const isHighlighted = unit.id === highlightedId;
                    return (
                      <button
                        key={unit.id}
                        type="button"
                        data-id={unit.id}
                        onClick={() => selectUnit(unit.id)}
                        onMouseEnter={() => setHighlightedId(unit.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors duration-100 ${
                          isHighlighted
                            ? "bg-primary/10 text-foreground"
                            : "hover:bg-muted/40 text-foreground/80"
                        } ${isSelected ? "text-primary font-semibold" : ""}`}
                      >
                        <span
                          className={`text-xs font-mono shrink-0 w-10 text-right ${
                            isSelected
                              ? "text-primary"
                              : "text-muted-foreground/60"
                          }`}
                        >
                          {unit.symbol}
                        </span>
                        <span className="text-sm flex-1 min-w-0 truncate">{unit.name}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default UnitCombobox;
