import type { Project } from './types';

// Sources: resume "Projects" (Switchyard, TubeTalk, Clawback) and each repo's README on
// github.com/saurabhduhariya (the rest). Ordered best first: real users, then depth and polish
// (tests, live demo, measured results), then size. See docs/DECISIONS.md D-034.
export const projects: Project[] = [
  {
    slug: 'switchyard',
    name: 'Switchyard',
    summary: 'One-click Google account switcher for the Antigravity IDE',
    metric: '7k+ downloads in 30 days',
    stack: ['TypeScript', 'Svelte', 'Node.js', 'SQLite (sql.js)', 'Vitest'],
    points: [
      'Atomic SQLite writes with automatic rollback',
      'Tokens kept only in the OS keychain',
      '190+ Vitest tests, CI publishes to Open VSX',
    ],
    highlights: [
      'Published on the Open VSX Registry: a sidebar extension that saves several Google accounts, switches between them in one click and shows live quota usage.',
      'Switches sessions by editing the IDE’s SQLite state database through sql.js. Writes are atomic (temp file, fsync, rename with retry), every switch is backed up first, and a session that fails to verify is rolled back automatically.',
      'Signs in through a separate window, so adding an account never closes the main one. A heartbeat stops one window from cancelling or overwriting another’s sign-in. Tokens live only in the OS keychain (VS Code SecretStorage).',
      'Covered by 190+ Vitest tests. GitHub Actions runs lint, build, tests, a dependency audit and a secret scan on every push, and a release workflow publishes to Open VSX.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saurabhduhariya/Switchyard' },
      { label: 'Open VSX', url: 'https://open-vsx.org/extension/saurabhduhariya/ag-switchyard' },
    ],
    year: 2026,
  },
  {
    slug: 'cargoverity',
    name: 'CargoVerity',
    summary: 'AI reader and cross-checker for customs shipment documents',
    stack: [
      'TypeScript',
      'Next.js',
      'React',
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'Groq',
      'Zod',
      'Vitest',
      'Playwright',
    ],
    points: [
      'Every field keeps its source quote and page',
      'Six cross-checks with exact decimal maths',
      '1,000+ unit, integration and e2e tests',
    ],
    highlights: [
      'Reads a shipment’s commercial invoice, packing list and bill of lading with a vision model and keeps the source quote, page and confidence for every field. Low-confidence or missing values must be confirmed, corrected or entered by hand.',
      'Six fixed cross-check rules (line arithmetic, gross weight, package count, invoice against packing list quantities, gross against net weight, exporter name) run in plain TypeScript with decimal.js, so results are repeatable.',
      'Every edit creates a new revision. A Manager approves one exact revision and only that revision can be exported as CSV. Roles are enforced on the server; files sit in a private bucket behind 5-minute signed links.',
      '927 unit, 80 integration and 27 end-to-end tests (Vitest, Playwright). CI runs lint, typecheck, schema validation, unit tests and build.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saurabhduhariya/CargoVerity' },
      { label: 'Live demo', url: 'https://cargo-verity-32o7.vercel.app' },
    ],
    year: 2026,
  },
  {
    slug: 'tubetalk',
    name: 'TubeTalk',
    summary: 'Corrective RAG over YouTube transcripts and comments',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Pinecone', 'VoyageAI', 'Groq', 'yt-dlp', 'Pytest'],
    points: [
      '8-node LangGraph Corrective RAG pipeline',
      'Comments pulled from YouTube’s internal API',
      'Pytest suite with mocked LLM and Pinecone',
    ],
    highlights: [
      'Designed an 8-node LangGraph state machine for Corrective RAG: 3-way retrieval grading, sentence-level decomposition with LLM filtering, and a regeneration loop capped at 2 retries to cut hallucinations.',
      'Pulls YouTube comments by parsing an undocumented internal API over raw HTTP, with continuation-token pagination and like-count normalisation. Transcripts come from yt-dlp, chunked at 1000 characters with 100 overlap.',
      'Wrote a 10-case Pytest suite covering the 8 graph nodes and 2 FastAPI routes, stubbing the LLM, Pinecone and Tavily with unittest.mock.patch through shared fixtures.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/saurabhduhariya/TubeTalk' }],
    year: 2026,
  },
  {
    slug: 'amazon-ml-challenge',
    name: 'Amazon ML Challenge',
    summary: 'Entity resolution across 12.5M business records',
    metric: 'Macro F0.5 of 0.912 on the leaderboard',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'LightGBM', 'RapidFuzz', 'pandas'],
    points: [
      'Blocking drops 99.98% of pairs at 96% recall',
      '17 name and address similarity features',
      'XGBoost (GPU) + LightGBM ensemble',
    ],
    highlights: [
      'Amazon ML Challenge 2026: match each of 2.2M business records against a pool of 10.3M records from two other sources. Scored with macro F0.5, which punishes a false merge more than a missed match.',
      'Two blocking channels (character 3–5-gram TF-IDF, top 25 by cosine, and an inverted token index) cut comparisons by 99.98% while keeping 95.97% of true matches.',
      '17 pairwise features (Levenshtein, Jaro-Winkler, token ratios, legal-suffix compatibility, address similarity and number overlap). XGBoost on GPU and LightGBM are trained on hard negatives from the blocking pool, their probabilities averaged and the threshold tuned for F0.5.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/saurabhduhariya/amazon-ml-challenge' }],
    year: 2026,
  },
  {
    slug: 'clawback',
    name: 'Clawback',
    summary: 'AI agent that recovers failed Razorpay payments',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'LangGraph', 'Gemini', 'Razorpay API'],
    points: [
      'HMAC-verified, de-duplicated Razorpay webhooks',
      '8-node LangGraph agent with Gemini diagnosis',
      'RecoverBot chat streams answers over SSE',
    ],
    highlights: [
      'Handles Razorpay payment.failed webhooks: verifies the HMAC-SHA256 signature on the raw request body and drops duplicate events by event ID in PostgreSQL.',
      'An 8-node LangGraph workflow scores each failed payment (attempts, amount, severity, age), gets a Gemini root-cause diagnosis validated with Zod, and stops after 3 attempts or on non-retryable failures. Recovery links go out through 3 Razorpay endpoints.',
      'RecoverBot, a chat assistant with 5 tools (including read-only SQL with a 3 s statement timeout), streams answers over Server-Sent Events and catches up on missed events after a reconnect.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saurabhduhariya/Clawback' },
      { label: 'Live demo', url: 'https://clawback-seven.vercel.app/' },
    ],
    year: 2026,
  },
  {
    slug: 'agentslam',
    name: 'AgentSlam',
    summary: 'Autonomous debate agent for the Agent Slam 2026 contest',
    stack: ['Python', 'asyncio', 'WebSockets', 'Groq', 'Tavily', 'OpenRouter', 'Pytest'],
    points: [
      'Plays 10-minute 1v1 debates over WebSockets',
      'Extract, ground with web search, rebut',
      'API key rotation and OpenRouter failover',
    ],
    highlights: [
      'Connects to the tournament server over WebSockets and plays full 10-minute 1v1 debate matches on its own, within a 2-minute limit per turn. Built entirely on asyncio.',
      'Each turn runs three steps: extract the opponent’s claims (Llama 3 8B on Groq), ground them with live web search (Tavily), and write the rebuttal (Llama 3 70B), with OpenRouter as failover.',
      'Rotates through several API keys on rate limits, never repeats an argument or URL, and re-reads the chat history after a reconnect. 68 tests plus a 15-turn AI-vs-AI simulation.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/saurabhduhariya/AgentSlam' }],
    year: 2026,
  },
  {
    slug: 'medileon',
    name: 'Medileon',
    summary: 'Health assistant that answers with generated, interactive UI',
    stack: ['TypeScript', 'Next.js', 'Tambo AI', 'MCP', 'Tailwind CSS', 'Recharts', 'Zod'],
    points: [
      '21+ components the AI renders in the chat',
      'MCP server with 7 health tools',
      'Emergency screen on critical symptoms',
    ],
    highlights: [
      'Built for the Tambo AI Hackathon. Instead of plain text, the assistant renders interactive components in the chat: symptom checker, medication cards, vitals charts, appointment booking, BMI calculator and more (21+).',
      'Ships an MCP server with 7 tools (symptoms, urgency, BMI, drug interactions, medication info, search, health tips) that works inside the app or standalone.',
      'Critical symptoms bring up a full-screen emergency view ahead of everything else. A dashboard shows vitals, medications and a wellness score.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saurabhduhariya/Medileon' },
      { label: 'Live demo', url: 'https://medileon.vercel.app' },
    ],
    year: 2026,
  },
  {
    slug: 'intellidesk',
    name: 'IntelliDesk AI',
    summary: 'AI triage for customer support tickets',
    stack: ['TypeScript', 'Next.js', 'Express', 'MongoDB', 'Mongoose', 'n8n'],
    points: [
      'Classifies category, severity and sentiment',
      'Matches FAQs by embedding similarity',
      'Merges follow-up emails into one ticket',
    ],
    highlights: [
      'Support emails become tickets. Each one is classified (category, P1–P3 severity, SLA, sentiment) by an ML service, with a safe default when the service is down.',
      'Finds the best FAQ answer by cosine similarity over stored embeddings, with separate thresholds for full and partial matches, and drafts a reply from it.',
      'Replies and follow-ups join the existing ticket, matched by ticket ID or by the same sender and subject within 48 hours. Next.js front end, Express and MongoDB back end.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/saurabhduhariya/IntelliDesk-AI' },
      { label: 'Live demo', url: 'https://intelli-desk-ai-rccz.vercel.app' },
    ],
    year: 2026,
  },
  {
    slug: 'linux-log-chatbot',
    name: 'Linux Log Chatbot',
    summary: 'Chat with your Linux logs using a local LLM',
    stack: ['Python', 'Ollama', 'ChromaDB', 'sentence-transformers', 'Streamlit', 'Textual'],
    points: [
      'Runs offline with Ollama (Phi-3)',
      'Watches the log file, indexes new lines',
      'Web UI (Streamlit) and terminal UI (Textual)',
    ],
    highlights: [
      'Ask questions like “show me errors from the last hour”. Answers come from a local Phi-3 model through Ollama, so logs never leave the machine.',
      'Embeds log lines with sentence-transformers into ChromaDB, stores each line’s timestamp for time-aware questions, and watches the file to index new entries as they arrive.',
      'Two front ends: a Streamlit web dashboard and a Textual terminal UI.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/saurabhduhariya/linux-log-chatbot' }],
    year: 2025,
  },
];
