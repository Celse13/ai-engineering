import { useState, useEffect } from "react";

const roadmap = [
  {
    month: "Month 1",
    title: "LLM Foundations & First Apps",
    color: "#6366f1",
    weeks: [
      {
        week: "Week 1",
        title: "How LLMs Work + API Basics",
        goal: "Understand what LLMs actually do under the hood, and make your first API call.",
        learn: [
          { text: "Watch: Andrej Karpathy — Intro to LLMs (1hr)", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video" },
          { text: "Read: OpenAI API Quickstart (official docs)", url: "https://platform.openai.com/docs/quickstart", type: "docs" },
          { text: "Read: Anthropic API Getting Started", url: "https://docs.anthropic.com/en/docs/initial-setup", type: "docs" },
          { text: "Course: DeepLearning.AI — ChatGPT Prompt Engineering for Developers (free, 1hr)", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", type: "course" },
        ],
        build: "Write a Python script that takes a user question from the terminal, sends it to the OpenAI or Anthropic API, and prints the response. Then extend it to maintain a conversation history (multi-turn chat).",
        tip: "Use the free tiers. OpenAI gives $5 credits to new accounts. Anthropic has free API credits too. You don't need to spend money yet."
      },
      {
        week: "Week 2",
        title: "Prompt Engineering + Structured Outputs",
        goal: "Learn to control what the model gives back — not random text, but structured, reliable data.",
        learn: [
          { text: "Guide: Anthropic Prompt Engineering Guide (official, excellent)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", type: "docs" },
          { text: "Guide: OpenAI Prompt Engineering Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering", type: "docs" },
          { text: "Docs: OpenAI Structured Outputs (JSON mode)", url: "https://platform.openai.com/docs/guides/structured-outputs", type: "docs" },
          { text: "Course: DeepLearning.AI — Building Systems with ChatGPT (free)", url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/", type: "course" },
        ],
        build: "Build a 'Job Posting Analyzer' — paste in a job description, and your script extracts: title, company, required skills, salary range, and experience level as structured JSON. Handle edge cases where info is missing.",
        tip: "The #1 skill separating beginners from professionals is prompt engineering. This isn't 'fluff' — it's the core engineering skill."
      },
      {
        week: "Week 3",
        title: "Tool/Function Calling + Conversation Memory",
        goal: "Make LLMs DO things — call functions, use tools, and remember context across messages.",
        learn: [
          { text: "Docs: OpenAI Function Calling Guide", url: "https://platform.openai.com/docs/guides/function-calling", type: "docs" },
          { text: "Docs: Anthropic Tool Use Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview", type: "docs" },
          { text: "Course: DeepLearning.AI — Functions, Tools and Agents with LangChain (free)", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/", type: "course" },
        ],
        build: "Build a 'Personal Assistant CLI' that can: (1) check the weather via an API, (2) do math calculations, (3) save notes to a file. The LLM decides which tool to call based on what you ask.",
        tip: "Function calling is what turns a chatbot into an actual application. This is the unlock."
      },
      {
        week: "Week 4",
        title: "Your First Real App + FastAPI",
        goal: "Move from scripts to a real app with an API backend that others can use.",
        learn: [
          { text: "Tutorial: FastAPI Official Tutorial (just the first 4 sections)", url: "https://fastapi.tiangolo.com/tutorial/", type: "docs" },
          { text: "Video: freeCodeCamp — FastAPI Course (pick the first 2hrs)", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA", type: "video" },
          { text: "Read: Streamlit Docs (for quick frontends)", url: "https://docs.streamlit.io/get-started", type: "docs" },
        ],
        build: "Build and deploy an 'AI Email Writer' — a Streamlit or FastAPI app where the user inputs a topic, tone, and audience, and gets a polished email back. Add options for rewriting and adjusting length. Push to GitHub.",
        tip: "This is your first portfolio project. Make the README clear — explain what it does, how to run it, and include a screenshot."
      },
    ]
  },
  {
    month: "Month 2",
    title: "RAG + Agents & Workflows",
    color: "#8b5cf6",
    weeks: [
      {
        week: "Week 5",
        title: "Embeddings & Vector Databases",
        goal: "Understand how AI 'searches' through your own data — the foundation of RAG.",
        learn: [
          { text: "Video: Andrej Karpathy — Let's build the GPT Tokenizer (for intuition)", url: "https://www.youtube.com/watch?v=zduSFxRajkE", type: "video" },
          { text: "Course: DeepLearning.AI — Building Apps with Vector Databases (free)", url: "https://www.deeplearning.ai/short-courses/building-applications-vector-databases/", type: "course" },
          { text: "Docs: ChromaDB Getting Started (simplest vector DB)", url: "https://docs.trychroma.com/getting-started", type: "docs" },
          { text: "Read: Pinecone — What are Embeddings? (great explainer)", url: "https://www.pinecone.io/learn/vector-embeddings/", type: "docs" },
        ],
        build: "Take 5-10 of your own PDF or text files. Write a script that: chunks them, creates embeddings, stores them in ChromaDB, and lets you ask questions that retrieve relevant chunks.",
        tip: "ChromaDB runs locally with zero setup — perfect for learning. Don't jump to Pinecone or Weaviate yet."
      },
      {
        week: "Week 6",
        title: "Full RAG Pipeline",
        goal: "Build a complete Retrieval Augmented Generation system — the #1 most requested AI app pattern.",
        learn: [
          { text: "Course: DeepLearning.AI — LangChain: Chat with Your Data (free)", url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/", type: "course" },
          { text: "Docs: LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/", type: "docs" },
          { text: "Video: Greg Kamradt — Chunking Strategies (essential for good RAG)", url: "https://www.youtube.com/watch?v=8OJC21T2SL4", type: "video" },
          { text: "Read: Anthropic RAG Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/retrieval-augmented-generation", type: "docs" },
        ],
        build: "Build 'Chat with Your Docs' — a Streamlit app where you upload PDFs, it chunks and embeds them, and you can have a conversation with your documents. Add source citations to every answer.",
        tip: "This is your STRONGEST portfolio project. Every company wants this. Make it polished."
      },
      {
        week: "Week 7",
        title: "AI Agents — Think → Act → Observe",
        goal: "Build systems where the AI plans steps, takes actions, and adjusts based on results.",
        learn: [
          { text: "Course: DeepLearning.AI — AI Agents in LangGraph (free)", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", type: "course" },
          { text: "Docs: LangGraph Official Tutorial", url: "https://langchain-ai.github.io/langgraph/tutorials/", type: "docs" },
          { text: "Read: Anthropic — Building Effective Agents (excellent blog post)", url: "https://www.anthropic.com/engineering/building-effective-agents", type: "docs" },
          { text: "Read: Lilian Weng — LLM Powered Autonomous Agents (deep dive)", url: "https://lilianweng.github.io/posts/2023-06-23-agent/", type: "docs" },
        ],
        build: "Build a 'Research Agent' that takes a topic, searches the web (using Tavily or SerpAPI), reads the results, synthesizes findings, and writes a structured report. Use LangGraph for the agent loop.",
        tip: "Read the Anthropic blog post first — it'll save you from over-engineering. Most 'agent' problems are better solved with simple chains."
      },
      {
        week: "Week 8",
        title: "Multi-Step Workflows + Evaluation",
        goal: "Chain multiple AI steps together reliably, and learn to measure if your AI system is actually working.",
        learn: [
          { text: "Course: DeepLearning.AI — Automated Testing for LLMOps (free)", url: "https://www.deeplearning.ai/short-courses/automated-testing-llmops/", type: "course" },
          { text: "Docs: LangSmith (tracing and evaluation)", url: "https://docs.smith.langchain.com/", type: "docs" },
          { text: "Read: Hamel Husain — Your AI Product Needs Evals (must read)", url: "https://hamel.dev/blog/posts/evals/", type: "docs" },
        ],
        build: "Add evaluation to your RAG app from Week 6: create a test set of 20 question-answer pairs, run your system on them, measure accuracy, then improve your chunking/prompts based on results. Log everything with LangSmith.",
        tip: "Eval is what separates 'demo' from 'production.' Hiring managers look for this. It's unglamorous but incredibly valuable."
      },
    ]
  },
  {
    month: "Month 3",
    title: "Deploy, Ship & Get Hired",
    color: "#a855f7",
    weeks: [
      {
        week: "Week 9",
        title: "Docker + Deployment",
        goal: "Get your apps running on the internet where people can actually use them.",
        learn: [
          { text: "Video: Fireship — Docker in 100 Seconds + Learn Docker in 7 Easy Steps", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ", type: "video" },
          { text: "Tutorial: Deploy FastAPI on Railway (free tier)", url: "https://docs.railway.app/quick-start", type: "docs" },
          { text: "Docs: Streamlit Cloud Deployment (free, easiest option)", url: "https://docs.streamlit.io/deploy/streamlit-community-cloud", type: "docs" },
          { text: "Docs: Fly.io — Deploy a Python App", url: "https://fly.io/docs/python/", type: "docs" },
        ],
        build: "Dockerize your best project (the RAG app or Agent). Deploy it to Railway or Fly.io. Set up a custom domain if you can. Make sure it works for someone who has never seen your code.",
        tip: "Streamlit Cloud is the easiest path — deploy in 5 minutes. Use it for portfolio pieces. Use Docker + Railway for 'real' deployments."
      },
      {
        week: "Week 10",
        title: "Production Concerns — Cost, Caching, Security",
        goal: "Learn to think about the real-world stuff: costs, speed, rate limits, API keys, and reliability.",
        learn: [
          { text: "Read: OpenAI — Production Best Practices", url: "https://platform.openai.com/docs/guides/production-best-practices", type: "docs" },
          { text: "Docs: Redis Quickstart (for caching)", url: "https://redis.io/docs/getting-started/", type: "docs" },
          { text: "Docs: LiteLLM — Use Multiple LLM Providers (cost optimization)", url: "https://docs.litellm.ai/", type: "docs" },
          { text: "Read: Simon Willison's Blog (best AI engineering blog on the internet)", url: "https://simonwillison.net/", type: "docs" },
        ],
        build: "Add to your deployed app: (1) response caching so repeated questions are instant, (2) error handling with retries, (3) basic API key auth so not everyone can use it, (4) usage logging so you can see what's happening.",
        tip: "Follow Simon Willison — he's the single best source for staying current on practical AI engineering."
      },
      {
        week: "Week 11",
        title: "Portfolio Polish + GitHub Presence",
        goal: "Turn your projects into a portfolio that actually gets you interviews.",
        learn: [
          { text: "Read: How to Write a Great README (GitHub guide)", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes", type: "docs" },
          { text: "Resource: GitHub Profile README Generator", url: "https://rahuldkjain.github.io/gh-profile-readme-generator/", type: "docs" },
          { text: "Read: Chip Huyen — Building an ML Portfolio (still very relevant)", url: "https://huyenchip.com/2018/10/08/career-advice-recent-cs-graduates.html", type: "docs" },
        ],
        build: "Polish 3 projects: (1) the Email Writer (Month 1), (2) Chat with Docs RAG app (Month 2), (3) Research Agent (Month 2). Each one gets: a clear README with screenshots, a live demo link, clean code, and a 'What I Learned' section.",
        tip: "A portfolio of 3 polished projects beats 20 half-finished tutorials. Quality over quantity."
      },
      {
        week: "Week 12",
        title: "Specialize + Start Applying",
        goal: "Pick your direction, start putting yourself out there, and keep the momentum going.",
        learn: [
          { text: "Follow: Latent Space Podcast (best AI engineering podcast)", url: "https://www.latent.space/podcast", type: "docs" },
          { text: "Community: Join AI Engineer Foundation Discord", url: "https://discord.gg/ai-engineers", type: "docs" },
          { text: "Jobs: Check ai-jobs.net and otta.com for AI engineer roles", url: "https://ai-jobs.net/", type: "docs" },
          { text: "Read: Anthropic Cookbook (advanced real-world patterns)", url: "https://github.com/anthropics/anthropic-cookbook", type: "docs" },
        ],
        build: "Build one specialization project: either (A) a full SaaS-style AI app with auth and payments for AI Product path, (B) a fine-tuned model comparison for Applied AI path, or (C) an n8n/LangGraph automation workflow for AI Automation path.",
        tip: "Start sharing what you build on Twitter/LinkedIn BEFORE week 12. The best job leads come from 'building in public.'"
      },
    ]
  }
];

const tagColors: Record<string, string> = { video: "#ef4444", docs: "#3b82f6", course: "#10b981" };
const tagLabels: Record<string, string> = { video: "Video", docs: "Docs / Read", course: "Course" };

export default function App() {
  const [openWeek, setOpenWeek] = useState<string | null>("Week 1");
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("roadmap-progress");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("roadmap-progress", JSON.stringify(completed));
  }, [completed]);

  const toggle = (w: string) => setOpenWeek(openWeek === w ? null : w);
  const toggleComplete = (w: string) => setCompleted(p => ({ ...p, [w]: !p[w] }));

  const totalWeeks = 12;
  const doneCount = Object.values(completed).filter(Boolean).length;
  const pct = Math.round((doneCount / totalWeeks) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            3-Month AI Engineer Roadmap
          </h1>
          <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
            Python dev → AI Engineer • 1-2 hrs/day • Build-first approach
          </p>
          <div style={{ marginTop: 16, background: "#1e293b", borderRadius: 99, height: 10, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #6366f1, #a855f7)", borderRadius: 99, transition: "width 0.4s ease" }} />
          </div>
          <p style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>
            {doneCount}/{totalWeeks} weeks completed ({pct}%)
          </p>
        </div>

        {roadmap.map((month) => (
          <div key={month.month} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: month.color, boxShadow: `0 0 12px ${month.color}60`, flexShrink: 0 }} />
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#f1f5f9" }}>
                {month.month}: {month.title}
              </h2>
            </div>

            {month.weeks.map((w) => {
              const isOpen = openWeek === w.week;
              const isDone = completed[w.week];
              return (
                <div key={w.week} style={{
                  marginBottom: 8,
                  border: `1px solid ${isOpen ? month.color + "50" : "#1e293b"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: isDone ? month.color + "10" : "#1e293b",
                  transition: "all 0.2s"
                }}>
                  <div onClick={() => toggle(w.week)} style={{
                    display: "flex", alignItems: "center", padding: "14px 16px", cursor: "pointer", gap: 12
                  }}>
                    <button onClick={(e) => { e.stopPropagation(); toggleComplete(w.week); }} style={{
                      width: 24, height: 24, borderRadius: 7,
                      border: isDone ? "none" : "2px solid #475569",
                      background: isDone ? month.color : "transparent",
                      color: "#fff", fontSize: 14, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, padding: 0
                    }}>
                      {isDone && "✓"}
                    </button>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: month.color, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {w.week}
                      </span>
                      <p style={{
                        fontSize: 15, fontWeight: 600, margin: "2px 0 0", color: "#f1f5f9",
                        textDecoration: isDone ? "line-through" : "none",
                        opacity: isDone ? 0.5 : 1
                      }}>
                        {w.title}
                      </p>
                    </div>
                    <span style={{
                      fontSize: 20, color: "#475569",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s"
                    }}>▾</span>
                  </div>

                  {isOpen && (
                    <div style={{ padding: "0 16px 16px", borderTop: "1px solid #334155" }}>
                      <div style={{
                        background: month.color + "15", borderRadius: 10,
                        padding: "12px 14px", margin: "14px 0",
                        borderLeft: `3px solid ${month.color}`
                      }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: month.color, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Goal</p>
                        <p style={{ fontSize: 13, margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>{w.goal}</p>
                      </div>

                      <p style={{ fontSize: 11, fontWeight: 700, color: "#64748b", margin: "16px 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Resources
                      </p>
                      {w.learn.map((r, i) => (
                        <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "10px 12px", marginBottom: 4, borderRadius: 8,
                          textDecoration: "none", background: "#0f172a",
                          transition: "background 0.15s", border: "1px solid #1e293b"
                        }}
                          onMouseEnter={e => { e.currentTarget.style.background = month.color + "15"; e.currentTarget.style.borderColor = month.color + "30"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "#0f172a"; e.currentTarget.style.borderColor = "#1e293b"; }}
                        >
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: "3px 7px", borderRadius: 5,
                            background: tagColors[r.type] + "20", color: tagColors[r.type], flexShrink: 0
                          }}>
                            {tagLabels[r.type]}
                          </span>
                          <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.4 }}>{r.text}</span>
                          <span style={{ marginLeft: "auto", fontSize: 13, color: "#475569", flexShrink: 0 }}>↗</span>
                        </a>
                      ))}

                      <p style={{ fontSize: 11, fontWeight: 700, color: "#64748b", margin: "16px 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Build This Week
                      </p>
                      <div style={{
                        background: "#0f172a", borderRadius: 10, padding: "12px 14px",
                        border: "1px dashed #334155"
                      }}>
                        <p style={{ fontSize: 13, margin: 0, color: "#cbd5e1", lineHeight: 1.7 }}>{w.build}</p>
                      </div>

                      <div style={{
                        marginTop: 14, padding: "10px 14px", borderRadius: 10,
                        background: "#422006", border: "1px solid #854d0e"
                      }}>
                        <p style={{ fontSize: 12, margin: 0, color: "#fbbf24", lineHeight: 1.6 }}>
                          💡 <strong>Tip:</strong> {w.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div style={{
          marginTop: 24, padding: 20, borderRadius: 12,
          background: "linear-gradient(135deg, #6366f115, #a855f715)",
          border: "1px solid #6366f130"
        }}>
          <p style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px", color: "#f1f5f9" }}>
            Daily Routine (1-2 hours)
          </p>
          <p style={{ fontSize: 13, margin: 0, color: "#94a3b8", lineHeight: 1.8 }}>
            <strong style={{ color: "#c4b5fd" }}>Mon–Thu:</strong> 30 min learning (course/docs) + 30-60 min building your weekly project<br />
            <strong style={{ color: "#c4b5fd" }}>Fri:</strong> Polish, push to GitHub, write a short note about what you learned<br />
            <strong style={{ color: "#c4b5fd" }}>Weekend:</strong> Optional — catch up, explore, or rest. Consistency beats intensity.
          </p>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "#475569", marginTop: 24 }}>
          Built with ♥ — Start today, ship in 3 months
        </p>
      </div>
    </div>
  );
}