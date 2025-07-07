import { TEAM_MEMBER_BREADCRUMBS } from '../../../data/languages'

/**
 * Get breadcrumb info for a team member by index and language.
 * @param {number} idx - Index of the team member.
 * @param {string} lang - Language code ('en' or 'et').
 * @returns {{breadcrumb: string, info: string}}
 */
export function getTeamMemberBreadcrumb(idx, lang = 'en') {
  const arr = TEAM_MEMBER_BREADCRUMBS[lang] || TEAM_MEMBER_BREADCRUMBS.en
  return arr[idx] || { breadcrumb: '', info: '' }
}
