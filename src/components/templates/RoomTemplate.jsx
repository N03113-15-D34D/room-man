export function RoomTemplate({ hud, scene, dialogue }) {
  return (
    <div className="min-vh-100 bg-black text-white d-flex flex-column justify-content-between">
      {hud}
      <main className="container d-flex flex-column align-items-center justify-content-center flex-grow-1 py-3" style={{ maxWidth: '680px' }}>
        {scene}
        {dialogue}
      </main>
    </div>
  );
}
