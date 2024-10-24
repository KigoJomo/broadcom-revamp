import Image from 'next/image'
import React from 'react'

const partners = [
  {
    name: 'VIAVI',
    image: 'viavi',
    description: `Broadcom collaborates with VIAVI to deliver comprehensive fiber optic solutions, including installation, testing, and network monitoring. Leveraging VIAVI’s advanced test tools, Broadcom ensures the reliability and efficiency of both GPON and Active Ethernet (AE) fiber access technologies. \n\nThis partnership allows Broadcom to provide robust, end-to-end monitoring capabilities, ensuring proactive maintenance and quick issue resolution. Through this collaboration, Broadcom enhances its fiber optic service offerings, delivering high-quality, reliable solutions that meet the evolving demands of the telecommunications industry.`,
    link: 'https://viavisolutions.com',
  },
  {
    name: 'Calix',
    image: 'calix',
    description: `Broadcom partners with Calix to deliver cutting-edge broadband network solutions, focusing on the deployment and management of fiber infrastructure. Calix's innovative technologies enhance network performance and scalability, allowing Broadcom to provide advanced fiber optic testing, monitoring, and installation services.\n\nThis collaboration enables Broadcom to meet the growing demand for high-speed internet by offering comprehensive, end-to-end solutions. Together, Broadcom and Calix optimize network performance, reduce operational costs, and accelerate the deployment of next-generation broadband services.`,
    link: 'https://www.calix.com',
  },
  {
    name: 'Rohde & Schwarz',
    image: 'rohde-schwarz',
    description: `Broadcom teams up with Rohde & Schwarz to provide industry-leading wireless communication and electromagnetic compatibility (EMC) test equipment. This partnership gives Broadcom access to cutting-edge tools like spectrum analyzers, RF power meters, and field strength test solutions, ensuring high-quality wireless communication systems.\n\nWith over 20 years of industry experience, Rohde & Schwarz enhances Broadcom’s ability to deliver reliable, high-performance wireless communication solutions, helping clients meet stringent industry standards.`,
    link: 'https://www.rohde-schwarz.com',
  },
  {
    name: 'Redknee',
    image: 'redknee',
    description: `Broadcom partners with Redknee to offer real-time billing and customer care solutions to over 200 service providers globally. By integrating Redknee’s robust monetization software, Broadcom enables efficient management of provisioning, rating, charging, and customer interactions, driving operational efficiency and enhancing customer satisfaction.\n\nThis collaboration helps service providers optimize their billing processes, leading to improved revenue growth and profitability. Redknee’s solutions ensure accurate, real-time billing, fostering customer trust and loyalty.`,
    link: 'https://www.optiva.com',
  },
  {
    name: 'Tektronix',
    image: 'tektronix',
    description: `Broadcom collaborates with Tektronix Communications to provide comprehensive telecom network intelligence solutions, offering a holistic view of network performance across LTE, 3G, VoIP, and more. Tektronix’s advanced tools allow Broadcom to monitor and optimize both fixed and mobile networks, ensuring superior service delivery.\n\nThis partnership improves customer experience by providing deep insights into network operations, enabling quick issue resolution and robust network performance optimization.`,
    link: 'https://www.tek.com',
  },
  {
    name: 'REMOTEK',
    image: 'remotek',
    description: `Broadcom partners with REMOTEK to deliver advanced RF repeater solutions across multiple mobile technologies, including GSM, UMTS, CDMA, and multi-band systems. REMOTEK’s ISO-certified RF repeaters help Broadcom optimize RF planning and enhance network coverage in challenging environments like tunnels, hills, and urban areas.\n\nThis collaboration also extends to fiber optic repeaters and microwave radio network planning, further strengthening Broadcom’s ability to provide high-quality RF solutions, tailored to the specific needs of mobile network operators.`,
    link: 'https://www.remotek.com.tw/',
  },
  {
    name: 'Yantai Dongfang Wisdom Electric Co',
    image: 'wisdom',
    description: `Broadcom collaborates with Yantai Dongfang Wisdom Electric Co. to provide advanced energy metering solutions, including smart metering technologies and prepaid meters. Yantai’s innovative products enhance energy management efficiency, offering accurate and reliable energy consumption data.\n\nAdditionally, this partnership enables Broadcom to develop customized Machine-to-Machine (M2M) solutions for various applications, including smart metering and vending systems. Through this collaboration, Broadcom expands its service offerings, helping clients improve energy efficiency and reduce operational costs.`,
    link: 'https://en.dongfang-wisdom.com/',
  },
]



// TODO: Add animations to this

const Partner = ({ name, description, image, link, index }) => {
  return (
    <div className={`w-full border-t py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-24 ${index === (partners.length - 1) && 'border-b'}`}>
      <Image
        src={`/images/partners/${image}.webp`}
        alt={`Broadcom and ${name} partnership`}
        width={500}
        height={500}
        className={`w-full md:w-1/2 aspect-square overflow-hidden border border-cyan shadow-2xl ${index %2 === 0 && 'md:order-1'}`}
      />

      <div className="w-full md:w-1/2">
        <h3>{name}</h3>

        <p className='whitespace-pre-wrap text-sm md:text-base'>{description}</p>
      </div>
    </div>
  )
}

const PartnerListing = () => {
  return <section className='py-12 flex flex-col gap-0'>
    <h2 className='text-center mb-12'>our partners include:</h2>

    {partners.map((partner, index) => (
      <Partner key={index} {...partner} index={index} />
    ))}
  </section>
}

export default PartnerListing
