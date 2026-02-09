import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarketplaceLogos from './components/MarketplaceLogos';
import ProductShowcase from './components/ProductShowcase';
import ToolsSection from './components/ToolsSection';
import TelegramFeature from './components/TelegramFeature';
import PerksSection from './components/PerksSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MarketplaceLogos />
      <ProductShowcase />
      <ToolsSection />
      <TelegramFeature />
      <PerksSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <CTASection />
      <BlogSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
