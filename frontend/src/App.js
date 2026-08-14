import "@/App.css";
import { ReactLenis } from "lenis/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import GrainOverlay from "@/components/site/GrainOverlay";
import Home from "@/pages/Home";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-[#050505] min-h-screen">
        <GrainOverlay />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" theme="dark" />
      </div>
    </ReactLenis>
  );
}

export default App;
