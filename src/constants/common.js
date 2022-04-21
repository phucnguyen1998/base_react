import viTranslation from '../languages/vi.json'
import enTranslation from '../languages/en.json'

export const languagesResources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  }
}

export const URLs = {
}

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED_SUCCESS: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  OTHER: -1,
}

export const ACCOUNT_TYPES = {
  ADMIN: 'ADMIN',
}
