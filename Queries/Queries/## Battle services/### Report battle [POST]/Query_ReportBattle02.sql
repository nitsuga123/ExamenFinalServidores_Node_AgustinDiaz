UPDATE
    leaderboard
SET
    score = {0} -- {0} = winnerNewScore
WHERE
    player_id IN ({1}); -- {1} = winnerID