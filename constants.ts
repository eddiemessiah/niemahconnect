
import { Course, Circle, Job } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Intro to Python for Beginners',
    description: 'Learn the fundamentals of Python, the world\'s most versatile programming language.',
    category: 'Coding',
    level: 'Beginner',
    duration: '4 weeks',
    points: 500,
    image: 'https://picsum.photos/seed/python/400/300',
    modules: 12
  },
  {
    id: '2',
    title: 'Blockchain Basics & Solidity',
    description: 'Master the core concepts of Web3 and start writing your first smart contracts.',
    category: 'Blockchain',
    level: 'Beginner',
    duration: '6 weeks',
    points: 800,
    image: 'https://picsum.photos/seed/blockchain/400/300',
    modules: 15
  },
  {
    id: '3',
    title: 'UI/UX Design for African Fintech',
    description: 'Design digital products that solve real problems in emerging markets.',
    category: 'Design',
    level: 'Intermediate',
    duration: '5 weeks',
    points: 600,
    image: 'https://picsum.photos/seed/design/400/300',
    modules: 10
  },
  {
    id: '4',
    title: 'Soft Skills: Leadership in Tech',
    description: 'Navigate the tech industry with confidence and effective communication.',
    category: 'Soft Skills',
    level: 'Beginner',
    duration: '2 weeks',
    points: 300,
    image: 'https://picsum.photos/seed/leadership/400/300',
    modules: 6
  }
];

export const CIRCLES: Circle[] = [
  {
    id: 'c1',
    name: 'Moms in Tech - Lagos',
    description: 'A safe space for mothers in Lagos pursuing careers in technology.',
    region: 'Nigeria',
    members: 1240,
    category: 'Community'
  },
  {
    id: 'c2',
    name: 'Teen Coders - Brazil',
    description: 'Connect with other teenage girls learning to code in Portuguese.',
    region: 'Brazil',
    members: 850,
    category: 'Youth'
  },
  {
    id: 'c3',
    name: 'Crypto Queens LatAm',
    description: 'Exploring blockchain, DeFi, and NFTs together in Spanish.',
    region: 'Latin America',
    members: 3200,
    category: 'Blockchain'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Junior Web Developer (Remote)',
    company: 'TechGrowth Global',
    type: 'Full-time',
    location: 'Remote',
    salary: '$1,200 - $2,000/mo',
    verified: true
  },
  {
    id: 'j2',
    title: 'Solidity Smart Contract Intern',
    company: 'DeFi Africa Labs',
    type: 'Internship',
    location: 'Lagos/Remote',
    salary: 'Paid',
    verified: true
  },
  {
    id: 'j3',
    title: 'Content Creator Fellowship',
    company: 'Niemah Foundation',
    type: 'Bounty',
    location: 'Remote',
    salary: '500 USDC',
    verified: true
  }
];
