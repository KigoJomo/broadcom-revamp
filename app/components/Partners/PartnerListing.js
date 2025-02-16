import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuExternalLink } from "react-icons/lu";

const partners = [
  {
    name: 'VIAVI',
    image: 'viavi',
    description: `Broadband Communication Networks Ltd collaborates with VIAVI to deliver comprehensive fiber optic solutions, including installation, testing, and network monitoring. Leveraging VIAVI’s advanced test tools, Broadband Communication Networks Ltd ensures the reliability and efficiency of both GPON and Active Ethernet (AE) fiber access technologies. \n\nThis partnership allows Broadband Communication Networks Ltd to provide robust, end-to-end monitoring capabilities, ensuring proactive maintenance and quick issue resolution. Through this collaboration, Broadband Communication Networks Ltd enhances its fiber optic service offerings, delivering high-quality, reliable solutions that meet the evolving demands of the telecommunications industry.`,
    link: 'https://viavisolutions.com',
  },
  {
    name: 'Calix',
    image: 'calix',
    description: `Broadband Communication Networks Ltd partners with Calix to deliver cutting-edge broadband network solutions, focusing on the deployment and management of fiber infrastructure. Calix's innovative technologies enhance network performance and scalability, allowing Broadband Communication Networks Ltd to provide advanced fiber optic testing, monitoring, and installation services.\n\nThis collaboration enables Broadband Communication Networks Ltd to meet the growing demand for high-speed internet by offering comprehensive, end-to-end solutions. Together, Broadband Communication Networks Ltd and Calix optimize network performance, reduce operational costs, and accelerate the deployment of next-generation broadband services.`,
    link: 'https://www.calix.com',
  },
  {
    name: 'Rohde & Schwarz',
    image: 'rohde-schwarz',
    description: `Broadband Communication Networks Ltd teams up with Rohde & Schwarz to provide industry-leading wireless communication and electromagnetic compatibility (EMC) test equipment. This partnership gives Broadband Communication Networks Ltd access to cutting-edge tools like spectrum analyzers, RF power meters, and field strength test solutions, ensuring high-quality wireless communication systems.\n\nWith over 20 years of industry experience, Rohde & Schwarz enhances Broadband Communication Networks Ltd’s ability to deliver reliable, high-performance wireless communication solutions, helping clients meet stringent industry standards.`,
    link: 'https://www.rohde-schwarz.com',
  },
  {
    name: 'Redknee',
    image: 'redknee',
    description: `Broadband Communication Networks Ltd partners with Redknee to offer real-time billing and customer care solutions to over 200 service providers globally. By integrating Redknee’s robust monetization software, Broadband Communication Networks Ltd enables efficient management of provisioning, rating, charging, and customer interactions, driving operational efficiency and enhancing customer satisfaction.\n\nThis collaboration helps service providers optimize their billing processes, leading to improved revenue growth and profitability. Redknee’s solutions ensure accurate, real-time billing, fostering customer trust and loyalty.`,
    link: 'https://www.optiva.com',
  },
  {
    name: 'Tektronix',
    image: 'tektronix',
    description: `Broadband Communication Networks Ltd collaborates with Tektronix Communications to provide comprehensive telecom network intelligence solutions, offering a holistic view of network performance across LTE, 3G, VoIP, and more. Tektronix’s advanced tools allow Broadband Communication Networks Ltd to monitor and optimize both fixed and mobile networks, ensuring superior service delivery.\n\nThis partnership improves customer experience by providing deep insights into network operations, enabling quick issue resolution and robust network performance optimization.`,
    link: 'https://www.tek.com',
  },
  {
    name: 'REMOTEK',
    image: 'remotek',
    description: `Broadband Communication Networks Ltd partners with REMOTEK to deliver advanced RF repeater solutions across multiple mobile technologies, including GSM, UMTS, CDMA, and multi-band systems. REMOTEK’s ISO-certified RF repeaters help Broadband Communication Networks Ltd optimize RF planning and enhance network coverage in challenging environments like tunnels, hills, and urban areas.\n\nThis collaboration also extends to fiber optic repeaters and microwave radio network planning, further strengthening Broadband Communication Networks Ltd’s ability to provide high-quality RF solutions, tailored to the specific needs of mobile network operators.`,
    link: 'https://www.remotek.com.tw/',
  },
  {
    name: 'Yantai Dongfang Wisdom Electric Co',
    image: 'wisdom',
    description: `Broadband Communication Networks Ltd collaborates with Yantai Dongfang Wisdom Electric Co. to provide advanced energy metering solutions, including smart metering technologies and prepaid meters. Yantai’s innovative products enhance energy management efficiency, offering accurate and reliable energy consumption data.\n\nAdditionally, this partnership enables Broadband Communication Networks Ltd to develop customized Machine-to-Machine (M2M) solutions for various applications, including smart metering and vending systems. Through this collaboration, Broadband Communication Networks Ltd expands its service offerings, helping clients improve energy efficiency and reduce operational costs.`,
    link: 'https://en.dongfang-wisdom.com/',
  },
]

const Partner = ({ name, description, image, link, index }) => {
  return (
    <div
      className={`w-full border-t py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-24 ${
        index === partners.length - 1 && 'border-b'
      }`}
    >
      <Image
        src={`/images/partners/${image}.webp`}
        alt={`Broadband Communication Networks Ltd and ${name} partnership`}
        width={500}
        height={500}
        className={`w-full md:w-1/2 aspect-square overflow-hidden border border-cyan shadow-2xl ${
          index % 2 === 0 && 'md:order-1'
        }`}
      />

      <div className="w-full md:w-1/2">
        <Link href={link} target='_blank' className='flex items-center gap-2 text-purple border-b border-purple w-fit mb-4 pb-1 px-1 md:hover:border-transparent transition-all duration-300'>
          <h3>{name}</h3>
          <LuExternalLink size={24} />
        </Link>

        <p className="whitespace-pre-wrap text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

const PartnerListing = () => {
  return (
    <section className="py-12 flex flex-col gap-0">
      <h2 className="text-center mb-12">our partners include:</h2>

      {partners.map((partner, index) => (
        <Partner key={index} {...partner} index={index} />
      ))}
    </section>
  )
}

export default PartnerListing
