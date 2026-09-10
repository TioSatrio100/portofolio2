"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type PanelKind = "about" | "skills" | "contact" | "projects";

function openPanel(kind: PanelKind, question: string) {
  window.dispatchEvent(
    new CustomEvent("chat:open-panel", { detail: { kind, question } })
  );
}

const ChatNavbar: React.FC = () => {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}/portofolio`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Portofolio
          </Link>
          <button
            type="button"
            onClick={() => openPanel("about", "Who is Rio?")}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About Me
          </button>
        </div>

        <span className="text-xl font-black tracking-tight text-gray-900">
          RIO
        </span>
      </nav>
    </header>
  );
};

export default ChatNavbar;
