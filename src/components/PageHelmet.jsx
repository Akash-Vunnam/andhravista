import { Helmet } from 'react-helmet-async'

/** Per-route SEO title + meta description. */
export default function PageHelmet({ title, description }) {
  const fullTitle = title.includes('Explore Andhra') ? title : `${title} · Explore Andhra Pradesh`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
