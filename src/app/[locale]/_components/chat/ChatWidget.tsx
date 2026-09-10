"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";
import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import ContactCard from "./ContactCard";
import { type Project } from "./projects";

type PanelKind = "about" | "skills" | "contact" | "projects";

interface PanelEntry {
  id: string;
  kind: PanelKind;
  question: string;
  seq: number;
}

const quickQuestions: {
  emoji: string;
  label: string;
  question: string;
  panel?: PanelKind;
}[] = [
  { emoji: "🤩", label: "Me", question: "Who is Rio?", panel: "about" },
  {
    emoji: "💼",
    label: "Projects",
    question: "Show me Rio's projects.",
    panel: "projects",
  },
  {
    emoji: "📄",
    label: "Research",
    question: "What research or machine learning work has Rio done?",
  },
  {
    emoji: "🧩",
    label: "Skills",
    question: "What are Rio's skills?",
    panel: "skills",
  },
  { emoji: "🎉", label: "Fun", question: "Tell me something fun about Rio." },
  {
    emoji: "📇",
    label: "Contact",
    question: "How can I contact Rio?",
    panel: "contact",
  },
];

const panelKeywords: Record<PanelKind, string[]> = {
  about: ["who is rio", "about rio", "about you", "who are you", "tell me about rio"],
  skills: ["skill", "skills", "tech stack", "technologies", "what can you do", "expertise"],
  contact: ["contact", "email", "reach", "get in touch", "hire", "linkedin", "github profile"],
  projects: [
    "project",
    "projects",
    "portfolio",
    "your work",
    "glowsync",
    "photobooth",
    "efishery",
    "lansia",
  ],
};

function detectPanel(content: string): PanelKind | null {
  const lower = content.toLowerCase();
  const order: PanelKind[] = ["projects", "skills", "contact", "about"];
  for (const kind of order) {
    if (panelKeywords[kind].some((keyword) => lower.includes(keyword))) {
      return kind;
    }
  }
  return null;
}

interface ChatWidgetProps {
  onActiveChange?: (active: boolean) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onActiveChange }) => {
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    append,
    isLoading,
  } = useChat({ api: "/api/chat" });

  const [panels, setPanels] = useState<PanelEntry[]>([]);
  const [showChips, setShowChips] = useState(true);
  const threadRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef(0);
  const messageSeqRef = useRef<Record<string, number>>({});

  const hasContent = messages.length > 0 || panels.length > 0;

  useEffect(() => {
    onActiveChange?.(hasContent);
  }, [hasContent, onActiveChange]);

  const nextSeq = () => {
    seqRef.current += 1;
    return seqRef.current;
  };

  messages.forEach((message) => {
    if (messageSeqRef.current[message.id] === undefined) {
      messageSeqRef.current[message.id] = nextSeq();
    }
  });

  const threadItems = useMemo(() => {
    const panelItems = panels.map((panel) => ({
      type: "panel" as const,
      seq: panel.seq,
      panel,
    }));
    const messageItems = messages.map((message) => ({
      type: "message" as const,
      seq: messageSeqRef.current[message.id] ?? 0,
      message,
    }));
    return [...panelItems, ...messageItems].sort((a, b) => a.seq - b.seq);
  }, [panels, messages]);

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, panels, isLoading]);

  const openPanel = (kind: PanelKind, question: string) => {
    setPanels((prev) => [
      ...prev,
      { id: `${kind}-${Date.now()}`, kind, question, seq: nextSeq() },
    ]);
  };

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ kind: PanelKind; question: string }>)
        .detail;
      if (detail) openPanel(detail.kind, detail.question);
    };
    window.addEventListener("chat:open-panel", handler);
    return () => window.removeEventListener("chat:open-panel", handler);
  }, []);

  const ask = (question: string, panel?: PanelKind) => {
    const trimmed = question.trim();
    if (trimmed.length === 0) return;
    const kind = panel ?? detectPanel(trimmed);
    if (kind) {
      openPanel(kind, trimmed);
    } else {
      append({ role: "user", content: trimmed });
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLoading) return;
    ask(input);
    setInput("");
  };

  const handleSelectProject = (project: Project) => {
    append({ role: "user", content: `Tell me about ${project.title}` });
  };

  const renderPanel = (kind: PanelKind) => {
    switch (kind) {
      case "about":
        return <AboutCard />;
      case "skills":
        return <SkillsCard />;
      case "contact":
        return <ContactCard />;
      case "projects":
        return <ProjectCarousel onSelect={handleSelectProject} />;
    }
  };

  const showLoadingBubble =
    isLoading && messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={`relative mx-auto w-full max-w-4xl rounded-3xl ${
        hasContent
          ? "bg-white/30 pt-12 shadow-xl ring-1 ring-white/40 backdrop-blur-xl"
          : ""
      }`}
    >
      {hasContent && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-white/70 shadow-lg">
            <Image
              src="/portopict.png"
              alt="Rio avatar"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {hasContent && (
        <div
          ref={threadRef}
          className="flex max-h-[64vh] flex-col gap-6 overflow-y-auto px-5 py-8 sm:px-10"
        >
          {threadItems.map((item) => {
          if (item.type === "panel") {
            return (
              <div key={item.panel.id} className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <div className="rounded-full bg-black px-6 py-3 font-bold text-white">
                    {item.panel.question}
                  </div>
                </div>
                {renderPanel(item.panel.kind)}
              </div>
            );
          }

          const message = item.message;
          if (message.role === "user") {
            return (
              <div key={message.id} className="flex justify-end">
                <div className="rounded-full bg-black px-6 py-3 font-bold text-white">
                  {message.content}
                </div>
              </div>
            );
          }

          return (
            <div
              key={message.id}
              className="max-w-prose text-[15px] leading-relaxed text-gray-700"
            >
              {message.content}
            </div>
          );
        })}

          {showLoadingBubble && (
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-2 w-2 rounded-full bg-gray-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className={hasContent ? "px-5 pb-6 sm:px-8" : ""}>
        <div className="mb-3 text-center">
          <button
            type="button"
            onClick={() => setShowChips((prev) => !prev)}
            className="text-sm text-gray-400 transition hover:text-gray-600"
          >
            {showChips ? "Hide quick questions" : "Show quick questions"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showChips && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden">
                {quickQuestions.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => ask(chip.question, chip.panel)}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span>{chip.emoji}</span>
                    {chip.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form
          onSubmit={handleFormSubmit}
          className="flex items-center gap-2 rounded-full bg-white/30 py-2 pl-5 pr-2 shadow-lg ring-1 ring-white/40 backdrop-blur-xl"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-1 border-none bg-transparent text-[15px] text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || input.trim().length === 0}
            aria-label="Send message"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
