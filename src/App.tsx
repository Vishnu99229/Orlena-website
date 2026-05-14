import { Navbar } from './components/Navbar';
import SEO from './components/SEO';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Results } from './components/Results';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { DemoCta } from './components/DemoCta';
import { Footer } from './components/Footer';
import { Integrations } from './components/Integrations';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { Calculator } from './components/Calculator';
import { FoodCostCalculator } from './components/FoodCostCalculator';

function App() {
  const path = window.location.pathname;

  if (path === '/terms' || path === '/terms/') {
    return <TermsOfService />;
  }

  if (path === '/privacy' || path === '/privacy/') {
    return <PrivacyPolicy />;
  }

  if (path === '/integrations' || path === '/integrations/') {
    return <Integrations />;
  }

  if (path === '/calculator' || path === '/calculator/') {
    return <Calculator />;
  }

  if (path === '/food-cost-calculator' || path === '/food-cost-calculator/') {
    return <FoodCostCalculator />;
  }

  if (path === '/blog' || path === '/blog/') {
    return <BlogList />;
  }

  if (path.startsWith('/blog/')) {
    return <BlogPost slug={path.replace('/blog/', '')} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" role="main">
      <SEO
        title="Orlena | AI Agent That Increases Restaurant Average Order Value"
        description="Orlena is an AI agent that lives inside your QR menu. Reads every order, recommends the perfect pairing, lifts AOV 10-20% in the first month. Built for independent cafes in India. No hardware. No staff training."
        canonical="https://orlena.talk/"
      />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Results />
      <SocialProof />
      <Pricing />
      <DemoCta />
      <Footer />
    </div>
  );
}

export default App;
