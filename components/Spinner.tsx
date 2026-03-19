import React from "react";

export default function Spinner({
  size = 24,
  label = "Loading…",
}: {
  size?: number;
  label?: string;
}) {
  const border = Math.max(2, Math.round(size / 12)); // keeps border proportional
  return (
    <div role="status" aria-live="polite" className="inline-flex items-center">
      <span
        aria-hidden="true"
        className="inline-block rounded-full animate-spin border-neutral-300 border-t-purple-500"
        style={{ width: size, height: size, borderWidth: border }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
