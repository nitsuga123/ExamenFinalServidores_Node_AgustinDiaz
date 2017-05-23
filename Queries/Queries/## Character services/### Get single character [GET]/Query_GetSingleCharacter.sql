SELECT
    character_id,
    health_points,
    attack_points,
    defense_points,
    sp_attack_points,
    sp_defense_points
FROM
    playercharacter
WHERE
    player_id IN ({0}) AND character_id IN ({1}); -- {0} = player_id, {1} = character_id