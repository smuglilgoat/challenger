
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import PrePatchPage from './pages/PrePatchPage';
import Day0Page from './pages/Day0Page';
import DailyPage from './pages/DailyPage';
import WeekPage from './pages/WeekPage';
import ReferencePage from './pages/ReferencePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="pre-patch" element={<PrePatchPage />} />
            <Route path="day0" element={<Day0Page />} />
            <Route path="daily" element={<DailyPage />} />
            <Route path="week/:weekNumber" element={<WeekPage />} />
            <Route path="references" element={<ReferencePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
