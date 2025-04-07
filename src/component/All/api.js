export async function GameSearch(pageNum, GameId) {
  const response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${GameId}`,
    {
      headers: {
        "x-rapidapi-key": "5ba1f6589dmshdcd3dde6b873765p10b1aajsn0c581656da80",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );
  // throw new Error("its an error");
  return response.json();
}
export async function AllGames() {
  const response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    {
      headers: {
        "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );
  // throw new Error("its an error");
  return response.json();
}
