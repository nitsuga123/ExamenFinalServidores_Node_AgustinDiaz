SELECT
    {0} -- {0} = statToIncrease, EX: health_points
FROM
    playercharacter
WHERE
    player_id IN ({1}) AND character_id IN ({2}); -- {1} = player_id, {2} = character_id