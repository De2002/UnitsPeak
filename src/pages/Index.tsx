import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import CategorySection from "@/components/features/CategorySection";
import AboutSection from "@/components/features/AboutSection";
import SearchBar from "@/components/features/SearchBar";
import SearchResultsGrid from "@/components/features/SearchResultsGrid";
import EmptySearchState from "@/components/features/EmptySearchState";
import { converterGroups } from "@/constants/categories";
import { useSearch } from "@/hooks/useSearch";

const Index = () => {
  const { query, setQuery, results, isSearching, hasResults, noResults } = useSearch();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Search Bar */}
        <SearchBar
          query={query}
          onChange={setQuery}
          resultCount={results ? results.length : null}
        />

        {/* Converters Grid */}
        <div id="converters" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Section intro — hidden while searching */}
          {!isSearching && (
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-foreground mb-2">
                All Converters
              </h2>
              <p className="text-sm text-muted-foreground">
                Browse by category — click any converter to get started.
              </p>
            </div>
          )}

          {/* Search results */}
          {hasResults && results && (
            <SearchResultsGrid results={results} query={query} />
          )}

          {/* No results empty state */}
          {noResults && <EmptySearchState query={query} />}

          {/* All category groups — hidden while searching */}
          {!isSearching &&
            converterGroups.map((group) => (
              <CategorySection key={group.id} group={group} />
            ))}
        </div>

        {/* About — hidden while searching */}
        {!isSearching && <AboutSection />}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
