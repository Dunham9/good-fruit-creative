"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const storageKey = "good-fruit-analytics-consent";
const measurementId = "G-PW8VTD00CT";

type ConsentChoice = "accepted" | "declined" | null;

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(storageKey);

    if (savedChoice === "accepted" || savedChoice === "declined") {
      setChoice(savedChoice);
    }

    setReady(true);
  }, []);

  function saveChoice(value: "accepted" | "declined") {
    localStorage.setItem(storageKey, value);
    setChoice(value);

    if (value === "declined") {
      const cookies = [
        "_ga",
        `_ga_${measurementId.replace("G-", "")}`,
      ];

      cookies.forEach((cookie) => {
        document.cookie = `${cookie}=; Max-Age=0; path=/`;
        document.cookie =
          `${cookie}=; Max-Age=0; path=/; domain=.goodfruitcreative.co.uk`;
      });

      window.location.reload();
    }
  }

  if (!ready) {
    return null;
  }

  return (
    <>
      {choice === "accepted" && (
        <GoogleAnalytics gaId={measurementId} />
      )}

      {choice === null ? (
        <aside className="cookie-banner" aria-label="Cookie preferences">
          <div>
            <strong>We use analytics cookies</strong>

            <p>
              They help us understand how people use this website so we
              can improve it. They are only enabled with your permission.
            </p>
          </div>

          <div className="cookie-actions">
            <button
              className="cookie-decline"
              type="button"
              onClick={() => saveChoice("declined")}
            >
              Decline
            </button>

            <button
              className="cookie-accept"
              type="button"
              onClick={() => saveChoice("accepted")}
            >
              Accept analytics
            </button>
          </div>
        </aside>
      ) : (
        <button
          className="cookie-settings"
          type="button"
          onClick={() => setChoice(null)}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}