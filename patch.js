const fs = require('fs');
const path = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\majors\\\\personal\\\\index.html';
let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const headInsert = `    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="work.css">`;

const newSection = `        <!-- Custom cursor -->
        <div class="csr" id="csr"></div>
        <div class="csr-ring" id="csrRing"></div>

        <!-- ═══════════════════════════════════
             SELECTED WORK SECTION
        ════════════════════════════════════ -->
        <section class="work-section" id="work">

          <!-- Label -->
          <div class="sec-label rv">
            <div class="sec-label-line"></div>
            <span class="sec-label-text">Selected Work</span>
            <span class="sec-label-num">01</span>
          </div>

          <!-- Intro row -->
          <div class="work-intro">
            <h2 class="work-heading rv">
              Projects<br>worth<br><em>seeing.</em>
            </h2>
            <p class="work-intro-right rv" style="transition-delay: 0.12s">
              A curated selection of the work I'm most proud of. From enterprise
              platforms to open-source libraries — each project is a story of
              problem-solving, collaboration, and craft.
              <br /><br />
              <a href="#">View full archive &rarr;</a>
            </p>
          </div>

          <!-- Filter tabs -->
          <div class="filter-row rv" style="transition-delay: 0.18s">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="app">Apps</button>
            <button class="filter-btn" data-filter="tool">Tools</button>
            <button class="filter-btn" data-filter="education">Education</button>
            <button class="filter-btn" data-filter="analytics">Analytics</button>
          </div>

          <!-- Horizontal scroll track -->
          <div class="hscroll-wrap rv" style="transition-delay: 0.24s" id="hswrap">
            <div class="hscroll-track" id="hstrk">

              <!-- Card 1 -->
              <a href="https://crossbits.pro/" class="pcard large" data-category="app" target="_blank">
                <div class="pcard-img">
                  <img src="crossbits.png" alt="Crossbits preview">
                </div>
                <div class="pcard-body">
                  <div class="pcard-tag">Mobile &middot; App</div>
                  <h3 class="pcard-title">Cross<br>Bits</h3>
                  <p class="pcard-desc">
                    Built a production-ready React Native component library from scratch. Crossbits UI. Designed
                    the full system architecture, every component, and the landing page. Ships on iOS, Android, and
                    Web from a single codebase.
                  </p>
                  <div class="pcard-chips">
                    <span class="chip">Expo</span>
                    <span class="chip">NativeWind</span>
                    <span class="chip">TypeScript</span>
                  </div>
                </div>
                <div class="pcard-arrow">&nearr;</div>
              </a>

              <!-- Card 2 -->
              <a href="#" class="pcard" data-category="tool" target="_blank">
                <div class="pcard-img">
                  <img src="deadroute.png" alt="Dead Route preview">
                </div>
                <div class="pcard-body">
                  <div class="pcard-tag">SaaS &middot; Tool</div>
                  <h3 class="pcard-title">Dead<br>Route</h3>
                  <p class="pcard-desc">
                    Deadroute API Tracker is a monitoring and diagnostics interface designed to detect, track, and
                    visualize API failures, latency issues, and service disruptions in real time.
                  </p>
                  <div class="pcard-chips">
                    <span class="chip">Next.js</span>
                    <span class="chip">TypeScript</span>
                    <span class="chip">Postman</span>
                    <span class="chip">REST API</span>
                  </div>
                </div>
                <div class="pcard-arrow">&nearr;</div>
              </a>

              <!-- Card 3 -->
              <a href="https://reactforgesandbox.vercel.app/" class="pcard" data-category="education" target="_blank">
                <div class="pcard-img">
                  <img src="reactforge.png" alt="React Forge preview">
                </div>
                <div class="pcard-body">
                  <div class="pcard-tag">Web &middot; Education</div>
                  <h3 class="pcard-title">React<br>Forge</h3>
                  <p class="pcard-desc">
                    Browser based React interview prep sandbox inspired by tools like CodeSandbox,
                    but built from scratch. Users practice real interview patterns with live JSX execution.
                  </p>
                  <div class="pcard-chips">
                    <span class="chip">React</span>
                    <span class="chip">JavaScript</span>
                    <span class="chip">Browser APIs</span>
                  </div>
                </div>
                <div class="pcard-arrow">&nearr;</div>
              </a>

              <!-- Card 4 -->
              <a href="https://datalytics-data.vercel.app/" class="pcard" data-category="tool" target="_blank">
                <div class="pcard-img">
                  <img src="glyphforge.png" alt="GlyphForge preview" onerror="this.src='datalytics.png'">
                </div>
                <div class="pcard-body">
                  <div class="pcard-tag">Web &middot; Tool</div>
                  <h3 class="pcard-title">Glyph<br>Forge</h3>
                  <p class="pcard-desc">
                    GlyphForge is a motif-driven type exploration tool designed to transform visual patterns into
                    expressive glyph systems.
                  </p>
                  <div class="pcard-chips">
                    <span class="chip">React</span>
                    <span class="chip">TypeScript</span>
                    <span class="chip">Canvas / SVG</span>
                  </div>
                </div>
                <div class="pcard-arrow">&nearr;</div>
              </a>

              <!-- Card 5 -->
              <a href="https://datalytics-data.vercel.app/" class="pcard" data-category="analytics" target="_blank">
                <div class="pcard-img">
                  <img src="datalytics.png" alt="Datalytics preview">
                </div>
                <div class="pcard-body">
                  <div class="pcard-tag">Data &middot; Analytics</div>
                  <h3 class="pcard-title">Data<br>lytics</h3>
                  <p class="pcard-desc">
                    Datalytics is a data analytics and visualization platform designed to explore, manipulate, and
                    interpret datasets through a clean, structured interface.
                  </p>
                  <div class="pcard-chips">
                    <span class="chip">React</span>
                    <span class="chip">Python</span>
                  </div>
                </div>
                <div class="pcard-arrow">&nearr;</div>
              </a>

            </div><!-- /hscroll-track -->
          </div><!-- /hscroll-wrap -->

          <!-- Bottom strip -->
          <div class="work-footer rv" style="transition-delay: 0.3s">
            <span class="work-footer-label">5 projects shown</span>
            <a href="#" class="btn-archive">View full archive &rarr;</a>
          </div>

        </section>`;

const jsInsert = `    <script>
        /* ── Cursor ── */
        const csr = document.getElementById('csr');
        const ring = document.getElementById('csrRing');
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
        (function animC() {
          if (csr && ring) {
            csr.style.left  = mx + 'px'; csr.style.top  = my + 'px';
            rx += (mx - rx) * 0.13;     ry += (my - ry) * 0.13;
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
          }
          requestAnimationFrame(animC);
        })();

        /* ── Scroll reveal ── */
        const io2 = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
        }, { threshold: 0.08 });
        document.querySelectorAll('.rv').forEach(el => io2.observe(el));

        /* ── Drag-to-scroll ── */
        const hw = document.getElementById('hswrap');
        let isDown = false, startX, scrollLeft;
        if (hw) {
          hw.addEventListener('mousedown', e => {
            isDown = true; startX = e.pageX - hw.offsetLeft; scrollLeft = hw.scrollLeft;
          });
          document.addEventListener('mouseup', () => isDown = false);
          document.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            hw.scrollLeft = scrollLeft - (e.pageX - hw.offsetLeft - startX) * 1.5;
          });
        }

        /* ── Filter buttons ── */
        const btns  = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.pcard');
        btns.forEach(btn => {
          btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.dataset.filter;
            cards.forEach(c => {
              const match = f === 'all' || c.dataset.category === f;
              c.style.opacity    = match ? '1' : '0.25';
              c.style.transform  = match ? '' : 'scale(0.97)';
              c.style.transition = 'opacity 0.3s, transform 0.3s';
              c.style.pointerEvents = match ? 'auto' : 'none';
            });
          });
        });
    </script>`;

// 1. Add CSS links after line 11
lines.splice(11, 0, headInsert);

// 2. Find <section id="work"> and </section>
let start = lines.findIndex(l => l.includes('<section id="work">'));
let end = lines.findIndex((l, i) => i > start && l.includes('</section>'));

if (start !== -1 && end !== -1) {
    lines.splice(start, end - start + 1, newSection);
}

// 3. Add JS right before </body>
let bodyEnd = lines.findIndex(l => l.includes('</body>'));
if (bodyEnd !== -1) {
    lines.splice(bodyEnd, 0, jsInsert);
}

fs.writeFileSync(path, lines.join('\\n'));
console.log("Patch complete.");
