/**
 * ============================================================
 *  EDIT ME — everything on the site is pulled from this file.
 *  You should not need to touch any component to update copy,
 *  links, numbers or the resume URL. Just edit the values below.
 * ============================================================
 */

const siteConfig = {
  // ---- Identity -------------------------------------------------
  name: 'Rohan',
  fullName: 'Rohan Kumar', // TODO: add your last name
  role: 'Social Media Manager',
  roleWords: ['Strategist', 'Storyteller', 'Growth Partner', 'Community Builder'], // rotates in hero
  location: 'Based in India · Working with creators worldwide', // TODO: edit
  availability: 'Open to work',
  email: 'ronymalik.2604@gmail.com', // TODO: replace with your real email
  phone: '+91 8699090672', // TODO: replace or remove from Contact.jsx

  // ---- Hero copy --------------------------------------------------
  heroEyebrow: 'Social Media Management',
  heroLine1: 'I build feeds',
  heroLine2: 'people can\u2019t scroll past.',
  heroSubtext:
    'I plan, create and run the social presence for creators and brands turning a blank content calendar into a following that actually shows up.',

  // ---- Resume ------------------------------------------------------
  // TODO: paste your Google Drive "share" link below (Anyone with link → Viewer).
  // It will open in a new tab when someone clicks "View Résumé".
  resumeUrl: 'https://drive.google.com/file/d/1phq7h7nRkHMGEitbBCsX6G5YqCWIkWrU/view?usp=sharing',

  // ---- Bio / About ---------------------------------------------------
  bio: [
    'I\u2019m Rohan, a social media manager who treats every platform like its own language what works on Threads falls flat on LinkedIn, and a Reel is not a shorter YouTube video.',
    'My day-to-day is a mix of content calendars, analytics dashboards and way too many draft captions. I like it that way placeholder bio, edit this to sound like you.',
  ],

  // ---- Core services (from the brief) --------------------------------
  services: [
    {
      label: '01',
      title: 'Content Creation',
      copy: 'Concepting, shooting and editing short-form and long-form content built for the way each platform actually gets watched.',
    },
    {
      label: '02',
      title: 'Strategy',
      copy: 'Content pillars, posting cadence and positioning — the plan behind the posts, not just the posts themselves.',
    },
    {
      label: '03',
      title: 'Analytics',
      copy: 'Weekly and monthly reporting that tracks what\u2019s actually moving the needle, and cuts what isn\u2019t.',
    },
    {
      label: '04',
      title: 'Community Management',
      copy: 'DMs, comments and replies handled in the brand\u2019s voice — every day, not just launch week.',
    },
    {
      label: '05',
      title: 'Paid Ads',
      copy: 'Boosted content and paid campaigns across Meta and beyond, built to extend what\u2019s already working organically.',
    },
    {
      label: '06',
      title: 'Short / Long Form Video Idea', // TODO: replace or remove this placeholder card
      copy: 'Boosting the script and content delivery at best.',
    },
  ],

  // ---- Platforms managed ------------------------------------------------
  platforms: [
    { name: 'Instagram' },
    { name: 'LinkedIn' },
    { name: 'Twitter / X' },
    { name: 'Threads' },
    { name: 'YouTube' },
  ],

  // ---- Live metrics ticker (signature strip under the hero) --------------
  // TODO: swap these for your own real numbers whenever you like.
  tickerStats: [
    { value: 11.3, suffix: 'K', label: 'Instagram followers grown for a client' },
    { value: 1.14, suffix: 'K', label: 'YouTube subscribers on a managed channel' },
    { value: 40, suffix: '+', label: 'Pieces of content shipped / month' }, // placeholder
    { value: 3, suffix: 'x', label: 'Average reach lift after 90 days' }, // placeholder
  ],

  // ---- Featured client -------------------------------------------------
  featuredClient: {
    name: 'Dr. Suneha',
    handle: '@itssunehanotsneha',
    tag: 'Dentist · Content Creator',
    blurb:
      'End-to-end social presence for Dr. Suneha a practising dentist building a content brand. I handle content strategy, filming direction, editing, posting and the community around it.',
    instagram: {
      url: 'https://instagram.com/itssunehanotsneha', // TODO: confirm exact handle/URL
      followers: '11.3K',
      label: 'Followers',
    },
    youtube: {
      url: 'https://youtube.com/@itssunehanotsneha?si=k_XM8fbpKR23lHDP',
      subscribers: '1.14K',
      label: 'Subscribers',
    },
  },

  // ---- More clients placeholder row --------------------------------------
  moreClientsNote: 'More client work coming soon',

  // ---- Socials (your own) --------------------------------------------
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/i_rony19?igsh=dTFyNnBnNTF2cnJp' }, // TODO
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-kumar-70b8b2255/' }, // TODO
    { name: 'Twitter / X', url: 'https://x.com/Rohan_kumar26' }, // TODO
    { name: 'Threads', url: 'https://www.threads.com/@i_rony19' }, // TODO
    // { name: 'YouTube', url: 'https://youtube.com/@yourhandle' }, // TODO
  ],

  // ---- CTAs --------------------------------------------------------
  ctaConsultation: 'Book a Consultation',
  ctaResume: 'View Résumé',
  ctaContact: 'Get in Touch',
}

export default siteConfig
