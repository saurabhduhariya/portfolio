import type { Project } from './types';

// Source: resume, "Projects". Links and years from github.com/saurabhduhariya.
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
];
