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
        <h4>Overview</h4>
        <p>Outlier AI (operated by Scale AI) is a platform that hires remote AI trainers, writers, coders, and domain specialists to evaluate and improve Large Language Models (LLMs). Workers rank AI responses, write ideal answers, and flag factual inaccuracies (RLHF - Reinforcement Learning from Human Feedback).</p>
        
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
        <h4>What is AttaPoll?</h4>
        <p>AttaPoll is a popular mobile survey application that connects users directly with short market research questionnaires on iOS and Android devices.</p>

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
        <h4>Types of Remote Writing Work</h4>
        <p>Online writing ranges from SEO copywriting and blogging to technical documentation, grant writing, and academic proofreading.</p>

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
        modalContent.innerHTML = data.content;
        
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
