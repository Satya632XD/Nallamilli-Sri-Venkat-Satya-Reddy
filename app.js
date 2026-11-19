(function () {
      // --- State ---
      const state = {
        activeView: 'overview',
        activeYear: 'all',
        activeDiscipline: 'chess',
        activeProjectFilter: 'all',
        activeRiftTab: 'gameplay'
      };

      // --- Data ---
      const timelineData = [
        {
          year: '2022',
          badge: 'Creative Beginnings',
          items: [
            "Started Satya's Drawing, my original creative YouTube channel."
          ]
        },
        {
          year: '2025',
          badge: 'Speedcubing Launch',
          items: [
            'Started my speedcubing journey in October after discovering Pyraminx and 3×3 through my friends.',
            'Joined my first official cube competition in December 2025.'
          ]
        },
        {
          year: '2026',
          badge: 'Chess, Apps & Games',
          items: [
            'Discovered competitive chess and began taking chess seriously.',
            'Competed in my first state-level FIDE-approved chess tournament.',
            'Finished 17th U15 with 4/7 (118th overall out of 318 players) at the De Paul AP State Rapid Chess Tournament.',
            'Built Chess The Phoenix Core from an original app idea and made it available on Google Play.',
            'Completed Orbital Runner.',
            'Continued development of Terra, my C++/Vulkan sandbox project.',
            'Continued experimenting with programming, AI-assisted development, 3D creation, game development, and my own technology ideas.',
            "Created Satya's Studio as a central place for my projects and interests."
          ]
        }
      ];

      const disciplines = {
        chess: {
          icon: '♟️',
          title: 'Chess',
          tagline: 'From casual curiosity to state-level FIDE-approved competition.',
          stats: [
            { label: 'First State Tournament', value: '4 / 7' },
            { label: 'U15 Finish', value: '17th Place' },
            { label: 'Overall Field', value: '118th / 318' },
            { label: 'Key Openings', value: 'Vienna Gambit · Accelerated Dragon' }
          ],
          story: [
            "I've always liked chess and found the game intriguing. I enjoyed playing it, but my interest changed when I discovered that chess could be much more than a casual game.",
            "My best friend, Ganji Sai Mani Karthikeya, and I have been friends since LKG, and we've remained close friends ever since. In February 2026, Karthikeya introduced me to competitive chess. He is a Chess Master and has competed in multiple tournaments. When I discovered there were tournaments, ratings, titles, preparation, and competition surrounding the game, I became immediately hooked.",
            "I currently compete in chess tournaments and am working toward becoming a Chess Master. One of my important milestones so far was playing in my first state-level FIDE-approved rapid tournament in 2026 — the De Paul AP State Rapid Chess Tournament — scoring 4/7 to finish 17th in U15 and 118th overall out of 318 players.",
            "I don't currently have an official FIDE rating, but getting one and continuing to play stronger opponents are part of my path forward."
          ],
          workingToward: [
            'Becoming a Chess Master',
            'Improving my tournament performance',
            'Building stronger calculation and endgame skills',
            'Playing more rated tournaments',
            'Continuing to study and experiment with openings such as the Vienna Gambit and Accelerated Dragon'
          ],
          learningNow: 'Calculation, endgames, middlegames, positional understanding, playing at the right speed, converting winning positions, and developing intuition.'
        },
        speedcubing: {
          icon: '🧩',
          title: 'Speedcubing',
          tagline: 'From a school Pyraminx and MoYu Meilong 3×3 to official WCA competitions.',
          stats: [
            { label: '3×3 Personal Best', value: '25.71s single · 34.78s avg' },
            { label: '2×2 Personal Best', value: '10.34s single · 11.51s avg' },
            { label: 'Official WCA Events', value: '2×2 · 3×3 · Pyraminx' },
            { label: 'Puzzles Mastered', value: '9 Puzzle Types' }
          ],
          story: [
            "My speedcubing journey started in October 2025 when my best friend Ganji Sai Mani Karthikeya brought a Pyraminx to school. At the same time, my other best friend, Ch Rohan Roy, used to bring a 3×3 cube to school. I didn't know how to solve either puzzle, but my curiosity took over.",
            "I bought a MoYu Meilong 3×3 and learned how to solve it. With great support from my parents, I started buying and learning more types of cubes, and joined my first official cube competition in December 2025.",
            "Today, I know how to solve 2×2, 3×3, 4×4, 5×5, Pyraminx, Skewb, Megaminx, Mirror Cube, and 3×3 One-Handed. In official WCA competitions, I have competed in 2×2, 3×3, and Pyraminx.",
            "My current focus is improving my speed, consistency, recognition, execution, and solving efficiency."
          ],
          workingToward: [
            'Faster and more consistent solves',
            'Better competition performance',
            'Improving across the WCA events I compete in',
            'Continuing to develop my CFOP skills',
            'Pushing toward increasingly competitive rankings'
          ],
          learningNow: 'Increasing TPS (turns per second), improving efficiency, refining CFOP, and learning PLL.'
        },
        dev: {
          icon: '💻',
          title: 'App & Game Development',
          tagline: '“When I can’t find exactly what I want, I would rather learn how to build it.”',
          stats: [
            { label: 'Published App', value: 'Chess The Phoenix Core' },
            { label: '3D & Sandbox', value: 'Terra · Rift Runner · Orbital Runner' },
            { label: 'Custom Engine', value: 'Kaira (2D & 3D)' },
            { label: 'Core Tech', value: 'C++ · Vulkan · Three.js · Android' }
          ],
          story: [
            "My interest in app development started because of chess. After becoming interested in competitive chess in February 2026, I came up with an idea for an app: Chess The Phoenix Core. Because no existing app worked the way I imagined, I explored how apps were made and built it myself. It is now available on Google Play.",
            "After that first project, my mind naturally started creating more ideas for apps and games. Slowly, the apps and games made by other developers started being replaced in my own time by things I created myself — not copies, but my own ideas built in my own way. Seeing your own idea become something you can actually play makes you want to keep improving and creating even more.",
            "Since then, I've built Chess The Phoenix Core, Orbital Runner, Rift Runner, and Terra (a C++ and Vulkan-based voxel sandbox project), while also experimenting with my own 2D/3D engine called Kaira, graphics programming, AI-assisted development, and 3D assets."
          ],
          workingToward: [
            'Publishing more apps and games',
            'Improving my programming and graphics knowledge',
            'Continuing development of Kaira',
            'Learning more about engines and rendering technology',
            'Turning more ideas into finished projects'
          ],
          learningNow: 'C++, graphics programming, rendering, mesh editing, sculpting, 3D modelling, texturing, and animation.'
        },
        paleontology: {
          icon: '🦖',
          title: 'Paleontology',
          tagline: 'Exploring prehistoric ecosystems, evolution, anatomy, and scientific reconstruction.',
          stats: [
            { label: 'Focus Area', value: 'Vertebrate Paleontology' },
            { label: 'Approach', value: 'Anatomy, Behavior & Adaptation' },
            { label: 'Career Goal', value: 'Pursue Professionally' },
            { label: 'Documentation', value: "Satya's Studio" }
          ],
          story: [
            "Dinosaurs and prehistoric life have been a major part of my curiosity for years. What started as a fascination with dinosaurs developed into a much broader interest in paleontology, prehistoric ecosystems, evolution, anatomy, and scientific reconstruction.",
            "I enjoy researching prehistoric animals and comparing their anatomy, behavior, environments, and adaptations rather than simply memorizing names and sizes.",
            "Paleontology is one of the fields I would like to pursue professionally in the future, and I use Satya's Studio to explore and document my paleontology-related interests and ideas."
          ],
          workingToward: [
            'Learning more about vertebrate paleontology',
            'Developing stronger scientific research skills',
            'Studying prehistoric ecosystems and anatomy',
            'Continuing to document my dinosaur and paleontology interests',
            'Eventually pursuing paleontology professionally'
          ],
          learningNow: 'Evolution, anatomy, prehistoric ecosystems, and the history of ancient life.'
        },
        art: {
          icon: '🎨',
          title: 'Art',
          tagline: 'From Satya’s Drawing in 2022 to concept art, character design, and scientific illustration.',
          stats: [
            { label: 'Original Channel', value: "Satya's Drawing (2022)" },
            { label: 'Applications', value: 'Concept Art · Character Design' },
            { label: 'Cross-Discipline', value: 'Game Design · Scientific Illustration' },
            { label: 'Mindset', value: 'Create Rather Than Consume' }
          ],
          story: [
            "Drawing was one of the earliest creative interests that became part of my online journey. My original YouTube channel, Satya's Drawing, began in 2022 and gave me a place to share what I created.",
            "Over time, my interests expanded beyond drawing into chess, football, dinosaurs, technology, and other creative subjects — yet art remains a core way I express ideas and experiment visually.",
            "It connects naturally with everything else I do: drawing becomes concept art, game design, character design, scientific illustration, or simply a way to explore an idea visually."
          ],
          workingToward: [
            'Improving my drawing skills',
            'Experimenting with different subjects and styles',
            'Using art alongside my games and other projects',
            'Continuing to create rather than simply consume'
          ],
          learningNow: 'Drawing techniques, learning to draw faces, and developing visual design.'
        }
      };

      const phoenixDiceRules = {
        1: { piece: 'Pawn', move: 'Forward 1–2 squares' },
        2: { piece: 'Knight', move: 'Standard L-shape jump' },
        3: { piece: 'Bishop', move: 'Diagonal slide (stops before own pieces)' },
        4: { piece: 'Rook', move: 'Orthogonal slide (stops before own pieces)' },
        5: { piece: 'Queen', move: 'Any direction slide (stops before own pieces)' },
        6: { piece: 'King', move: '1 square in any direction' }
      };

      const riftCampaignPlanets = [
        { name: 'Mercury', dist: 3.0 },
        { name: 'Venus', dist: 3.6 },
        { name: 'Earth', dist: 4.2 },
        { name: 'Mars', dist: 4.8 },
        { name: 'Jupiter', dist: 5.4 },
        { name: 'Saturn', dist: 6.0 },
        { name: 'Uranus', dist: 6.6 },
        { name: 'Neptune', dist: 7.2 }
      ];

      // --- Render Functions ---
      function renderView(viewName) {
        state.activeView = viewName;
        document.querySelectorAll('.view-section').forEach(sec => {
          sec.classList.toggle('active', sec.id === 'view-' + viewName);
        });

        document.querySelectorAll('.nav-btn').forEach(btn => {
          const active = btn.dataset.nav === viewName;
          btn.className = 'nav-btn px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ' +
            (active
              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-cosmic-800');
        });

        document.querySelectorAll('.nav-btn-mobile').forEach(btn => {
          const active = btn.dataset.nav === viewName;
          btn.className = 'nav-btn-mobile block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ' +
            (active
              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold'
              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-cosmic-800');
        });

        // Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');

        // Update URL hash safely
        if (window.location.hash !== '#' + viewName) {
          try { history.replaceState(null, '', '#' + viewName); } catch (e) {}
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function renderTimeline() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;
        const filtered = state.activeYear === 'all'
          ? timelineData
          : timelineData.filter(t => t.year === state.activeYear);

        container.innerHTML = filtered.map(block => `
          <div class="relative pl-6 border-l-2 border-amber-500/40 space-y-2.5">
            <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-cosmic-900"></span>
            <div class="flex items-center gap-3">
              <span class="font-display text-xl font-bold text-slate-900 dark:text-white">${block.year}</span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">${block.badge}</span>
            </div>
            <ul class="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              ${block.items.map(item => `<li class="flex items-start gap-2"><span class="text-amber-500 mt-1 text-xs">▸</span><span>${item}</span></li>`).join('')}
            </ul>
          </div>
        `).join('');

        document.querySelectorAll('.year-filter').forEach(btn => {
          const active = btn.dataset.year === state.activeYear;
          btn.className = 'year-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ' +
            (active
              ? 'bg-amber-500 text-cosmic-950'
              : 'bg-slate-200 dark:bg-cosmic-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-cosmic-700');
        });
      }

      function renderDiscipline() {
        const d = disciplines[state.activeDiscipline];
        const container = document.getElementById('disciplineContent');
        if (!d || !container) return;

        document.querySelectorAll('.disc-tab').forEach(btn => {
          const active = btn.dataset.discipline === state.activeDiscipline;
          btn.className = 'disc-tab px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ' +
            (active
              ? 'bg-amber-500 text-cosmic-950 shadow-lg shadow-amber-500/20'
              : 'glass-card text-slate-700 dark:text-slate-300 hover:border-amber-500/50');
        });

        container.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <div class="flex items-center gap-3">
                <span class="text-4xl">${d.icon}</span>
                <h3 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">${d.title}</h3>
              </div>
              <p class="mt-2 text-sm sm:text-base text-amber-600 dark:text-amber-400 font-medium">${d.tagline}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${d.stats.map(s => `
              <div class="p-4 rounded-2xl bg-slate-100 dark:bg-cosmic-900 border border-slate-200 dark:border-slate-800">
                <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">${s.label}</div>
                <div class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-1">${s.value}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <div class="text-xs font-semibold uppercase tracking-wider text-cyan-500">The Story</div>
              ${d.story.map(p => `<p>${p}</p>`).join('')}
            </div>

            <div class="lg:col-span-5 space-y-5">
              <div class="p-5 rounded-2xl bg-slate-100 dark:bg-cosmic-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="text-xs font-semibold uppercase tracking-wider text-amber-500">What I'm Working Toward</div>
                <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  ${d.workingToward.map(goal => `<li class="flex items-start gap-2"><span class="text-amber-500">✦</span><span>${goal}</span></li>`).join('')}
                </ul>
              </div>

              <div class="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 space-y-2">
                <div class="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Learning Right Now</div>
                <p class="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">${d.learningNow}</p>
              </div>
            </div>
          </div>
        `;
      }

      function renderProjectFilters() {
        document.querySelectorAll('.proj-filter').forEach(btn => {
          const active = btn.dataset.pfilter === state.activeProjectFilter;
          btn.className = 'proj-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ' +
            (active
              ? 'bg-amber-500 text-cosmic-950'
              : 'bg-slate-200 dark:bg-cosmic-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-cosmic-700');
        });

        document.querySelectorAll('.project-card').forEach(card => {
          const show = state.activeProjectFilter === 'all' || card.dataset.pcat === state.activeProjectFilter;
          card.style.display = show ? '' : 'none';
        });
      }

      function renderRiftTab() {
        const panel = document.getElementById('riftTabPanel');
        if (!panel) return;

        document.querySelectorAll('.rift-tab').forEach(btn => {
          const active = btn.dataset.rifttab === state.activeRiftTab;
          btn.className = 'rift-tab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ' +
            (active
              ? 'bg-cyan-500 text-cosmic-950'
              : 'bg-slate-200 dark:bg-cosmic-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-cosmic-700');
        });

        if (state.activeRiftTab === 'gameplay') {
          panel.innerHTML = `
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li><strong class="text-slate-900 dark:text-white">Steering:</strong> A/D or arrow keys (or touch/tilt on mobile). W/Up climbs and S/Down dives, drifting back to cruise height when released.</li>
              <li><strong class="text-slate-900 dark:text-white">Auto-Forward:</strong> Speed ramps up continuously with distance.</li>
              <li><strong class="text-slate-900 dark:text-white">Gates &amp; Graze:</strong> Gates grant a speed boost, +150 pts (× multiplier), and +0.25× multiplier (missing resets streak). Grazing a canyon wall adds +0.25× risk-reward multiplier.</li>
              <li><strong class="text-slate-900 dark:text-white">Multiplier &amp; Hull:</strong> Maxes at <strong>×3.0</strong> and decays over time. You have <strong>100% hull</strong> — ground hazards deal 45 damage, wall crashes deal 34 damage, and hits reset multiplier &amp; slow you by ~28%.</li>
            </ul>
          `;
        } else if (state.activeRiftTab === 'campaign') {
          panel.innerHTML = `
            <p class="text-slate-600 dark:text-slate-300 mb-3">8 planets unlocked in order — each longer, faster, and narrower than the last (3 km on Mercury up to 7.2 km on Neptune):</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              ${riftCampaignPlanets.map((p, idx) => `
                <div class="p-2.5 rounded-xl bg-white dark:bg-cosmic-950/70 border border-slate-200 dark:border-slate-800">
                  <div class="text-[11px] text-cyan-500 font-semibold">Stage ${idx + 1}</div>
                  <div class="font-display font-bold text-slate-900 dark:text-white">${p.name}</div>
                  <div class="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 mt-1.5 overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" style="width: ${Math.round((p.dist / 7.2) * 100)}%"></div>
                  </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${p.dist.toFixed(1)} km</div>
                </div>
              `).join('')}
            </div>
          `;
        } else {
          panel.innerHTML = `
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li><strong class="text-slate-900 dark:text-white">Endless Rift:</strong> No finish line — score and distance submit to an online leaderboard.</li>
              <li><strong class="text-slate-900 dark:text-white">Revive &amp; Bonuses:</strong> One revive per run via rewarded ad (full hull, 2s invulnerability, nearby obstacles cleared). Watch 2 ads in Endless mode for a 2× score bonus. Uses AdMob on Android and AdSense on Web (PC).</li>
              <li><strong class="text-slate-900 dark:text-white">Backend:</strong> Rate-limited score submission, leaderboard, player rank, and player info endpoints — validating survival time against score to discourage cheating.</li>
            </ul>
          `;
        }
      }

      // --- Theme Management ---
      function applyTheme(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        const icon = document.getElementById('themeIcon');
        if (icon) icon.textContent = isDark ? '☀️' : '🌙';
        try { localStorage.setItem('satya_theme', isDark ? 'dark' : 'light'); } catch (e) {}
      }

      // --- Event Listeners ---
      document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', () => renderView(btn.dataset.nav));
      });

      document.querySelectorAll('[data-jump-discipline]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.activeDiscipline = btn.dataset.jumpDiscipline;
          renderDiscipline();
          renderView('journey');
        });
      });

      document.querySelectorAll('.year-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          state.activeYear = btn.dataset.year;
          renderTimeline();
        });
      });

      document.querySelectorAll('.disc-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          state.activeDiscipline = btn.dataset.discipline;
          renderDiscipline();
        });
      });

      document.querySelectorAll('.proj-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          state.activeProjectFilter = btn.dataset.pfilter;
          renderProjectFilters();
        });
      });

      document.querySelectorAll('.rift-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          state.activeRiftTab = btn.dataset.rifttab;
          renderRiftTab();
        });
      });

      const rollBtn = document.getElementById('rollPhoenixDieBtn');
      const diceResult = document.getElementById('phoenixDiceResult');
      if (rollBtn && diceResult) {
        rollBtn.addEventListener('click', () => {
          const roll = Math.floor(Math.random() * 6) + 1;
          const rule = phoenixDiceRules[roll];
          diceResult.classList.remove('dice-pop');
          void diceResult.offsetWidth;
          diceResult.classList.add('dice-pop');
          diceResult.innerHTML = `<span class="inline-flex items-center gap-2"><span class="px-2 py-0.5 rounded-md bg-amber-500 text-cosmic-950 font-bold">Rolled ${roll}</span> <strong>${rule.piece}</strong> — ${rule.move}</span>`;
        });
      }

      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          const isHidden = mobileMenu.classList.toggle('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', String(!isHidden));
        });
      }

      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          applyTheme(!document.documentElement.classList.contains('dark'));
        });
      }

      window.addEventListener('hashchange', () => {
        const h = window.location.hash.replace('#', '');
        if (['overview', 'journey', 'projects', 'mind', 'cinema'].includes(h)) {
          renderView(h);
        }
      });

      // --- Init ---
      let savedDark = true;
      try {
        const pref = localStorage.getItem('satya_theme');
        if (pref === 'light') savedDark = false;
      } catch (e) {}
      applyTheme(savedDark);

      renderTimeline();
      renderDiscipline();
      renderProjectFilters();
      renderRiftTab();

      const initialHash = window.location.hash.replace('#', '');
      renderView(['overview', 'journey', 'projects', 'mind', 'cinema'].includes(initialHash) ? initialHash : 'overview');
    })();
