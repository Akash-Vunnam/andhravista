import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const DestinationsPage = lazy(() => import('../pages/DestinationsPage'))
const DestinationDetailPage = lazy(() => import('../pages/DestinationDetailPage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const AdminMessagesPage = lazy(() => import('../pages/AdminMessagesPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

/** Central route table (pages lazy-load; Suspense lives in MainLayout). */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin/messages" element={<AdminMessagesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
