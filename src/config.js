module.exports = {
  siteTitle: 'Wang | Software Engineer',
  siteDescription:
    'Wang is an incoming Software Developer, based in China, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Wang, Deb, nkhs, software engineer, web developer, javascript, girlscript, jamshedpur, amdocs, bit, mesra, deoghar',
  siteUrl: 'https://nkhs.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'VhsRHLjZgARQkgFq0IIkurotIL6Mk9DN3FacEoGfS64',
  name: 'Wang',
  location: 'Shenyang, China',
  email: 'wbit85@gmail.com',
  github: 'https://github.com/nkhs',
  twitterHandle: '@nkhs',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nkhs',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/wang-liang-2a268a15a/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nkhs',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/___cd.___/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nkhs',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
