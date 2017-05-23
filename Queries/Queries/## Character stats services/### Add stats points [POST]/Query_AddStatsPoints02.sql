UPDATE
    playercharacter
SET
    {0} = {1} -- {0} = statToIncrease, EX: health_points, {1} = newPoints
WHERE
    player_id IN ({2}) AND character_id IN ({3}); -- {2} = player_id, {3} = character_id