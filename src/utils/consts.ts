export const URL_SEARCH_DATE_FORMAT = 'yyyy-MM-dd' as const
export const CZK_DATE_FORMAT = 'dd.MM.yyyy' as const

export const furnishedMessage: {
  [key: string]: string
} = {
  FURNISHED: 'Furnished',
  UNFURNISHED: 'Not furnished',
  SEMI_FURNISHED: 'Half furnished'
} as const
