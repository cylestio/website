'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative container mx-auto px-4 sm:px-6 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20" />
          </div>
          <Link href="/" className="text-lg sm:text-xl font-bold">Cylestio</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto my-4 sm:my-8 p-4 sm:p-8 rounded-lg bg-[rgba(2,8,23,0.85)] shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <header className="mb-8 sm:mb-12">
          <p className="mb-4">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <img 
              src="/blog/images/multi_agent.png" 
              alt="MCP Registry Interface" 
              className="w-full md:w-64 h-auto object-contain rounded-lg flex-shrink-0"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                How I used a team of 15 agents with 4 prompts
              </h1>
              <p className="text-blue-100/60 text-xs sm:text-sm">April 17, 2025</p>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 mt-6 sm:mt-8 pt-6 sm:pt-8"></div>
        </header>

        <main className="prose prose-invert max-w-none prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-headings:text-blue-300">
          <p className="text-white/90 text-lg leading-relaxed">I keep seeing people ask about how to use coding agents for more complex products that involve:</p>
          <ul className="space-y-2 mb-6">
            <li className="text-white/90 text-lg">Algorithms (ML, scoring, reputation, graphs...)</li>
            <li className="text-white/90 text-lg">Databases, APIs, or scheduled jobs</li>
            <li className="text-white/90 text-lg">Multi-component systems (backend + frontend + SDKs + MCPs)</li>
            <li className="text-white/90 text-lg">Low-level or infrastructure-focused tools</li>
          </ul>
          <p className="text-white/90 text-lg leading-relaxed">👉 This is exactly what we're getting into now.</p>

          <p className="text-white/90 text-lg leading-relaxed">(Other topics like release pipelines, security, testing, auth, and compliance are coming soon.)</p>

          <p className="text-white/90 text-lg leading-relaxed">So here it is: a real product, built from scratch, using only multi-agent prompts — including real data fetching, a working DB, backend and frontend logic, and UI.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">🤖 The Multi-Agent Framework, Step by Step</h2>

          <p className="text-white/90 text-lg leading-relaxed">Each agent has awareness of the broader process — not just its own task.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">Learning from how different teams work together, there's value in differentiating roles and ensuring they orchestrate well.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">The Product Manager doesn't just define a spec — it also adds instructions for the Architect, Designer, and Dev Lead.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">The Dev Lead decides how many developers it needs for the task, what their execution order should be, and where their task boundaries lie.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">Each agent works with context, not just instructions:</p>
          <ul className="space-y-2">
            <li className="text-white/90 text-lg">Its role and responsibility in the overall flow</li>
            <li className="text-white/90 text-lg">Which agents worked before, and what they produced</li>
            <li className="text-white/90 text-lg">Who it's collaborating with next, and what they'll need</li>
            <li className="text-white/90 text-lg">What model it's running on, and how to tailor its output accordingly</li>
            <li className="text-white/90 text-lg">How to share context continuously, like teams syncing in daily standups</li>
          </ul>
          
          <p className="text-white/90 text-lg leading-relaxed"><strong>This isn't just chaining prompts — it's about shared knowledge</strong></p>
          
          <p className="text-white/90 text-lg leading-relaxed">The agents are aware of each other, collaborate asynchronously, and build on one another's work like a team that's always in sync.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">It's very basic, but works surprisingly well.</p>
          
          <p className="text-white/90 text-lg leading-relaxed">The flow can also be extended into branching paths, feedback loops, and fully autonomous systems.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">🧠 The Methodology</h2>

          <p className="text-white/90 text-lg leading-relaxed">Here's how the flow works:</p>

          <ol className="space-y-2 mb-6">
            <li className="text-white/90 text-lg">
                <strong className="text-blue-200">Executive → Product Manager</strong><br />
                I wrote a short business goal. That was the only input needed. The rest was already inside the prompt template.
            </li>
            <li className="text-white/90 text-lg">
                <strong className="text-blue-200">Product Manager → Architect</strong><br />
                The agent read the spec and defined the architecture, tech stack, and main components.
            </li>
            <li className="text-white/90 text-lg">
                <strong className="text-blue-200">Product Manager & Architect → Designer</strong><br />
                Created a design system and flow description in markdown — no Figma needed (yes, I know the product designers are doing much more than that, I just simplified it here for our example).
            </li>
            <li className="text-white/90 text-lg">
                <strong className="text-blue-200">Designer & Architect & Designer → Dev Team Lead</strong><br />
                Broke the implementation into tasks, each with full context, test instructions, and checklist.
            </li>
            <li className="text-white/90 text-lg">
                <strong className="text-blue-200">Dev Team Lead → Executors</strong><br />
                Each task was executed by Claude 3.7 or 3.5 Sonnet, which read the spec, implemented the logic, tested it, and logged results.
            </li>
          </ol>

          <p className="text-white/90 text-lg leading-relaxed">All of this was done in Cursor. Each output was saved to a markdown file in a dedicated directory.</p>

          <p className="text-white/90 text-lg leading-relaxed">📂 You can check out the prompt templates here:<br />
          👉 <a href="https://github.com/omrilahav/vibe-coding" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">github.com/omrilahav/vibe-coding</a></p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">🛠 The Demo: MCP Registry & Reputation Explorer</h2>

          <p className="text-white/90 text-lg leading-relaxed">To showcase the process (I'm working on a much larger-scale product that will be released soon using the multi-agent framework), I picked a realistic project — something that usually breaks in no-code environments:</p>
          <ul className="space-y-2">
            <li className="text-white/90 text-lg">Reputation algorithm</li>
            <li className="text-white/90 text-lg">Real API access</li>
            <li className="text-white/90 text-lg">Fetching + storing real data</li>
            <li className="text-white/90 text-lg">Scheduling</li>
            <li className="text-white/90 text-lg">Clean UI</li>
            <li className="text-white/90 text-lg">Design system</li>
            <li className="text-white/90 text-lg">A working backend + database</li>
          </ul>

          <p className="text-white/90 text-lg leading-relaxed">The MCP Registry app scans for real MCP servers, pulls metadata, calculates a reputation score, and displays it in a dynamic UI — to help teams select trustable sources.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">📏 It Took Just a Short Evening</h2>

          <p className="text-white/90 text-lg leading-relaxed">From empty repo to working product — the whole process took less than a few hours.</p>

          <p className="text-white/90 text-lg leading-relaxed">Some tasks didn't work on the first try. I copied the error message back into the task prompt, ran it again, and it worked. The agents handled most things really well.</p>

          <p className="text-white/90 text-lg leading-relaxed">To keep it simple, I only used the Glama MCP API as a source. The pagination didn't work properly, so the app only shows part of the results — but for the scope of the demo, that was fine.</p>

          <p className="text-white/90 text-lg leading-relaxed">Future versions could include:</p>
          <ul className="space-y-2">
            <li className="text-white/90 text-lg">More sources (GitHub scraping, enrichment)</li>
            <li className="text-white/90 text-lg">Feedback scoring and reputation signals</li>
            <li className="text-white/90 text-lg">More polished frontend interactions</li>
          </ul>

          <p className="text-white/90 text-lg leading-relaxed">But the goal here was to show the process clearly.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">🧭 Want to Try It Yourself?</h2>

          <ol className="space-y-2 mb-6">
            <li className="text-white/90 text-lg">
                Clone the framework repo:<br />
                👉 <a href="https://github.com/omrilahav/vibe-coding" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">github.com/omrilahav/vibe-coding</a>
            </li>
            <li className="text-white/90 text-lg">Pick a project or feature idea you want to try.</li>
            <li className="text-white/90 text-lg">
                Go to <code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">1-product-manager.md</code>, and write your business goal in the placeholder.
                <ul className="space-y-2 mt-2">
                    <li className="text-white/90 text-lg">You can see the example input I used <a href="https://github.com/omrilahav/vibe-coding-demo-mcp-registry/blob/main/demo-methodology-files/input-product-manager.md" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">here</a></li>
                </ul>
            </li>
            <li className="text-white/90 text-lg">Run the prompt in Claude 3.7 Sonnet (Cursor is what I used)</li>
            <li className="text-white/90 text-lg">Save the output in <code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">product/</code>, then move on to the next prompt (it already happens automatically for you)</li>
            <li className="text-white/90 text-lg">Repeat the process — each agent reads the previous output and generates the next</li>
            <li className="text-white/90 text-lg">When the Dev Lead creates tasks, give each one to a new agent and run them in order</li>
          </ol>

          <p className="text-white/90 text-lg leading-relaxed">You'll end up with a full set of outputs — specs, architecture, design, code, and tests — all created by AI agents, connected by context.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">📁 What's in the Demo Repo</h2>

          <p className="text-white/90 text-lg leading-relaxed">You can explore all of this in the demo repo.<br />
          Each folder contains actual agent output:</p>

          <ul className="space-y-2 mb-6">
            <li className="text-white/90 text-lg"><code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">product/</code> — product spec, user stories, value props</li>
            <li className="text-white/90 text-lg"><code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">architecture/</code> — stack choices, component diagrams, data flow</li>
            <li className="text-white/90 text-lg"><code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">design/</code> — design system, screens, layout instructions</li>
            <li className="text-white/90 text-lg"><code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">tasks/</code> — implementation plan + task-by-task execution logs</li>
            <li className="text-white/90 text-lg"><code className="bg-blue-900/30 text-blue-200 px-2 py-0.5 rounded">demo-methodology-files/</code> — prompt files + initial input</li>
          </ul>

          <p className="text-white/90 text-lg leading-relaxed">The product works, even with limited data sources. More importantly, it shows how the agents collaborated to build it.</p>

          <div className="border-t border-blue-500/20 my-8"></div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">🚀 What's Next</h2>

          <p className="text-white/90 text-lg leading-relaxed">This is just one possible direction.<br />
          The same methodology can support:</p>
          <ul className="space-y-2 mb-6">
            <li className="text-white/90 text-lg">Feature requests and product growth</li>
            <li className="text-white/90 text-lg">CI/CD flows</li>
            <li className="text-white/90 text-lg">Secure development and SSDLC</li>
            <li className="text-white/90 text-lg">Agent-led QA and testing</li>
            <li className="text-white/90 text-lg">Monitoring and incident workflows</li>
          </ul>

          <p className="text-white/90 text-lg leading-relaxed">The long-term goal is to create clear, open flows that allow agents to collaborate like systems — with shared knowledge, scoped decisions, and well-defined responsibilities.</p>
        </main>
      </div>

      {/* Footer (same as main page) */}
      <footer className="relative py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold">Cylestio</span>
          </div>
          <p className="text-blue-100/60">Secure Innovation. Secure Future.</p>
        </div>
      </footer>
    </div>
  );
} 