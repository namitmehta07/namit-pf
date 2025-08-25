import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SparkPointEducation from "./pages/projects/SparkPointEducation";
import TechfestSliet from "./pages/projects/TechfestSliet";
import MadhuramSliet from "./pages/projects/MadhuramSliet";
import BaristaSangrur from "./pages/projects/BaristaSangrur";
import LaPinozPizza from "./pages/projects/LaPinozPizza";
import A2CreatesMedia from "./pages/projects/A2CreatesMedia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/spark-point-education" element={<SparkPointEducation />} />
          <Route path="/projects/techfest-sliet" element={<TechfestSliet />} />
          <Route path="/projects/madhuram-sliet" element={<MadhuramSliet />} />
          <Route path="/projects/barista-sangrur" element={<BaristaSangrur />} />
          <Route path="/projects/la-pinoz-pizza" element={<LaPinozPizza />} />
          <Route path="/projects/a2-creates-media" element={<A2CreatesMedia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
