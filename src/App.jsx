import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import OurStoryPage from '@pages/OurStoryPage';
import PrivacyPolicyPage from '@pages/PrivacyPolicyPage';
import TermsPage from '@pages/TermsPage';
import { ScrollToTop } from '@components/common/ScrollToTop';

/**
 * App — Root router
 *
 * All top-level routes are defined here.
 * Layouts that wrap multiple pages (e.g. Navbar + Footer)
 * are assembled inside each Page component.
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/story" element={<OurStoryPage />} />
        <Route path="/about" element={<OurStoryPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </>
  );
}

export default App;
