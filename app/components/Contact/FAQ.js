'use client'

import React, { useState, useMemo } from 'react'
import {
  LuSearch as Search,
  LuPlus as Plus,
  LuMinus as Minus,
} from 'react-icons/lu'

const faqData = {
  'General Inquiries': [
    {
      question:
        'What services does Broadband Communication Networks Ltd offer?',
      answer:
        'Broadband Communication Networks Ltd offers comprehensive network solutions through key divisions including Network Implementation, Solutions Division, and Managed Services.',
      keywords: ['services', 'offerings', 'solutions', 'network'],
    },
    {
      question:
        'How can I contact Broadband Communication Networks Ltd for support?',
      answer:
        "You can reach us through multiple channels. For immediate assistance, please click the 'Form' tab above to submit a support request.",
      keywords: ['contact', 'support', 'help', 'reach'],
    },
    {
      question:
        "Where are Broadband Communication Networks Ltd's offices located?",
      answer:
        "To view our office locations, please click the 'Offices' tab above to access our interactive map.",
      keywords: ['location', 'offices', 'address'],
    },
  ],
  'Technical Support': [
    {
      question: 'How do I request technical support for my network?',
      answer:
        'To request technical support, submit a ticket through our support portal or contact our 24/7 technical support team.',
      keywords: ['technical', 'support', 'network', 'help'],
    },
    {
      question: 'What should I do if I encounter a network outage?',
      answer:
        'In case of a network outage, first check our network status page for any known issues. For emergency support, contact our technical team immediately.',
      keywords: ['outage', 'network', 'emergency', 'down'],
    },
    {
      question:
        'Which tools does Broadband Communication Networks Ltd use for network optimization?',
      answer:
        "We utilize industry-leading tools including VIAVI's test solutions for comprehensive network optimization and monitoring.",
      keywords: ['tools', 'optimization', 'network', 'monitoring'],
    },
  ],
  'Billing & Payments': [
    {
      question:
        'What payment methods does Broadband Communication Networks Ltd accept?',
      answer:
        'We accept major credit cards and bank transfers. For detailed billing information, please contact our billing department.',
      keywords: ['payment', 'billing', 'credit card', 'bank transfer'],
    },
    {
      question: 'How do I access my billing information or make a payment?',
      answer:
        'Access your billing information through our secure client portal. For assistance, contact our billing department.',
      keywords: ['billing', 'payment', 'portal', 'access'],
    },
  ],
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const categories = ['all', ...Object.keys(faqData)]

  const toggleQuestion = (category, index) => {
    const key = `${category}-${index}`
    const newExpanded = new Set(expandedItems)
    if (expandedItems.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedItems(newExpanded)
  }

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.toLowerCase()
    let filtered = {}

    Object.entries(faqData).forEach(([category, questions]) => {
      if (selectedCategory === 'all' || selectedCategory === category) {
        const filteredQuestions = questions.filter(
          ({ question, answer, keywords }) =>
            question.toLowerCase().includes(query) ||
            answer.toLowerCase().includes(query) ||
            keywords.some((k) => k.toLowerCase().includes(query))
        )

        if (filteredQuestions.length > 0) {
          filtered[category] = filteredQuestions
        }
      }
    })

    return filtered
  }, [searchQuery, selectedCategory])

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray bg-background text-foreground outline-none focus:border-indigo"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border ${
              selectedCategory === category
                ? 'border-indigo bg-indigo text-background'
                : 'border-gray text-foreground hover:border-indigo'
            } transition-colors`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQs */}
      <div className="space-y-8">
        {Object.entries(filteredFAQs).map(([category, questions]) => (
          <div key={category}>
            <h2 className="text-xl font-bold mb-4 text-purple">{category}</h2>
            <div className="space-y-2">
              {questions.map((faq, index) => {
                const key = `${category}-${index}`
                const isExpanded = expandedItems.has(key)

                return (
                  <div key={key} className="border border-gray">
                    <button
                      onClick={() => toggleQuestion(category, index)}
                      className="w-full px-4 py-3 flex justify-between items-center hover:bg-light-gray hover:bg-opacity"
                    >
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                      {isExpanded ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-indigo" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-indigo" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 text-cyan border-t border-gray">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {Object.keys(filteredFAQs).length === 0 && (
        <div className="text-center py-8 text-gray">
          No FAQs found matching your search criteria.
        </div>
      )}
    </div>
  )
}

export default FAQ
