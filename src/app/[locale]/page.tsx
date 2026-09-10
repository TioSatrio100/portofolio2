"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ChatWidget from "./_components/chat/ChatWidget";
import ChatNavbar from "./_components/chat/ChatNavbar";

export default function Home(): React.JSX.Element {
  const [chatActive, setChatActive] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:24px_24px]" />

      <ChatNavbar />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-24">
        <AnimatePresence>
          {!chatActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-10 flex flex-col items-center text-center"
            >
              <div className="mb-5 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
                <Image
                  src="/portopict.png"
                  alt="Rio avatar"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Meet Rio&apos;s
              </h1>
              <p className="mx-auto mt-3 max-w-md text-gray-500">
                Ask anything about Rio&apos;s projects, skills, and background.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="w-full"
        >
          <ChatWidget onActiveChange={setChatActive} />
        </motion.div>
      </section>
    </main>
  );
}
