/**
 * Search Service Module
 * 
 * Provides functionality to retrieve search results.
 * This is a mock implementation that generates sample results.
 */

// TypeScript interface for a search result item
interface SearchResult {
    id: string;
    title: string;
    url: string;
    description: string;
  }
  
  // TypeScript interface for search results response
  interface SearchResultsResponse {
    results: SearchResult[];
    totalResults: number;
    searchTime: number;
  }
  
  /**
   * Generates mock search results based on the query
   * 
   * @param {string} query - The search query
   * @param {number} page - The current page number
   * @param {number} resultsPerPage - Number of results to return per page
   * @returns {Promise<SearchResultsResponse>} - The search results and metadata
   */
  export async function getSearchResults(
    query: string,
    page: number = 1,
    resultsPerPage: number = 10
  ): Promise<SearchResultsResponse> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Generate a deterministic number of results based on query length
    const totalResults = Math.max(0, query.length * 70 + query.length * query.charCodeAt(0));
    
    // Calculate start and end indices for pagination
    const start = (page - 1) * resultsPerPage;
    const end = Math.min(start + resultsPerPage, totalResults);
    
    // Generate mock results
    const results: SearchResult[] = [];
    for (let i = start; i < end; i++) {
      results.push({
        id: `result-${i}`,
        title: `${query.charAt(0).toUpperCase() + query.slice(1)} - Result ${i + 1}`,
        url: `https://example.com/result-${i + 1}`,
        description: `This is a sample search result for "${query}". It provides information about topic ${i + 1} related to your search. Click to learn more about this interesting topic.`,
      });
    }
    
    // Calculate a simulated search time (varies slightly to seem realistic)
    const searchTime = 0.1 + Math.random() * 0.3;
    
    return {
      results,
      totalResults,
      searchTime,
    };
  }