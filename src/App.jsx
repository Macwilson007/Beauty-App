import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import JournalDetailPage from './pages/JournalDetailPage';
import YogaRetreatPage from './pages/YogaRetreatPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import RewardsPage from './pages/RewardsPage';
import StockistsPage from './pages/StockistsPage';
import GenericPage from './pages/GenericPage';

function Layout() {
  return (
    <div className="page-container">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/pages/about" element={<AboutPage />} />
          <Route path="/blogs/journal" element={<JournalPage />} />
          <Route path="/blogs/journal/:slug" element={<JournalDetailPage />} />
          <Route path="/pages/retreat-spring-2026" element={<YogaRetreatPage />} />
          <Route path="/pages/rewards" element={<RewardsPage />} />
          <Route path="/pages/stockist" element={<StockistsPage />} />
          <Route path="/collections/:category" element={<ProductCategoryPage />} />
          <Route path="/pages/*" element={<GenericPage defaultTitle="Brand Information" />} />
          <Route path="/products/*" element={<GenericPage defaultTitle="Product Details" />} />
          <Route path="*" element={<GenericPage defaultTitle="404 - Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
