import { useState, useEffect } from "react";

export function useFetchMusicRecommendations() {
  const [songs, setSongs] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("pop");

  useEffect(() => {
    const url = `https://spotify23.p.rapidapi.com/recommendations/?limit=36&seed_genres=${selectedGenre}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d1af38e1e3msh092dd893a0dc5b6p1a17f9jsn79286d597314",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [selectedGenre]);

  const handlePlayClick = (song) => {
    setCurrentSong(song);
    setCurrentSongId(song.id);
  };

  return {
    songs,
    loading,
    currentSong,
    currentSongId,
    handlePlayClick,
    selectedGenre,
    setSelectedGenre,
  };
}
