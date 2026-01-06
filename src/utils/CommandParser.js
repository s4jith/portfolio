import React from 'react';
import {
  PROFILE,
  EDUCATION,
  SKILLS,
  PROJECTS,
  CERTIFICATIONS,
  ACTIVITIES,
  FORTUNE_QUOTES,
  COMMANDS_LIST
} from '../data/portfolioData';
// import { queryGeminiAI } from './GeminiAPI'; // AI query disabled

// Available commands for autocomplete
const AVAILABLE_COMMANDS = [
  'whoami', 'skills', 'projects', 'ls',
  'cat', 'resume', 'contact', 'education',
  'certifications', 'clear', 'sudo'
];

// Project names for cat autocomplete
const PROJECT_NAMES = PROJECTS.map(p => p.id);

export const getAutocompleteSuggestions = (input) => {
  const trimmed = input.trim().toLowerCase();

  if (!trimmed) return [];

  // Check if typing cat command
  if (trimmed.startsWith('cat ')) {
    const partial = trimmed.slice(4);
    return PROJECT_NAMES
      .filter(name => name.startsWith(partial))
      .map(name => `cat ${name}`);
  }

  // General command autocomplete
  return AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(trimmed));
};

export const executeCommand = async (input, context) => {
  const trimmed = input.trim().toLowerCase();
  const parts = input.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ');

  // Route commands
  switch (command) {
    case 'help':
    case '?':
      return { type: 'output', content: renderHelp() };

    case 'whoami':
    case 'profile':
      return { type: 'output', content: renderProfile() };

    case 'skills':
      return { type: 'output', content: renderSkills() };

    case 'projects':
    case 'ls':
      if (args === 'projects' || !args) {
        return { type: 'output', content: renderProjectsList() };
      }
      return { type: 'error', content: `ls: cannot access '${args}': No such file or directory` };

    case 'cat':
      if (!args) {
        return { type: 'error', content: 'cat: missing file operand' };
      }
      if (args === 'skills.txt') {
        return { type: 'output', content: renderSkills() };
      }
      const project = PROJECTS.find(p => p.id === args || p.id === args.replace('./', ''));
      if (project) {
        return { type: 'output', content: renderProjectDetail(project) };
      }
      return { type: 'error', content: `cat: ${args}: No such file or directory` };

    case 'resume':
    case 'cv':
      return { type: 'output', content: renderResume() };

    case 'contact':
    case 'mailto':
      return { type: 'output', content: renderContact() };

    case 'education':
    case 'edu':
      return { type: 'output', content: renderEducation() };

    // Sports command - temporarily disabled
    // case 'sports':
    //   return { type: 'output', content: renderSports() };

    case 'certifications':
    case 'certs':
      return { type: 'output', content: renderCertifications() };

    case 'clear':
    case 'cls':
      return { type: 'clear' };

    // Theme command - temporarily disabled
    // case 'theme':
    //   const theme = args.toLowerCase();
    //   if (theme === 'matrix') {
    //     context.setTheme('matrix');
    //     return { type: 'output', content: '<span class="output-success">🎯 Matrix theme activated. Welcome to the green zone.</span>' };
    //   } else if (theme === 'default' || theme === 'orange') {
    //     context.setTheme('default');
    //     return { type: 'output', content: '<span class="output-success">🎯 Default theme restored.</span>' };
    //   }
    //   return { type: 'output', content: 'Usage: theme [default|matrix]' };

    // Fortune command - temporarily disabled
    // case 'fortune':
    //   const quote = FORTUNE_QUOTES[Math.floor(Math.random() * FORTUNE_QUOTES.length)];
    //   return { type: 'output', content: `<div class="ascii-box"><div class="output-dim">AI/ML Wisdom of the Day:</div><br/>${quote}</div>` };

    case 'sudo':
      if (args.toLowerCase() === 'hire-me') {
        return { type: 'output', content: renderHireMe() };
      }
      return { type: 'error', content: `sudo: ${args}: command not found` };

    // AI query command - temporarily disabled
    // case 'ai-query':
    // case 'ask':
    //   if (!args) {
    //     return { type: 'output', content: 'Usage: ai-query "your question here"' };
    //   }
    //   return await handleAIQuery(args);

    // Sound command - temporarily disabled
    // case 'sound':
    //   if (args === 'on') {
    //     context.setSoundEnabled(true);
    //     return { type: 'output', content: '<span class="output-success">🔊 Sound effects enabled</span>' };
    //   } else if (args === 'off') {
    //     context.setSoundEnabled(false);
    //     return { type: 'output', content: '<span class="output-dim">🔇 Sound effects disabled</span>' };
    //   }
    //   return { type: 'output', content: `Sound is currently ${context.soundEnabled ? 'ON' : 'OFF'}. Usage: sound [on|off]` };

    default:
      return {
        type: 'error',
        content: `Command not found: ${command}. Type 'help' for available commands.`
      };
  }
};

// Render functions

function renderHelp() {
  let html = `
<div class="ascii-box">
  <div class="ascii-box-header">SAJITH'S AI TERMINAL - COMMAND REFERENCE</div>
  <table class="terminal-table">
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
`;

  COMMANDS_LIST.forEach(cmd => {
    html += `
      <tr>
        <td style="color: var(--accent-primary)">${cmd.cmd}</td>
        <td>${cmd.desc}</td>
      </tr>
`;
  });

  html += `
    </tbody>
  </table>
  <div class="output-dim" style="margin-top: 12px">
    💡 Tips: Use Tab for autocomplete, ↑↓ for command history
  </div>
</div>
`;
  return html;
}

function renderProfile() {
  // Create typing animation name with individual character spans
  const nameChars = PROFILE.name.split('').map((char, index) => {
    if (char === ' ') return '<span class="name-char" style="animation-delay: ' + (index * 0.08) + 's">&nbsp;</span>';
    return '<span class="name-char" style="animation-delay: ' + (index * 0.08) + 's">' + char + '</span>';
  }).join('');

  let html = `
<div class="output-block">
  <!-- Hero Name Section - Centered with Animation -->
  <div class="profile-hero">
    <div class="profile-hero-content">
      <div class="profile-name-animated">${nameChars}<span class="typing-cursor">|</span></div>
      <div class="profile-tagline">${PROFILE.title}</div>
      <div class="profile-subtitle">${PROFILE.subtitle}</div>
    </div>
  </div>
  
  <!-- Cool About Section -->
  <div class="ascii-box about-section">
    <div class="ascii-box-header">✨ Hey, I'm Sajith!</div>
    <div class="about-content">
      <p class="about-intro">
        <span class="highlight-text">Passionate builder</span> of intelligent systems, 
        <span class="highlight-text">AI enthusiast</span>, and someone who genuinely believes 
        that code can change the world.
      </p>
      <p class="about-body">${PROFILE.bio}</p>
    </div>
  </div>
  
  <div class="ascii-box">
    <div class="ascii-box-header">💻 Core Skills</div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px">
`;

  SKILLS.programming.skills.forEach(skill => {
    html += `      <span class="tech-badge">${skill}</span>
`;
  });

  html += `
    </div>
  </div>
  
  <div class="ascii-box">
    <div class="ascii-box-header">🌐 Languages</div>
    <div style="display: flex; gap: 24px; flex-wrap: wrap">
`;

  PROFILE.languages.forEach(lang => {
    html += `
      <div>
        <span style="color: var(--text-primary)">${lang.name}</span>
        <span style="color: var(--text-dim)"> (${lang.level})</span>
      </div>
`;
  });

  html += `
    </div>
  </div>
</div>
`;
  return html;
}

function renderSkills() {
  let html = `
<div class="output-block">
<pre class="ascii-art">
╔═══════════════════════════════════════════════════════════╗
║                      SKILL TREE                           ║
╚═══════════════════════════════════════════════════════════╝
</pre>
`;

  // Programming Languages - just names, no percentages
  html += `
  <div class="skill-category">
    <div class="skill-category-title">🔥 ${SKILLS.programming.title}</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-left: 24px">
`;
  SKILLS.programming.skills.forEach(skill => {
    html += `      <span class="tech-badge">${skill}</span>
`;
  });
  html += `    </div>
  </div>`;

  // AI/ML Skills
  html += `
  <div class="skill-category">
    <div class="skill-category-title">🤖 ${SKILLS.aiml.title}</div>
    <div class="skill-list">
`;
  SKILLS.aiml.skills.forEach(skill => {
    html += `      <div class="skill-item">${skill}</div>
`;
  });
  html += `    </div>
  </div>`;

  // Frameworks
  html += `
  <div class="skill-category">
    <div class="skill-category-title">🛠️ ${SKILLS.frameworks.title}</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-left: 24px">
`;
  SKILLS.frameworks.skills.forEach(skill => {
    html += `      <span class="tech-badge">${skill}</span>
`;
  });
  html += `    </div>
  </div>`;

  // Tools
  html += `
  <div class="skill-category">
    <div class="skill-category-title">⚙️ ${SKILLS.tools.title}</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-left: 24px">
`;
  SKILLS.tools.skills.forEach(skill => {
    html += `      <span class="tech-badge">${skill}</span>
`;
  });
  html += `    </div>
  </div>`;

  html += `</div>`;
  return html;
}

function renderProjectsList() {
  let html = `
<div class="directory-tree">
  <div class="tree-item folder">
    <span class="tree-prefix">./</span>
    <span class="tree-icon">📁</span>
    <span>projects/</span>
  </div>
`;

  PROJECTS.forEach((project, index) => {
    const isLast = index === PROJECTS.length - 1;
    const prefix = isLast ? '└──' : '├──';
    html += `
  <div class="tree-item folder" style="padding-left: 24px">
    <span class="tree-prefix">${prefix}</span>
    <span class="tree-icon">📂</span>
    <span style="color: var(--accent-blue)">${project.id}/</span>
    <span class="tree-comment"># ${project.name.split(' – ')[0].split(' - ')[0]}</span>
  </div>
`;
  });

  html += `
</div>
<div class="output-dim" style="margin-top: 12px">
  💡 Type 'cat &lt;project-name&gt;' for detailed info (e.g., cat flexiev-platform)
</div>
`;
  return html;
}

function renderProjectDetail(project) {
  let html = `
<div class="project-card">
  <div class="project-title">${project.name}</div>
  <div style="margin-bottom: 8px">
    <span class="tech-badge" style="background: var(--accent-blue); color: #fff; font-weight: 600">${project.contribution}</span>
    ${project.role ? `<span class="tech-badge" style="margin-left: 8px">${project.role}</span>` : ''}
  </div>
  <div class="project-description">${project.description}</div>
  
  <div class="project-tech">
`;
  project.techStack.forEach(tech => {
    html += `    <span class="tech-badge">${tech}</span>
`;
  });
  html += `  </div>
  
  <div class="project-features">
    <div style="color: var(--text-dim); margin-bottom: 8px">Key Features:</div>
`;
  project.features.forEach(feature => {
    html += `    <div class="feature-item">${feature}</div>
`;
  });
  html += `  </div>
  
  <div class="project-links">
    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
      <span>🔗</span> View on GitHub
    </a>
  </div>
</div>
`;
  return html;
}

function renderResume() {
  return `
<div class="ascii-box">
  <div class="ascii-box-header">📄 Resume</div>
  <div style="margin: 16px 0">
    <div style="color: var(--text-secondary); margin-bottom: 16px">
      <strong style="color: var(--text-primary)">${PROFILE.name}</strong> - ${PROFILE.title}<br/><br/>
      <strong>Education:</strong> ${EDUCATION.current.degree}<br/>
      ${EDUCATION.current.institution}<br/>
      CGPA: ${EDUCATION.current.cgpa} | ${EDUCATION.current.duration}
    </div>
    <a href="${PROFILE.resumeUrl}" download="Sajith_J_Resume.pdf" class="download-btn">
      📥 Download Full Resume (PDF)
    </a>
  </div>
</div>
`;
}

function renderContact() {
  return `
<div class="ascii-box">
  <div class="ascii-box-header">📬 Contact Information</div>
  
  <div class="contact-item">
    <span class="contact-icon">📧</span>
    <span style="min-width: 80px">Email:</span>
    <a href="mailto:${PROFILE.email}" class="contact-link">${PROFILE.email}</a>
    <button class="copy-btn" onclick="navigator.clipboard.writeText('${PROFILE.email}').then(() => {this.textContent='Copied!'; this.classList.add('copied'); setTimeout(() => {this.textContent='Copy'; this.classList.remove('copied')}, 2000)})">Copy</button>
  </div>
  
  <div class="contact-item">
    <span class="contact-icon">🐙</span>
    <span style="min-width: 80px">GitHub:</span>
    <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="contact-link">Winterbear0701</a>
    <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="copy-btn">Open</a>
  </div>
  
  <div class="contact-item">
    <span class="contact-icon">💼</span>
    <span style="min-width: 80px">LinkedIn:</span>
    <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">sajith-070106-j</a>
    <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" class="copy-btn">Open</a>
  </div>
</div>
`;
}

function renderEducation() {
  return `
<div class="ascii-box">
  <div class="ascii-box-header">🎓 Education</div>
  
  <div style="margin: 16px 0; padding: 16px; background: var(--bg-secondary); border-radius: 8px; border-left: 3px solid var(--accent-primary)">
    <div style="color: var(--accent-primary); font-weight: 600; font-size: 16px">${EDUCATION.current.degree}</div>
    <div style="color: var(--text-primary); margin: 8px 0">${EDUCATION.current.institution}</div>
    <div style="color: var(--text-dim)">${EDUCATION.current.location} | ${EDUCATION.current.duration}</div>
    <div style="margin-top: 12px">
      <span class="tech-badge" style="background: var(--accent-green); color: var(--bg-primary)">CGPA: ${EDUCATION.current.cgpa}</span>
      <span class="tech-badge" style="margin-left: 8px">${EDUCATION.current.year}</span>
    </div>
  </div>
  
  <div style="margin: 16px 0; padding: 16px; background: var(--bg-secondary); border-radius: 8px; border-left: 3px solid var(--text-dim)">
    <div style="color: var(--text-primary); font-weight: 600">${EDUCATION.secondary.degree}</div>
    <div style="color: var(--text-secondary); margin: 8px 0">${EDUCATION.secondary.institution}</div>
    <div style="color: var(--text-dim)">${EDUCATION.secondary.location} | ${EDUCATION.secondary.duration}</div>
    <div style="margin-top: 12px">
      <span class="tech-badge">Marks: ${EDUCATION.secondary.mark}</span>
    </div>
  </div>
</div>
`;
}

function renderCertifications() {
  let html = `
<div class="ascii-box">
  <div class="ascii-box-header">📜 Certifications</div>
  <table class="terminal-table">
    <thead>
      <tr>
        <th>Certificate</th>
        <th>Issuer</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
`;

  CERTIFICATIONS.forEach(cert => {
    html += `
      <tr>
        <td style="color: var(--text-primary)">${cert.name}</td>
        <td style="color: var(--accent-secondary)">${cert.issuer}</td>
        <td style="color: var(--text-dim)">${cert.date}</td>
      </tr>
`;
  });

  html += `
    </tbody>
  </table>
</div>
`;
  return html;
}



function renderHireMe() {
  return `
<div class="output-block">
<pre class="ascii-art neon-text">
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🎉  SUDO HIRE-ME ACTIVATED! 🎉                             ║
║                                                               ║
║   You've unlocked the secret hiring mode!                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
</pre>

<div class="ascii-box" style="border-color: var(--accent-green); background: rgba(0,255,0,0.05)">
  <div class="ascii-box-header" style="color: var(--accent-green)">💼 Why Hire Sajith?</div>
  
  <div style="margin: 16px 0">
    <div class="feature-item">🚀 3rd-year AI/DS student with 8.6 CGPA</div>
    <div class="feature-item">💡 Built 5+ ML/AI projects including RAG systems & computer vision</div>
    <div class="feature-item">🔧 Proficient in Python, PyTorch, TensorFlow, HuggingFace</div>
    <div class="feature-item">📚 Experience with LLMs, RAG, OpenVINO optimization</div>
    <div class="feature-item">🏆 Leadership experience as Rotaract Club Chair</div>
    <div class="feature-item">⚡ Fast learner with strong problem-solving skills</div>
  </div>
  
  <div style="margin-top: 20px; text-align: center">
    <a href="${PROFILE.resumeUrl}" download class="download-btn" style="background: linear-gradient(135deg, var(--accent-green), #00cc00)">
      📄 Download Resume Now
    </a>
    <a href="mailto:${PROFILE.email}?subject=Job Opportunity for Sajith" class="download-btn" style="margin-left: 12px">
      ✉️ Send Email
    </a>
  </div>
</div>

<div class="output-success" style="margin-top: 16px; text-align: center">
  ✨ Thank you for considering me! Let's build something amazing together! ✨
</div>
</div>
`;
}

async function handleAIQuery(query) {
  try {
    const response = await queryGeminiAI(query);
    return {
      type: 'output',
      content: `
<div class="ascii-box">
  <div class="ascii-box-header">🤖 AI Response</div>
  <div style="color: var(--text-dim); margin-bottom: 12px">Query: "${query}"</div>
  <div style="color: var(--text-secondary); line-height: 1.8; white-space: pre-wrap">${response}</div>
</div>
`
    };
  } catch (error) {
    return {
      type: 'output',
      content: `
<div class="ascii-box" style="border-color: var(--accent-red)">
  <div class="ascii-box-header" style="color: var(--accent-red)">⚠️ AI Query Error</div>
  <div style="color: var(--text-dim)">Unable to process query. ${error.message || 'Please try again later.'}</div>
</div>
`
    };
  }
}
