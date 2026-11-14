import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoomProvider } from './context/RoomContext';
import { TitlePage } from './pages/TitlePage';
import { RoomManPage } from './pages/RoomManPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <RoomProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/room" element={<RoomManPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RoomProvider>
  );
}
