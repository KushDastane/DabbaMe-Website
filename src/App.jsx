import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';

/**
 * App — Root router
 *
 * All top-level routes are defined here.
 * Layouts that wrap multiple pages (e.g. Navbar + Footer)
 * are assembled inside each Page component.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Future routes: /how-it-works, /for-kitchens, /about, /contact */}
    </Routes>
  );
}

export default App;
