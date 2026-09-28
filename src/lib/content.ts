import { site } from '../data/profile'

export function isEmpty(value: unknown) {
  return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)
}

/** Whether a field should render at all: filled values always, empty ones only while placeholders are on. */
export function shouldShow(value: unknown) {
  return !isEmpty(value) || site.showPlaceholders
}
