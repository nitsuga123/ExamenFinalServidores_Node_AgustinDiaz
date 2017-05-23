UPDATE
    leaderboard
SET
    score = {0} -- {0} = losserNewScore
WHERE
    player_id IN ({1}); -- {1} = losserID