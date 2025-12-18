'use client';

import { useAddressSearch } from '../hooks/useAddressSearch';
import type { Coordinates } from '@/features/restaurant/types';
import {
  searchContainer,
  searchInput,
  searchResults,
  searchResultItem,
  resultName,
  resultAddress,
  errorMessage,
  loadingMessage,
} from './SearchBar.css';

interface SearchBarProps {
  onLocationSelect: (coordinates: Coordinates) => void;
  placeholder?: string;
}

/**
 * 주소 검색 바 컴포넌트
 */
export function SearchBar({ onLocationSelect, placeholder = '주소를 검색하세요' }: SearchBarProps) {
  const { query, setQuery, results, isLoading, error, search, selectResult } =
    useAddressSearch(onLocationSelect);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  return (
    <div className={searchContainer}>
      <input
        type="text"
        className={searchInput}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />

      {/* 검색 결과 */}
      {(results.length > 0 || isLoading || error) && (
        <div className={searchResults}>
          {isLoading && <div className={loadingMessage}>검색 중...</div>}

          {error && !isLoading && <div className={errorMessage}>{error}</div>}

          {!isLoading &&
            !error &&
            results.map((result, index) => (
              <div
                key={index}
                className={searchResultItem}
                onClick={() => selectResult(result)}
              >
                <div className={resultName}>{result.name}</div>
                {result.roadAddress && (
                  <div className={resultAddress}>{result.roadAddress}</div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
