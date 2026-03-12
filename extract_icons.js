const fs = require('fs');
const si = require('simple-icons');

const reqIcons = ['react', 'nextdotjs', 'javascript', 'typescript', 'tailwindcss', 
                  'nodedotjs', 'express', 'python', 'postgresql', 'mongodb', 
                  'git', 'github', 'docker', 'postman', 'amazonaws', 'vercel', 'googleads'];

const mappedColors = {
  react: '#61DAFB',
  nextdotjs: '#ffffff',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  tailwindcss: '#06B6D4',
  nodedotjs: '#5FA04E',
  express: '#ffffff',
  python: '#3776AB',
  postgresql: '#4169E1',
  mongodb: '#47A248',
  git: '#F05032',
  github: '#ffffff',
  docker: '#2496ED',
  postman: '#FF6C37',
  amazonaws: '#FF9900',
  vercel: '#ffffff',
  googleads: '#F4B400'
};

const output = reqIcons.map(slug => {
  const icon = si['si' + slug.charAt(0).toUpperCase() + slug.slice(1).replace('dotjs', 'DotJs').replace('js', 'Js')] || si['si' + slug.charAt(0).toUpperCase() + slug.slice(1)];
  const nameToKeys = {
    'react': 'siReact', 'nextdotjs': 'siNextdotjs', 'javascript': 'siJavascript',
    'typescript': 'siTypescript', 'tailwindcss': 'siTailwindcss', 'nodedotjs': 'siNodedotjs',
    'express': 'siExpress', 'python': 'siPython', 'postgresql': 'siPostgresql',
    'mongodb': 'siMongodb', 'git': 'siGit', 'github': 'siGithub', 'docker': 'siDocker',
    'postman': 'siPostman', 'amazonaws': 'siAmazonaws', 'vercel': 'siVercel', 'googleads': 'siGoogleads'
  };
  
  let ic = si[nameToKeys[slug]] || Object.values(si).find(v => v && v.slug === slug);
  if (!ic) return `${slug}: not found!`;
  
  return `${slug}: ${ic.hex} PATH: ${ic.path}`;
});
fs.writeFileSync('C:\\Users\\DELL\\OneDrive\\Desktop\\majors\\personal\\extracted_icons.txt', output.join('\n'));
