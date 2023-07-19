"use client";

export function handleFavList(ids: string[]) {
  const storage = typeof window === undefined ? null : window.localStorage;
  const storage_favs = storage && storage.getItem("favs");
  let newFavs: string[] = storage_favs ? JSON.parse(storage_favs) : [];

  for (let i = 0; i < ids.length; i++) {
    const isIdInFavs = newFavs.includes(ids[i]);

    if (isIdInFavs) {
      newFavs = newFavs.filter((value) => value !== ids[i]);
      ids.splice(i, 1);
    }
  }

  newFavs.push(...ids);
  storage && storage.setItem("favs", JSON.stringify(newFavs));
}
