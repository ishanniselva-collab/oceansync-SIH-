import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import DemoMockup from '@/components/DemoMockup';
import ValueProps from '@/components/ValueProps';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <DemoMockup />
        <ValueProps />
      </main>
      <Footer />
    </div>
  );
}

export default App;
