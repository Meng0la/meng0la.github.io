(function () {
  const body = document.body;
  const html = document.documentElement;
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const modePicker = document.getElementById("modePicker");
  const chooseModeButtons = document.querySelectorAll("[data-choose-mode]");
  const effectsToggle = document.getElementById("effectsToggle");
  const contactForm = document.getElementById("contactForm");
  const langButtons = document.querySelectorAll("[data-set-lang]");
  const toolDetail = document.getElementById("toolDetail");
  const toolDetailTitle = document.getElementById("toolDetailTitle");
  const toolDetailDefinition = document.getElementById("toolDetailDefinition");
  const toolDetailExperience = document.getElementById("toolDetailExperience");

  const MODE_KEY = "portfolio_mode";
  const EFFECTS_KEY = "portfolio_effects";
  const LANG_KEY = "portfolio_lang";
  const EMAIL_TARGET = "g.menguebarros@gmail.com";

  const i18n = {
    pt: {
    mode_label: "Modo Principal",
    mode_title: "Escolha o tipo de portfólio",
    mode_standard: "Portfólio Padrão",
    mode_interactive: "Portfólio Interativo",
    mode_note: "Ambos com estilo cyber. O modo interativo habilita animações e efeitos extras.",
    eyebrow: "Portfólio Pessoal",
    download_cv: "Baixar Currículo",
    effects_disable: "Desativar Efeitos",
    effects_enable: "Ativar Efeitos",
    headline: "Cybersecurity Researcher | Offensive Security | Tool Builder",
    quote_pt: "Eu não posso saber tudo. Mas eu fuço até descobrir.",
    quote_en: "I may not know everything. But I will dig until I understand it.",
    nav_title: "Navegação",
    nav_aria: "Seções do portfólio",
    tab_about: "Sobre Mim",
    tab_mindset: "Mentalidade em Segurança",
    tab_projects: "Projetos",
    tab_tools: "Ferramentas e Tecnologias",
    tab_focus: "Foco em Cybersecurity",
    tab_research: "Pesquisas e Experimentos",
    tab_stats: "GitHub Stats",
    tab_contact: "Contato",
    about_title: "Sobre Mim",
    about_p1: "Desenvolvedor e pesquisador em Cybersecurity, com foco em segurança ofensiva, automação de recon e engenharia de ferramentas para análise técnica de superfície de ataque.",
    about_p2: "Minha abordagem combina pensamento de Red Team, prática de laboratório e construção de scripts/frameworks para coleta, tratamento e correlação de dados públicos.",
    about_l1: "Foco principal: Reconnaissance, OSINT e Offensive Tooling.",
    about_l2: "Stack central: Python, Networking, Linux/Kali Linux e CLI tooling.",
    about_l3: "Atuação: pesquisa aplicada, experimentos controlados e documentação técnica.",
    mind_title: "Mentalidade em Segurança",
    mind_p1: "Portfólio orientado para o perfil de pesquisador e builder de ferramentas, não apenas para a execução de tarefas de desenvolvimento tradicional.",
    mind_l1: "Pensamento adversarial com responsabilidade e escopo autorizado.",
    mind_l2: "Validação técnica por hipóteses, baseline de comportamento e evidência reproduzível.",
    mind_l3: "Automação para reduzir ruído operacional e aumentar a precisão investigativa.",
    mind_l4: "Estudo de ataque para fortalecer arquitetura e defesa.",
    projects_title: "Projetos",
    project_recon_desc: "Framework modular de auditoria ofensiva em Python, com módulos de dorks, crawler/sitemap, enumeração de diretórios, análise de JavaScript, portscan, autenticação e SQLi heurístico.",
    project_maps_desc: "Pipeline de coleta e enriquecimento de dados via OpenStreetMap (Overpass + Nominatim), com tratamento e consolidação de resultados para análise.",
    project_notes_desc: "Extração de dados fiscais a partir de documentos não estruturados (PDF/texto), com parsing heurístico e organização para análise financeira e operacional.",
    project_bot_desc: "Integração de webhook WhatsApp com automação em Python e SQLite, com foco em fluxos de consulta/cadastro e integração de dados.",
    project_login_desc: "Laboratório em PHP para autenticação, sessão e controle de permissões, usado para estudos de segurança em backend web.",
    open_repo: "Abrir repositório",
    ransom_title: "Framework de Estudo Privado",
    ransom_p1: "Projeto privado de pesquisa defensiva para análise de comportamento, vetores de impacto e pontos de detecção e mitigação em ambiente isolado.",
    ransom_p2: "Este projeto não é público por segurança operacional, responsabilidade ética e para evitar exposição de material sensível.",
    ransom_tag: "Projeto privado | Sem link de repositório",
    tools_title: "Ferramentas e Tecnologias",
    tools_hint: "Use as setas para navegar pelas ferramentas.",
    carousel_prev_label: "Ferramenta anterior",
    carousel_next_label: "Próxima ferramenta",
    focus_title: "Foco em Cybersecurity",
    focus_l1: "Web reconnaissance e mapeamento de superfície de ataque.",
    focus_l2: "OSINT para coleta e correlação de sinais públicos.",
    focus_l3: "Análise de autenticação, endpoints e exposição de ativos.",
    focus_l4: "Automação ofensiva controlada para pesquisa e aprendizado defensivo.",
    research_title: "Pesquisas e Experimentos",
    methods_title: "Metodologias utilizadas",
    methods_l1: "OSINT: descoberta e validação de fontes públicas.",
    methods_l2: "Recon: enumeração de URLs, diretórios, portas e autenticação.",
    methods_l3: "Automação: pipelines de coleta e tratamento de dados.",
    roadmap_title: "Roadmap de pesquisa",
    roadmap_l1: "Aprimorar frameworks modulares para recon e triagem técnica.",
    roadmap_l2: "Expandir laboratório de análise de comportamento de ameaças.",
    roadmap_l3: "Fortalecer telemetria de rede e correlação de eventos.",
    roadmap_l4: "Produzir documentação técnica voltada para mitigação e hardening.",
    stats_title: "GitHub Stats",
    stats_note: "Snapshot de perfil técnico com dados dinâmicos do GitHub.",
    contact_title: "Contato",
    contact_form_title: "Enviar mensagem (mailto)",
    label_name: "Nome",
    label_email: "Seu e-mail",
    label_subject: "Assunto",
    label_message: "Mensagem",
    ph_name: "Seu nome",
    ph_email: "voce@email.com",
    ph_subject: "Assunto da mensagem",
    ph_message: "Digite sua mensagem...",
    open_email: "Abrir no e-mail",
    contact_direct_title: "Contato direto",
    direct_email_label: "E-mail:",
    direct_whats_label: "WhatsApp:",
    open_whatsapp: "Chamar no WhatsApp",
    footer_line: "Gabriel Mengue Barros • Security Researcher focused on Reconnaissance, OSINT and Offensive Tooling",
    mail_subject_default: "Contato via Portfólio",
    mail_label_name: "Nome",
    mail_label_email: "E-mail"
    },
  
    en: {
      mode_label: "Main Mode",
      mode_title: "Choose the portfolio type",
      mode_standard: "Standard Portfolio",
      mode_interactive: "Interactive Portfolio",
      mode_note: "Both keep a cyber style. Interactive mode enables extra animations and effects.",
      eyebrow: "Personal Portfolio",
      download_cv: "Download Resume",
      effects_disable: "Disable Effects",
      effects_enable: "Enable Effects",
      headline: "Cybersecurity Researcher | Offensive Security | Tool Builder",
      quote_pt: "I may not know everything. But I will dig until I understand it.",
      quote_en: "Eu nao posso saber tudo. Mas eu fuço ate descobrir.",
      nav_title: "Navigation",
      nav_aria: "Portfolio sections",
      tab_about: "About Me",
      tab_mindset: "Security Mindset",
      tab_projects: "Projects",
      tab_tools: "Tools & Technologies",
      tab_focus: "Cybersecurity Focus",
      tab_research: "Research & Experiments",
      tab_stats: "GitHub Stats",
      tab_contact: "Contact",
      about_title: "About Me",
      about_p1: "Developer and Cybersecurity researcher focused on offensive security, recon automation and tool engineering for attack surface analysis.",
      about_p2: "My approach combines Red Team thinking, lab practice and script/framework building for collection, processing and correlation of public data.",
      about_l1: "Main focus: Reconnaissance, OSINT and Offensive Tooling.",
      about_l2: "Core stack: Python, Networking, Linux/Kali Linux and CLI tooling.",
      about_l3: "Work style: applied research, controlled experiments and technical documentation.",
      mind_title: "Security Mindset",
      mind_p1: "Portfolio shaped as a researcher and tool-builder profile, not only traditional software development execution.",
      mind_l1: "Adversarial thinking with responsibility and authorized scope.",
      mind_l2: "Technical validation through hypotheses, behavior baseline and reproducible evidence.",
      mind_l3: "Automation to reduce operational noise and increase investigative accuracy.",
      mind_l4: "Study attack paths to strengthen architecture and defense.",
      projects_title: "Projects",
      project_recon_desc: "Modular offensive auditing framework in Python with dorking, crawler/sitemap, directory enumeration, JavaScript analysis, port scanning, auth checks and heuristic SQLi testing.",
      project_maps_desc: "Data collection and enrichment pipeline using OpenStreetMap (Overpass + Nominatim), including processing and result consolidation for analysis.",
      project_notes_desc: "Fiscal data extraction from unstructured documents (PDF/text) with heuristic parsing and organization for financial and operational analysis.",
      project_bot_desc: "WhatsApp webhook integration with Python automation and SQLite, focused on query/register flows and data integration.",
      project_login_desc: "PHP lab for authentication, session handling and permission control used in backend security studies.",
      open_repo: "Open repository",
      ransom_title: "fremek_rans.py (Ransomware Study)",
      ransom_p1: "Educational ransomware script for controlled lab use. It simulates encryption of common files with AES-GCM, renaming to .encrypted, and repeated Japanese warning popups to emulate phishing impact and incident response pressure.",
      ransom_p2: "It also includes optional study modules (anti-sandbox, persistence and ARP-scan lateral movement). This project is kept private to prevent misuse and preserve strictly defensive research in isolated environments.",
      ransom_tag: "Private project | No repository link",
      tools_title: "Tools & Technologies",
      tools_hint: "Use the arrows to browse the tools.",
      carousel_prev_label: "Previous tool",
      carousel_next_label: "Next tool",
      focus_title: "Cybersecurity Focus",
      focus_l1: "Web reconnaissance and attack surface mapping.",
      focus_l2: "OSINT for public-signal collection and correlation.",
      focus_l3: "Authentication, endpoint and asset exposure analysis.",
      focus_l4: "Controlled offensive automation for research and defensive learning.",
      research_title: "Research & Experiments",
      methods_title: "Applied methodologies",
      methods_l1: "OSINT: discovery and validation of public sources.",
      methods_l2: "Recon: URL, directory, port and authentication enumeration.",
      methods_l3: "Automation: data collection and treatment pipelines.",
      roadmap_title: "Research roadmap",
      roadmap_l1: "Improve modular frameworks for recon and technical triage.",
      roadmap_l2: "Expand behavior-analysis lab for threat scenarios.",
      roadmap_l3: "Strengthen network telemetry and event correlation.",
      roadmap_l4: "Produce technical documentation focused on mitigation and hardening.",
      stats_title: "GitHub Stats",
      stats_note: "Technical profile snapshot with dynamic GitHub data.",
      contact_title: "Contact",
      contact_form_title: "Send message (mailto)",
      label_name: "Name",
      label_email: "Your email",
      label_subject: "Subject",
      label_message: "Message",
      ph_name: "Your name",
      ph_email: "you@email.com",
      ph_subject: "Message subject",
      ph_message: "Write your message...",
      open_email: "Open in email",
      contact_direct_title: "Direct contact",
      direct_email_label: "Email:",
      direct_whats_label: "WhatsApp:",
      open_whatsapp: "Message on WhatsApp",
      footer_line: "Gabriel Mengue Barros • Security Researcher focused on Reconnaissance, OSINT and Offensive Tooling",
      mail_subject_default: "Portfolio Contact",
      mail_label_name: "Name",
      mail_label_email: "Email"
    }
  };

  const toolProfiles = {
    python: {
      pt: {
        title: "Python",
        definition: "Python e uma linguagem de programacao de alto nivel, muito usada para scripts, automacao, dados e seguranca.",
        experience: "E a minha linguagem nativa e onde mais desenvolvo. Meu foco nao e software tradicional: eu uso Python para automacoes e scripts que eliminam tarefas chatas e fazem o trabalho pesado por mim."
      },
      en: {
        title: "Python",
        definition: "Python is a high-level programming language widely used for scripting, automation, data and security workflows.",
        experience: "It is my native language and where I build the most. I am not focused on traditional software; I use Python to automate repetitive work and build scripts that do the heavy lifting for me."
      }
    },
    networking: {
      pt: {
        title: "Networking",
        definition: "Networking e a base da comunicacao entre dispositivos, protocolos, rotas e servicos na rede.",
        experience: "No meu contexto, networking e essencial para recon, leitura de superficie de ataque e entendimento real de como os servicos se conectam e se expõem."
      },
      en: {
        title: "Networking",
        definition: "Networking is the foundation of communication between devices, protocols, routes and services.",
        experience: "In my workflow, networking is core for reconnaissance, attack-surface mapping and understanding how services actually connect and expose themselves."
      }
    },
    osint: {
      pt: {
        title: "OSINT",
        definition: "OSINT (Open Source Intelligence) e a coleta e analise de informacoes publicamente disponiveis em fontes abertas.",
        experience: "Essa e uma area que eu amo. Sempre gostei de analisar dados, principalmente os que as pessoas esquecem publicos na internet. E muito interessante descobrir contexto real a partir desses rastros."
      },
      en: {
        title: "OSINT",
        definition: "OSINT (Open Source Intelligence) is the collection and analysis of publicly available information from open sources.",
        experience: "This is one of my favorite areas. I enjoy analyzing data, especially the traces people leave exposed online. It is powerful to build real context from those public signals."
      }
    },
    automation: {
      pt: {
        title: "Automacao",
        definition: "Automacao e o uso de codigo para executar tarefas de forma repetivel, confiavel e com menos intervencao manual.",
        experience: "Eu gosto muito de automacao porque adoro ver o que programei funcionando sozinho. Meu objetivo e transformar processos manuais em fluxos automaticos e eficientes."
      },
      en: {
        title: "Automation",
        definition: "Automation is the use of code to run tasks in a repeatable, reliable way with minimal manual intervention.",
        experience: "I like automation because I enjoy seeing what I built running by itself. My goal is to transform manual work into efficient, automated workflows."
      }
    },
    kali: {
      pt: {
        title: "Kali Linux",
        definition: "Kali Linux e uma distribuicao focada em seguranca ofensiva, com um grande conjunto de ferramentas para teste e analise.",
        experience: "Para o meu curso, o Kali e um arsenal poderoso e tambem mata minha curiosidade tecnica. Mesmo usando ferramentas prontas, eu prefiro desenvolver meus proprios programas para deixar tudo do meu jeito."
      },
      en: {
        title: "Kali Linux",
        definition: "Kali Linux is a security-focused distribution with a large toolkit for offensive testing and analysis.",
        experience: "For my studies, Kali is a powerful arsenal and a way to satisfy technical curiosity. Even when I use existing tools, I still prefer building my own so everything fits my workflow."
      }
    },
    cli: {
      pt: {
        title: "CLI Tools",
        definition: "CLI (Command Line Interface) e a interacao com sistemas por linha de comando, de forma direta e scriptavel.",
        experience: "Eu uso CLI para ganhar velocidade, repetir processos com precisao e integrar ferramentas em pipelines de automacao e recon."
      },
      en: {
        title: "CLI Tools",
        definition: "CLI (Command Line Interface) is direct system interaction through commands, which is highly scriptable and efficient.",
        experience: "I use CLI tools for speed, reproducibility and tight integration into automation and reconnaissance pipelines."
      }
    },
    javascript: {
      pt: {
        title: "JavaScript",
        definition: "JavaScript e uma linguagem essencial para web, usada no frontend e tambem em automacoes e ferramentas no ecossistema Node.js.",
        experience: "Uso JavaScript em projetos web e em scripts utilitarios quando preciso de integracao rapida com interfaces e fluxos baseados em navegador."
      },
      en: {
        title: "JavaScript",
        definition: "JavaScript is a core web language used in front-end systems and also for automation/tooling in the Node.js ecosystem.",
        experience: "I use JavaScript in web projects and utility scripts when I need quick integration with interfaces and browser-based flows."
      }
    },
    php: {
      pt: {
        title: "PHP",
        definition: "PHP e uma linguagem backend madura para aplicacoes web dinamicas, APIs e integracao com banco de dados.",
        experience: "Desenvolver sites com backend e algo que acho interessante. PHP ainda vive muito bem e eu uso para estudar autenticacao, fluxo de sessao e logica de servidor."
      },
      en: {
        title: "PHP",
        definition: "PHP is a mature backend language for dynamic web applications, APIs and database integration.",
        experience: "Building backend-driven websites is something I enjoy. PHP is still very relevant, and I use it to study authentication, session flow and server-side logic."
      }
    }
  };

  let currentLang = "pt";
  let selectedTool = "python";
  let matrixAnimationId = null;
  let matrixRunning = false;
  let matrixResizeHandler = null;

  function t(key) {
    const bundle = i18n[currentLang] || i18n.pt;
    return bundle[key] || key;
  }

  function renderToolDetail(toolKey, animate = true) {
    if (!toolDetail || !toolDetailTitle || !toolDetailDefinition || !toolDetailExperience) {
      return;
    }

    const profile = toolProfiles[toolKey] || toolProfiles.python;
    const localized = profile[currentLang] || profile.pt;

    toolDetailTitle.textContent = localized.title;
    toolDetailDefinition.textContent = localized.definition;
    toolDetailExperience.textContent = localized.experience;

    if (!animate) {
      toolDetail.classList.add("show");
      return;
    }

    toolDetail.classList.remove("show");
    void toolDetail.offsetWidth;
    toolDetail.classList.add("show");
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "pt";
    localStorage.setItem(LANG_KEY, currentLang);
    html.lang = currentLang === "en" ? "en" : "pt-BR";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const translated = t(key);
      if (translated) {
        el.textContent = translated;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const translated = t(key);
      if (translated) {
        el.placeholder = translated;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.dataset.i18nAriaLabel;
      const translated = t(key);
      if (translated) {
        el.setAttribute("aria-label", translated);
      }
    });

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.setLang === currentLang);
    });

    renderToolDetail(selectedTool, false);

    const effectsEnabled = !body.classList.contains("effects-off");
    effectsToggle.textContent = effectsEnabled ? t("effects_disable") : t("effects_enable");
  }

  function setActiveTab(tabId) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === tabId);
    });
  }

  function setMode(mode) {
    const normalizedMode = mode === "interactive" ? "interactive" : "standard";
    body.classList.remove("mode-standard", "mode-interactive");
    body.classList.add(`mode-${normalizedMode}`);
    localStorage.setItem(MODE_KEY, normalizedMode);
  }

  function setEffects(enabled) {
    body.classList.toggle("effects-off", !enabled);
    effectsToggle.textContent = enabled ? t("effects_disable") : t("effects_enable");
    localStorage.setItem(EFFECTS_KEY, enabled ? "on" : "off");

    if (enabled) {
      startMatrix();
    } else {
      stopMatrix();
    }
  }

  function initTabs() {
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
    });
  }

  function initModePicker() {
    const savedMode = localStorage.getItem(MODE_KEY);
    if (savedMode === "standard" || savedMode === "interactive") {
      setMode(savedMode);
      modePicker.classList.add("hidden");
    }

    chooseModeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        setMode(btn.dataset.chooseMode);
        modePicker.classList.add("hidden");
      });
    });
  }

  function initLanguageControl() {
    const savedLang = localStorage.getItem(LANG_KEY);
    applyLanguage(savedLang === "en" ? "en" : "pt");

    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.setLang);
      });
    });
  }

  function initEffectsControl() {
    const savedEffects = localStorage.getItem(EFFECTS_KEY);
    const enabled = savedEffects !== "off";
    setEffects(enabled);

    effectsToggle.addEventListener("click", () => {
      const currentlyEnabled = !body.classList.contains("effects-off");
      setEffects(!currentlyEnabled);
    });
  }

  function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const finalSubject = subject || t("mail_subject_default");
      const bodyText = [
        `${t("mail_label_name")}: ${name}`,
        `${t("mail_label_email")}: ${email}`,
        "",
        message,
      ].join("\n");

      const mailtoLink =
        `mailto:${EMAIL_TARGET}?subject=${encodeURIComponent(finalSubject)}` +
        `&body=${encodeURIComponent(bodyText)}`;

      window.location.href = mailtoLink;
    });
  }

  function initToolsCarousel() {
    const carousels = document.querySelectorAll("[data-tools-carousel]");
    if (!carousels.length) return;

    carousels.forEach((carousel) => {
      const viewport = carousel.querySelector("[data-carousel-viewport]");
      const prevBtn = carousel.querySelector("[data-carousel-prev]");
      const nextBtn = carousel.querySelector("[data-carousel-next]");
      const slides = Array.from(carousel.querySelectorAll(".tool-slide[data-tool]"));
      if (!viewport || !prevBtn || !nextBtn || !slides.length) return;

      const step = () => Math.max(180, Math.floor(viewport.clientWidth * 0.76));

      prevBtn.addEventListener("click", () => {
        viewport.scrollBy({ left: -step(), behavior: "smooth" });
      });

      nextBtn.addEventListener("click", () => {
        viewport.scrollBy({ left: step(), behavior: "smooth" });
      });

      function activateTool(toolKey, animate = true) {
        selectedTool = toolKey;
        slides.forEach((slide) => {
          slide.classList.toggle("active", slide.dataset.tool === toolKey);
        });
        renderToolDetail(toolKey, animate);

        const selectedSlide = slides.find((slide) => slide.dataset.tool === toolKey);
        if (selectedSlide) {
          selectedSlide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }

      slides.forEach((slide) => {
        slide.addEventListener("click", () => activateTool(slide.dataset.tool));
        slide.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activateTool(slide.dataset.tool);
          }
        });
      });

      viewport.addEventListener("click", (event) => {
        const target = event.target.closest(".tool-slide[data-tool]");
        if (target) {
          activateTool(target.dataset.tool);
        }
      });

      const preSelected = slides.find((slide) => slide.classList.contains("active"));
      activateTool((preSelected || slides[0]).dataset.tool, false);
    });
  }

  function startMatrix() {
    if (matrixRunning) return;
    matrixRunning = true;

    const canvas = document.getElementById("matrixCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*@!?";
    const fontSize = 16;
    let drops = [];
    let lastTimestamp = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    }

    function draw(timestamp) {
      if (!matrixRunning) return;

      if (timestamp - lastTimestamp < 42) {
        matrixAnimationId = requestAnimationFrame(draw);
        return;
      }
      lastTimestamp = timestamp;

      ctx.fillStyle = "rgba(2, 8, 3, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px Share Tech Mono`;
      ctx.fillStyle = "#45ff83";

      for (let i = 0; i < drops.length; i += 1) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.88;
      }

      matrixAnimationId = requestAnimationFrame(draw);
    }

    resize();
    matrixResizeHandler = resize;
    window.addEventListener("resize", matrixResizeHandler);
    matrixAnimationId = requestAnimationFrame(draw);
  }

  function stopMatrix() {
    matrixRunning = false;
    if (matrixAnimationId !== null) {
      cancelAnimationFrame(matrixAnimationId);
      matrixAnimationId = null;
    }
    if (matrixResizeHandler) {
      window.removeEventListener("resize", matrixResizeHandler);
      matrixResizeHandler = null;
    }

    const canvas = document.getElementById("matrixCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function init() {
    initTabs();
    initModePicker();
    initLanguageControl();
    initEffectsControl();
    initContactForm();
    initToolsCarousel();
  }

  init();
})();
