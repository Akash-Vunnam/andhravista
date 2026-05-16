import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ChevronDown, Send } from 'lucide-react'
import PageHelmet from '../components/PageHelmet'
import { faqs } from '../data/places'
import { addContactMessage } from '../services/contactService'

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    </svg>
  )
}

function IconX({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const social = [
  { icon: IconInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: IconX, href: 'https://x.com', label: 'X' },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('All fields are required.')
      return
    }

    setIsSubmitting(true)
    setErrorMsg('')

    const result = await addContactMessage(form)
    setIsSubmitting(false)

    if (result.success) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      window.setTimeout(() => setSent(false), 4000)
    } else {
      setErrorMsg(result.error || 'Failed to send message. Please try again.')
    }
  }

  return (
    <>
      <PageHelmet
        title="Contact & Trip Planning"
        description="Contact Explore Andhra Pradesh for itinerary ideas, seasonal advice, and travel FAQs."
      />

      <section className="px-4 pb-12 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">
            Plan your Andhra journey with us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Share dates, party size, and interests—we respond with route ideas (this demo
            form does not send email; wire it to your API or form service).
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-10">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={submit}
          className="rounded-[2rem] border border-white/55 bg-white/50 p-8 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50"
        >
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-100"
          />
          <label className="mt-5 block text-sm font-semibold text-slate-800 dark:text-slate-100" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-100"
          />
          <label className="mt-5 block text-sm font-semibold text-slate-800 dark:text-slate-100" htmlFor="msg">
            Message
          </label>
          <textarea
            id="msg"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="mt-2 w-full resize-none rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm outline-none ring-sky-400/30 focus:ring-2 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-100"
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 py-3.5 text-sm font-semibold text-white shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? 'Sending...' : 'Send message'}
          </motion.button>
          <AnimatePresence>
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-center text-sm font-medium text-rose-500 dark:text-rose-400"
              >
                {errorMsg}
              </motion.p>
            )}
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        <div className="space-y-8">
          <div className="rounded-[1.75rem] border border-white/55 bg-white/40 p-2 dark:border-white/10 dark:bg-slate-900/45">
            <h2 className="px-5 pt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">FAQ</h2>
            <ul className="mt-2">
              {faqs.map((faq, index) => {
                const open = openFaq === index
                return (
                  <li key={faq.q} className="border-b border-white/40 last:border-0 dark:border-white/10">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-slate-800 dark:text-slate-100"
                    >
                      {faq.q}
                      <ChevronDown className={`h-5 w-5 shrink-0 text-sky-500 transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </div>

          <Link
            to="/"
            className="block rounded-[1.75rem] border border-white/55 bg-gradient-to-r from-sky-500/10 to-violet-500/10 px-6 py-4 text-center text-sm font-semibold text-slate-800 backdrop-blur-xl dark:border-white/10 dark:text-slate-100"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  )
}
