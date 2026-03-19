import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NavHistoryProvider } from "./context/NavHistoryContext";
import RouteTracker from "./components/RouteTracker";
import Home from "./pages/Home";
import LibraryHub from "./pages/LibraryHub";
import PopulationGenomics from "./pages/PopulationGenomics";
import HumanHealth from "./pages/HumanHealth";
import Journal from "./pages/Journal";
import LabStudies from "./pages/LabStudies";
import LabGithub from "./pages/LabGithub";
import LabProjects from "./pages/LabProjects";
import History from "./pages/History";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* SNP Library */}
      <Route path="/library" component={LibraryHub} />
      <Route path="/library/population-genomics" component={PopulationGenomics} />
      <Route path="/library/population-genomics/:slug" component={PopulationGenomics} />
      <Route path="/library/human-health" component={HumanHealth} />
      <Route path="/library/human-health/:slug" component={HumanHealth} />
      <Route path="/library/history" component={History} />

      {/* SNP Journal */}
      <Route path="/journal" component={Journal} />

      {/* SNP Lab */}
      <Route path="/lab/studies" component={LabStudies} />
      <Route path="/lab/github" component={LabGithub} />
      <Route path="/lab/projects" component={LabProjects} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <LanguageProvider>
          <NavHistoryProvider>
            <RouteTracker />
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </NavHistoryProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
