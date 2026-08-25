import {
  Database,
  TrendingUp,
  LayoutDashboard,
  Search,
  BarChart3,
  Users,
  Trophy,
  Star,
  Wrench,
  GraduationCap,
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Server,
} from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: TrendingUp,
    title: 'Revenue-Tied Insights',
    description:
      'Turn raw transactional and marketing data into clear recommendations that actually move revenue.',
  },
  {
    icon: Search,
    title: 'CRM & Reporting Audits',
    description:
      'Find the gaps in your CRM and reporting systems that are quietly costing you money.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards People Use',
    description:
      'Build BI dashboards people actually open and act on — not just admire once and forget.',
  },
  {
    icon: Users,
    title: 'E-commerce Analytics',
    description:
      'Specialize in churn, retention, funnel leakage, and customer LTV for e-commerce businesses.',
  },
]

export const achievements = [
  {
    icon: Trophy,
    title: 'Global Top 2%',
    subtitle: '10Alytics — SQL/ETL',
    description: 'Ranked in the top 2% globally for SQL and ETL work at 10Alytics.',
  },
  {
    icon: Star,
    title: 'Top Rated on Upwork',
    subtitle: '100% Job Success Score',
    description: '10+ projects for clients across Australia, the EU, and the UK.',
  },
  {
    icon: Wrench,
    title: '2 Shipped MVPs',
    subtitle: 'Solo Developer',
    description: 'Built and shipped RubricLens and CleanCRM independently.',
  },
]

export const projects = [
  {
    name: 'RubricLens',
    tagline: 'AI Output Auditor',
    description:
      'An AI output auditor that evaluates and scores model responses against defined rubrics, helping teams catch hallucinations and quality issues before they ship.',
    tags: ['AI', 'Quality Assurance', 'Analytics'],
    icon: CheckCircle2,
    accent: 'from-accent-500/20 to-accent-700/10',
  },
  {
    name: 'CleanCRM',
    tagline: 'CRM Data Integrity Scanner',
    description:
      'A CRM data integrity scanner that detects duplicates, missing fields, and broken relationships — giving teams a clean, trustworthy database to work from.',
    tags: ['CRM', 'Data Quality', 'Automation'],
    icon: Database,
    accent: 'from-ink-500/20 to-ink-700/10',
  },
]

export const skills = [
  { name: 'SQL', icon: Database },
  { name: 'Excel / Power BI', icon: BarChart3 },
  { name: 'Python', icon: Server },
  { name: 'ETL Pipelines', icon: TrendingUp },
  { name: 'Dashboard Design', icon: LayoutDashboard },
  { name: 'CRM Auditing', icon: Search },
]

export const socials = [
  {
    label: 'Portfolio',
    href: 'https://analytics-case-study.netlify.app',
    icon: ExternalLink,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yusuftundedunmoye-b154a21a1',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:yusuftundedunmoye@gmail.com',
    icon: Mail,
  },
]

export const currently = [
  {
    icon: GraduationCap,
    text: 'Pursuing a Postgraduate Diploma in Management Information Systems',
  },
  {
    icon: Wrench,
    text: 'Building out a small portfolio of monetizable analytics tools',
  },
]

export const heroStats = [
  { value: '10+', label: 'Client Projects' },
  { value: '100%', label: 'Job Success' },
  { value: 'Top 2%', label: 'Global Ranking' },
  { value: '3', label: 'Continents Served' },
]

export const arrowIcon = ArrowRight
