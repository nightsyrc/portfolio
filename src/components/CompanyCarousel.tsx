import { motion } from 'framer-motion';

const companies = [
  { name: 'Sheraton', logo: '/images/company_carousel/sheraton.png' },
  { name: 'Tata', logo: '/images/company_carousel/tata.png' },
  { name: 'Dalet', logo: '/images/company_carousel/dalet.jpg' },
  { name: 'Paystand', logo: '/images/company_carousel/paystand.png' },
  { name: 'Coursedog', logo: '/images/company_carousel/coursedog.png' },
];

export function CompanyCarousel() {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex space-x-12"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 w-48 h-24 bg-gray-900/50 rounded-lg flex items-center justify-center"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-w-[80%] max-h-[80%] object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}