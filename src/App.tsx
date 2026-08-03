
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LengthConverter from "./pages/converters/LengthConverter";
import LengthPairConverter from "./pages/converters/LengthPairConverter";
import WeightConverter from "./pages/converters/WeightConverter";
import WeightPairConverter from "./pages/converters/WeightPairConverter";
import VolumeConverter from "./pages/converters/VolumeConverter";
import VolumePairConverter from "./pages/converters/VolumePairConverter";
import TemperatureConverter from "./pages/converters/TemperatureConverter";
import TemperaturePairConverter from "./pages/converters/TemperaturePairConverter";
import AreaConverter from "./pages/converters/AreaConverter";
import AreaPairConverter from "./pages/converters/AreaPairConverter";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/converter/length" element={<LengthConverter />} />
          <Route path="/converter/length/:pair" element={<LengthPairConverter />} />
          <Route path="/converter/weight" element={<WeightConverter />} />
          <Route path="/converter/weight/:pair" element={<WeightPairConverter />} />
          <Route path="/converter/volume" element={<VolumeConverter />} />
          <Route path="/converter/volume/:pair" element={<VolumePairConverter />} />
          <Route path="/converter/temperature" element={<TemperatureConverter />} />
          <Route path="/converter/temperature/:pair" element={<TemperaturePairConverter />} />
          <Route path="/converter/area" element={<AreaConverter />} />
          <Route path="/converter/area/:pair" element={<AreaPairConverter />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
