import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Mail, MailOpen, Check, X, Inbox } from 'lucide-react'
import PageHelmet from '../components/PageHelmet'
import { getContactMessages, updateMessageReadStatus, deleteMessage } from '../services/contactService'

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    setIsLoading(true)
    const result = await getContactMessages()
    if (result.success) {
      setMessages(result.messages)
    } else {
      setError(result.error)
    }
    setIsLoading(false)
  }

  const toggleReadStatus = async (id, currentStatus) => {
    const newStatus = !currentStatus
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, read: newStatus } : m))
    await updateMessageReadStatus(id, newStatus)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(msgs => msgs.filter(m => m.id !== id))
      await deleteMessage(id)
    }
  }

  return (
    <>
      <PageHelmet
        title="Admin | Messages"
        description="View contact form submissions."
      />

      <section className="px-4 pb-12 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Admin</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">
            Contact Messages
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-10">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-6 text-center text-rose-600 dark:text-rose-400">
            <p>Error loading messages: {error}</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/55 bg-white/40 py-24 text-center dark:border-white/10 dark:bg-slate-900/40">
            <Inbox className="h-12 w-12 text-slate-400" />
            <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">No messages yet</p>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-xl backdrop-blur-2xl transition-colors sm:p-8 ${
                    msg.read 
                      ? 'border-white/30 bg-white/30 dark:border-white/5 dark:bg-slate-900/30' 
                      : 'border-sky-500/30 bg-white/60 dark:border-sky-500/20 dark:bg-slate-900/70'
                  }`}
                >
                  {!msg.read && (
                    <div className="absolute right-0 top-0 h-4 w-4 rounded-bl-full bg-sky-500"></div>
                  )}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {msg.name}
                      </h3>
                      <a href={`mailto:${msg.email}`} className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400">
                        {msg.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {msg.createdAt?.toDate ? new Date(msg.createdAt.toDate()).toLocaleString() : 'Just now'}
                      </span>
                      <button
                        onClick={() => toggleReadStatus(msg.id, msg.read)}
                        className={`rounded-full p-2 transition hover:bg-slate-200 dark:hover:bg-slate-800 ${
                          msg.read ? 'text-slate-400' : 'text-sky-500'
                        }`}
                        title={msg.read ? 'Mark as unread' : 'Mark as read'}
                      >
                        {msg.read ? <MailOpen className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="rounded-full p-2 text-slate-400 transition hover:bg-rose-100 hover:text-rose-500 dark:hover:bg-rose-500/20 dark:hover:text-rose-400"
                        title="Delete message"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
                    <p className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">
                      {msg.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  )
}
