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
    "accounting": {
      market: "AI is reshaping accounting & audit — automation of invoicing, reconciliation, compliance and audit evidence is creating hybrid roles that pair accounting expertise with ERP and AI skills; controllership, tax-tech and audit analytics hire steadily.",
      scopes: [
        ["AI-Enabled Accountant", "Uses AI tools (Tally Prime, Zoho Books, QuickBooks AI, copilots) to automate bookkeeping, reconciliations and reporting."],
        ["Audit Analytics Specialist", "Applies continuous-monitoring and anomaly-detection tools in statutory and internal audit — Big-4 run AI-enabled audit platforms."],
        ["Finance Automation / RPA Analyst", "Builds workflows in the finance function — invoice matching and AP/AR automation with RPA and LLM tools."],
        ["Tax & Compliance Technologist", "Automates GST/TDS/income-tax filing and compliance using platform tech — Clear-style firms are major hirers."]
      ],
      roles: [["Accounts Executive (AI tools)", 4, 9, 15], ["Audit Associate (Big-4)", 5, 14, 28], ["Finance Automation Specialist", 6, 16, 30], ["Financial Controller", 9, 25, 46]],
      graph: [[0, 4], [2, 8], [5, 15], [8, 24], [10, 32], [12, 46]],
      firms: [["Clear (ClearTax)", "GST/tax-tech — accounting & compliance roles"], ["Zoho", "Zoho Books & finance products"], ["Tally Solutions", "Product + accounting domain experts"], ["Infosys BPM", "F&A processing + AI automation"], ["Intuit India", "QuickBooks AI & support ops"], ["Lending fintechs", "Reporting & credit accountants"]],
      events: [
        ["Big-4 off-campus drives", "EY, PwC, KPMG, Deloitte hire audit & tax analysts through campus and off-campus drives."],
        ["ICAI placement meets", "CA/CS finalists hiring conferences run by the Institute of Chartered Accountants of India."],
        ["RPA / AI-in-Finance summits", "Finance automation conferences with hiring tables."]
      ]
    },
    "financial-markets": {
      market: "Indian capital markets have boomed — broking, wealth-tech, algo desks and SEBI/NSE compliance hire across research, operations, quant and distribution roles.",
      scopes: [
        ["Equity Research Analyst", "Covers sectors and companies — a pipeline into buy-side and sell-side desks at brokerages and AMCs."],
        ["Quantitative Analyst", "Designs pricing, backtesting and execution models for prop desks and fintechs using Python/pandas."],
        ["Trading Operations / Risk", "Middle-office roles — settlement, margins, market risk and algo monitoring at brokers and exchanges."],
        ["Wealth & Distribution", "Advisory and sales roles across wealth-tech (Groww, Zerodha, Dhan) and full-service firms."]
      ],
      roles: [["Equity Research Analyst", 5, 15, 30], ["Quantitative Analyst", 7, 24, 52], ["Risk / Operations Analyst", 5, 14, 26], ["Fund Manager (AMC path)", 8, 28, 62]],
      graph: [[0, 5], [2, 11], [5, 20], [8, 32], [10, 44], [12, 62]],
      firms: [["Zerodha", "Tech, product & finance ops roles"], ["Groww", "Wealth products — research & eng"], ["Upstox", "Broking & trading platform roles"], ["Smallcase", "Portfolio products — research & eng"], ["Wint Wealth", "Alt-assets investing teams"], ["AMCs (SBI/Kotak/ICICI)", "Research & fund roles"]],
      events: [
        ["NSE/SEBI programmes", "Exchange-led awareness + internship tracks with hiring pipelines."],
        ["CFA India events", "Investment-industry networking and job boards."],
        ["Prop-trading challenges", "Algo-desks hiring challenges popular among students (India)."]
      ]
    },
    "investment-banking": {
      market: "India's M&A and PE/VC pipeline is robust — IB analyst recruiting runs off IIM/CA and lateral tracks; deal activity across fintech, healthcare and manufacturing drives analyst and associate roles.",
      scopes: [
        ["IB Analyst (M&A / ECM / DCM)", "Builds valuation models, deal books and pitch decks — the classic entry funnel into bulge-bracket and boutique banks."],
        ["Private Equity / VC Analyst", "Screens deals, builds financial models and supports portfolio work at PE/VC funds — includes family offices."],
        ["Structured Finance / Debt", "Works on project finance, credit and structured products for infrastructure, REITs and lending platforms."],
        ["Capital Markets / Syndicate", "Supports IPOs, qualified-institutional placements and debt issuances — ECM demand is strong post-2024 IPO boom."]
      ],
      roles: [["IB Analyst", 12, 40, 90], ["PE/VC Analyst", 12, 45, 95], ["Structured Finance Analyst", 8, 26, 55], ["ECM / Syndicate Associate", 10, 32, 65]],
      graph: [[0, 10], [2, 22], [5, 42], [8, 70], [10, 95], [12, 130]],
      firms: [["Boutique IB/PE shops", "Analyst & associate hiring (M&A, fundraising)"], ["Zerodha Rainmatter", "Startup ecosystem + fintech investing"], ["Groww/Wealth desks", "Capital-raising & finance roles"], ["Family offices (IIFL et al.)", "Deal teams & portfolio analysts"], ["Big-4 deal advisory", "CF/valuation analyst roles"], ["Fintech scale-ups", "Corporate development analysts"]],
      events: [
        ["IIM finance summits", "CFA/IIM investing conferences with IB recruiter booths."],
        ["Bank campus drives", "Avendus, Ambit, IIFL, JM Financial analyst programmes."],
        ["Deal advisory case competitions", "Case-study fests feeding analyst pipelines."]
      ]
    },
    "embedded-iot": {
      market: "IoT and embedded hiring spans automotive, smart devices, industrial and agri-tech — every connected product needs firmware engineers; India's GCCs and OEMs drive constant demand.",
      scopes: [
        ["Embedded Firmware Engineer", "Writes C/C++ firmware for MCUs (STM32, ESP32) for automotive, consumer and industrial products."],
        ["IoT Solutions Engineer", "Connects devices to cloud — MQTT, AWS IoT, edge gateways and fleet management for smart-city and agri projects."],
        ["RTOS / BSP Developer", "Works on FreeRTOS, Linux BSPs and driver development for automotive and telecom platforms."],
        ["V&V / Test Engineer", "Validates embedded systems — HIL, certification and compliance (ISO 26262, IEC) roles in high demand."]
      ],
      roles: [["Embedded Firmware Engineer", 5, 15, 28], ["IoT Engineer", 5, 16, 30], ["RTOS/BSP Developer", 7, 20, 38], ["Embedded Test (V&V)", 5, 14, 26]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 46]],
      firms: [["Tata Elxsi", "Automotive embedded & connected platforms"], ["L&T Technology Services", "Embedded + IoT product engineering"], ["Cyient", "IoT & firmware engineering"], ["Bosch Global (BLR)", "Automotive embedded software"], ["Kulicke & Soffa tier", "Board & firmware roles"], ["Agri-tech startups", "IoT sensors, irrigation control"]],
      events: [
        ["Company IoT hackathons", "Bosch/Tata Elxsi connected-device hackathons with hiring pipelines."],
        ["Smart India Hackathon (Hardware)", "Ministry hardware & IoT problem statements."],
        ["Embedded engineering fests", "NSSCE/college + IEEE embedded conferences with vendor hiring."]
      ]
    },
    "vlsi": {
      market: "Semiconductor design in India is scaling fast — chip-design and verification hubs in Bengaluru and Hyderabad hire heavily as fabless companies and GCCs localise front-end roles.",
      scopes: [
        ["RTL Design Engineer", "Implements digital blocks in Verilog/SystemVerilog for SoCs — a core front-end VLSI role."],
        ["Verification Engineer (DV)", "Builds UVM testbenches and coverage for chips — the biggest-volume VLSI hiring area."],
        ["Physical Design Engineer", "Owns synthesis, floorplanning, CTS and sign-off (PD flow) — strong in ASIC teams."],
        ["FPGA / Emulation Engineer", "Prototypes and validates designs on FPGAs — in demand across automotive, networking and defence."]
      ],
      roles: [["RTL Design Engineer", 8, 24, 45], ["Verification Engineer", 7, 22, 44], ["Physical Design Engineer", 8, 25, 50], ["FPGA Engineer", 7, 20, 38]],
      graph: [[0, 7], [2, 14], [5, 24], [8, 38], [10, 50], [12, 68]],
      firms: [["Tessolve", "ASIC design, DV & emulation services"], ["eInfochips (Arrow)", "Embedded + VLSI engineering"], ["SmartSoC", "RTL, DV & physical design"], ["Sankalp Semiconductor", "Chip design & verification"], ["Samsung / TI / Qualcomm India", "SoC RTL-DV roles"], ["OSDA Labs", "UVM verification specialists"]],
      events: [
        ["VLSI conferences (Asia)", "Foundry/EDA summits with hiring tracks."],
        ["Chip-design challenges", "Chipathon / Silicon education hackathons feeding design roles."],
        ["GCC lateral drives", "Qualcomm/TI/Synopsys referral and lateral drives."]
      ]
    },
    "signal-processing": {
      market: "Signal-processing skills feed 5G/6G, telecom networking, audio, radar and defence-tech — Tejas-style networking firms and defence startups hire DSP and communication engineers.",
      scopes: [
        ["DSP Engineer", "Implement filter, modulation and spectral algorithms in C/MATLAB/CUDA for audio, radar and satellite systems."],
        ["Communication Systems Engineer", "Designs and tests PHY-layer and protocol stacks for 4G/5G/6G, Wi-Fi and satellite networks."],
        ["AI/Signal Research Engineer", "Applies ML to signal data — voice, spectrum sensing and anomaly detection — a fast-growing hybrid field."],
        ["RF / Test Engineer", "Validates radio hardware and link performance (VNA, spectrum analysers) across telecom and defence."]
      ],
      roles: [["DSP Engineer", 6, 17, 32], ["Communication Systems Engineer", 7, 20, 38], ["Signal ML Engineer", 8, 24, 45], ["RF Test Engineer", 6, 16, 30]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 31], [10, 40], [12, 55]],
      firms: [["Tejas Networks", "Optical & 5G systems engineering"], ["Saankhya Labs", "SDR & broadcast DSP"], ["VVDN", "5G/wireless product engineering"], ["GMR Avionics", "Radar/signal processing for aviation"], ["Defence-tech startups", "Radar, EW, spectrum sensing"], ["Audio-tech firms", "Voice & audio algorithm roles"]],
      events: [
        ["5G/6G India events", "TSDSI and telecom summits with hiring zones."],
        ["Defence-tech challenges", "iDEX competitions feeding DSP/comm hires."],
        ["DSP conferences (IEEE)", "Signal-processing chapters with industry networking."]
      ]
    },
    "robotics-ece": {
      market: "Robotics hiring is concentrated in warehouse automation, medical robotics, drones and agri-robotics — control, embedded and perception roles all overlap with ECE skills.",
      scopes: [
        ["Robotics Engineer (Control)", "Designs motor control, PID/LQR loops and motion planning for mobile robots and manipulators."],
        ["Autonomy / Perception Engineer", "Builds sensor fusion, SLAM and computer-vision stacks for AMRs, drones and service robots."],
        ["Embedded Robotics Engineer", "Brings up MCUs, ROS bring-up and hardware integration for robot platforms."],
        ["ROS / Robotics Software Engineer", "Develops robot software on ROS/ROS2 — simulation, drivers and fleet logic."]
      ],
      roles: [["Robotics Engineer", 7, 20, 38], ["Perception Engineer", 8, 26, 50], ["Embedded Robotics", 6, 18, 34], ["ROS Software Engineer", 7, 22, 42]],
      graph: [[0, 6], [2, 13], [5, 22], [8, 34], [10, 44], [12, 60]],
      firms: [["Addverb", "Warehouse AMRs & robotics software"], ["GreyOrange", "Robotics & fulfilment automation"], ["Sastra Robotics", "Service & inspection robots"], ["Systemantics", "Industrial manipulators"], ["Raptee/Avataar tier", "Autonomy-driven product startups"], ["Drone startups (ideaForge tier)", "UAV autonomy & perception"]],
      events: [
        ["APCR/Robocon", "Robotics engineering fests with industry recruiter zones."],
        ["Warehouse automation demos", "Company demo-days hiring automation engineers."],
        ["Drona Aviation-style workshops", "Drone-build hiring pipelines."]
      ]
    },
    "power-systems": {
      market: "India's grid modernisation — smart meters, renewables integration and green-hydrogen ambition — drives steady hiring in utilities, EPC, GCCs and power-tech startups.",
      scopes: [
        ["Power Systems Engineer", "Studies and operates generation, transmission and distribution systems — load flow, protection and stability."],
        ["Protection & Relay Engineer", "Designs protection schemes for substations and grids — a critical, well-paid niche."],
        ["SCADA / Substation Automation", "Builds control and automation for substations using IEC 61850 — digital-twin and smart-grid roles."],
        ["Smart Metering / Distribution Engineer", "Works on smart-meter rollouts, AMI and distribution analytics — one of India's biggest infrastructure drives."]
      ],
      roles: [["Power Systems Engineer", 5, 14, 26], ["Protection Engineer", 6, 17, 30], ["Substation Automation", 6, 16, 30], ["Smart Meter / AMI Engineer", 5, 14, 26]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 25], [10, 32], [12, 44]],
      firms: [["Power Grid / NTPC", "Grid O&M and engineering roles"], ["Tata Power", "Distribution, smart meters & EVs"], ["Schneider Electric India", "Power automation & protection"], ["Hitachi Energy", "Grid automation & HVDC"], ["Smart-meter startups", "AMI, analytics & comms (IoT)"], ["Green-energy IPPs", "Power plant & EPC engineering"]],
      events: [
        ["Energy summits (IEEMA)", "Power & energy expos with hiring zones."],
        ["GCC/utility drives", "Adani/Siemens/Abb power-sector campus drives."],
        ["Smart-grid pilot bootcamps", "State utility pilot projects hiring young engineers."]
      ]
    },
    "renewable-energy": {
      market: "Renewables are India's biggest infrastructure build — solar, wind and storage plus cross-border plants drive demand for plant, design and O&M engineers across EPC and IPP companies.",
      scopes: [
        ["Solar Plant Design Engineer", "Sizes PV plants — yield simulation, layout and BOQ for utility-scale and rooftop projects."],
        ["SCADA / O&M Engineer", "Runs asset-management and plant-monitoring for solar and wind fleets — a booming O&M market."],
        ["Wind Energy Engineer", "Handles siting, turbine technology and performance for wind farms (onshore + emerging offshore)."],
        ["Storage / Green-H2 Engineer", "Designs BESS and electrolyser projects — the frontier of renewable hiring."]
      ],
      roles: [["Solar Design Engineer", 5, 14, 26], ["O&M / Plant Engineer", 5, 13, 25], ["Wind Engineer", 5, 15, 28], ["BESS / Green-H2 Engineer", 7, 20, 38]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 24], [10, 32], [12, 44]],
      firms: [["Adani Green", "Solar & hybrid plant engineering"], ["ReNew Power", "Renewables portfolio O&M"], ["Amp Energy", "Solar + storage development"], ["SolarSquare", "Rooftop solar & O&M (consumer)"], ["Hero Future Energy", "Wind & solar project teams"], ["Oorjan / Loom Solar", "Rooftop-solar tech startups"]],
      events: [
        ["RE-Invest India", "Government renewable-energy summit with hiring booths."],
        ["Solar-quarter camps", "Installer/O&M training camps feeding hires."],
        ["Green startup challenges", "Climate-tech accelerators with developer hiring."]
      ]
    },
    "ev-tech": {
      market: "India's EV drive is creating a charging, battery and drive-train ecosystem — OEMs, battery startups and charger companies hire EEE engineers across design, validation and integration.",
      scopes: [
        ["EV Powertrain Engineer", "Works on motors, inverters and controllers for 2W/3W/4W EVs — the core of EV engineering."],
        ["Battery Engineer", "Designs cells, packs and BMS across chemistry (LFP/NMC/sodium) — battery is the highest-value EV segment."],
        ["Charging / Power Electronics Engineer", "Builds DC chargers, onboard chargers, and power electronics for fast-charge networks."],
        ["EV Validation / Calibration Engineer", "Tests and validates vehicles — safety, ARAI homologation and performance certification."]
      ],
      roles: [["EV Powertrain Engineer", 6, 17, 32], ["Battery Engineer", 7, 20, 38], ["Charging Systems Engineer", 6, 18, 34], ["EV Calibration Engineer", 6, 16, 30]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 31], [10, 40], [12, 55]],
      firms: [["Ather Energy", "Powertrain, battery & software EVs"], ["Ola Electric", "R&D across cells to drive-train"], ["Log9 Materials", "Battery tech & cell startups"], ["Altigreen", "Commercial EV powertrain"], ["ChargeZone", "DC fast-charging networks"], ["Motovolt / eBikeGo", "Light EV + fleet companies"]],
      events: [
        ["EV charging workshops", "SIAM/industry EV drives with hiring lanes."],
        ["Battery hackathons", "Cell/BMS design challenges by battery startups."],
        ["Auto Expo (EV pavilion)", "OEM-engineer hiring zones every cycle."]
      ]
    },
    "industrial-automation": {
      market: "Factory 4.0 is digitising every plant — PLC/DCS engineers, automation integrators and IIoT roles are in steady demand across process industries and robotics integrators.",
      scopes: [
        ["Automation Engineer (PLC/DCS)", "Programmes and commissions PLCs/DCS for process plants — the backbone of manufacturing careers."],
        ["Industrial IoT Engineer", "Connects machines and sensors, builds dashboards and MES/IIoT analytics for smart factories."],
        ["SCADA / HMI Engineer", "Designs operator interfaces and control architectures for plants and utilities."],
        ["Robotics Integration Engineer", "Deploys industrial robots and conveyor automation for automotive and FMCG lines."]
      ],
      roles: [["Automation (PLC/DCS) Engineer", 5, 14, 26], ["IIoT Engineer", 6, 16, 30], ["SCADA/HMI Engineer", 5, 15, 28], ["Robotics Integration", 7, 20, 38]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 48]],
      firms: [["Siemens / ABB / Schneider", "Industrial automation systems"], ["Bosch Rexroth", "Motion & factory automation"], ["Flutura", "Industrial AI & IIoT analytics"], ["MachineSense", "Predictive maintenance"], ["FMCG plants", "Plant automation engineers (tier-2)"], ["Zetwerk (supply)", "Manufacturing platform + QA automation"]],
      events: [
        ["Industrial automation expos", "Automation & robotics expositions with hiring lanes."],
        ["PLC/DCS certification drives", "SI partner hiring after certification camps."],
        ["Smart-factory webinars", "Company demo days feeding IIoT roles."]
      ]
    },
    "cad-cam": {
      market: "Product design and manufacturing roles across automotive, aerospace and consumer goods run on CAD/CAM — every OEM and design-services firm in India employs these engineers; digital-twin and GD&T skills pay more.",
      scopes: [
        ["Product / Mechanical Design Engineer", "Designs parts and assemblies in SolidWorks/CATIA/NX for automotive, aerospace and appliances."],
        ["CAD Automation / PLM Engineer", "Scripts design automation, BOM management and windchill/teamcenter integration — a growing niche."],
        ["Tool / Mold Design Engineer", "Designs dies and injection-mould tools for manufacturing — critical and steady."],
        ["Reverse-Engineering / GD&T Specialist", "Converts scans to CAD and owns tolerance stacks for quality-critical components."]
      ],
      roles: [["Mechanical Design Engineer", 4, 12, 22], ["CAD Automation Engineer", 5, 15, 28], ["Tool & Mold Designer", 4, 13, 24], ["GD&T / QC Engineer", 4, 11, 20]],
      graph: [[0, 4], [2, 8], [5, 14], [8, 21], [10, 27], [12, 36]],
      firms: [["Hinduja Tech / GHTC", "Automotive product design (CATIA team)"], ["Cyient DLM", "Electronic & mechanical design"], ["Tata Technologies", "Product engineering + PLM"], ["CADD Centre ecosystem", "Design-service SMEs"], ["Bull-Dog (tooling)", "Injection-mold & tooling projects"], ["Aerospace GCCs", "Aero structure design roles"]],
      events: [
        ["Auto/Aero CAD drives", "OEM design-cell campus drives (M&M, Tata Motors)."],
        ["CAD competitions", "Design challenge fests (SolidWorks/CATIA) with job pipelines."],
        ["GD&T workshops", "ASME-style certification camps with recruiter networks."]
      ]
    },
    "robotics-mech": {
      market: "Mechanical robotics talent is sought by warehouse-automation, drone and medical-device companies — mechanisms, manipulators and mobile-platform engineering are the core demand.",
      scopes: [
        ["Robotics Mechanical Designer", "Designs manipulators, grippers and mobile-robot bodies using CAD+FEA."],
        ["Mechanism Engineer", "Works on actuators, transmissions and compliant mechanisms for robot platforms."],
        ["Drone / UAV Platform Engineer", "Designs airframes, propellers and payload mounts for commercial drones."],
        ["FEA / Simulation Engineer", "Validates structures under load — a backbone role across robotics and aerospace."]
      ],
      roles: [["Robotics Designer", 6, 16, 30], ["Mechanism Engineer", 6, 18, 34], ["Drone Platform Engineer", 6, 17, 32], ["FEA Engineer", 6, 16, 30]],
      graph: [[0, 5], [2, 11], [5, 18], [8, 28], [10, 36], [12, 50]],
      firms: [["GreyOrange", "Robotics hardware + mechanisms"], ["Addverb", "AMR & manipulator design"], ["Sastra Robotics", "Inspection robot mechanisms"], ["ideaForge", "Drone airframe & payload teams"], ["Systemantics", "Industrial manipulators"], ["Blade/agri-drone startups", "UAV mechanical design"]],
      events: [
        ["Robocon / ABU", "Robotics fests showcasing mechanism skills to recruiters."],
        ["Drone-tech events", "Drone show demos with hardware hiring."],
        ["Medical-device camps", "Robotic-surgery device workshops (Perfint-tier)."]
      ]
    },
    "additive-manufacturing": {
      market: "3D printing is moving from prototyping to production — medical, aerospace, tooling and construction print adopters hire AM engineers; the niche is still small, so specialists command a premium.",
      scopes: [
        ["Additive Manufacturing Engineer", "Runs metal/plastic printers (SLS, FDM, DMLS), files and post-processing for production parts."],
        ["AM Design-for-Fabrication Engineer", "Designs parts optimised for printing — lightweighting, lattice and generative design."],
        ["AM Process / Materials Engineer", "Develops print parameters and material characterisation for new alloys and resins."],
        ["AM Applications Engineer", "Pre-sales + engineering — co-creates solutions with customers at printer/consumable companies."]
      ],
      roles: [["AM Engineer", 5, 15, 28], ["DfAM Engineer", 6, 17, 32], ["AM Materials Engineer", 7, 19, 36], ["Applications Engineer", 6, 17, 32]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 48]],
      firms: [["think3D", "Industrial 3D-printing bureau"], ["Imaginarium", "AM manufacturing & design services"], ["Divide By Zero", "Indian FDM printer maker"], ["Chizel", "AM parts & engineering for industry"], ["Medical implant AM labs", "Patient-specific device printing"], ["Xometry India", "Digital manufacturing platform"]],
      events: [
        ["AM Show India", "3D-printing expo with hiring lanes."],
        ["Printer-maker challenges", "Design-for-print competitions by OEMs."],
        ["Aerospace AM bootcamps", "Industry workshops on production AM."]
      ]
    },
    "thermal": {
      market: "Thermal engineers back EVs, electronics cooling, HVAC-R and process industries — with thermal-management startups for batteries and data centres hiring specialists.",
      scopes: [
        ["Thermal Design Engineer", "Designs heat-transfer systems — compressors, exchangers, HVAC — for OEMS and EPC."],
        ["EV & Battery Thermal Engineer", "Designs cooling plates and pack-thermal systems for batteries and power electronics."],
        ["Electronics Thermal (CFD) Engineer", "Uses CFD (Fluent/Star-CCM+) for chip, server and data-centre cooling — very in demand."],
        ["HVAC / Refrigeration Engineer", "Designs and commissions HVAC-R systems for buildings, cold chains and process plants."]
      ],
      roles: [["Thermal Design Engineer", 5, 14, 26], ["Battery Thermal Engineer", 7, 20, 38], ["CFD Thermal Engineer", 7, 20, 38], ["HVAC Engineer", 5, 14, 26]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 46]],
      firms: [["Ather / Ola", "Battery & pack thermal teams"], ["Voltas / Blue Star", "HVAC-R product roles"], ["Data-centre operators", "Cooling & CFD thermal teams"], ["Mercedes-Research India", "Powertrain thermal"], ["CFD consultancies", "Thermal/FEA simulation services"], ["Cold-chain startups", "Refrigeration & van cooling"]],
      events: [
        ["ASI / ISHRAE events", "HVAC-R society meets with industry hiring."],
        ["Battery thermal summits", "EV battery conferences with talent roadshows."],
        ["CFD training + placement drives", "Simulation training camps tied to hiring."]
      ]
    },
    "automotive": {
      market: "Indian auto is electrifying and digitalising — OEMs and suppliers hire for EV integration, autonomous software, NVH and connected-vehicle roles; tier-1 suppliers and GCCs add large volumes.",
      scopes: [
        ["Vehicle Integration Engineer", "Owns full-vehicle packaging, performance and integration for global and Indian OEMs."],
        ["EV Systems Engineer", "Integrates battery, motor and software systems into electric vehicles."],
        ["Autonomous / ADAS Engineer", "Works on sensors, fusion and control for assisted and autonomous driving (ADAS)."],
        ["NVH & Durability Engineer", "Validates noise, vibration and durability for passenger vehicles."]
      ],
      roles: [["Vehicle Integration Engineer", 6, 16, 30], ["EV Systems Engineer", 7, 20, 38], ["ADAS Engineer", 8, 24, 46], ["NVH Engineer", 6, 17, 32]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 31], [10, 40], [12, 56]],
      firms: [["Mahindra & Mahindra", "EV & SUV engineering teams"], ["Tata Motors", "EV platforms & integration"], ["Ather/Ola", "EV vehicle engineering"], ["Bosch India", "Chassis, ADAS & EV subsystems"], ["Tier-1 (Bharat Forge tier)", "Chassis & drivetrain suppliers"], ["Onkar/Motwani tier suppliers", "Component & aggregate engineering"]],
      events: [
        ["Auto Expo engineer zone", "OEM engineering hiring pavilions."],
        ["SAE India challenges", "BAJA/SUPRA college racing circuits with recruiter pipeline."],
        ["EV hackathons", "OEM/AI connecting-vehicle hackathons."]
      ]
    },
    "bim-structural": {
      market: "BIM is now mandated on major Indian infrastructure and metro projects — structural modellers, BIM coordinators and digital-construction roles are hired well above traditional drawings and site roles.",
      scopes: [
        ["Structural Analysis Engineer", "Designs RCC/steel structures in ETABS/SAP2000/STAAD for buildings, bridges and factories."],
        ["BIM Modeller / Coordinator", "Builds and manages 3D BIM models (Revit/Tekla) — collision-free coordination across trades."],
        ["BIM Manager", "Owns the digital-twin/4D/5D workflow of a project — the highest-compensated digital-construction role."],
        ["Detailer / Steel Modeller", "Produces shop drawings and steel detailing in Tekla for fabrication-heavy projects."]
      ],
      roles: [["Structural Engineer", 5, 15, 28], ["BIM Modeller", 4, 12, 22], ["BIM Coordinator", 6, 18, 34], ["BIM Manager", 9, 25, 45]],
      graph: [[0, 4], [2, 9], [5, 15], [8, 24], [10, 32], [12, 44]],
      firms: [["BIMLABS Global", "BIM & digital construction services"], ["AECOM / L&T Construction", "BIM on metros & airports"], ["Econstruct Design & Build", "Structurally-led design+build"], ["RND Softech", "Structural consulting"], ["iSPIRAL / Xelpmoc", "Digital-twins for infrastructure"], ["BlueWeave (design)", "Structural design SMEs"]],
      events: [
        ["AEC India expos", "BIM & digital-construction expositions with hiring booths."],
        ["Metro-project drives", "Delhi/Mumbai metro hiring for BIM engineers."],
        ["Autodesk community camps", "Revit/BIM certification drives with recruiter ties."]
      ]
    },
    "smart-cities": {
      market: "India's smart-city mission and metro/transit builds are hiring urban-tech engineers — IoT, GIS, mobility and urban-fintech roles pair civil knowledge with digital skills.",
      scopes: [
        ["Urban Designer / Planner", "Works on master plans, transit-oriented development and place-making for metros and new townships."],
        ["Smart-City IoT Engineer", "Builds city-scale IoT — surveillance, smart lights, parking and command-centre integrations."],
        ["GIS / Spatial Analyst", "Analyses cities with GIS and remote sensing for planning, utilities and mapping companies."],
        ["Transit & Mobility Engineer", "Designs metro, BRT and multimodal integration — massive Indian build pipeline."]
      ],
      roles: [["Urban Planner", 5, 14, 26], ["Smart-City IoT Engineer", 6, 16, 30], ["GIS Analyst", 5, 13, 24], ["Transit Engineer", 6, 17, 32]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 24], [10, 31], [12, 42]],
      firms: [["SARCCOMS (SCADA+IoT)", "City-tier IT & IoT systems"], ["AECOM / Atkins", "Urban & transit planning"], ["Gensler-tier design", "Mixed-use & TOD design studios"], ["MapmyIndia", "GIS & mapping platforms"], ["City admin GCCs", "Smart-city special purpose vehicles"], ["Mobility startups", "Micro-mobility & transit-as-a-service"]],
      events: [
        ["Smart Cities events", "India Smart Cities Forums with hiring lanes."],
        ["Metro project recruitment", "Massive transit-project engineering drives (NCR/BP)."],
        ["GIS-society camps", "ISG & Esri-India user conferences."]
      ]
    },
    "construction-mgmt": {
      market: "Construction-tech is booming — project-management SaaS, cost-control platforms and top-tier PMCs hire construction managers and planners; India's infra capex keeps this a steady, high-volume sector.",
      scopes: [
        ["Project / Site Engineer", "Manages execution, quality and safety on large residential and commercial builds."],
        ["Construction Planner (Primavera)", "Builds schedules, resource plans and delay analyses — the indispensable PMP-side role."],
        ["Quantity Surveyor", "Owns BOQ, costing, contracts and claims across EPC and PMC firms."],
        ["Construction-Tech Product Roles", "SaaS (project/resource management) product and client-facing roles at Powerplay-style startups."]
      ],
      roles: [["Project Engineer", 5, 14, 26], ["Planning Engineer (Primavera)", 6, 17, 32], ["Quantity Surveyor", 5, 15, 28], ["Construction-Tech (SaaS)", 6, 18, 34]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 25], [10, 32], [12, 44]],
      firms: [["Powerplay", "Construction site-management SaaS"], ["BuildSupply", "ERP for construction"], ["L&T / Shapoorji", "PMC & mega-project execution"], ["Turner / JLL PMC", "International PMC teams in India"], ["AECOM India", "Programme management"], ["NxtHome", "Tech-enabled home construction"]],
      events: [
        ["Construction-tech demos", "SaaS startups' networking + hiring meetups."],
        ["PMC campus drives", "L&T/JLL/Turner campus recruitment every cycle."],
        ["Primavera/MS Project camps", "Certification + placement tie-ups."]
      ]
    },
    "environmental": {
      market: "Climate-tech and ESG compliance are creating roles in environmental engineering — parameter monitoring, waste-water tech and climate analytics startups hire beyond traditional government departments.",
      scopes: [
        ["Environmental Engineer", "Designs water/waste-water treatment and pollution-control systems for industry and municipalities."],
        ["ESG / Sustainability Analyst", "Measures and reports carbon and ESG metrics for corporates — a high-growth office role."],
        ["Climate-Tech Product Engineer", "Works on air-quality, water and carbon-tracking products at climate startups."],
        ["Environmental Compliance / CEO", "Owns consent-to-operate, audits and clearances for factories and waste plants."]
      ],
      roles: [["Environmental Engineer", 5, 13, 24], ["ESG Analyst", 6, 16, 30], ["Climate-Tech Engineer", 6, 17, 32], ["Compliance Officer", 6, 15, 28]],
      graph: [[0, 5], [2, 9], [5, 15], [8, 23], [10, 30], [12, 40]],
      firms: [["Chakr Innovation", "Pollution-control tech"], ["Carbon Masters", "Carbon accounting & offsets"], ["Anaqua N/Patagonia tier", "Air/water quality startups"], ["CPCB/state boards", "Compliance & monitoring roles"], ["ESG consultancies", "Sustainability reporting teams"], ["Water-tech startups", "Waste-water & RWH products"]],
      events: [
        ["Climate-tech hackathons", "Carbon/water challenges feeding startup hires."],
        ["ESG reporting workshops", "GRI/BRSR trainings with recruiter networks."],
        ["World Environment Day programs", "Govt + NGO hiring and fellowship drives."]
      ]
    },
    "software-dev": {
      market: "Software engineering is India's largest white-collar employer — SaaS, fintech, GCCs and startups hire thousands of developers yearly; breadth in a stack plus cloud/DSA basics opens the most doors.",
      scopes: [
        ["Software Engineer (Backend)", "Builds services, APIs and databases in Java, Python or Go for product and enterprise firms."],
        ["Software Engineer (Frontend)", "Ships UIs in React/Next for consumer and SaaS products."],
        ["Systems / Platform Engineer", "Works on compilers, databases, middleware and infra tooling at tech-heavy GCCs."],
        ["QA / Test Automation Engineer", "Builds automated test suites and quality gates — steady, high-volume demand."]
      ],
      roles: [["Software Engineer", 6, 22, 40], ["Backend Engineer", 7, 24, 45], ["Systems Engineer", 8, 26, 50], ["QA Automation Engineer", 5, 16, 30]],
      graph: [[0, 5], [2, 12], [5, 22], [8, 34], [10, 44], [12, 60]],
      firms: [["Razorpay", "Backend & platform engineers"], ["Zoho", "Product development teams"], ["Freshworks", "SaaS product dev"], ["Goldman Sachs GCC", "Low-latency + platform roles"], ["Postman", "API-tooling engineers"], ["Harness/DevEX startups", "Developer-tooling roles"]],
      events: [
        ["Flipkart GRiD / HackerEarth challenges", "Companies sponsor coding challenges that convert to interviews."],
        ["GCC campus drives", "Goldman, Wells Fargo, etc. run big engineering hiring drives."],
        ["TCS/Infosys/Wipro drives", "Mass off-campus IT hiring for software engineers."]
      ]
    },
    "web-tech": {
      market: "Web engineering remains the entry funnel into tech — agencies, SaaS and D2C brands hire frontend engineers and full-stack builders; web-performance and headless-commerce skills pay a premium.",
      scopes: [
        ["Web Developer (Frontend)", "Builds responsive, accessible sites and web apps — the classic first job in tech."],
        ["Full-Stack Web Engineer", "Develops complete web products — frontend + backend + DB for startups and brands."],
        ["Web Performance / SEO Engineer", "Optimises speed, Core-Web-Vitals and search visibility for high-traffic e-commerce."],
        ["Web3 / Headless-Commerce Developer", "Builds storefronts and commerce experiences atop headless backends."]
      ],
      roles: [["Web Developer", 5, 16, 28], ["Full-Stack Engineer", 6, 21, 38], ["Web Performance Engineer", 6, 18, 34], ["Headless-Commerce Dev", 6, 20, 36]],
      graph: [[0, 4], [2, 10], [5, 18], [8, 28], [10, 36], [12, 50]],
      firms: [["BrowserStack", "Web tools & testing"], ["Zomato / Swiggy", "High-traffic web frontends"], ["Meesho", "Shop & campaign web engineering"], ["Headless agencies", "Shopify/Nuxt storefront builders"], ["Product SaaS (Chargebee tier)", "Web app product teams"], ["D2C brands (BoAt tier)", "Performance web engineers"]],
      events: [
        ["Hackathons (HackX tier)", "Frontend/web build challenges with hiring."],
        ["JS/Web conferences", "IndiaJS-style meets with sponsor job boards."],
        ["Agency placement drives", "Web-agency internships converting to roles."]
      ]
    },
    "database-mgmt": {
      market: "Every product firm runs on databases — data-engineering, warehousing and BI roles are high-volume; cloud data platforms (Snowflake, Databricks, BigQuery) now dominate hiring.",
      scopes: [
        ["Database Administrator (DBA)", "Operates and tunes MySQL/PostgreSQL/Oracle estates for enterprises and SaaS."],
        ["Data Engineer", "Builds pipelines and warehouses (Airflow, Spark, Snowflake) — the core data-infrastructure role."],
        ["Business Intelligence Developer", "Builds dashboards and semantic layers in Power BI/Tableau over warehouse models."],
        ["Data-Quality / Governance Analyst", "Owns data contracts, quality and governance for regulated industries."]
      ],
      roles: [["DBA", 5, 15, 28], ["Data Engineer", 7, 24, 46], ["BI Developer", 6, 18, 34], ["Data Governance Analyst", 6, 17, 32]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 31], [10, 40], [12, 55]],
      firms: [["Hevo Data", "Data-pipeline platforms"], ["RudderStack", "Customer-data platforms"], ["Druva", "Cloud data protection"], ["Datacult/Tectonic tier", "Warehouse consultancies"], ["CRED/PhonePe", "Analytics engineering teams"], ["Snowflake partners (India)", "Warehouse implementation"]],
      events: [
        ["Data-engineering bootcamps", "Warehouse+Airflow camps with hiring lanes."],
        ["BI challenge fests", "PowerBI/Tableau competitions with recruiter ties."],
        ["GCC data drives", "Banking GCCs hire DB/data engineers through lateral drives."]
      ]
    },
    "network-admin": {
      market: "Network administration is stable but evolving — SD-WAN, cloud networking and security-plus-network roles are the growth area; MSPs and GCCs remain the main employers.",
      scopes: [
        ["Network Administrator", "Configure, operate and troubleshoot routers, switches and firewalls for enterprises and colleges."],
        ["Network Engineer (SD-WAN/Cloud)", "Implements SD-WAN and cloud networking (VPCs, VPNs, load balancers) — the modern ask."],
        ["Network Security Engineer", "Owns firewalls, IDS/IPS and zero-trust across enterprise networks."],
        ["NOC / Infrastructure Analyst", "Monitors infrastructure 24/7 and responds to incidents for service providers."]
      ],
      roles: [["Network Administrator", 4, 12, 22], ["Network Engineer (SD-WAN)", 6, 17, 32], ["Network Security Engineer", 7, 20, 36], ["NOC Analyst", 4, 11, 20]],
      graph: [[0, 4], [2, 9], [5, 15], [8, 24], [10, 31], [12, 42]],
      firms: [["ManageEngine", "Network management software roles"], ["CloudSEK/AppViewX", "Network security platforms"], ["MSPs (networking)", "Managed network services"], ["Jio/Airtel", "Telecom network engineering"], ["GCC network teams", "Banking & tech GCC network ops"], ["Colocloud", "Data-centre network ops"]],
      events: [
        ["CCNA/CCNP camps", "Certification + placement tie-ups with MSPs."],
        ["Network hackathons", "Network-automation challenges (Ansible/Netbox)."],
        ["Data-centre walk-in drives", "NOC roles via direct walk-in drives."]
      ]
    },
    "business-analytics": {
      market: "Analytics is the default career for business graduates across BFSI, consulting, e-commerce and startups — analytics firms and in-house teams hire analysts year-round; SQL + Excel + storytelling are the entry currency.",
      scopes: [
        ["Business / Data Analyst", "Turn questions into insights with SQL, Excel and dashboards for product and ops teams."],
        ["Analytics Consultant", "Delivers analytics projects to clients at Tiger/Fractal-style firms."],
        ["Product Analyst", "Owns product metrics, experimentation and funnels for consumer apps."],
        ["Risk / Credit Analyst", "Scores and monitors credit risk at fintechs and banks — a data-heavy finance role."]
      ],
      roles: [["Business Analyst", 5, 14, 26], ["Analytics Consultant", 7, 20, 38], ["Product Analyst", 7, 20, 38], ["Risk/Credit Analyst", 6, 16, 30]],
      graph: [[0, 5], [2, 11], [5, 18], [8, 28], [10, 36], [12, 50]],
      firms: [["Tiger Analytics", "Analytics consulting for retail/CPG"], ["Fractal", "Decision-science & AI analytics"], ["Absolutdata", "Marketing/analytics services"], ["LatentView", "Analytics for consumer brands"], ["CRED/PhonePe", "Product analytics teams"], ["BFSI GCC analytics", "Risk & CX analytics"]],
      events: [
        ["Analytics expos (GAINS tier)", "Analytics summits with job fairs."],
        ["Case competitions", "B-school case fests feeding analyst pipelines."],
        ["Company analyst bootcamps", "Internal data-skills bootcamps to hire fresh analysts."]
      ]
    },
    "digital-marketing": {
      market: "Digital marketing spend keeps climbing — performance marketing, content and CRM roles are hired widely across D2C, SaaS, agencies and platforms; measurable-skills talents negotiate better packages.",
      scopes: [
        ["Performance Marketer", "Runs paid search/social with measurable ROI — the highest-paid early marketing role."],
        ["SEO / Content Marketer", "Grows organic traffic and leads through search and content engines."],
        ["Growth / Lifecycle Marketer", "Owns funnels, email/SMS lifecycles and retention for consumer apps."],
        ["Social Media / Brand Manager", "Runs social voice, campaigns and community for brands and startups."]
      ],
      roles: [["Performance Marketer", 5, 15, 28], ["SEO/Content Marketer", 4, 11, 20], ["Growth Marketer", 6, 18, 34], ["Social/Community Manager", 4, 10, 18]],
      graph: [[0, 4], [2, 9], [5, 16], [8, 24], [10, 32], [12, 44]],
      firms: [["WebEngage", "Lifecycle marketing SaaS"], ["MoEngage", "Growth platforms & agencies"], ["CleverTap", "Mar-tech product roles"], ["Offbeat/Socialize agencies", "Organic & performance agencies"], ["D2C brands (Bombay Shaving tier)", "Performance marketing teams"], ["Delhivery/Growth-tier startups", "Acquisition marketers"]],
      events: [
        ["Digi-conferences", "Digital-marketing summits with vendor hiring."],
        ["Agency pitch fests", "Agencies scout through student pitch contests."],
        ["Google/Meta certification drives", "Certification weeks with partner hiring."]
      ]
    },
    "fintech": {
      market: "Indian fintech is the most funded startup vertical — payments, lending, wealth and neo-banking hire across product, sales, risk and ops; domain awareness plus data-skills commands a premium.",
      scopes: [
        ["Fintech Product Manager", "Owns lending, payments or wealth products at startups and banks."],
        ["Fintech Operations", "Runs KYC, onboarding, settlement and customer ops across payment and lending platforms."],
        ["Credit & Risk Analyst", "Builds credit policy, scoring and collections frameworks — the analytical backbone of lending."],
        ["Fintech Sales / Partnerships", "Onboards merchants, banks and NBFC relationships — a well-paid go-to-market role."]
      ],
      roles: [["Fintech Product Manager", 9, 26, 50], ["Fintech Operations Manager", 6, 16, 30], ["Credit Analyst", 6, 17, 32], ["Partnerships Manager", 7, 20, 38]],
      graph: [[0, 6], [2, 13], [5, 22], [8, 34], [10, 44], [12, 62]],
      firms: [["Razorpay", "Payments product & merchant roles"], ["CRED", "Premium fintech product teams"], ["Zerodha", "Broking + fintech careers"], ["Pine Labs", "Payment & card products"], ["Jar / Wint", "Wealth & alt-investment startups"], ["Lending NBFCs (Finfree tier)", "Credit & risk roles"]],
      events: [
        ["Fintech Week", "RBI/industry fintech expos with hiring booths."],
        ["Case challenges", "JPMC/sakura-style fintech case fests feeding analyst roles."],
        ["NBFC campus drives", "SME and consumer lending hiring drives."]
      ]
    },
    "entrepreneurship": {
      market: "Entrepreneurship skills are hired as operator and founder-track roles — startups and ecosystems value builders, general managers and early operators; accelerators and MNC new-venture teams are the formal entry points.",
      scopes: [
        ["Founder / Co-Founder (operator)", "Ships an MVP and runs a venture — the core entrepreneurship path."],
        ["Startup Early Operator", "Generalist roles — growth, ops, partnerships — at seed/Series-A startups."],
        ["Venture / Accelerator Associate", "Supports deal flow, portfolio ops and programs at VCs and accelerators."],
        ["Intrapreneur / New-Venture Manager", "Runs new business units inside corporates and MNC innovation arms."]
      ],
      roles: [["Startup Operator", 5, 15, 30], ["Accelerator / VC Associate", 6, 18, 34], ["New-Venture Manager", 8, 22, 42], ["Founder (equity-heavy)", "—", "—", "—"]],
      graph: [[0, 4], [2, 9], [5, 16], [8, 25], [10, 34], [12, 48]],
      firms: [["Accelerators (YCombinator-tier)", "Startup programs + portfolio hiring"], ["Blume / Peak XV tier funds", "VC associates + portfolio ops"], ["Incubators (IIT/NASSCOM)", "Incubator program roles"], ["Early-stage startups", "Operator & growth roles"], ["Corporate innovation teams", "M&A + venture-build roles"], ["B2B SaaS founders", "Founder-track builder roles"]],
      events: [
        ["YC-startup school / demo days", "Founder events with hiring + fundraising."],
        ["SAASBOOMY cloud summits", "SaaS founder events with team hiring."],
        ["Incubator bootcamps", "NASSCOM/state incubator cohorts feeding operators."]
      ]
    },
    "strategic-mgmt": {
      market: "Strategy roles sit atop consulting, corporate and startup pyramids — McKinsey/BCG/Bain and Big-4 strategy arms hire analysts and associates; corporate strategy teams at large firms and GCCs add volume.",
      scopes: [
        ["Strategy / Management Consultant", "Solves growth, ops and M&A problems for clients at MBB and Big-4 strategy arms."],
        ["Corporate Strategy (in-house)", "Runs strategy, market intelligence and expansion for large firms and startups."],
        ["Business Analyst (Consulting)", "Supports consulting teams with analysis, decks and competitive benchmarks."],
        ["Chief-of-Staff / Ops Lead", "Runs special projects and exec priorities at scale-ups — a fast-track generalist role."]
      ],
      roles: [["Strategy Consultant", 9, 25, 55], ["Corporate Strategy Manager", 8, 22, 45], ["Business Analyst (Consulting)", 7, 18, 34], ["Chief-of-Staff / Ops", 9, 26, 52]],
      graph: [[0, 7], [2, 14], [5, 25], [8, 40], [10, 52], [12, 70]],
      firms: [["McKinsey / BCG / Bain", "Analyst & associate cohorts"], ["EY/Parthenon", "Strategy consulting arms"], ["Meesho / Swiggy", "Corporate strategy teams"], ["CRED / Flipkart", "Strategy & ops roles"], ["Deloitte India", "Strategy & analytics"], ["Family-office strategy teams", "Investment & portfolio strategy"]],
      events: [
        ["Case competitions (MBB)", "Consulting case fests that feed shortlists."],
        ["MBB application cycles", "Analyst application cycles via campus and off-campus portals."],
        ["Startup strategy tracks", "Ops-generalist hiring drives at scale-ups."]
      ]
    },
    "ai-business": {
      market: "Every company now runs an AI roadmap — GenAI strategy, automation and data-driven decisioning create hybrid 'AI x Business' roles that MBA/BBA grads can own with AI skills.",
      scopes: [
        ["AI Product Manager", "Owns AI/GenAI features and products — the fastest-rising PM specialisation."],
        ["Business AI Strategist", "Designs AI roadmaps, use-case portfolios and change programs for enterprises."],
        ["AI Operations / Automation Lead", "Rolls out agentic workflows and process automation across functions."],
        ["AI Data Analyst / Decision Scientist", "Uses GenAI + analytics to drive decisions in marketing, supply chain and finance."]
      ],
      roles: [["AI Product Manager", 11, 30, 58], ["AI Strategist", 9, 24, 48], ["Automation Lead", 8, 20, 38], ["Decision Scientist", 7, 19, 36]],
      graph: [[0, 8], [2, 15], [5, 26], [8, 40], [10, 52], [12, 70]],
      firms: [["Fractal (AI-first)", "GenAI strategy & AI consulting"], ["Murai / Sarvam", "Enterprise AI teams"], ["GCC AI centers", "Bank & tech GCC AI PM roles"], ["SaaS AI product teams", "AI copilot product owners"], ["E-commerce AI teams", "Search/recommend product roles"], ["Consulting AI practices", "AI transformation consultants"]],
      events: [
        ["GenAI for Business bootcamps", "AI-upskilling programs tied to hiring."],
        ["AI summit hiring zones", "NHRD/IIT AI events with job fairs."],
        ["Company AI challenges", "Enterprise AI-in-business case fests."]
      ]
    },
    "product-mgmt": {
      market: "Product management is India's most coveted business career — consumer and SaaS product companies hire APMs and PMs continuously; analytics + UX + strategy craft is the entry bar.",
      scopes: [
        ["Associate Product Manager (APM)", "Learns the craft under a PM — a structured entry funnel at top tech firms."],
        ["Product Manager", "Owns a product area — roadmap, metrics and delivery for B2B SaaS and B2C apps."],
        ["Product Operations / Analyst", "Runs research, dashboards and release ops in support of PM teams."],
        ["Growth / Experimentation PM", "Owns acquisition, activation and retention experiments for consumer products."]
      ],
      roles: [["Associate PM", 10, 26, 45], ["Product Manager", 12, 32, 60], ["Product Ops Analyst", 7, 18, 32], ["Growth PM", 12, 30, 58]],
      graph: [[0, 8], [2, 15], [5, 26], [8, 42], [10, 54], [12, 72]],
      firms: [["CRED", "Consumer product roles"], ["Swiggy", "APM & product programs"], ["Freshworks", "B2B SaaS product teams"], ["Flipkart", "Category & platform PM"], ["Chargebee / Zoho", "SaaS product roles"], ["Zerodha/PhonePe", "Fintech product teams"]],
      events: [
        ["Cred Swags (case fests)", "Consumer-tech case competitions feeding PM shortlists."],
        ["Product schools", "APM training programs with hiring pipelines."],
        ["SaaS Summit", "B2B product track + sponsor hiring."]
      ]
    },
    "operations": {
      market: "Supply-chain, e-logistics and process-engineering spring up hiring — operations roles span every large business from e-commerce to factories; new-age supply-chain startups recruit aggressively for Ops Analysts.",
      scopes: [
        ["Operations Analyst", "Central role — analyses and improves processes in e-commerce, logistics or BFSI fulfillment."],
        ["Supply-Chain Planner", "Owns inventory, forecasting and fulfillment at retailers and D2C brands."],
        ["Category / Merchant Ops", "Manages catalog, pricing and seller operations at marketplaces."],
        ["Business Operations Manager", "Runs a business vertical end-to-end — P&L, SOPs and execution at scale-ups."]
      ],
      roles: [["Operations Analyst", 6, 15, 28], ["Supply-Chain Planner", 6, 16, 30], ["Category Ops", 6, 15, 28], ["Business Ops Manager", 9, 24, 45]],
      graph: [[0, 5], [2, 11], [5, 17], [8, 26], [10, 34], [12, 48]],
      firms: [["Flipkart/Amazon", "Fulfilment & category operations"], ["Zetwerk", "Manufacturing operations"], ["Delhivery", "Logistics & network ops"], ["BlackBuck / Rivigo", "Trucking & supply-chain tech"], ["Blinkit/Instamart", "Dark-store & last-mile ops"], ["D2C brands", "Inventory & demand planning"]],
      events: [
        ["Supply-chain conferences", "Logistics & SCM summits with hiring booths."],
        ["Amazon/Flipkart drives", "Category & fulfillment hiring cycles."],
        ["Case competitions", "Retail ops case fests feeding analyst roles."]
      ]
    },
    "finance-investment": {
      market: "Finance and investment roles span markets, corporate finance and asset management — wealth-tech, AMCs and BFSI hire finance-MBA grads steadily; Excel + modelling + CFA progress differentiate packages.",
      scopes: [
        ["Investment Analyst (AMC/HF)", "Researches companies and markets for fund managers at AMCs hedge funds and family offices."],
        ["Corporate Finance Analyst", "Owns budgeting, FP&A, M&A and fundraising at large firms and startups."],
        ["Private Banking / Wealth Manager", "Advises HNIs on portfolios and alternatives — strong asset-gathering demand."],
        ["Treasury Operations", "Runs cash, funding and FX management for banks and corporates."]
      ],
      roles: [["Investment Analyst", 8, 22, 45], ["Corporate Finance Analyst", 8, 22, 42], ["Wealth Manager", 7, 18, 36], ["Treasury Analyst", 7, 18, 34]],
      graph: [[0, 7], [2, 14], [5, 23], [8, 36], [10, 46], [12, 64]],
      firms: [["Zerodha Fund House", "Asset & research roles"], ["Groww/WealthDesk", "Wealth product roles"], ["AMCs (HDFC/Mirae tier)", "Investment research"], ["1 Finance", "Relationship & advisory"], ["Family offices", "Portfolio & deal teams"], ["BFSI GCCs", "Corporate finance & treasury"]],
      events: [
        ["CFA/ICFAI finance events", "Investing conferences with job boards."],
        ["AMC campus drives", "Asset-management campuses hire analysts yearly."],
        ["Wealth-tech summits", "WealthTech fests with talent roadshows."]
      ]
    },
    "ui-ux": {
      market: "UX hiring is strong in SaaS, fintech and consumer apps — product design is a top role for creatives who code; portfolios and problem-solving beat degrees in this field.",
      scopes: [
        ["Product Designer (UI/UX)", "Owns end-to-end flows, wireframes and design systems for SaaS and consumer products."],
        ["UX Researcher", "Runs user studies and usability tests to ground product decisions — a growing premium role."],
        ["UI Designer", "Specialises in high-fidelity visual design — components, tokens and design libraries."],
        ["Design Systems Engineer", "Builds coded design systems (React + design tokens) matching dev tooling."]
      ],
      roles: [["Product Designer", 6, 18, 34], ["UX Researcher", 7, 19, 36], ["UI Designer", 5, 15, 28], ["Design Ops / Systems", 8, 22, 40]],
      graph: [[0, 5], [2, 11], [5, 18], [8, 28], [10, 36], [12, 50]],
      firms: [["Freshworks", "SaaS product design"], ["CRED", "Premium consumer design"], ["PhonePe", "Fintech UX & design systems"], ["Zepto", "Consumer app design"], ["Design consultancies", "UX studios & agencies"], ["SaaS scale-ups", "Senior product design roles"]],
      events: [
        ["UX/design conferences", "India UX summits with portfolio review + hiring."],
        ["Design challenges", "Product-design sprints (Dribbble/hackathons)."],
        ["Startup design reviews", "Community portfolio-review sessions feeding hires."]
      ]
    },
    "graphic-design": {
      market: "Graphic design remains the creative-industry default — branding studios, D2C brands and agencies hire designers; motion and 3D skills make portfolios stand out.",
      scopes: [
        ["Brand / Visual Designer", "Owns identity, packaging and brand campaigns for D2C and agency clients."],
        ["Graphic Designer (Creative/Studio)", "Produces campaigns, key-visuals and social creatives at agencies."],
        ["Packaging Designer", "Designs retail-ready packaging — premium niche for FMCG and e-commerce."],
        ["Illustrator / Visual Artist", "Creates illustrations and art direction for books, games and brands."]
      ],
      roles: [["Brand Designer", 5, 14, 26], ["Graphic Designer", 4, 11, 20], ["Packaging Designer", 5, 14, 26], ["Illustrator", 4, 12, 22]],
      graph: [[0, 4], [2, 9], [5, 14], [8, 22], [10, 28], [12, 38]],
      firms: [["Design studios (Labbrand tier)", "Identity & branding studios"], ["D2C brands", "In-house brand designers"], ["Ad agencies", "Creative & design teams"], ["E-commerce platforms", "Visual & campaign studios"], ["Packaging co.s", "FMCG-ready packaging designers"], ["Gaming studios", "Concept & visual artists"]],
      events: [
        ["Creative fests", "Adobe/design festivals with portfolio hiring."],
        ["Behance/Dribbble dribbles", "Community shows feeding studio offers."],
        ["Agency trainee drives", "Agency junior-designer intakes."]
      ]
    },
    "motion-design": {
      market: "Motion design powers brand film, social video, product micro-interactions and broadcast — motion designers with 3D (Blender/C4D) and After Effects skills are consistently in demand at studios and D2C brands.",
      scopes: [
        ["Motion Designer", "Creates brand films, explainers and social motion for studios and brands."],
        ["Product Motion / Interaction Designer", "Designs micro-interactions and Lottie animations in apps — a tech-adjacent premium role."],
        ["3D / CGI Artist", "Builds 3D product visualisation and animation in Blender/C4D."],
        ["Video Editor / Post Artist", "Edits and composites campaign and social content at agencies and MCNs."]
      ],
      roles: [["Motion Designer", 5, 15, 28], ["Product Motion Designer", 7, 19, 36], ["3D/CGI Artist", 5, 15, 28], ["Video Editor", 4, 11, 20]],
      graph: [[0, 4], [2, 9], [5, 15], [8, 23], [10, 30], [12, 40]],
      firms: [["Motion studios", "Brand-film & explainer studios"], ["D2C brands", "In-house motion teams"], ["MCN/creator companies", "Short-form video motion"], ["Ad agencies", "Motion + 3D departments"], ["Tech product teams", "Lottie + interaction motion"], ["Gaming / broadcast", "CGI & broadcast graphics"]],
      events: [
        ["Motionfesto (studio events)", "Motion-design jams with recruiter viewing."],
        ["RigUp/AE challenges", "Animation challenges with studio offers."],
        ["Creator economy events", "MCN network hiring + briefings."]
      ]
    },
    "game-design": {
      market: "India's gaming market exploded (casual + mid-core) — game designers, level designers and monetisation roles grow with studios and publishing houses; portfolio pieces matter most.",
      scopes: [
        ["Game Designer", "Owns mechanics, levels and fun-loop design across mobile and PC games."],
        ["Level / Systems Designer", "Builds levels, economies and progression systems — core monetisation muscle."],
        ["Interactive / Gameplay Developer (no-code/junior)", "Prototypes gameplay in Unity/Unreal or no-code engines."],
        ["UI/UX for Games", "Designs game HUD, menus and storefronts — games-specialised UI roles."]
      ],
      roles: [["Game Designer", 5, 15, 28], ["Level Designer", 5, 14, 26], ["Game Systems Designer", 6, 17, 32], ["Game UI/UX", 5, 15, 28]],
      graph: [[0, 4], [2, 9], [5, 15], [8, 23], [10, 30], [12, 40]],
      firms: [["Gametion (Ludo King)", "Casual game studios"], ["Octro", "Real-money casual games"], ["Nazara / subsidiaries", "Game-publishing companies"], ["Dream Sports group", "Gaming + fantasy sports product"], ["Indie game studios", "Small-team shipped titles"], ["Xeno/plant-bot studios", "Hyper-casual mobile games"]],
      events: [
        ["Game jams (Global Game Jam)", "48-hour builds with studio scouting."],
        ["NUC/Pocket Gamer events", "Mobile-gaming summits with hiring lanes."],
        ["Studio portfolio reviews", "Indie-studio feedback sessions feeding jobs."]
      ]
    },
    "python-ds": {
      market: "Python is the entry key to data careers — analytics, ML, automation and backend roles all run on it; Python fluency plus libraries converts into high-volume analyst and junior-scientist roles.",
      scopes: [
        ["Data Analyst (Python)", "Analyses data with pandas and notebooks for business and product teams."],
        ["Python Developer (Data)", "Builds data tools, scripts, ETLs and APIs around Python libraries."],
        ["Junior ML Engineer", "Trains and evaluates models — regression, clustering, XGBoost — at analytics firms."],
        ["Automation / Scripting Engineer", "Automates workflows with Python across finance, ops and research teams."]
      ],
      roles: [["Data Analyst", 6, 15, 26], ["Python Developer", 7, 20, 36], ["Junior ML Engineer", 7, 20, 38], ["Automation Engineer", 6, 16, 28]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 30], [10, 38], [12, 52]],
      firms: [["Tiger Analytics", "Python + ML analysts"], ["Fractal", "Data & ML engineering"], ["Absolutdata", "Analytics engineers"], ["CRED/PhonePe", "Analytics + automation teams"], ["LatentView", "Data science for retail"], ["SaaS companies", "Python analytics tooling"]],
      events: [
        ["PyCon India", "Python conference with sponsor hiring."],
        ["Hackathons (Python)", "Data & automation buildathons."],
        ["Analytics bootcamps", "Python-for-data camps with placement pipelines."]
      ]
    },
    "statistical-analysis": {
      market: "Statistical rigour is the differentiator in data roles — experimentation, risk and pricing teams pay for statisticians; banks, insurance and tech run A/B and risk frameworks at scale.",
      scopes: [
        ["Statistician / Data Scientist (Stats)", "Runs hypothesis testing, experimental design and statistical modelling."],
        ["Experimentation / Growth Scientist", "Owns A/B testing frameworks for product and growth teams."],
        ["Risk / Actuarial Analyst", "Builds credit, pricing and insurance models — banks and insurers hire statistically-trained analysts."],
        ["Research Analyst (Quant studies)", "Designs surveys and studies for market research and policy firms."]
      ],
      roles: [["Statistician", 6, 17, 32], ["Experimentation Scientist", 9, 24, 46], ["Credit/Risk Analyst", 6, 16, 30], ["Market Research Analyst", 5, 13, 24]],
      graph: [[0, 6], [2, 12], [5, 19], [8, 28], [10, 36], [12, 50]],
      firms: [["BFSI GCCs", "Risk, credit & analytics"], ["Insurtech (PolicyBazaar tier)", "Pricing & claims analytics"], ["Consumer-tech (A/B desks)", "Experimentation scientists"], ["Market-research firms", "Survey & consumer insights"], ["Analytics consultancies", "Statistical modelling"], ["Pharma CROs", "Biostatistics roles"]],
      events: [
        ["Stats conferences", "Indian statistical congress hiring zones."],
        ["A/B-testing workshops", "Experimentation bootcamps tied to hiring."],
        ["Insurance/risk fests", "Actuarial & risk hiring events."]
      ]
    },
    "big-data": {
      market: "Big-data engineering skills (Spark, Kafka, warehousing, lakehouse) are the backbone of modern data teams — GCCs, fintechs and unicorns hire data engineers as their data volumes explode.",
      scopes: [
        ["Big Data Engineer", "Builds Spark/Scala/Python pipelines over very large datasets."],
        ["Streaming / Event-Driven Engineer", "Works Kafka/flink real-time pipelines for banking, fraud and apps."],
        ["Data Platform Engineer", "Operates lakehouses, warehouses and orchestration (Snowflake, Databricks, Airflow)."],
        ["Big Data Analyst / SQL Dev", "Tailored SQL and warehouse querying for massive datasets — high volume demand."]
      ],
      roles: [["Big Data Engineer", 8, 26, 50], ["Streaming Engineer", 9, 28, 54], ["Data Platform Engineer", 9, 30, 58], ["SQL/Analytics Dev", 6, 17, 32]],
      graph: [[0, 8], [2, 16], [5, 28], [8, 42], [10, 54], [12, 72]],
      firms: [["CRED/PhonePe", "Streaming + lakehouse teams"], ["Tredence", "Big data engineering"], ["Hevo Data", "Data-pipelines product"], ["Druva", "Cloud data platforms"], ["BFSI GCCs", "Risk data platforms"], ["Snowflake/Databricks partners", "Platform implementation roles"]],
      events: [
        ["Data-engineer challenges", "Spark/kafka buildathons with hiring."],
        ["Data+AI summits", "Lakehouse conferences with job fairs."],
        ["GCC data drives", "Bank GCC hiring drives for data engineers."]
      ]
    },
    "bi-visualization": {
      market: "Every decision-maker needs dashboards — BI development and analytics-viz roles are steady, high-volume across BFSI, retail and SaaS; Power BI + Tableau + SQL is the entry kit.",
      scopes: [
        ["BI Developer", "Builds dashboards and data models in Power BI/Tableau over warehouses."],
        ["Analytics / Reporting Analyst", "Provides MIS, KPI and revenue reporting to business teams."],
        ["Data Storyteller / Insights Lead", "Owns management dashboards and insight narratives."],
        ["Finance / Ops BI Analyst", "Uses BI in FP&A, ops and sales analytics functions."]
      ],
      roles: [["BI Developer", 6, 17, 32], ["Reporting Analyst", 5, 13, 24], ["Insights Analyst", 6, 16, 30], ["Finance BI Analyst", 7, 18, 34]],
      graph: [[0, 6], [2, 12], [5, 18], [8, 27], [10, 34], [12, 46]],
      firms: [["Analytics firms", "PowerBI/Tableau delivery"], ["BFSI GCCs", "MIS & reporting teams"], ["Retail/e-commerce", "Category reporting"], ["Gramener-tier", "Viz & storytelling consultancies"], ["SaaS product teams", "Analytics dashboards"], ["Zoho Analytics tier", "BI product roles"]],
      events: [
        ["BI-a-thons", "PowerBI/Tableau competitions with hiring."],
        ["Data-viz community events", "Viz fests feeding analyst pipelines."],
        ["GCC BI drives", "Banking GCC BI hiring cycles."]
      ]
    },
    "comp-bio": {
      market: "AI-meets-biology is one of the fastest-moving frontiers — bioinformatics analysts and computational biologists are hired by genomics firms, pharma R&D and health-data startups.",
      scopes: [
        ["Bioinformatics Analyst", "Analyses NGS and genomics data with Python/R pipelines for labs and companies."],
        ["Computational Biologist", "Models biological systems — protein, mutation and pathway analysis — for R&D teams."],
        ["Data Scientist (Life Sciences)", "Applies ML to clinical and genomic datasets at health-tech startups."],
        ["Clinical Data / Informatics Analyst", "Manages and analyses clinical-trial data for CROs and pharma."]
      ],
      roles: [["Bioinformatics Analyst", 6, 16, 30], ["Computational Biologist", 8, 24, 45], ["Life-Sciences Data Scientist", 8, 22, 42], ["Clinical Data Analyst", 6, 15, 28]],
      graph: [[0, 6], [2, 12], [5, 20], [8, 31], [10, 40], [12, 55]],
      firms: [["MedGenome", "Genomics & bioinformatics"], ["Strand Life Sciences", "Genomic data analytics"], ["Premas Life Sciences", "NGS bioinformatics"], ["Bugworks Research", "AI-for-drug-discovery"], ["Health-tech startups", "Clinical & genomic data ML"], ["Pharma GCCs (Novartis tier)", "Bioinformatics positions"]],
      events: [
        ["Bioinformatics workshops", "NGS data camps with hiring ties."],
        ["Bio-informatics hackathons", "Genomics-data challeanges by institutes."],
        ["Biotech job fairs", "Institute job expos with genomics hirers."]
      ]
    },
    "genetic-eng": {
      market: "Gene-editing (CRISPR) is entering clinical and agri applications — research associates in genetic engineering are hired by biotech startups, agrigenomics labs and pharma R&D.",
      scopes: [
        ["Research Associate (Molecular Bio)", "Runs CRISPR, cloning and cell-culture workflows in labs."],
        ["Agri-Biotech Scientist", "Develops improved seeds and traits for agri-tech and seed companies."],
        ["Genetic Diagnostics Associate", "Runs diagnostic and carrier-screening tests for clinical labs."],
        ["Regulatory / QA (Genetic)", "Owns GMO and clinical compliance in genetic-product companies."]
      ],
      roles: [["Research Associate", 5, 13, 24], ["Agri-Biotech Scientist", 6, 16, 30], ["Genetic Diagnostics Tech", 5, 13, 24], ["Regulatory Associate", 6, 15, 28]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 25], [10, 32], [12, 44]],
      firms: [["MedGenome Diagnostics", "Genetic testing labs"], ["Agri seed startups", "Trait & genomics teams"], ["Biotech startups (CRISPR)", "Gene-editing R&D"], ["CROs (Syngene tier)", "Molecular biology services"], ["Clinical labs (Metropolis tier)", "Genetic diagnostics"], ["NGS service providers", "Library prep & sequencing"]],
      events: [
        ["Genomics conferences (India)", "Precision-medicine & genomics summits."],
        ["CRISPR workshops", "Geneediting lab camps feeding RA roles."],
        ["Agri-tech fests", "Seed & trait innovation events."]
      ]
    },
    "pharma-biotech": {
      market: "Pharma manufacturing and R&D in India keep printing roles — formulation, quality, regulatory and bioprocess teams hire across large pharma and contract manufacturing; bioprocess is the growth niche.",
      scopes: [
        ["Formulation / Development Scientist", "Develops formulations and scale-up processes for pharma and CDMOs."],
        ["Quality Assurance / QC Analyst", "Owns QC testing and QA compliance in regulated pharma facilities."],
        ["Bioprocess Engineer", "Runs fermentation and downstream bio-manufacturing — fast-growing biosimilar segment."],
        ["Regulatory Affairs Associate", "Files dossiers and manages compliance with DCGI/USFDA/EU bodies."]
      ],
      roles: [["Formulation Scientist", 6, 16, 30], ["QC/QA Analyst", 5, 14, 26], ["Bioprocess Engineer", 7, 20, 38], ["Regulatory Associate", 7, 19, 36]],
      graph: [[0, 5], [2, 11], [5, 18], [8, 28], [10, 36], [12, 50]],
      firms: [["Syngene", "Contract R&D services"], ["Biocon", "Biosimilars & bioprocess"], ["Dr. Reddy's", "Formulation & R&D roles"], ["Lupin / Sun Pharma", "Manufacturing & quality"], ["Jubilant Bio", "CRAMS biologics"], ["CDMOs (Laurus tier)", "Formulation & bioprocess"]],
      events: [
        ["Pharma job expos", "Pharma & biotech job fairs."],
        ["Regulatory workshops", "DCGI/USFDA compliance sessions with placement ties."],
        ["Biosimilars conferences", "India biosimilars events hiring bio-process talent."]
      ]
    },
    "biomedical": {
      market: "Medical-device and healthtech companies are scaling in India — biomedical engineers find roles in device design, regulatory and field service; single-use device and diagnostics startups hire steadily.",
      scopes: [
        ["Medical Device Design Engineer", "Designs prosthetics, catheters and wearable devices — CAD + materials engineering."],
        ["Biomedical Equipment Engineer", "Installs, maintains and services hospital equipment — India's hospitals run huge equipment estates."],
        ["Clinical Engineering / Safety", "Owns device safety, calibration and vendor QA in large hospital chains."],
        ["Regulatory / Quality (Medical Devices)", "Files CDSCO/FDA submissions and runs ISO 13485 quality."]
      ],
      roles: [["Device Design Engineer", 6, 16, 30], ["Biomedical Equipment Engineer", 5, 13, 24], ["Clinical Engineer", 6, 15, 28], ["Device Regulatory/QA", 7, 18, 34]],
      graph: [[0, 5], [2, 10], [5, 16], [8, 25], [10, 32], [12, 44]],
      firms: [["Perfint Healthcare", "Surgical robotics & devices"], ["InnAccel", "Medical-device incubator"], ["Impulse Medical", "Hemodialysis devices"], ["Wipro GE Healthcare", "Imaging & M&E services"], ["Hospital chains", "Biomedical engineering departments"], ["Wearable healthtech", "Biomed electronics startups"]],
      events: [
        ["MEDICAL events (DeviceMed tier)", "Medical-device expos with hiring."],
        ["Device incubator cohorts", "InnAccel-style device cohorts."],
        ["Hospital M&E drives", "Biomedical engineering hiring at chains."]
      ]
    },
    "arch-design": {
      market: "Architecture firms and design studios hire design architects across residential, commercial and institutional projects; parametric design and AI-visualisation skills now command a premium.",
      scopes: [
        ["Architectural Designer", "Develops concept and detailed designs for residential, commercial and institutional projects."],
        ["Junior Architect (Design + Execution)", "Runs drawings, site coordination and authority approvals alongside seniors."],
        ["Parametric / Computational Designer", "Uses Grasshopper/Rhino and visualisation AI for complex geometry — a fast-growing niche."],
        ["Visualisation / 3D Artist (Arch)", "Produces photoreal renders and walkthroughs for studios and developers."]
      ],
      roles: [["Architectural Designer", 4, 12, 22], ["Junior Architect", 4, 11, 20], ["Parametric Designer", 6, 18, 34], ["3D Visualiser", 4, 12, 22]],
      graph: [[0, 4], [2, 8], [5, 14], [8, 21], [10, 27], [12, 36]],
      firms: [["Design studios (Abin-tier)", "Design-led architecture studios"], ["Developer teams", "In-house design for realty"], ["Interior + retail design", "Retail & hospitality design"], ["Visualisation firms", "Archviz studios"], ["Parametric consultancies", "Computational design studios"], ["Landscape studios", "Landscape architecture firms"]],
      events: [
        ["Archi-fests", "Architecture expos & student showcases."],
        ["Pedagogy juries", "Design-jury crits feeding studio shortlists."],
        ["Parametric workshops", "Rhino-Grasshopper camps with studio contacts."]
      ]
    },
    "bim-arch": {
      market: "Architectural BIM is mandatory on large projects — Revit modellers and BIM architects are hired by AEC firms, real-estate developers and international delivery centres.",
      scopes: [
        ["BIM Architect (Revit)", "Builds and manages intelligent 3D models for architecture teams."],
        ["BIM Coordinator (Multi-discipline)", "Coordinates architecture, structure and MEP models clash-free on complex builds."],
        ["Digital-Construction / 4D Specialist", "Links BIM to schedules and cost — a rising premium role."],
        ["Delivery-Centre Technologist", "Supports international AEC firms remotely from India."]
      ],
      roles: [["BIM Architect", 5, 14, 26], ["BIM Coordinator", 6, 18, 34], ["4D/5D Specialist", 8, 22, 40], ["Delivery Technologist", 5, 15, 28]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 46]],
      firms: [["AECOM / Atkins", "BIM delivery centres"], ["BIMLABS Global", "BIM & digital construction"], ["Real-estate developers", "In-house BIM architecture"], ["L&T metros", "Metro-project BIM roles"], ["International GCCs", "US/EU AEC delivery teams"], ["Tekla/Revit consultancies", "BIM services SMEs"]],
      events: [
        ["BIM India conferences", "Digital construction summits with hiring."],
        ["Autodesk community camps", "Revit certification + placement tie-ups."],
        ["Metro/airport BIM drives", "Mega-project BIM hiring phases."]
      ]
    },
    "sustainable-arch": {
      market: "Green-rated buildings (IGBC/LEED/GRIHA) and net-zero mandates are expanding — sustainability architects, energy modellers and green-building consultants are hired by AEC firms and developers.",
      scopes: [
        ["Sustainability Architect", "Integrates passive design, daylight and green strategies into projects."],
        ["Energy Modeller", "Runs energy simulations (IES, eQUEST, EnergyPlus) for ratings — a niche, in-demand skill."],
        ["Green-Building Consultant", "Leads IGBC/LEED/GRIHA certification across commercial projects."],
        ["Climate / Bioclimatic Designer", "Designs for climate resilience — heat, flooding and passive cooling."]
      ],
      roles: [["Sustainability Architect", 5, 15, 28], ["Energy Modeller", 6, 17, 32], ["Green-Building Consultant", 6, 17, 32], ["Climate Designer", 5, 14, 26]],
      graph: [[0, 5], [2, 10], [5, 17], [8, 26], [10, 34], [12, 46]],
      firms: [["Green-rating consultants", "IGBC/LEED advisory firms"], ["AEC sustainability teams", "In-house green teams"], ["Real-estate developers", "Performance-built projects"], ["TERI / research institutes", "Energy & climate research"], ["Climate-tech for buildings", "Energy audits & retrofit startups"], ["International AEC firms", "Sustainability specialists (India centres)"]],
      events: [
        ["IGBC Green Building Congress", "India's flagship green-building summit with hiring."],
        ["LEED study + placement groups", "Certified-professional drives."],
        ["Climate-design juries", "Net-zero studio crits feeding consultancy roles."]
      ]
    }  };

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

  function injectSpa() {
    var m = (window.location.pathname || "").match(/\/domains\/([^/]+)\/([^/]+)/);
    if (!m) return;
    var id = m[2];
    var d = DATA[id];
    if (!d) return;
    var style = document.querySelector("style[data-cs-style]");
    if (!style) {
      style = document.createElement("style");
      style.setAttribute("data-cs-style", "");
      style.textContent = STYLES;
      document.head.appendChild(style);
    }
    var obs = new (window.MutationObserver || window.WebKitMutationObserver)(function () {
      var probe = document.querySelector(".curriculum-module");
      if (!probe) return;
      var host = probe.closest('[class*="max-w-4xl"]') || probe.closest("main");
      if (!host) return;
      if (host.querySelector("[data-cs-injected]")) {
        obs.disconnect();
        return;
      }
      obs.disconnect();
      var block = document.createElement("div");
      block.setAttribute("data-cs-injected", "");
      block.innerHTML = render(d);
      var secs = host.querySelectorAll(":scope > .mb-12");
      var last = secs[secs.length - 1];
      if (last) last.insertAdjacentElement("afterend", block);
      else host.appendChild(block);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function inject() {
    var st = document.createElement("style");
    st.setAttribute("data-cs-style", "");
    st.textContent = STYLES;
    document.head.appendChild(st);
    var tmpls = document.querySelectorAll('template[id^="expnd-"]');
    if (!tmpls.length) {
      injectSpa();
      return;
    }
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