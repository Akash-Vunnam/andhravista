/**
 * Maps each destination to its folder under /public (same names as in the repo).
 * Use placePublicImage() so paths work with Vite base URL and special characters.
 */

/** Vite dev/preview static lookup does not resolve `%2C` to a comma in folder names on disk. */
function encodePublicPathSegment(segment) {
  return encodeURIComponent(segment).replace(/%2C/g, ',')
}

export const PLACE_IMAGE_FOLDERS = {
  araku: 'araku valley pics',
  borra: 'Borra Caves pics',
  rkBeach: 'Rama Krishna Beach pics',
  tirumala: 'Sri Venkateswara Temple, Tirumala pics',
  belum: 'Belum Caves pics',
  horsley: 'Horsley Hills pics',
}

/**
 * @param {keyof typeof PLACE_IMAGE_FOLDERS} folderKey
 * @param {string} fileName
 * @returns {string}
 */
export function placePublicImage(folderKey, fileName) {
  const dir = PLACE_IMAGE_FOLDERS[folderKey]
  if (!dir) throw new Error(`Unknown place image folder: ${folderKey}`)
  const base = import.meta.env.BASE_URL || '/'
  const segment = `${encodePublicPathSegment(dir)}/${encodePublicPathSegment(fileName)}`
  return base === '/' ? `/${segment}` : `${base.replace(/\/?$/, '/')}${segment}`
}
