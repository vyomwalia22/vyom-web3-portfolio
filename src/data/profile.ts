/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update your bio, journey, projects, tools,
 *  links and build log. No component changes needed.
 *
 *  Rule of thumb: anything set to `null` or `[]` is "not filled
 *  in yet". While `site.showPlaceholders` is true, those spots
 *  show a subtle "Add details" marker. Set it to false before
 *  you go live and empty fields are hidden instead.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Show "Add details" markers for empty fields. Set to false for production. */
  showPlaceholders: true,
  placeholderText: 'Add details',
  year: 2026,
}

/* ── Profile & links ─────────────────────────────────────── */

export const profile = {
  name: 'Vyom Walia',
  role: 'Web3 Developer & Builder',
  eyebrow: ['Web3 Developer', 'Builder', 'Ecosystem'],
  location: 'India',
  /** Short live status shown under the hero. */
  status: 'Stellar India Ambassador',
  headline: {
    lead: 'From following Web3 to',
    emphasis: 'building in it.',
  },
  intro:
    "I'm Vyom Walia, a Web3 developer and builder from India. I came in through growth and community work. Now I learn the way builders do: shipping projects, joining hackathons, and staying close to the Stellar and Ethereum ecosystems.",
  about: [
    'I came into Web3 from the growth side. As a Growth Intern at Lemma Labs I worked on ecosystem marketing, community and content, which put me around people who were shipping protocols and products every week.',
    'The longer I spent there, the clearer it got that the interesting part sat underneath: the contracts, the tooling, the way decentralized apps actually work. I wanted to understand that layer myself.',
    "So I started building. Stellar Builder Camp in Jaipur put me on a team shipping a Web3 project against the clock. ETHOnline 2026 gave me a reason to build TraceMind. Today I'm a Stellar India Ambassador, and I'm still learning the way I started: by building things and showing up where builders are.",
  ],
  facts: [
    { label: 'Based in', value: 'India' },
    { label: 'Focus', value: 'Web3 development' },
    { label: 'Ecosystems', value: 'Stellar · Ethereum' },
    { label: 'Mode', value: 'Learning by building' },
  ],
}

export const socials = {
  x: { href: 'https://x.com/walia_vyom', handle: '@walia_vyom' },
  /** e.g. 'https://github.com/your-username'. Buttons stay hidden while null. */
  github: null as string | null,
  /** e.g. 'you@example.com'. Button stays hidden while null. */
  email: null as string | null,
}

/* ── Navigation ─────────────────────────────────────────── */

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'now', label: 'Now' },
  { id: 'contact', label: 'Contact' },
] as const

/* ── Hero terminal (reads like a build log of the journey) ─ */

export type TerminalLine = { key: string; value: string; state: 'done' | 'active' | 'pending' }

export const terminal: TerminalLine[] = [
  { key: 'growth', value: 'Lemma Labs', state: 'done' },
  { key: 'camp', value: 'Stellar Builder Camp, Jaipur', state: 'done' },
  { key: 'hackathon', value: 'ETHOnline 2026 · TraceMind', state: 'done' },
  { key: 'ecosystem', value: 'Stellar India Ambassador', state: 'active' },
  { key: 'next', value: 'building…', state: 'pending' },
]

/** The loop shown under the terminal. */
export const loop = ['Learn', 'Build', 'Ship', 'Connect'] as const

/* ── The progression, at a glance ───────────────────────── */

export const path = [
  'Growth',
  'Web3 exposure',
  'Stellar Builder Camp',
  'Building',
  'Web3 development',
  'TraceMind · ETHOnline',
  'Ecosystem participation',
  'More building',
]

/* ── Journey timeline ───────────────────────────────────── */

export type JourneyStep = {
  id: string
  title: string
  org?: string
  /** e.g. 'Mar 2026'. Leave null if you'd rather not show a date. */
  period: string | null
  tag: string
  summary: string
  details: string[]
}

export const journey: JourneyStep[] = [
  {
    id: 'lemma',
    title: 'Growth Internship',
    org: 'Lemma Labs',
    period: null,
    tag: 'Where it started',
    summary: 'Growth, community and content work inside a Web3 company.',
    details: [
      'Worked on ecosystem marketing, community engagement and content.',
      'Saw up close how Web3 projects grow and how builders and communities interact.',
      'Realized there was a whole technical ecosystem underneath, and wanted to learn how it gets built.',
    ],
  },
  {
    id: 'stellar-camp',
    title: 'Stellar Builder Camp',
    org: 'Jaipur',
    period: null,
    tag: 'Turning point',
    summary: 'From observing the Web3 ecosystem to actually building inside it.',
    details: [
      'Worked with a team on a Web3 project during the camp.',
      'Hands-on exposure to collaborative Web3 development and blockchain ecosystem workflows.',
      'Built alongside other builders, under real time constraints.',
      'Saw how an ecosystem event runs from the inside.',
    ],
  },
  {
    id: 'web3-dev',
    title: 'Web3 Development',
    period: null,
    tag: 'The shift',
    summary: 'I stopped just following Web3 and started trying to build in it.',
    details: [
      'Started taking the developer side of Web3 seriously.',
      'Learning how decentralized applications are designed and built.',
      'Treating every project and event as a chance to build something real.',
    ],
  },
  {
    id: 'tracemind',
    title: 'TraceMind',
    org: 'ETHOnline 2026',
    period: '2026',
    tag: 'Personal build',
    summary: 'My own Web3 project, built for ETHOnline 2026.',
    details: [
      'A personal project taken from idea to hackathon build.',
      'Full details are on the project card below.',
    ],
  },
  {
    id: 'ambassador',
    title: 'Stellar India Ambassador',
    period: 'Now',
    tag: 'Current',
    summary: 'Community and ecosystem involvement with Stellar in India.',
    details: [
      'Part of the Stellar community in India as an ambassador.',
      'Staying close to builders and ecosystem events.',
      'Continuing to explore and build around Web3.',
    ],
  },
]

/* ── Projects ───────────────────────────────────────────── */

export type Project = {
  slug: string
  name: string
  /** Event or hackathon badge, e.g. 'ETHOnline 2026'. */
  event: string | null
  description: string
  role: string | null
  stack: string[]
  github: string | null
  demo: string | null
  /** Path under /public, e.g. '/projects/tracemind.png'. Null shows a generated cover. */
  image: string | null
  imageAlt: string
  learned: string | null
}

export const projects: Project[] = [
  {
    slug: 'tracemind',
    name: 'TraceMind',
    event: 'ETHOnline 2026',
    description: 'A personal Web3 project I built for ETHOnline 2026.',
    role: null, // e.g. 'Solo builder' or 'Frontend + smart contracts'
    stack: [], // e.g. ['Solidity', 'React']
    github: null,
    demo: null,
    image: null,
    imageAlt: 'Screenshot of TraceMind',
    learned: null,
  },
]

/* ── Tools I'm exploring (only list what you actually use) ─ */

export type ToolCategory = { name: string; items: string[] }

export const tools: ToolCategory[] = [
  { name: 'Frontend', items: [] },
  { name: 'Web3', items: [] },
  { name: 'Blockchain', items: [] },
  { name: 'Development tools', items: [] },
]

/* ── Ecosystem ─────────────────────────────────────────── */

export type EcosystemItem = {
  id: 'stellar' | 'ethglobal' | 'hackathons' | 'communities'
  title: string
  body: string
  involvement: string
}

export const ecosystem: EcosystemItem[] = [
  {
    id: 'stellar',
    title: 'Stellar',
    body: 'The ecosystem where I first built with a team, and where I stay involved today.',
    involvement: 'Builder Camp, Jaipur · India Ambassador',
  },
  {
    id: 'ethglobal',
    title: 'ETHGlobal / ETHOnline',
    body: 'Where TraceMind came together as a personal hackathon build.',
    involvement: 'ETHOnline 2026 · TraceMind',
  },
  {
    id: 'hackathons',
    title: 'Web3 hackathons',
    body: 'Real deadlines and real teams. Builder events are where I learn fastest.',
    involvement: 'Camps and online hackathons',
  },
  {
    id: 'communities',
    title: 'Developer communities',
    body: 'I started on the growth and community side, so I know how much of Web3 runs on people talking shop.',
    involvement: 'Growth & community background',
  },
]

export const stellar = {
  heading: 'Building deeper in the Stellar ecosystem.',
  body: 'Stellar is where I went from watching to building. It started with a builder camp and turned into ongoing involvement as an ambassador in India.',
  milestones: [
    { title: 'Stellar Builder Camp', meta: 'Jaipur', note: 'Team-based Web3 project' },
    { title: 'Stellar India Ambassador', meta: 'Current', note: 'Community & ecosystem' },
    { title: 'Web3 development journey', meta: 'Ongoing', note: 'Learning by building' },
    { title: 'Ecosystem participation', meta: 'Ongoing', note: 'Events & builders' },
  ],
  disclaimer: 'Personal website. Not an official Stellar site; views are my own.',
}

/* ── Currently building / exploring ────────────────────── */

export const currently = [
  { title: 'Web3 development', body: 'Exploring how decentralized applications are designed and built.' },
  { title: 'Hackathons', body: 'Participating in Web3 hackathons and builder events.' },
  { title: 'Stellar ecosystem', body: 'Continuing to learn and contribute within the Stellar ecosystem.' },
  { title: 'Personal projects', body: 'Turning ideas into working Web3 experiments.' },
]

/* ── Build log (newest first; only real entries) ────────── */

export type LogEntry = { period: string; items: string[] }

export const buildLog: LogEntry[] = [
  {
    period: 'Sep 2026',
    items: [
      'Shipping this portfolio',
      'Stellar India Ambassador',
      'Exploring hackathon opportunities',
      'Building personal projects',
    ],
  },
  { period: '2026', items: ['ETHOnline 2026', 'Built TraceMind'] },
  { period: 'Earlier', items: ['Stellar Builder Camp, Jaipur', 'Team-based Web3 project', 'Growth Intern, Lemma Labs'] },
]

/* ── Latest updates (static; paste real posts from X) ──── */

export type Update = { date: string; text: string; href: string }

/** Example: { date: 'Sep 2026', text: 'Short summary of the post', href: 'https://x.com/walia_vyom/status/…' } */
export const updates: Update[] = []

/* ── SEO ───────────────────────────────────────────────── */
// Title/description/OG tags live in index.html so crawlers see them without JavaScript.
