import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoomProvider } from './context/RoomContext';
import { TitlePage } from './pages/TitlePage';
import { RoomManPage } from './pages/RoomManPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <RoomProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/room-man" element={<RoomManPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RoomProvider>
  );
}

export default App;
