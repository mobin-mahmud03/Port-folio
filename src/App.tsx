import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIDo } from './components/WhatIDo';
import { ProcessAndWork } from './components/ProcessAndWork';
import { AboutAndTools } from './components/AboutAndTools';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  // Resume link configured to your Google Drive resume
  const resumeUrl = 'https://drive.google.com/file/d/1uxALrEJ5UvhPQpCvDBH-oixQ2YiPBd6X/view?usp=drive_link';

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#0b0908] text-[#f2ece2] editorial-grid-bg relative flex flex-col selection:bg-[#d83a34] selection:text-[#f2ece2]">
      {/* Top Navigation */}
      <Navbar resumeUrl={resumeUrl} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero resumeUrl={resumeUrl} onOpenResume={() => setIsResumeOpen(true)} />

        {/* What I Do — 5 Core Pillars */}
        <WhatIDo />

        {/* Process & 2 Featured Projects */}
        <ProcessAndWork />

        {/* About Me & 16 Tech Stack Tools */}
        <AboutAndTools />
      </main>

      {/* Footer & GitHub QR Code */}
      <Footer onShowToast={showToast} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={resumeUrl}
      />

      {/* Interactive Action Toast */}
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}

export default App;
