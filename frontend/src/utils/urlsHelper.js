
export const IDENTIFIERS = {
  HOME: 'HOME',
  COMPONENTS: 'COMPONENTS',
  BUTTONS: 'BUTTONS',
  HEADINGS: 'HEADINGS',
  FORM_ELEMENTS: 'FORM_ELEMENTS',
}

export const ROUTES = {
   [IDENTIFIERS.HOME]: '/',
   [IDENTIFIERS.COMPONENTS]: '/components',
   [IDENTIFIERS.BUTTONS]: '/components/buttons',
   [IDENTIFIERS.HEADINGS]: '/components/headings',
   [IDENTIFIERS.FORM_ELEMENTS]: '/components/form-elements',
}

export function getUrl(identifier, params = {}) {
  if (!identifier || !ROUTES[identifier]) return null

  let url = ROUTES[identifier]

  for (const key of Object.keys(params)) {
      url = url.replace(`{${key}}`, params[key])
  }
  return url
}

export default { IDENTIFIERS, ROUTES, getUrl }

/* usage

import { getUrl, IDENTIFIERS } from 'src/utils/urlsHelper'

getUrl(IDENTIFIERS.INSTRUCTOR_SEGMENTS_VIEW, {programId: 1, segmentId: 106})

expected output:
/portal/programs/1/106


*/