// Single source of truth for business details used across the site.
// Update here and every page, the footer, and the structured data follow.

export const site = {
  name: 'Prime View Exteriors',
  legalName: 'Prime View Exteriors',
  tagline: 'Roofing, siding, and window replacement specialists in Central Indiana.',
  description:
    'Prime View Exteriors is a licensed and insured roofing, siding, and window replacement contractor serving Indianapolis and Central Indiana. Free inspections and estimates. Financing available.',
  phone: '317-908-2986',
  phoneDisplay: '(317) 908-2986',
  // Leads from the contact form are emailed by Netlify Forms to the address
  // configured in the Netlify dashboard (Forms > Notifications). This value is
  // only shown on the page.
  email: 'wesleysanders98@gmail.com',
  address: {
    street: '7116 Oldham Dr',
    city: 'Indianapolis',
    state: 'IN',
    zip: '46221',
  },
  hours: 'Mon - Fri, 9:00 am - 5:00 pm',
  serviceArea: 'Indianapolis and Central Indiana',
  serviceCities: [
    'Indianapolis',
    'Greenwood',
    'Avon',
    'Plainfield',
    'Brownsburg',
    'Carmel',
    'Fishers',
    'Franklin',
    'Mooresville',
    'Whiteland',
  ],
  // Interim URL while the primary domain is being recovered. Change to
  // https://primeviewexteriors.com once DNS points at Netlify.
  url: 'https://primeviewexteriors.netlify.app',
  social: {
    facebook: '',
    instagram: '',
    google: '',
  },
};

export const services = [
  {
    slug: 'roofing',
    title: 'Roof Replacement & Repair',
    short: 'Roofing',
    description:
      'Full tear-off and replacement with architectural shingles, storm damage repair, and roof inspections. We handle the details so your home stays dry.',
    bullets: ['Full roof replacement', 'Storm and hail damage repair', 'Leak diagnosis and repair', 'Roof inspections'],
  },
  {
    slug: 'siding',
    title: 'Siding Installation',
    short: 'Siding',
    description:
      'New siding, plus soffit, fascia, and trim refreshes that protect your home and give it a clean, finished look.',
    bullets: ['Vinyl and fiber cement siding', 'Soffit and fascia', 'Trim and wrap', 'Siding repair'],
  },
  {
    slug: 'windows',
    title: 'Windows & Doors',
    short: 'Windows & Doors',
    description:
      'Energy-efficient replacement windows and entry doors, installed right, with clean lines and a tight seal.',
    bullets: ['Replacement windows', 'Entry and patio doors', 'Energy-efficient upgrades', 'Professional installation'],
  },
];

export const whyUs = [
  {
    title: 'Free inspections and estimates',
    text: 'We come to you, look at the whole picture, and give you a clear written estimate. No pressure.',
  },
  {
    title: 'Licensed and insured',
    text: 'Fully licensed and insured, so your home and your project are protected from day one.',
  },
  {
    title: 'Financing available',
    text: 'Flexible financing options so a new roof, siding, or windows fit your budget.',
  },
  {
    title: 'Local craftsmanship',
    text: 'An Indianapolis crew that treats your house like it is our own and leaves the job site clean.',
  },
];

export const process = [
  { step: '1', title: 'Request an estimate', text: 'Fill out the form or call. We will reach out within one business day.' },
  { step: '2', title: 'Free inspection', text: 'We inspect your roof, siding, or windows and walk you through what we find.' },
  { step: '3', title: 'Clear written quote', text: 'You get a straightforward estimate with options, including financing.' },
  { step: '4', title: 'Quality installation', text: 'Our crew completes the work on schedule and cleans up when we are done.' },
];

export const faqs = [
  {
    q: 'How much does a new roof cost in Indianapolis?',
    a: 'It depends on the size and pitch of your roof, the shingle you choose, and how many layers need to come off. The only way to know is a free inspection and written estimate, which is exactly what we offer.',
  },
  {
    q: 'Do you work with insurance claims for storm damage?',
    a: 'Yes. We document the damage, meet with your adjuster if needed, and help you understand what your policy covers.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential roofs are completed in one to two days once materials arrive. Siding and window projects vary by scope and we give you a schedule up front.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. Ask about financing options during your estimate and we will walk you through what is available.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Indianapolis and the surrounding Central Indiana communities, including Greenwood, Avon, Plainfield, Brownsburg, Carmel, Fishers, and Franklin.',
  },
];

export const formServices = ['Roofing', 'Siding', 'Windows & Doors', 'Storm Damage / Insurance Claim', 'Not sure yet'];
