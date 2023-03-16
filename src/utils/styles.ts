import { type ColorsProps } from './types'

export const FILLED_COLORS = {
  default: 'text-default-1100 bg-default-100 hover:bg-default-200 dark:text-default-100 dark:bg-default-1100 dark:hover:bg-default-1000',
  error: 'text-white bg-error-200 hover:bg-error-300 dark:hover:bg-error-100',
  info: 'text-white bg-info-200 hover:bg-info-300 dark:hover:bg-info-100',
  primary: 'text-white bg-primary-200 hover:bg-primary-300 dark:hover:bg-primary-100',
  secondary: 'text-white bg-secondry-200 hover:bg-secondry-300 dark:hover:bg-secondry-100',
  success: 'text-white bg-success-200 hover:bg-success-300 dark:hover:bg-success-100',
  warning: 'text-white bg-warning-200 hover:bg-warning-300 dark:hover:bg-warning-100'
}

const OUTLINED_COLORS = {
  default: 'border-2 text-default-1100 border-default-1000 hover:bg-default-1100 hover:text-default-100 dark:text-default-200 dark:border-default-200 dark:hover:bg-default-200 dark:hover:text-default-1100',
  error: 'border-2 text-error-200 border-error-200 hover:bg-error-200/10 dark:text-error-100 dark:hover:bg-error-100/10',
  info: 'border-2 text-info-200 border-info-200 hover:bg-info-200/10 dark:text-info-100 dark:hover:bg-info-100/10',
  primary: 'border-2 text-primary-200 border-primary-200 hover:bg-primary-200/10 dark:text-primary-100 dark:hover:bg-primary-100/10',
  secondary: 'border-2 text-secondary-200 border-secondary-200 hover:bg-secondary-200/10 dark:text-secondary-100 dark:hover:bg-secondary-100/10',
  success: 'border-2 text-success-200 border-success-200 hover:bg-success-200/10 dark:text-success-100 dark:hover:bg-success-100/10',
  warning: 'border-2 text-warning-200 border-warning-200 hover:bg-warning-200/10 dark:text-warning-100 dark:hover:bg-warning-100/10'
}

const SMOOTH_COLORS = {
  default: 'text-default-1100 bg-default-1100/20 hover:bg-default-1100/30 dark:text-default-100 dark:bg-default-1000 dark:hover:bg-default-100/20',
  error: 'text-error-300 bg-error-200/20 hover:bg-error-200/30 dark:text-error-100 dark:bg-error-100 dark:hover:bg-error-100/20',
  info: 'text-info-300 bg-info-200/20 hover:bg-info-200/30 dark:text-info-100 dark:bg-info-100 dark:hover:bg-info-100/20',
  primary: 'text-primary-300 bg-primary-200/20 hover:bg-primary-200/30 dark:text-primary-100 dark:bg-primary-100 dark:hover:bg-primary-100/20',
  secondary: 'text-primary-300 bg-primary-200/20 hover:bg-primary-200/30 dark:text-primary-100 dark:bg-primary-100 dark:hover:bg-primary-100/20',
  success: 'text-success-300 bg-success-200/20 hover:bg-success-200/30 dark:text-success-100 dark:bg-success-100 dark:hover:bg-success-100/20',
  warning: 'text-warning-300 bg-warning-200/20 hover:bg-warning-200/30 dark:text-warning-100 dark:bg-warning-100 dark:hover:bg-warning-100/20'
}

const TEXT_COLORS = {
  default: 'text-default-1100 bg-transparent hover:bg-default-1000/20 dark:text-default-100 dark:bg-transparent dark:hover:bg-default-200/20',
  error: 'text-error-200 bg-transparent hover:bg-error-100/20 dark:text-error-100 dark:bg-transparent dark:hover:bg-error-200/20',
  info: 'text-info-200 bg-transparent hover:bg-info-100/20 dark:text-info-100 dark:bg-transparent dark:hover:bg-info-200/20',
  primary: 'text-primary-200 bg-transparent hover:bg-primary-100/20 dark:text-primary-100 dark:bg-transparent dark:hover:bg-primary-200/20',
  secondary: 'text-primary-200 bg-transparent hover:bg-primary-100/20 dark:text-primary-100 dark:bg-transparent dark:hover:bg-primary-200/20',
  success: 'text-success-200 bg-transparent hover:bg-success-100/20 dark:text-success-100 dark:bg-transparent dark:hover:bg-success-200/20',
  warning: 'text-warning-200 bg-transparent hover:bg-warning-100/20 dark:text-warning-100 dark:bg-transparent dark:hover:bg-warning-200/20'
}

export const VARIANTS = {
  filled: FILLED_COLORS,
  outlined: OUTLINED_COLORS,
  smooth: SMOOTH_COLORS,
  text: TEXT_COLORS
}

export function color({ variant, color }: ColorsProps) {
  return VARIANTS[variant][color]
}
