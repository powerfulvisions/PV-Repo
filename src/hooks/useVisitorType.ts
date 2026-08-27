import { useCallback, useEffect, useState } from "react";
import { isVisitorMode, VISITOR_TYPE_KEY, VisitorMode } from "../types/visitor";

/**
 * Reads/writes the visitor's identification from localStorage so the
 * greeter is only ever shown once per browser (per spec point 6).
 */
export function useVisitorType() {
  const [visitorType, setVisitorTypeState] = useState<VisitorMode | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(VISITOR_TYPE_KEY);
      if (isVisitorMode(stored)) {
        setVisitorTypeState(stored);
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) - fall back to
      // showing the greeter every visit rather than crashing.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const setVisitorType = useCallback((type: VisitorMode) => {
    try {
      window.localStorage.setItem(VISITOR_TYPE_KEY, type);
    } catch {
      // ignore write failures, state below still drives this session
    }
    setVisitorTypeState(type);
  }, []);

  const resetVisitorType = useCallback(() => {
    try {
      window.localStorage.removeItem(VISITOR_TYPE_KEY);
    } catch {
      // ignore
    }
    setVisitorTypeState(null);
  }, []);

  return { visitorType, isLoaded, setVisitorType, resetVisitorType };
}
