"use client";
import { useEffect, useRef } from "react";

import "@/port/framework/styles.css";
import Assembly from "@/port/framework/assembly";
import { Bridge } from "@/port/framework/types/modules";
import FakeBridge from "@/port/fake_bridge";

export default function Home() {
  const portRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const workerFile = new URL(
      "@/port/framework/processing/py_worker.js",
      import.meta.url,
    );
    const worker = new Worker(workerFile);

    let assembly: Assembly;

    const run = (bridge: Bridge, locale: string): void => {
      if (!portRoot.current) return;
      assembly = new Assembly(worker, bridge);
      assembly.visualisationEngine.start(portRoot.current, locale);
      assembly.processingEngine.start();
    };

    run(new FakeBridge(), "en");
  }, [portRoot]);

  return (
    <div>
      <div ref={portRoot} />;
    </div>
  );
}
