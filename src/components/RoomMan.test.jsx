import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RoomProvider } from '../context/RoomContext';
import { RoomManPage } from '../pages/RoomManPage';

describe("Room_man - The Forgotten Man's Tree", () => {
  const renderRoom = () =>
    render(
      <RoomProvider>
        <MemoryRouter>
          <RoomManPage />
        </MemoryRouter>
      </RoomProvider>
    );

  test('renderiza la habitación del árbol y el HUD inicial', () => {
    renderRoom();
    expect(screen.getByRole('button', { name: /habitación del árbol/i })).toBeInTheDocument();
    expect(screen.getByText(/AUDIO/i)).toBeInTheDocument();
  });

  test('permite interactuar al hacer clic en el árbol', () => {
    renderRoom();
    const treeButton = screen.getByRole('button', { name: /habitación del árbol/i });
    fireEvent.click(treeButton);
    expect(treeButton).toBeEnabled();
  });
});
