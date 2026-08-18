(function () {
  "use strict";

  var STYLES = [
    ".cs-block{max-width:760px;margin-top:6px}",
    ".cs-head{display:flex;align-items:center;gap:10px;font-family:Inter,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45);margin:0 0 16px}",
    ".cs-head::before{content:'';width:18px;height:1px;background:#fff}",
    ".cs-market{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px 16px;font-size:13px;line-height:1.6;color:rgba(255,255,255,.72);margin-bottom:18px}",
    ".cs-market b{color:#fff;font-weight:600}",
    ".cs-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:14px 16px;margin-bottom:12px}",
    ".cs-card h4{margin:0 0 6px;font-size:13px;font-weight:600;color:#fff}",
    ".cs-card p{margin:0;font-size:12.5px;line-height:1.6;color:rgba(255,255,255,.62)}",
    ".cs-sub{font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.4);margin:22px 0 10px}",
    ".cs-table{width:100%;border-collapse:collapse;font-size:12.5px}",
    ".cs-table th{text-align:left;padding:9px 12px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.42)}",
    ".cs-table td{padding:9px 12px;color:#fff;border-top:1px solid rgba(255,255,255,.07);font-weight:500;font-variant-numeric:tabular-nums}",
    ".cs-table td:first-child{color:rgba(255,255,255,.78);font-weight:400}",
    ".cs-table tr.head td{border-top:0;color:rgba(255,255,255,.55);font-weight:600;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding-top:4px}",
    ".cs-graph-wrap{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:14px 12px 10px}",
    ".cs-graph{width:100%;height:auto;display:block}",
    ".cs-caption{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:11px;color:rgba(255,255,255,.4);margin-top:6px}",
    ".cs-hire{display:flex;flex-wrap:wrap;gap:8px}",
    ".cs-chip{display:flex;flex-direction:column;gap:2px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:9px 12px;font-size:12px;color:#fff;flex:1 1 auto;min-width:150px;max-width:250px}",
    ".cs-chip small{font-size:10.5px;color:rgba(255,255,255,.5);line-height:1.35}",
    ".cs-event{display:flex;gap:10px;align-items:flex-start;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:10px 12px;margin-bottom:8px}",
    ".cs-event b{font-size:12.5px;color:#fff;font-weight:600;display:block;margin-bottom:2px}",
    ".cs-event span{font-size:12px;color:rgba(255,255,255,.55);line-height:1.5}",
    ".cs-event::before{content:'';width:6px;height:6px;border-radius:50%;background:#72efb0;margin-top:5px;flex-shrink:0}",
    ".cs-note{font-size:11px;color:rgba(255,255,255,.36);margin-top:14px;line-height:1.5}",
    "@media(max-width:640px){.cs-table{font-size:11px}.cs-table td{padding:8px 9px}.cs-chip{min-width:100%}}"
  ].join("");

  var DATA = {
    "ai-ml": {
      market: "AI/ML is the fastest-growing hiring vertical in Indian tech — enterprise AI (BFSI, retail, healthcare) and product startups hire across ML engineering, MLOps and applied-research roles.",
      scopes: [
        ["Machine Learning Engineer", "Builds and ships ML models to production — feature engineering, training pipelines, evaluation and monitoring across BFSI, retail, e-commerce and healthcare."],
        ["Data Scientist", "Answers business questions with data — experimentation, forecasting and stakeholder-facing analytics in product companies and consultancies."],
        ["MLOps Engineer", "Operationalises ML — CI/CD for models, model registries, feature stores and drift monitoring; one of the biggest skill gaps in enterprise AI."],
        ["AI Research Engineer", "Works on novel architectures, RAG pipelines and fine-tuning in applied-research teams and GenAI-focused startups."]
      ],
      roles: [["ML Engineer", 7, 26, 52], ["Data Scientist", 6, 22, 42], ["MLOps Engineer", 8, 28, 55], ["Computer Vision Engineer", 7, 25, 48]],
      graph: [[0, 6], [2, 14], [5, 26], [8, 40], [10, 52], [12, 70]],
      firms: [["Fractal", "AI & analytics engineers (GenAI, risk)"], ["Tredence", "Data science & ML (retail, CPG)"], ["Gnani.ai", "NLP / voice AI engineers"], ["Yellow.ai", "Conversational-AI & LLM engineers"], ["Murai.ai", "Enterprise AI platforms"], ["Meesho", "ML — ranking, pricing, feed"]],
      events: [
        ["Smart India Hackathon", "National 36-hour buildathon solving real ministry/PSU problems — a strong hiring pipeline into startups and product firms."],
        ["Flipkart GRiD", "Flagship campus challenge with ML and SDE tracks and direct interview pipelines."],
        ["Microsoft Engage", "Mentored 4-6 week program with a hiring funnel into Microsoft-ready talent."]
      ]
    },
    "gen-ai": {
      market: "Generative AI is the biggest new hiring wave in tech — Indian startups build on LLMs for enterprise knowledge, voice, agents and copilots; GenAI engineer demand grew over 3× in 2025.",
      scopes: [
        ["Generative AI Engineer", "Builds RAG systems, LLM applications and agentic workflows on OpenAI, Anthropic, Cohere, Gemini and open-weight models."],
        ["LLM / Agent Engineer", "Designs multi-agent systems, tool calling, routing and evals — the first skill set AI startups hire."],
        ["AI Product Engineer", "Ships AI features end-to-end — prompt engineering, fine-tuning, guardrails — mixing product thinking with model harnesses."],
        ["Evals & Safety Specialist", "Owns evaluation suites, red-teaming and guardrail quality across model platforms."]
      ],
      roles: [["GenAI Engineer", 8, 30, 58], ["LLM / Agent Engineer", 9, 32, 62], ["RAG Engineer", 8, 28, 55], ["AI Application Engineer", 7, 26, 50]],
      graph: [[0, 8], [2, 16], [5, 32], [8, 48], [10, 62], [12, 85]],
      firms: [["Sarvam AI", "India-first LLM platforms & agents"], ["Krutrim", "GenAI products & infra"], ["Yellow.ai", "Enterprise GenAI assistants"], ["Haptik", "Conversational AI engineering"], ["Mad Street Den", "Applied CV + GenAI"], ["Sprinklr", "GenAI platform engineering"]],
      events: [
        ["Agent hackathons", "Major Indian GenAI buildathons (OpenAI/Anthropic sponsored) with startup recruiter access."],
        ["Flipkart GRiD GenAI track", "GenAI product-building campus challenge with pre-placement offers."],
        ["AI-fest conferences", "NHRD / IIT-AI summit recruitment zones for GenAI talent."]
      ]
    },
    "cyber-security": {
      market: "Cybersecurity hiring in India is white-hot — Digital India, BFSI and cloud adoption have created a large talent gap; entry roles span SOC, GRC and product security.",
      scopes: [
        ["Security Analyst (SOC)", "Monitors threats, triages alerts and responds to incidents for MSSPs, BFSI and government agencies."],
        ["Penetration Tester / Red Teamer", "Probes applications and infrastructure for exploitable flaws — hired by product firms and consultancies."],
        ["Application Security Engineer", "Builds security into the SDLC — SAST/DAST, secure code review and CI/CD security gates."],
        ["GRC & Compliance Analyst", "Aligns organisations to ISO 27001, DPDP 2023, RBI and SEBI mandates — a compliance boom role."]
      ],
      roles: [["Security Analyst", 5, 16, 30], ["Penetration Tester", 6, 18, 35], ["AppSec Engineer", 7, 22, 40], ["Cloud Security Engineer", 8, 28, 55]],
      graph: [[0, 5], [2, 11], [5, 19], [8, 29], [10, 40], [12, 55]],
      firms: [["CloudSEK", "Threat intel & OSINT engineers"], ["Cyble", "CTI — SOC & research roles"], ["Safe Security", "Quant-cyber / risk specialists"], ["TAC Security", "Vulnerability mgmt engineers"], ["Seconize", "Cyber GRC platform roles"], ["BigTech GCCs", "Blue-team & cloud security"]],
      events: [
        ["Smart India Hackathon (Security)", "Government problem statements in cyber defence."],
        ["Null / DefCamp meetups", "Security community meets with CTFs and recruiter networking."],
        ["CERT-In partner hackathons", "National cyber hackathons feeding campus hiring funnels."]
      ]
    },
    "fullstack": {
      market: "Full-stack is the backbone of Indian product engineering — every startup hires frontend + backend + database generalists; the hottest demand is React/Node or React/Python with cloud exposure.",
      scopes: [
        ["Full-Stack Developer", "Ships features across frontend, APIs and databases in product startups — the default builder role."],
        ["Frontend Engineer", "Specialises in React/Next.js, performance and design systems for consumer and enterprise products."],
        ["Backend / API Engineer", "Designs services, microservices and integrations in Node, Go or Python; very strong in fintech."],
        ["Solutions Engineer", "Pre-sales + engineering hybrid — rare, well paid and always in demand at SaaS companies."]
      ],
      roles: [["Full-Stack Developer", 6, 22, 40], ["Frontend Engineer", 6, 20, 36], ["Backend Engineer", 7, 24, 45], ["Solutions Engineer", 8, 26, 48]],
      graph: [[0, 5], [2, 11], [5, 22], [8, 33], [10, 44], [12, 60]],
      firms: [["Razorpay", "Full-stack — payments & fintech scale"], ["Zoho", "Product dev (Node/Go/React)"], ["Freshworks", "React full-stack for SaaS"], ["Chargebee", "Full-stack & backend billing"], ["Postman", "API-tooling engineers"], ["BrowserStack", "Testing-infra full-stack"]],
      events: [
        ["Flipkart GRiD", "Full-stack + ML campus challenge with PPOs."],
        ["HackerEarth / HackerRank challenges", "Company-sponsored coding challenges with direct calls."],
        ["IT campus drives", "TCS / Infosys / Wipro mass off-campus and pool drives."]
      ]
    },
    "cloud-computing": {
      market: "Every product firm is now cloud-native — DevOps, SRE and platform roles outpace generalists, and India is a global hub for cloud operations teams.",
      scopes: [
        ["DevOps / Cloud Engineer", "Builds CI/CD, containerised workloads and AWS/Azure/GCP infrastructure for product and enterprise teams."],
        ["SRE (Site Reliability Engineer)", "Owns uptime, scaling and incident response at consumer-scale startups and banks."],
        ["Platform Engineer", "Builds internal developer platforms — Kubernetes, IaC, golden paths — the fastest-growing infra role."],
        ["Cloud Security Engineer", "Hardens cloud estates — IAM, networking and compliance for BFSI and regulated sectors."]
      ],
      roles: [["DevOps Engineer", 6, 20, 38], ["Cloud Engineer (AWS/Azure)", 7, 24, 44], ["SRE", 8, 28, 52], ["Platform Engineer", 8, 30, 55]],
      graph: [[0, 6], [2, 13], [5, 22], [8, 32], [10, 42], [12, 58]],
      firms: [["Niveus Solutions", "GCP consult — DevOps & cloud engineers"], ["CloudThat", "Cloud consulting & delivery roles"], ["Zscaler (India)", "Cloud security engineering"], ["Druva", "Cloud data protection engineers"], ["Netcore Cloud", "Infra + SRE for martech"], ["Atlassian (India)", "Cloud platform engineers"]],
      events: [
        ["Cloud community hackathons", "AWS/Google community events with recruiter-led hiring tracks."],
        ["Smart India Hackathon (Cloud)", "Ministry problem statements in cloud infrastructure."],
        ["KubeCon India / CNCF roadshows", "Enterprise cloud hiring fair track."]
      ]
    },
    "blockchain": {
      market: "Indian Web3 hiring is niche but recovering — exchanges, zero-knowledge tooling and institutional custody pay above market for solid engineers; fintech and tokenised assets drive the roles.",
      scopes: [
        ["Blockchain Developer", "Implements smart contracts (Solidity/Rust), token standards and EVM chains for fintech and exchanges."],
        ["Web3 Full-Stack Engineer", "Builds dApps — frontends, wallet integrations and indexers for decentralised products."],
        ["Smart-Contract Auditor", "Reviews protocol code for vulnerabilities — the top-earning niche in Web3 security."],
        ["DeFi / Tokenomics Engineer", "Designs protocol logic, yield mechanics and token flows for lending and asset products."]
      ],
      roles: [["Blockchain Developer", 6, 20, 38], ["Web3 Engineer", 6, 20, 40], ["Smart-Contract Auditor", 8, 30, 60], ["Protocol Engineer", 10, 34, 68]],
      graph: [[0, 6], [2, 12], [5, 22], [8, 34], [10, 46], [12, 64]],
      firms: [["Polygon Labs (India)", "Core protocol engineers & researchers"], ["CoinDCX", "Exchange platform engineering"], ["CoinSwitch", "Crypto product engineers"], ["Liminal", "Digital asset custody & wallets"], ["Zokyo / audit shops", "Smart-contract audits"], ["SettleMint India", "Enterprise blockchain platform"]],
      events: [
        ["ETHIndia / ETHGlobal", "Global-scale Indian Web3 buildathons with sponsor hiring."],
        ["CoinDCX Cryptt events", "Developer community + recruiting sessions."],
        ["DeFi security summits", "Auditor networking and career tracks (India editions)."]
      ]
    },
    /*__ENTRIES__*/
  };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var _gid = 0;

  function graphSVG(pts) {
    var W = 620, H = 292, L = 56, R = 18, T = 26, B = 40;
    var maxX = 12;
    var mx = 0, i;
    for (i = 0; i < pts.length; i++) if (pts[i][1] > mx) mx = pts[i][1];
    var step = mx > 80 ? 20 : mx > 40 ? 10 : mx > 20 ? 5 : 4;
    var yMax = Math.ceil(mx / step) * step;
    function X(x) { return L + (x / maxX) * (W - L - R); }
    function Y(y) { return T + (1 - y / yMax) * (H - T - B); }
    var out = "";
    for (var y = 0; y <= yMax; y += step) {
      out += '<line x1="' + L + '" y1="' + Y(y) + '" x2="' + (W - R) + '" y2="' + Y(y) + '" stroke="rgba(255,255,255,.07)"/>' +
        '<text x="' + (L - 8) + '" y="' + (Y(y) + 4) + '" text-anchor="end" font-size="10" fill="rgba(255,255,255,.42)">' + y + '</text>';
    }
    var line = "", area, dts = "", xl = "";
    for (i = 0; i < pts.length; i++) {
      var p = pts[i], cx = X(p[0]), cy = Y(p[1]);
      line += (i ? "L" : "M") + cx.toFixed(1) + " " + cy.toFixed(1) + " ";
      dts += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="3.5" fill="#050505" stroke="#72efb0" stroke-width="2"/>' +
        '<text x="' + cx.toFixed(1) + '" y="' + Math.max(cy - 10, 12).toFixed(1) + '" text-anchor="middle" font-size="9.5" fill="rgba(255,255,255,.85)">' + p[1] + 'L</text>';
      xl += '<text x="' + cx.toFixed(1) + '" y="' + (H - 16) + '" text-anchor="middle" font-size="9.5" fill="rgba(255,255,255,.5)">' + (p[0] >= 12 ? "12+" : p[0] + " yr") + '</text>';
    }
    area = line + "L" + X(maxX).toFixed(1) + " " + B + " L" + X(0).toFixed(1) + " " + B + " Z";
    _gid++;
    return '<svg class="cs-graph" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Package in LPA by years of experience">' +
      '<defs><linearGradient id="csf' + _gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#72efb0" stop-opacity=".28"/><stop offset="100%" stop-color="#72efb0" stop-opacity="0"/></linearGradient></defs>' +
      out +
      '<path d="' + area + '" fill="url(#csf' + _gid + ')"/>' +
      '<path d="' + line + '" fill="none" stroke="#72efb0" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>' +
      dts + xl +
      '<text x="12" y="16" font-size="10" fill="rgba(255,255,255,.5)">Package (₹ LPA) ↑</text>' +
      '<text x="' + (W - 6) + '" y="' + (H - 6) + '" text-anchor="end" font-size="10" fill="rgba(255,255,255,.5)">Experience →</text>' +
      "</svg>";
  }

  function render(d) {
    var h = '<div class="cs-block">';
    h += '<div class="cs-head">Career Scopes</div>';
    h += '<div class="cs-market"><b>Market brief · research:</b> ' + esc(d.market) + "</div>";

    h += '<div class="cs-sub">What you can do with it</div>';
    for (var i = 0; i < d.scopes.length; i++) {
      h += '<div class="cs-card"><h4>' + esc(d.scopes[i][0]) + "</h4><p>" + esc(d.scopes[i][1]) + "</p></div>";
    }

    h += '<div class="cs-sub">Job roles & packages (₹ LPA)</div>';
    h += '<div class="cs-table">';
    h += '<div class="cs-row"><span></span><table style="display:none"></table></div>';
    var rows = '<div class="cs-row" style="display:none"></div>';
    h += '<table style="width:100%;border-collapse:collapse">' +
      '<tr><td class="head">Job role</td><td class="head">0–2 yrs</td><td class="head">~5 yrs</td><td class="head">~10 yrs</td></tr>';
    for (i = 0; i < d.roles.length; i++) {
      h += "<tr><td>" + esc(d.roles[i][0]) + "</td><td>" + d.roles[i][1] + "</td><td>" + d.roles[i][2] + "</td><td>" + d.roles[i][3] + "</td></tr>";
    }
    h += "</table></div>";

    h += '<div class="cs-sub">Salary growth with experience</div>';
    h += '<div class="cs-graph-wrap">' + graphSVG(d.graph) +
      '<div class="cs-caption"><span>Median package progression (aggregate of roles above)</span><span>X-axis: years · Y-axis: ₹ LPA</span></div></div>';

    h += '<div class="cs-sub">Startups hiring this talent now</div>';
    h += '<div class="cs-hire">';
    for (i = 0; i < d.firms.length; i++) {
      h += '<span class="cs-chip">' + esc(d.firms[i][0]) + "<small>" + esc(d.firms[i][1]) + "</small></span>";
    }
    h += "</div>";

    h += '<div class="cs-sub">Major hiring events & channels</div>';
    for (i = 0; i < d.events.length; i++) {
      h += '<div class="cs-event"><div><b>' + esc(d.events[i][0]) + "</b><span>" + esc(d.events[i][1]) + "</span></div></div>";
    }

    h += '<div class="cs-note">Indicative Indian-market packages (₹ LPA) blending campus, lateral and online-market data; actual offers vary by company, city and role. Numbers are a median guide, not a promise.</div>';
    h += "</div>";
    return h;
  }

  function inject() {
    if (!document.querySelector('template[id^="expnd-"]')) return;
    var st = document.createElement("style");
    st.textContent = STYLES;
    document.head.appendChild(st);
    var tmpls = document.querySelectorAll('template[id^="expnd-"]');
    for (var i = 0; i < tmpls.length; i++) {
      var t = tmpls[i];
      var id = t.id.slice("expnd-".length);
      var d = DATA[id];
      if (!d) continue;
      t.innerHTML += render(d);
    }
  }

  window.CAREER_SCOPES = { inject: inject, data: DATA };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();