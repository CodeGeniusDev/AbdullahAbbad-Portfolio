export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Fatima A.',
    position: 'Software Engineer',
    img: 'assets/review1.png',
    review:
      'Aqsa is an extremely talented developer. Her ability to translate complex ideas into clean, interactive interfaces is unmatched.',
  },
  {
    id: 2,
    name: 'Shahmeer',
    position: 'Founder of Intellivision',
    img: 'assets/review2.png',
    review:
      'It’s always a pleasure to work with Aqsa. She’s reliable, skilled in web development, and brings creativity to every project.',
  },
];

export const myProjects = [
  {
    title: 'My Personal Portfolio',
    desc: 'This is my 3D interactive portfolio created using Three.js and React, showcasing my skills and projects.',
    subdesc: 'Built with Vite, Tailwind CSS, and Framer Motion.',
    href: '#work',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Three.js', path: '/assets/typescript.png' },
    ],
  },
  // Add more personal projects if you like
];

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance Projects',
    pos: 'Fullstack Developer',
    duration: '2024 - Present',
    title: 'Working on various web projects using React, TailwindCSS and Three.js.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'University Projects',
    pos: 'Student Developer',
    duration: '2024 - 2025',
    title: 'Completed multiple academic projects using modern web tools.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
