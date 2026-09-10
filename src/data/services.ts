export type ServiceCategory =
  | 'Printing'
  | 'Documents'
  | 'NIN'
  | 'Registration'
  | 'Graphics'
  | 'Training'
  | 'Internet';

export interface Service {
  name: string;
  category: ServiceCategory;
  description: string;
  priceMin: number;
  priceMax: number;
  currency: string;
  turnaround: string;
  featured: boolean;
  requiresUpload: boolean;
  whatsappEnabled: boolean;
}

export const WHATSAPP_NUMBER = '2348063332087';
export const WHATSAPP_BASE = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`;

export function buildWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE}&text=${encodeURIComponent(message)}`;
}

export const services: Service[] = [
  // Printing & Document Services
  { name: 'Color Printing (A4/A3)', category: 'Printing', description: 'High-quality colour printing for documents, presentations, and marketing materials.', priceMin: 100, priceMax: 500, currency: '₦', turnaround: 'Same day', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Large Format Printing', category: 'Printing', description: 'Banners, posters, and large-format prints for events and businesses.', priceMin: 3000, priceMax: 10000, currency: '₦', turnaround: '2–5 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Photocopying & Scanning', category: 'Printing', description: 'Fast photocopying and document scanning to email or USB.', priceMin: 20, priceMax: 100, currency: '₦', turnaround: 'Same day', featured: true, requiresUpload: false, whatsappEnabled: true },
  { name: 'Document Formatting', category: 'Documents', description: 'Professional formatting for reports, assignments, and official documents.', priceMin: 2000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: true, requiresUpload: true, whatsappEnabled: true },
  { name: 'Resume Creation', category: 'Documents', description: 'Clean, professional CVs that get noticed by employers.', priceMin: 3000, priceMax: 7000, currency: '₦', turnaround: '2–5 days', featured: true, requiresUpload: false, whatsappEnabled: true },
  { name: 'Business Proposal Writing', category: 'Documents', description: 'Compelling business proposals and plans for funding and partnerships.', priceMin: 10000, priceMax: 25000, currency: '₦', turnaround: '5–10 days', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'International Passport Assistance', category: 'Registration', description: 'Application support and processing guidance for international passports.', priceMin: 0, priceMax: 0, currency: '₦', turnaround: 'Varies', featured: true, requiresUpload: true, whatsappEnabled: true },
  { name: 'Document Editing', category: 'Documents', description: 'Proofreading and editing for clarity, grammar, and professional tone.', priceMin: 1000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'JAMB/WAEC Scratch Card & Result Checker', category: 'Registration', description: 'Scratch cards and result-checking assistance for JAMB and WAEC.', priceMin: 500, priceMax: 2000, currency: '₦', turnaround: 'Same day', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'NYSC Registration', category: 'Registration', description: 'Registration support and guidance for NYSC mobilization.', priceMin: 1000, priceMax: 3000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Google Business Profile Setup', category: 'Registration', description: 'Get your business on Google Maps and Search with a professional profile.', priceMin: 5000, priceMax: 10000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'CAC Registration', category: 'Registration', description: 'Business name and company registration support with CAC.', priceMin: 10000, priceMax: 25000, currency: '₦', turnaround: '3–7 days', featured: true, requiresUpload: true, whatsappEnabled: true },
  { name: 'Armed Forces Registration', category: 'Registration', description: 'Application support for Armed Forces recruitment and registration.', priceMin: 2000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },

  // NIN Services
  { name: 'Fresh NIN Enrolment — Minor', category: 'NIN', description: 'NIN enrolment assistance for children under 18.', priceMin: 3000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Fresh NIN Enrolment — Adult', category: 'NIN', description: 'NIN enrolment assistance for adults 18 and above.', priceMin: 3000, priceMax: 7000, currency: '₦', turnaround: '1–3 days', featured: true, requiresUpload: true, whatsappEnabled: true },
  { name: 'NIN Gender Correction', category: 'NIN', description: 'Gender correction support on your NIN record.', priceMin: 15000, priceMax: 25000, currency: '₦', turnaround: '5–10 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Date of Birth Correction — Under 5 Years', category: 'NIN', description: 'DOB correction for children under 5 years old.', priceMin: 10000, priceMax: 15000, currency: '₦', turnaround: '3–7 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Date of Birth Correction — 5+ Years', category: 'NIN', description: 'DOB correction for ages 5 and above.', priceMin: 20000, priceMax: 30000, currency: '₦', turnaround: '7–14 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Date of Birth Correction — 10+ Years', category: 'NIN', description: 'DOB correction for ages 10 and above.', priceMin: 35000, priceMax: 50000, currency: '₦', turnaround: '10–21 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Name Change — Self-Service', category: 'NIN', description: 'Self-service name change guidance and support.', priceMin: 5000, priceMax: 8000, currency: '₦', turnaround: '2–5 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Phone Number Update', category: 'NIN', description: 'Update the phone number linked to your NIN.', priceMin: 2000, priceMax: 3000, currency: '₦', turnaround: 'Same day', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Address Update', category: 'NIN', description: 'Update the address on your NIN record.', priceMin: 3000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'DOB Change — Self-Service Under 5 Years', category: 'NIN', description: 'Self-service DOB change for children under 5.', priceMin: 7000, priceMax: 10000, currency: '₦', turnaround: '3–7 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Suspended NIN Recovery', category: 'NIN', description: 'Recovery assistance for suspended or blocked NIN records.', priceMin: 15000, priceMax: 25000, currency: '₦', turnaround: '5–10 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Minor Name Modification', category: 'NIN', description: 'Name modification support for minors.', priceMin: 8000, priceMax: 12000, currency: '₦', turnaround: '5–7 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'BVN Modification', category: 'NIN', description: 'BVN modification and correction assistance.', priceMin: 10000, priceMax: 15000, currency: '₦', turnaround: '7–10 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'NIN Migration Service', category: 'NIN', description: 'Migration support for NIN records across regions or systems.', priceMin: 12000, priceMax: 20000, currency: '₦', turnaround: '7–14 days', featured: false, requiresUpload: true, whatsappEnabled: true },

  // Graphics
  { name: 'Flyers & Posters', category: 'Graphics', description: 'Eye-catching flyers, posters, and promotional designs.', priceMin: 1500, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'ID Card Design', category: 'Graphics', description: 'Professional ID card design and printing for organizations.', priceMin: 1000, priceMax: 3000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },
  { name: 'Desktop Publishing', category: 'Graphics', description: 'Document layout, typesetting, and project typing services.', priceMin: 1000, priceMax: 5000, currency: '₦', turnaround: '1–3 days', featured: false, requiresUpload: true, whatsappEnabled: true },

  // Training
  { name: 'Graphics Design Training', category: 'Training', description: 'Learn design fundamentals and industry tools from scratch.', priceMin: 15000, priceMax: 50000, currency: '₦', turnaround: '4–8 weeks', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'Coding Training', category: 'Training', description: 'Practical coding and software development training.', priceMin: 20000, priceMax: 80000, currency: '₦', turnaround: '8–12 weeks', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'Desktop Publishing Training', category: 'Training', description: 'Master desktop publishing tools and document production.', priceMin: 10000, priceMax: 30000, currency: '₦', turnaround: '4–6 weeks', featured: false, requiresUpload: false, whatsappEnabled: true },
  { name: 'Computer Skills Training', category: 'Training', description: 'Essential computer skills for beginners and professionals.', priceMin: 5000, priceMax: 20000, currency: '₦', turnaround: '2–4 weeks', featured: false, requiresUpload: false, whatsappEnabled: true },

  // Internet
  { name: 'High-Speed Internet Access', category: 'Internet', description: 'Stable and fast browsing environment with modern computer systems.', priceMin: 100, priceMax: 500, currency: '₦', turnaround: 'Walk-in', featured: false, requiresUpload: false, whatsappEnabled: false },
];

export const serviceCategories: { id: ServiceCategory | 'All'; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'Printing', label: 'Printing' },
  { id: 'Documents', label: 'Documents' },
  { id: 'NIN', label: 'NIN' },
  { id: 'Registration', label: 'Registration' },
  { id: 'Graphics', label: 'Graphics' },
  { id: 'Training', label: 'Training' },
  { id: 'Internet', label: 'Internet' },
];

export const ninCategories = [
  { label: 'Enrolment', items: ['Fresh NIN Enrolment — Minor', 'Fresh NIN Enrolment — Adult'] },
  { label: 'Corrections', items: ['NIN Gender Correction', 'Date of Birth Correction — Under 5 Years', 'Date of Birth Correction — 5+ Years', 'Date of Birth Correction — 10+ Years'] },
  { label: 'Updates', items: ['Phone Number Update', 'Address Update', 'Name Change — Self-Service', 'DOB Change — Self-Service Under 5 Years'] },
  { label: 'Recovery', items: ['Suspended NIN Recovery', 'Minor Name Modification'] },
  { label: 'Migration', items: ['BVN Modification', 'NIN Migration Service'] },
];

export const companyInfo = {
  name: 'CAMEX GLOBAL',
  fullName: 'CAMEX GLOBAL / CAMEX PRINT',
  tagline: 'Internet & Printing Services Made Easy',
  supporting: 'Fast, affordable, and professional services from a trusted cyber café.',
  address: '18/20 Agbebi St, Fadahunsi St,\noff Ijesha Market, Bustop,\nLagos 101015, Lagos, Nigeria',
  addressShort: '18/20 Agbebi St, off Ijesha Market, Lagos',
  phone: '+2348063332087',
  phoneDisplay: '+234 806 333 2087',
  email1: 'camex.print@gmail.com',
  email2: 'ecamybit@gmail.com',
  hours: '24/7 — Monday to Sunday',
  whatsapp: `${WHATSAPP_BASE}&text=${encodeURIComponent("Gooday sir, i am interested in your Services")}`,
  social: {
    facebook: 'https://www.facebook.com/CamexGlobal',
    instagram: 'https://www.instagram.com/camychima/',
    x: 'https://x.com/ecarmelius',
    linkedin: 'https://www.linkedin.com/in/carmelius-ezeonyeka-778989280/',
  },
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=18+Agbebi+St+Fadahunsi+Ijesha+Lagos+Nigeria',
};

export const trustItems = [
  { value: '24/7', label: 'Always Available' },
  { value: 'Fast', label: 'Professional Support' },
  { value: 'Affordable', label: 'Transparent Service Fees' },
  { value: 'Lagos', label: 'Local & Accessible' },
];

export const trainingAreas = [
  { title: 'Graphics Design', desc: 'Learn design fundamentals, typography, and industry tools from scratch.', icon: 'palette' },
  { title: 'Coding', desc: 'Practical software development training with real projects.', icon: 'code' },
  { title: 'Desktop Publishing', desc: 'Master document production, layout, and typesetting tools.', icon: 'file' },
  { title: 'Digital Skills', desc: 'Essential digital skills for the modern workplace.', icon: 'monitor' },
  { title: 'Computer Skills', desc: 'Build confidence with core computer operations.', icon: 'keyboard' },
];

export const serviceExplorerCategories = [
  { num: '01', name: 'Internet', desc: 'High-speed browsing and secure network access.', icon: 'wifi' },
  { num: '02', name: 'Printing', desc: 'Colour, mono, large format, and photocopying.', icon: 'printer' },
  { num: '03', name: 'Documents', desc: 'Formatting, resumes, proposals, and editing.', icon: 'file' },
  { num: '04', name: 'NIN & Identity', desc: 'Enrolment, corrections, updates, and recovery.', icon: 'shield' },
  { num: '05', name: 'Graphics', desc: 'Flyers, ID cards, and desktop publishing.', icon: 'brush' },
  { num: '06', name: 'Training', desc: 'Design, coding, and digital skills development.', icon: 'book' },
];
