/**
 * EarnHub - Application & Interactivity Script
 * Provides clean, lightweight JS logic for article modals, contact overlay,
 * category filtering, smooth navigation, and mobile menu toggle.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. ARTICLE DATABASE (Detailed, Objective & Realistic Content)
     ========================================================================== */
  const articlesData = {
    'outlier': {
      category: 'AI WORK & DATA ANNOTATION',
      title: 'Outlier AI: Evaluating Task Requirements, Qualification Checks & Realities',
      meta: '6 min guide • Verification Required • Remote Desktop',
      content: `
        <div class="modal-hero-banner">
          <img src="assets/images/outlier_ai_guide.jpg" alt="Outlier AI Data Annotation Desk">
        </div>

        <h4>Overview</h4>
        <p>Outlier AI (operated by Scale AI) is a platform that hires remote AI trainers, writers, coders, and domain specialists to evaluate and improve Large Language Models (LLMs). Workers rank AI responses, write ideal answers, and flag factual inaccuracies (RLHF - Reinforcement Learning from Human Feedback).</p>

        <!-- VIDEO DEMONSTRATION MOCKUP -->
        <div class="modal-video-demo">
          <div class="video-demo-header">
            <span>interactive video demo: RLHF Prompt Ranking & Code Audit</span>
            <div class="video-live-badge">
              <span class="video-live-dot"></span>
              <span>Live Demonstration</span>
            </div>
          </div>
          <div class="video-demo-body">
            <div style="background:#0F172A; border-radius:6px; padding:1.25rem; border:1px solid #1E293B;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <span style="font-size:0.8125rem; color:#38BDF8; font-weight:700;">PROMPT EVALUATION #8042</span>
                <span style="font-size:0.75rem; background:#1E293B; padding:0.2rem 0.5rem; border-radius:4px; color:#A7F3D0;">Active Task Stream</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
                <div style="background:#1E293B; padding:0.875rem; border-radius:4px; border-left:3px solid #3B82F6;">
                  <strong style="font-size:0.8125rem; color:#F8FAFC;">Model A Output:</strong>
                  <p style="font-size:0.75rem; color:#94A3B8; margin-top:0.35rem;">"Python function uses list comprehension with O(N) complexity..."</p>
                  <span style="font-size:0.7rem; color:#34D399; font-weight:700;">Score: 9.4 / 10</span>
                </div>
                <div style="background:#1E293B; padding:0.875rem; border-radius:4px; border-left:3px solid #EF4444;">
                  <strong style="font-size:0.8125rem; color:#F8FAFC;">Model B Output:</strong>
                  <p style="font-size:0.75rem; color:#94A3B8; margin-top:0.35rem;">"Function contains unhandled exception on empty array parameter..."</p>
                  <span style="font-size:0.7rem; color:#F87171; font-weight:700;">Score: 4.1 / 10</span>
                </div>
              </div>
              <div style="font-size:0.75rem; color:#CBD5E1; text-align:center; background:#0B1120; padding:0.5rem; border-radius:4px;">
                ▶ <em>Simulated Tasking Video Preview: Workers select Model A and write justification notes.</em>
              </div>
            </div>
          </div>
        </div>
        
        <h4>Types of Tasks Available</h4>
        <ul>
          <li><strong>General Writing & Evaluation:</strong> Assessing two AI responses for tone, accuracy, and compliance with instructions.</li>
          <li><strong>Coding Tasks (Python, JS, C++):</strong> Writing test cases, fixing buggy code outputs, and creating complex algorithmic prompts.</li>
          <li><strong>Domain Specialties (Math, Science, Law, Languages):</strong> Verifying technical equations, medical facts, or translating nuanced regional dialects.</li>
        </ul>

        <h4>Qualifications & Onboarding Process</h4>
        <p>Applicants must complete an initial identity verification check (valid government ID) followed by a domain-specific screening assessment. Passing the screening places you into an active project queue.</p>

        <h4>Important Realities & Warnings</h4>
        <ul>
          <li><strong>Task Volume Fluctuations:</strong> Task availability depends heavily on active client contracts. You may experience "Empty Queue" periods without notice.</li>
          <li><strong>Quality Control Audits:</strong> AI-generated work or sloppy submissions result in immediate account termination. All work is audited by senior reviewer leads.</li>
          <li><strong>Payment Structure:</strong> Compensation is usually hourly or per task, paid weekly via PayPal or Direct Deposit (Airwallex). Always verify your tax classification.</li>
        </ul>
      `
    },

    'simple-surveys': {
      category: 'SURVEYS & MARKET RESEARCH',
      title: 'Simple Surveys: Understanding How Market Research Platforms Work',
      meta: '3 min read • Beginners Friendly • Spare Time',
      content: `
        <div class="modal-inline-media">
          <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" fill="#F8FAFC"/>
            <rect x="180" y="40" width="440" height="240" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>
            <rect x="220" y="80" width="24" height="24" rx="4" fill="#2563EB"/>
            <path d="M225 92L231 98L239 88" stroke="#FFFFFF" stroke-width="2.5"/>
            <rect x="260" y="88" width="280" height="10" rx="3" fill="#0F172A"/>
            <rect x="220" y="130" width="24" height="24" rx="4" fill="#2563EB"/>
            <path d="M225 142L231 148L239 138" stroke="#FFFFFF" stroke-width="2.5"/>
            <rect x="260" y="138" width="220" height="10" rx="3" fill="#0F172A"/>
            <rect x="220" y="180" width="24" height="24" rx="4" fill="#E2E8F0"/>
            <rect x="260" y="188" width="180" height="10" rx="3" fill="#94A3B8"/>
            <rect x="220" y="225" width="100" height="30" rx="6" fill="#10B981"/>
            <text x="235" y="245" fill="#FFFFFF" font-size="12" font-family="Inter" font-weight="700">Submit Poll</text>
          </svg>
          <div class="media-caption">Illustrated Guide: Market Research Qualification Flow & Demographics</div>
        </div>

        <h4>How Online Surveys Work</h4>
        <p>Market research firms hire online survey networks to collect consumer opinions on products, movies, shopping habits, and brand awareness. Companies pay survey platforms, which share a fraction of that fee with survey respondents.</p>
        
        <h4>Legitimate Survey Networks to Research</h4>
        <ul>
          <li><strong>Prolific:</strong> High academic research standards, guaranteed minimum hourly rates, strict anti-disqualification policies.</li>
          <li><strong>YouGov:</strong> Focuses on political, social, and consumer opinion polls with steady rewards.</li>
          <li><strong>Swagbucks / InboxDollars:</strong> Established rewards platforms offering short surveys alongside micro-tasks.</li>
        </ul>

        <h4>Key Tips for Survey Participants</h4>
        <ul>
          <li><strong>Demographic Screening:</strong> You will not qualify for every survey. Screening questions filter out non-target audiences.</li>
          <li><strong>Be Honest & Consistent:</strong> Survey systems cross-reference demographic answers. Contradictory responses lead to account flagging.</li>
          <li><strong>Realistic Expectations:</strong> Online surveys provide modest gift card or pocket-money rewards ($10–$50/month), not replacement income.</li>
        </ul>
      `
    },

    'attapoll': {
      category: 'SURVEYS & MOBILE REWARDS',
      title: 'AttaPoll App: Features, Cashout Rules & User Guide',
      meta: '4 min read • Mobile App (iOS / Android)',
      content: `
        <div class="modal-hero-banner">
          <img src="assets/images/attapoll_guide.jpg" alt="AttaPoll Mobile App Interface">
        </div>

        <h4>What is AttaPoll?</h4>
        <p>AttaPoll is a popular mobile survey application that connects users directly with short market research questionnaires on iOS and Android devices.</p>

        <!-- VIDEO DEMONSTRATION MOCKUP -->
        <div class="modal-video-demo">
          <div class="video-demo-header">
            <span>video demo: Mobile Survey Cashout & Point Conversion</span>
            <div class="video-live-badge">
              <span class="video-live-dot"></span>
              <span>App Simulation</span>
            </div>
          </div>
          <div class="video-demo-body">
            <div style="background:#042F2E; border-radius:6px; padding:1.25rem; border:1px solid #0D9488;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <span style="font-size:0.8125rem; color:#2DD4BF; font-weight:700;">ATTAPOLL WALLET BAL: $12.40 USD</span>
                <span style="font-size:0.75rem; background:#0F766E; padding:0.2rem 0.5rem; border-radius:4px; color:#CCFBF1;">Min Threshold: $3.00</span>
              </div>
              <div style="background:#0F172A; padding:1rem; border-radius:6px; margin-bottom:0.75rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.8125rem; color:#F8FAFC;">
                  <span>PayPal Instant Cashout</span>
                  <span style="color:#34D399; font-weight:700;">Ready</span>
                </div>
                <div style="width:100%; background:#1E293B; height:6px; border-radius:3px; margin-top:0.5rem; overflow:hidden;">
                  <div style="width:100%; background:#10B981; height:100%;"></div>
                </div>
              </div>
              <div style="font-size:0.75rem; color:#99F6E4; text-align:center;">
                ▶ <em>Simulated App Video: Cashout completed directly to PayPal account in 2 minutes.</em>
              </div>
            </div>
          </div>
        </div>

        <h4>Key Features</h4>
        <ul>
          <li><strong>Low Cashout Thresholds:</strong> Allows withdrawals starting as low as $3.00 depending on your payment method (PayPal, Revolut, Gift Cards).</li>
          <li><strong>Customizable Survey Length:</strong> Filter incoming surveys by estimated completion time and star ratings.</li>
          <li><strong>Referral Program:</strong> Basic bonus structure for inviting active friends.</li>
        </ul>

        <h4>Best Practices</h4>
        <p>Complete your profile questionnaire thoroughly when installing the app. Avoid using VPNs or proxy networks, as automated fraud detection will permanently suspend accounts attempting location spoofing.</p>
      `
    },

    'texting-factory': {
      category: 'CHAT & SUPPORT',
      title: 'Texting Factory: Operator Expectations & Operational Guidelines',
      meta: '5 min read • Typing Speed Required • Flexible Shift',
      content: `
        <div class="modal-inline-media">
          <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" fill="#0F172A"/>
            <rect x="120" y="40" width="300" height="90" rx="12" fill="#1E293B" stroke="#334155" stroke-width="2"/>
            <text x="145" y="75" fill="#38BDF8" font-size="14" font-family="Inter" font-weight="700">Customer Support Operator Desk</text>
            <text x="145" y="100" fill="#94A3B8" font-size="12" font-family="Inter">Average Message Processing Speed: 42 WPM</text>
            <rect x="380" y="160" width="300" height="90" rx="12" fill="#2563EB"/>
            <text x="405" y="195" fill="#FFFFFF" font-size="14" font-family="Inter" font-weight="700">Response Sent to Customer Queue</text>
            <text x="405" y="220" fill="#93C5FD" font-size="12" font-family="Inter">Message Earnings Logged: +$0.15 USD</text>
          </svg>
          <div class="media-caption">Chat Operator Interface & Message Counter Workflow</div>
        </div>

        <h4>What is Texting Factory?</h4>
        <p>Texting Factory hires remote chat operators to handle text-based conversations across online customer service, fantasy chat, and roleplay platforms.</p>

        <h4>Work Environment & Requirements</h4>
        <ul>
          <li><strong>Typing Speed & Fluency:</strong> Requires strong written English, fast typing speed, and reliable internet.</li>
          <li><strong>Flexible Schedule:</strong> Operators work as independent contractors and choose their own hours, paid per message handled.</li>
          <li><strong>Identity Verification:</strong> Applicants must submit ID verification to comply with adult/general content regulations and contractor tax reporting.</li>
        </ul>

        <h4>Critical Safety Notice</h4>
        <div class="article-warning-box">
          <strong>Scam Warning:</strong> Texting Factory does NOT charge application fees. Always apply through official verified web domains. Never transfer funds or purchase software packages to obtain an operator position.
        </div>
      `
    },

    'handshake': {
      category: 'FREELANCING & EARLY CAREER',
      title: 'Handshake Career Network: Remote Internships & Freelance Entry',
      meta: '4 min read • University & Student Network',
      content: `
        <div class="modal-inline-media">
          <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" fill="#EFF6FF"/>
            <rect x="150" y="40" width="500" height="240" rx="12" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="2"/>
            <path d="M400 60L460 95L400 130L340 95L400 60Z" fill="#1D4ED8"/>
            <rect x="220" y="160" width="360" height="12" rx="3" fill="#1E40AF"/>
            <rect x="250" y="190" width="300" height="10" rx="3" fill="#60A5FA"/>
            <rect x="300" y="220" width="200" height="30" rx="6" fill="#2563EB"/>
            <text x="345" y="240" fill="#FFFFFF" font-size="12" font-family="Inter" font-weight="700">Apply via Handshake</text>
          </svg>
          <div class="media-caption">Handshake University Verification & Employer Recruitment Network</div>
        </div>

        <h4>Overview of Handshake</h4>
        <p>Handshake is the premier early-career network connecting university students, college alumni, and young professionals with verified employers seeking interns, entry-level remote staff, and project freelancers.</p>

        <h4>Why Use Handshake Over Public Job Boards</h4>
        <ul>
          <li><strong>Employer Vetting:</strong> Employers are vetted through university career centers, significantly reducing spam and phishing scams common on open boards.</li>
          <li><strong>Direct Recruiter Messaging:</strong> Direct outreach capabilities to talent acquisition managers.</li>
          <li><strong>Targeted Skill Match:</strong> Filters for remote work, micro-internships, and freelance gigs tailored to specific majors.</li>
        </ul>
      `
    },

    'writing-jobs': {
      category: 'FREELANCING',
      title: 'Online Writing Jobs: Evaluating Platforms, Portfolios & Contracts',
      meta: '5 min read • Writing Portfolio Needed',
      content: `
        <div class="modal-hero-banner">
          <img src="assets/images/writing_jobs_guide.jpg" alt="Online Content Writer Desk">
        </div>

        <h4>Types of Remote Writing Work</h4>
        <p>Online writing ranges from SEO copywriting and blogging to technical documentation, grant writing, and academic proofreading.</p>

        <!-- VIDEO DEMONSTRATION MOCKUP -->
        <div class="modal-video-demo">
          <div class="video-demo-header">
            <span>video demo: Portfolio Setup & Client Escrow Payment Check</span>
            <div class="video-live-badge">
              <span class="video-live-dot"></span>
              <span>Freelance Demo</span>
            </div>
          </div>
          <div class="video-demo-body">
            <div style="background:#1E1B4B; border-radius:6px; padding:1.25rem; border:1px solid #4338CA;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <span style="font-size:0.8125rem; color:#A5B4FC; font-weight:700;">CLIENT CONTRACT: Technical Writing Guide (1,500 words)</span>
                <span style="font-size:0.75rem; background:#3730A3; padding:0.2rem 0.5rem; border-radius:4px; color:#E0E7FF;">Escrow Funded: $225.00</span>
              </div>
              <div style="background:#0F172A; padding:1rem; border-radius:6px;">
                <p style="font-size:0.75rem; color:#CBD5E1;">✔ Sample articles verified by editor leads</p>
                <p style="font-size:0.75rem; color:#CBD5E1; margin-top:0.35rem;">✔ Milestone 1 funds held safely in neutral client escrow</p>
              </div>
              <div style="font-size:0.75rem; color:#C7D2FE; text-align:center; margin-top:0.75rem;">
                ▶ <em>Simulated Writer Demo: How contract milestone payments protect writers.</em>
              </div>
            </div>
          </div>
        </div>

        <h4>How to Get Started Legitimately</h4>
        <ul>
          <li><strong>Build 3 Solid Samples:</strong> Create clean sample articles hosted on Medium or Google Drive before applying.</li>
          <li><strong>Avoid Unpaid "Test Articles":</strong> Reputable clients pay for trial work. Be cautious if an employer requests a free 1,500-word article as a "test."</li>
          <li><strong>Vetted Platforms:</strong> Explore platforms like ClearVoice, WriterAccess, Upwork, and ProBlogger Job Board.</li>
        </ul>
      `
    },

    'uber-ai': {
      category: 'AI ANNOTATION & LINGUISTICS',
      title: 'Uber AI & Autonomous Data Annotation Projects',
      meta: '4 min read • Geolocation & Sensor Data',
      content: `
        <div class="modal-inline-media">
          <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" fill="#090D16"/>
            <path d="M100 240C240 120 560 280 700 100" stroke="#38BDF8" stroke-width="4" stroke-dasharray="8 8"/>
            <rect x="340" y="100" width="120" height="120" rx="8" fill="none" stroke="#F43F5E" stroke-width="3"/>
            <text x="350" y="125" fill="#F43F5E" font-size="12" font-family="Inter" font-weight="800">LIDAR BOUNDING BOX</text>
            <circle cx="240" cy="180" r="16" fill="#0EA5E9" stroke="#38BDF8" stroke-width="3"/>
            <circle cx="560" cy="160" r="16" fill="#0EA5E9" stroke="#38BDF8" stroke-width="3"/>
          </svg>
          <div class="media-caption">LiDAR Mapping & Autonomous Sensor Bounding Box Annotation</div>
        </div>

        <h4>Overview</h4>
        <p>Uber’s Advanced Technologies and machine learning divisions periodically contract vendor platforms to annotate mapping data, street imagery, route optimization prompts, and voice recognition inputs.</p>

        <h4>Task Types</h4>
        <ul>
          <li><strong>Bounding Box & LiDAR Annotation:</strong> Labeling traffic signs, pedestrians, and lanes in sensor imagery.</li>
          <li><strong>Map & Address Verification:</strong> Checking regional street names and business entrance coordinates.</li>
        </ul>
        <p><em>Note: These roles are usually managed through third-party data annotation vendors (such as Appen, Telus, or MindRift) rather than direct Uber corporate postings.</em></p>
      `
    },

    'other-opportunities': {
      category: 'DIRECTORY & RESOURCES',
      title: 'Comprehensive Directory of Verified Remote Opportunity Platforms',
      meta: 'Updated Resource List • Global Access',
      content: `
        <div class="modal-inline-media">
          <svg viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" fill="#F8FAFC"/>
            <rect x="120" y="40" width="260" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <circle cx="160" cy="95" r="20" fill="#2563EB"/>
            <text x="195" y="90" fill="#0F172A" font-size="14" font-family="Inter" font-weight="700">Search Engine Evaluation</text>
            <text x="195" y="110" fill="#64748B" font-size="12" font-family="Inter">Telus / Appen</text>
            
            <rect x="420" y="40" width="260" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <circle cx="460" cy="95" r="20" fill="#10B981"/>
            <text x="495" y="90" fill="#0F172A" font-size="14" font-family="Inter" font-weight="700">Website Usability Testing</text>
            <text x="495" y="110" fill="#64748B" font-size="12" font-family="Inter">UserTesting / TryMyUI</text>

            <rect x="270" y="170" width="260" height="110" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
            <circle cx="310" cy="225" r="20" fill="#8B5CF6"/>
            <text x="345" y="220" fill="#0F172A" font-size="14" font-family="Inter" font-weight="700">Audio Transcription</text>
            <text x="345" y="240" fill="#64748B" font-size="12" font-family="Inter">Rev / TranscribeMe</text>
          </svg>
          <div class="media-caption">Curated Global Remote Resource Directory</div>
        </div>

        <h4>Additional Verified Remote Work Categories</h4>

        <h4>1. Search Engine & Social Media Evaluation</h4>
        <p>Companies like <strong>Telus International</strong> and <strong>Appen</strong> hire remote evaluators to rate search engine results and ad quality based on detailed guidelines.</p>

        <h4>2. Website & App User Testing</h4>
        <p>Platforms like <strong>UserTesting</strong>, <strong>TryMyUI (TryCloudflare)</strong>, and <strong>IntelliZoom</strong> pay $10–$60 per completed 20-minute video feedback test.</p>

        <h4>3. Audio & Video Transcription</h4>
        <p>Platforms like <strong>Rev</strong> and <strong>TranscribeMe</strong> offer flexible transcription work for good listeners with fast typing skills.</p>

        <h4>4. Micro-Tasking Networks</h4>
        <p>Networks like <strong>Clickworker (UHRS)</strong> and <strong>Amazon Mechanical Turk (MTurk)</strong> host micro-tasks including data categorization, OCR check, and sentiment analysis.</p>
      `
    }
  };

  /* ==========================================================================
     2. MODAL CONTROLLERS (Article Reader & Contact Drawer)
     ========================================================================== */
  const articleModal = document.getElementById('articleModal');
  const contactModal = document.getElementById('contactModal');
  
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalContent = document.getElementById('modalContent');
  
  const closeArticleBtns = [
    document.getElementById('closeArticleModal'),
    document.getElementById('closeArticleModalBtn')
  ];
  const closeContactBtn = document.getElementById('closeContactModal');

  // Open Article Reader
  document.querySelectorAll('.js-read-article').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const articleId = btn.getAttribute('data-id');
      const data = articlesData[articleId];

      if (data) {
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalMeta.textContent = data.meta;
        modalContent.innerHTML = `<div class="modal-article-container">${data.content}</div>`;
        
        openModal(articleModal);
      }
    });
  });

  // Open Contact Overlay
  document.querySelectorAll('.js-open-contact').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If article modal is open, close it first
      closeModal(articleModal);
      openModal(contactModal);
    });
  });

  // Close Article Modal
  closeArticleBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => closeModal(articleModal));
    }
  });

  // Close Contact Modal
  if (closeContactBtn) {
    closeContactBtn.addEventListener('click', () => closeModal(contactModal));
  }

  // Close on Backdrop Click
  [articleModal, contactModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(articleModal);
      closeModal(contactModal);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     3. CATEGORY FILTERING SYSTEM
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.editorial-grid .article-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-category');

      articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue || cardCategory === 'all') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     4. MOBILE NAVIGATION DRAWER TOGGLE
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.querySelector('.menu-open-icon').style.display = 'block';
        mobileMenuBtn.querySelector('.menu-close-icon').style.display = 'none';
      } else {
        mobileDrawer.classList.add('open');
        mobileMenuBtn.querySelector('.menu-open-icon').style.display = 'none';
        mobileMenuBtn.querySelector('.menu-close-icon').style.display = 'block';
      }
    });

    // Close mobile drawer when clicking links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.querySelector('.menu-open-icon').style.display = 'block';
        mobileMenuBtn.querySelector('.menu-close-icon').style.display = 'none';
      });
    });
  }

  /* ==========================================================================
     5. STICKY HEADER ELEVATION ON SCROLL
     ========================================================================== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = 'var(--shadow-subtle)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

});
