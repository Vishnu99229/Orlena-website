import { Navbar } from './components/Navbar';
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

  if (path === '/blog' || path === '/blog/') {
    return <BlogList />;
  }

  if (path.startsWith('/blog/')) {
    return <BlogPost slug={path.replace('/blog/', '')} />;
  }

  return (
    <div className="min-h-screen bg-white">
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
