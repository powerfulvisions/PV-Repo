import { FullSite } from "./components/FullSite";
import { PathwayView } from "./components/PathwayView";
import { VisitorGreeter } from "./components/VisitorGreeter";
import { useVisitorType } from "./hooks/useVisitorType";

export default function App() {
  const { visitorType, isLoaded, setVisitorType, resetVisitorType } = useVisitorType();

  // Avoid a greeter flash while localStorage is read on mount.
  if (!isLoaded) {
    return <div className="min-h-screen bg-white" />;
  }

  // Spec point 6: already-identified visitors skip straight to their pathway.
  if (visitorType === null) {
    return <VisitorGreeter onSelect={setVisitorType} />;
  }

  if (visitorType === "explore") {
    return <FullSite onPersonalize={resetVisitorType} />;
  }

  return <PathwayView visitorType={visitorType} onChangePathway={resetVisitorType} />;
}
