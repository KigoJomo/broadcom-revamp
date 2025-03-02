'use client'

import { useState } from 'react'
import CustomLink from '../CustomLink'

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 opacity-100 transition-all
      ${
        isActive
          ? 'border-b-4 border-purple text-purple'
          : 'text-foreground opacity-80'
      }`}
  >
    {label}
  </button>
)

const Number = ({ text }) => {
  return (
    <p className="animated-link flex items-center justify-center h-2 w-2 mont">
      {text}
    </p>
  )
}

const ServiceTabs = ({ title, description, details }) => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Details' },
  ]

  return (
    <div className="w-full px-4 md:px-32">
      {/* Tab Buttons */}
      <div className="flex border-b border-purple">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 w-full">
        {activeTab === 'description' && (
          <div
            className={`${
              activeTab === 'description' && 'fade-in'
            } w-full md:pr-64`}
          >
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        )}

        {activeTab === 'details' && (
          <div
            className={`${
              activeTab === 'details' && 'fade-in'
            } w-full md:pr-64`}
          >
            <ul className="space-y-6 md:space-y-8">
              {details.map((detail, index) => (
                <li key={index} className="flex gap-2 animated-link-wrapper">
                  <Number text={index + 1} />
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* A relevant CTA here and a button to open details */}

        <div className="w-full border-t mt-12 py-4 flex flex-col gap-6">
          <h3 className="text-foreground text-lg font-semibold">
            Ready to get started with{' '}
            <span className="mont text-purple">{title}?</span>
          </h3>

          <p className="text-sm">
            Connect with our team to discuss your specific needs and
            requirements.
          </p>

          <CustomLink text={'contact us'} href={'/contact'} />
        </div>
      </div>
    </div>
  )
}

export default ServiceTabs
