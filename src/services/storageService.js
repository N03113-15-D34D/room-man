const EGG_KEY = 'room_man_egg_count';

export const storageService = {
  getEggCount: () => Number(localStorage.getItem(EGG_KEY) || 0),
  setEggCount: (count) => localStorage.setItem(EGG_KEY, String(count)),
  reset: () => localStorage.removeItem(EGG_KEY)
};
