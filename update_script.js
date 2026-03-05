const fs = require('fs');
const path = require('path');

const file = 'c:\\Users\\DELL\\OneDrive\\Desktop\\majors\\personal\\index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. CSS REPLACEMENTS
const newCSS = `        /* Project showcase */
        .projects-showcase {
            display: grid;
            gap: 64px;
            grid-template-columns: 1fr 1fr;
            background: transparent;
            align-items: start;
        }

        .project-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .project-list-item {
            background: transparent;
            padding: 24px;
            border: 1px solid transparent;
            border-radius: 16px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .project-list-item::before {
            content: '';
            position: absolute;
            left: -12px;
            top: 24px;
            bottom: 24px;
            width: 2px;
            background: var(--border);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 2px;
        }

        .project-list-item:hover, .project-list-item.is-active {
            background: var(--surface);
            border-color: var(--border);
            box-shadow: var(--shadow-sm);
        }

        .project-list-item:hover::before, .project-list-item.is-active::before {
            background: var(--accent);
            top: 16px;
            bottom: 16px;
        }

        .project-list-item.project-list-item--wip::before {
            background: rgba(245, 158, 11, 0.42);
        }
        
        [data-theme="dark"] .project-list-item.project-list-item--wip::before {
            background: rgba(251, 191, 36, 0.5);
        }

        .project-list-item.project-list-item--wip:hover::before, .project-list-item.project-list-item--wip.is-active::before {
            background: rgba(245, 158, 11, 0.8);
            box-shadow: 0 0 12px rgba(245, 158, 11, 0.4);
        }

        [data-theme="dark"] .project-list-item.project-list-item--wip:hover::before, [data-theme="dark"] .project-list-item.project-list-item--wip.is-active::before {
            background: rgba(251, 191, 36, 0.8);
            box-shadow: 0 0 12px rgba(251, 191, 36, 0.4);
        }

        .project-visual-container {
            position: sticky;
            top: 120px;
        }

        .project-visual-frame {
            background: var(--surface);
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 18px;
            transition: transform 0.2s ease-out,
                box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                background 0.45s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 16 / 10;
            transform-style: preserve-3d;
            transform: perspective(1000px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg)) translateY(var(--lift, 0px)) scale(var(--scale, 1));
            will-change: transform;
        }

        .project-visual-frame::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(
                800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(255, 255, 255, 0.12),
                transparent 40%
            );
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 10;
            mix-blend-mode: overlay;
        }

        [data-theme="dark"] .project-visual-frame::before {
            background: radial-gradient(
                800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(255, 255, 255, 0.08),
                transparent 40%
            );
        }

        .project-visual-frame:hover::before {
            opacity: 1;
        }

        .project-visual-frame.is-wip {
            border-color: rgba(245, 158, 11, 0.42);
            box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.24);
        }

        [data-theme="dark"] .project-visual-frame.is-wip {
            border-color: rgba(251, 191, 36, 0.5);
            box-shadow: 0 0 0 1px rgba(251, 191, 36, 0.24);
        }

        .project-visual-frame.is-wip:hover {
            border-color: rgba(245, 158, 11, 0.68);
            box-shadow:
                0 0 0 1px rgba(245, 158, 11, 0.45) inset,
                0 24px 48px -12px rgba(245, 158, 11, 0.2);
            --lift: -8px;
            --scale: 1.02;
            z-index: 2;
        }

        [data-theme="dark"] .project-visual-frame.is-wip:hover {
            border-color: rgba(251, 191, 36, 0.8);
            box-shadow:
                0 0 0 1px rgba(251, 191, 36, 0.5) inset,
                0 32px 64px -16px rgba(251, 191, 36, 0.25);
        }

        .project-visual-frame:hover {
            background: var(--surface-elevated);
            border-color: var(--text-tertiary);
            box-shadow: 
                0 20px 40px -10px rgba(0, 0, 0, 0.08),
                0 0 0 1px var(--text-tertiary) inset;
            --lift: -8px;
            --scale: 1.02;
            z-index: 2;
        }

        [data-theme="dark"] .project-visual-frame:hover {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 
                0 24px 48px -12px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        .visual-img {
            position: absolute;
            inset: 12px;
            width: calc(100% - 24px);
            height: calc(100% - 24px);
            object-fit: cover;
            object-position: center;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface-elevated);
            transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s, border-color 0.5s;
            filter: grayscale(20%);
            transform: translateZ(20px) scale(0.98);
            opacity: 0;
            box-shadow: var(--shadow-sm);
        }

        .visual-img.active {
            opacity: 1;
            transform: translateZ(20px) scale(1);
        }

        .project-visual-frame:hover .visual-img.active {
            filter: grayscale(0%);
            transform: translateZ(40px) scale(1.03);
            border-color: var(--text-tertiary);
            box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        }

        [data-theme="dark"] .project-visual-frame:hover .visual-img.active {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.6);
        }

        .project-header, .project-description, .project-footer {
            transform: translateZ(10px);
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-list-item:hover .project-header,
        .project-list-item:hover .project-description,
        .project-list-item:hover .project-footer {
            transform: translateZ(20px);
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 14px;
            gap: 16px;
        }

        .project-title {
            font-size: 21px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.3;
            transition: color 0.3s;
        }

        .project-list-item:hover .project-title, .project-list-item.is-active .project-title {
            color: var(--accent);
        }

        .project-year {
            font-family: 'Geist Mono', monospace;
            font-size: 11px;
            font-weight: 500;
            color: var(--text-tertiary);
            letter-spacing: 0.3px;
        }

        .project-list-item.project-list-item--wip .project-year {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 3px 10px;
            border-radius: 999px;
            border: 1px solid rgba(245, 158, 11, 0.55);
            background: rgba(245, 158, 11, 0.16);
            color: #7c2d12;
            font-weight: 600;
            letter-spacing: 0.45px;
        }

        [data-theme="dark"] .project-list-item.project-list-item--wip .project-year {
            border-color: rgba(251, 191, 36, 0.52);
            background: rgba(251, 191, 36, 0.16);
            color: #fcd34d;
        }

        .project-list-item.project-list-item--wip .project-year::before {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--wip-glow);
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.62);
            animation: wip-dot-pulse 1.9s ease-out infinite;
        }

        .project-description {
            color: var(--text-secondary);
            margin-bottom: 20px;
            font-size: 15px;
            line-height: 1.7;
            letter-spacing: -0.01em;
            flex: 1;
        }

        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 14px;
            margin-top: auto;
            flex-wrap: wrap;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tag {
            font-family: 'Geist Mono', monospace;
            font-size: 10px;
            font-weight: 500;
            padding: 5px 11px;
            background: var(--surface-elevated);
            border: 1px solid var(--border);
            border-radius: 999px;
            color: var(--text-secondary);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            letter-spacing: 0.2px;
        }

        .project-list-item:hover .tag, .project-list-item.is-active .tag {
            border-color: var(--accent);
            background: var(--accent);
            color: var(--bg);
            transform: translateY(-1px) scale(1.01);
        }

        .visit-link {
            font-family: 'Geist Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: var(--text-tertiary);
            text-decoration: none;
            display: flex;
            align-items: center;
            white-space: nowrap;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid var(--border);
            border-radius: 999px;
            padding: 8px 12px;
            background: var(--surface);
        }

        .project-list-item:hover .visit-link, .project-list-item.is-active .visit-link {
            color: var(--bg);
            background: var(--accent);
            border-color: var(--accent);
        }`;

const startCSS = content.indexOf('        /* Project cards */');
const endCSS = content.indexOf('        @keyframes wip-dot-pulse {', startCSS);

content = content.substring(0, startCSS) + newCSS + "\n" + content.substring(endCSS);

// Mobile media query replacements
const mqStr1 = \`            .projects-grid {
                grid-template-columns: 1fr;
            }

            .project-card {
                padding: 20px;
            }

            .project-footer {
                align-items: flex-start;
            }\`;

const newMqStr1 = \`            .projects-showcase {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .project-visual-container {
                position: static;
                order: -1;
            }

            .project-visual-frame {
                aspect-ratio: auto;
                height: 240px;
            }

            .project-list-item {
                padding: 16px;
            }
            .project-list-item::before {
                left: -8px;
            }

            .project-footer {
                align-items: flex-start;
            }\`;

content = content.replace(mqStr1, newMqStr1);

// Mini media query replacements
const mqStr2 = \`            .project-card {
                padding: 18px;
            }

            .project-footer {
                flex-direction: column;
                align-items: stretch;
            }

            .visit-link {\`;

const newMqStr2 = \`            .project-list-item {
                padding: 14px;
            }

            .project-footer {
                flex-direction: column;
                align-items: stretch;
            }

            .visit-link {\`;

content = content.replace(mqStr2, newMqStr2);

// 2. HTML REPLACEMENTS
const htmlStart = content.indexOf('<div class="projects-grid">');
const htmlEnd = content.indexOf('</section>', htmlStart);

const newHTML = \`<div class="projects-showcase">
                <div class="project-list">
                    <a href="#" class="project-list-item project-list-item--wip is-active" data-index="0" data-iswip="true" target="_blank" rel="noopener noreferrer">
                        <div class="project-header">
                            <h3 class="project-title">Cross Bits</h3>
                            <span class="project-year">WIP</span>
                        </div>
                        <p class="project-description">
                            A mobile UI exploration centered around reusable components, visual hierarchy, and expressive animations. Each element is designed to enhance feedback, improve usability, and deliver a fluid, engaging interface experience.
                        </p>
                        <div class="project-footer">
                            <div class="project-tags">
                                <span class="tag">Next.js</span>
                                <span class="tag">TypeScript</span>
                                <span class="tag">Animation & transition systems</span>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="project-list-item project-list-item--wip" data-index="1" data-iswip="true" target="_blank" rel="noopener noreferrer">
                        <div class="project-header">
                            <h3 class="project-title">Dead Route</h3>
                            <span class="project-year">WIP</span>
                        </div>
                        <p class="project-description">
                            Deadroute API Tracker is a monitoring and diagnostics interface designed to detect, track, and visualize API failures, latency issues, and service disruptions in real time.
                        </p>
                        <div class="project-footer">
                            <div class="project-tags">
                                <span class="tag">Next.js</span>
                                <span class="tag">TypeScript</span>
                                <span class="tag">Postman</span>
                                <span class="tag">REST API Integration</span>
                                <span class="tag">Data Visualization Libraries</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://datalytics-data.vercel.app/" class="project-list-item" data-index="2" data-iswip="false" target="_blank" rel="noopener noreferrer">
                        <div class="project-header">
                            <h3 class="project-title">Datalytics</h3>
                        </div>
                        <p class="project-description">
                            Datalytics is a data analytics and visualization platform designed to explore, manipulate, and interpret datasets through a clean, structured interface.
                        </p>
                        <div class="project-footer">
                            <div class="project-tags">
                                <span class="tag">React</span>
                                <span class="tag">Python</span>
                            </div>
                            <div class="visit-link">
                                Visit
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    style="margin-left: 6px;">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="https://datalytics-data.vercel.app/" class="project-list-item" data-index="3" data-iswip="false" target="_blank" rel="noopener noreferrer">
                        <div class="project-header">
                            <h3 class="project-title">GlyphForge</h3>
                        </div>
                        <p class="project-description">
                            GlyphForge is a motif-driven type exploration tool designed to transform visual patterns into expressive glyph systems.
                        </p>
                        <div class="project-footer">
                            <div class="project-tags">
                                <span class="tag">React</span>
                                <span class="tag">TypeScript</span>
                                <span class="tag">Canvas / SVG</span>
                                <span class="tag">Vector Export</span>
                            </div>
                            <div class="visit-link">
                                Visit
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    style="margin-left: 6px;">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="project-visual-container">
                    <div class="project-visual-frame is-wip" id="projectVisualFrame">
                        <img src="crossbits.png" alt="Crossbits preview" class="visual-img active" data-img-index="0">
                        <img src="deadroute.png" alt="Dead Route preview" class="visual-img" data-img-index="1">
                        <img src="datalytics.png" alt="Datalytics preview" class="visual-img" data-img-index="2">
                        <img src="glyphforge.png" alt="GlyphForge preview" class="visual-img" data-img-index="3">
                    </div>
                </div>
            </div>
        `;

content = content.substring(0, htmlStart) + newHTML + content.substring(htmlEnd);

// 3. JS REPLACEMENTS
const oldJSBlock = \`            // Card 3D Tilt and Glare
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left; // x position within the element
                    const y = e.clientY - rect.top; // y position within the element

                    // Calculate tilt. Adjust multiplier for stronger/weaker effect
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const tiltX = ((y - centerY) / centerY) * -5; // Max 5 deg
                    const tiltY = ((x - centerX) / centerX) * 5; // Max 5 deg

                    card.style.setProperty('--mouse-x', \`\${x}px\`);
                    card.style.setProperty('--mouse-y', \`\${y}px\`);
                    card.style.setProperty('--tilt-x', \`\${tiltY}deg\`);
                    card.style.setProperty('--tilt-y', \`\${tiltX}deg\`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.setProperty('--tilt-x', '0deg');
                    card.style.setProperty('--tilt-y', '0deg');
                });
            });\`;

const newJSBlock = \`            // Frame 3D Tilt and Glare
            const frame = document.getElementById('projectVisualFrame');
            if (frame) {
                frame.addEventListener('mousemove', e => {
                    const rect = frame.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const tiltX = ((y - centerY) / centerY) * -5;
                    const tiltY = ((x - centerX) / centerX) * 5;

                    frame.style.setProperty('--mouse-x', \`\${x}px\`);
                    frame.style.setProperty('--mouse-y', \`\${y}px\`);
                    frame.style.setProperty('--tilt-x', \`\${tiltY}deg\`);
                    frame.style.setProperty('--tilt-y', \`\${tiltX}deg\`);
                });

                frame.addEventListener('mouseleave', () => {
                    frame.style.setProperty('--tilt-x', '0deg');
                    frame.style.setProperty('--tilt-y', '0deg');
                });
            }

            // Project Hover Sync
            const listItems = document.querySelectorAll('.project-list-item');
            const visualImages = document.querySelectorAll('.visual-img');
            
            listItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    if (window.innerWidth <= 768) return; // Don't sync hover on mobile where they stack
                    
                    // Update active list item
                    listItems.forEach(i => i.classList.remove('is-active'));
                    item.classList.add('is-active');

                    // Update WIP glow on frame if necessary
                    if (item.getAttribute('data-iswip') === 'true') {
                        frame.classList.add('is-wip');
                    } else {
                        frame.classList.remove('is-wip');
                    }

                    // Crossfade images
                    const index = item.getAttribute('data-index');
                    visualImages.forEach(img => {
                        if(img.getAttribute('data-img-index') === index) {
                            img.classList.add('active');
                        } else {
                            img.classList.remove('active');
                        }
                    });
                });
            });\`;

content = content.replace(oldJSBlock, newJSBlock);

fs.writeFileSync(file, content);
console.log('Update Complete.');
