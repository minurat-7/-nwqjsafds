import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './components/home/HomePage';
import { PhaseDetail } from './components/phase/PhaseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/phase/:phaseId" element={<PhaseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
