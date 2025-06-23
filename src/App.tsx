import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LibraryManagementSystem from './components/LibraryManagementSystem';

// Components for homepage sections
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Mentor from './components/Mentor';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIAnalyticsDashboard from './components/AIAnalyticsDashboard';
import ECommercePlatform from './components/ECommercePlatform';

// Homepage as a separate component
const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Mentor />
      <Gallery />
    </main>
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/e-commerce-platform" element={<ECommercePlatform />} />
            <Route path="/project/library-management-system" element={<LibraryManagementSystem />} />
            <Route path="/project/ai-analytics-dashboard" element={<AIAnalyticsDashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
