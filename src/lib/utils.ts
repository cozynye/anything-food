/**
 * 디바운스 유틸리티
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * 거리를 사람이 읽기 쉬운 형식으로 변환
 */
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}

/**
 * 현재 시간이 점심 시간인지 확인
 */
export function isLunchTime(): boolean {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  const lunchStart = 11 * 60; // 11:00
  const lunchEnd = 14 * 60;   // 14:00

  return currentTime >= lunchStart && currentTime < lunchEnd;
}

/**
 * 카테고리 이름을 카카오 API 검색 키워드로 변환
 */
export function getCategoryKeyword(category: string): string {
  const keywords: Record<string, string> = {
    한식: '한식',
    양식: '양식',
    중식: '중식',
    일식: '일식',
    술집: '술집',
  };
  return keywords[category] || '맛집';
}

/**
 * 카카오 Place 카테고리에서 음식 종류 추론
 */
export function inferCategory(kakaoCategory: string): string {
  if (kakaoCategory.includes('한식')) return '한식';
  if (kakaoCategory.includes('양식')) return '양식';
  if (kakaoCategory.includes('중식') || kakaoCategory.includes('중국')) return '중식';
  if (kakaoCategory.includes('일식') || kakaoCategory.includes('일본')) return '일식';
  if (kakaoCategory.includes('술집') || kakaoCategory.includes('주점')) return '술집';
  return '기타';
}
