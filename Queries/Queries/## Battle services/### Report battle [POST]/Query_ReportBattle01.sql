SELECT
    player_id,
    score
FROM
    leaderboard
WHERE
    player_id IN ({0}, {1}); -- {0} = winnerID, {1} = losserID