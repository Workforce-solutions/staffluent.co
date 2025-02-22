import { Rule as SanityRule } from '@sanity/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type Rule = SanityRule

export interface SlugValue {
  current: string;
}

export interface SelectionValue {
  title: string;
  author?: string;
  media?: SanityImageSource;
}