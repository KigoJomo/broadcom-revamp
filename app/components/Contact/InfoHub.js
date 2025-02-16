import React from 'react';
import { 
  LuPhone, 
  LuSmartphone, 
  LuMail, 
  LuFacebook,
  LuTwitter,
  LuLinkedin
} from 'react-icons/lu';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const InfoHub = () => {
  const phones = {
    mobile: [
      '+254-734026409',
      '+254-718896167',
      '+254-724562063'
    ],
    tel: [
      '+254-20-3746897',
      '+254-20-3746669',
      '+251 97 807 7800'
    ]
  };

  const emails = [
    { email: 'info@broadcom.co.ke', description: 'For General Enquiries' },
    { email: 'sales@broadcom.co.ke', description: 'For Sales Enquiries' }
  ];

  const socials = [
    { name: 'Facebook', url: 'https://www.facebook.com/broadcom.co.ke', icon: LuFacebook },
    { name: 'Twitter / X', url: 'https://twitter.com/Broadband_Kenya', icon: FaXTwitter },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/broadband-communication-networks-ltd/', icon: LuLinkedin }
  ];

  return (
    <div className="w-full bg-[#ffffff] text-[#202020]">
      {/* Phone Numbers Section */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="flex items-center gap-2 text-light-blue mb-2">
            <LuSmartphone className="w-5 h-5" />
            <span className="font-light">Mobile</span>
          </h3>
          {phones.mobile.map((phone, index) => (
            <p key={index} className="ml-7 mb-1 hover:text-[#6610f2] cursor-pointer text-sm">
              {phone}
            </p>
          ))}
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-light-blue mb-2">
            <LuPhone className="w-5 h-5" />
            <span className="font-light">Telephone</span>
          </h3>
          {phones.tel.map((phone, index) => (
            <p key={index} className="ml-7 mb-1 hover:text-[#6610f2] cursor-pointer text-sm">
              {phone}
            </p>
          ))}
        </div>
      </div>

      {/* Email Section */}
      <div className="mb-8">
        <h3 className="flex items-center gap-2 text-light-blue mb-2">
          <LuMail className="w-5 h-5" />
          <span className="font-light">Email</span>
        </h3>
        {emails.map((item, index) => (
          <div key={index} className="ml-7 mb-2">
            <Link href={`mailto:${item.email}`} className="hover:text-[#6610f2]">
              {item.email}
            </Link>
            <p className="text-[#292929] text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-light-blue mb-2">Connect With Us</h3>
        <div className="flex flex-col gap-2 ml-7">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-light-blue transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{social.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoHub;