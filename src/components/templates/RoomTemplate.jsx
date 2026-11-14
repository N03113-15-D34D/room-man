export function RoomTemplate({ hud, scene, dialogue, onFirstInteraction }) {
  return (
    <main
      className="container-fluid bg-black text-white vh-100 d-flex justify-content-center align-items-center p-3"
      onClick={onFirstInteraction}
    >
      <div
        className="container h-100 d-flex flex-column align-items-center justify-content-between pb-2"
        style={{ maxWidth: '820px' }}
      >
        {hud}
        {scene}
        {dialogue}
      </div>
    </main>
  );
}