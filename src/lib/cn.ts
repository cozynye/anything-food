import { clsx, type ClassValue } from 'clsx';

/**
 * className 병합 유틸리티
 * clsx를 래핑하여 사용
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
