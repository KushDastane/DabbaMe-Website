import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@components/common/ScrollToTop';

// Code split routes for maximum performance and tree-shaking
const HomePage = lazy(() => import('@pages/HomePage'));
const OurStoryPage = lazy(() => import('@pages/OurStoryPage'));
const PrivacyPolicyPage = lazy(() => import('@pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@pages/TermsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

/**
 * Route fallback loader
 */
function PageLoader() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-brand-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/**
 * App — Root router
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/story" element={<OurStoryPage />} />
          <Route path="/about" element={<OurStoryPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
