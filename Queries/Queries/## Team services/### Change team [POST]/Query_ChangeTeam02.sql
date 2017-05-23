UPDATE
    playercharacter
SET
    health_points = character.base_health,
    attack_points = character.base_attack,
    defense_points = character.base_defense,
    sp_attack_points = character.base_sp_attack,
    sp_defense_points = character.base_sp_defense
FROM
    character
WHERE
    playercharacter.player_id IN ({0}) AND playercharacter.character_id IN ({1}) AND character.character_id IN ({2}); -- {0} = player_id, {1} & {2} = character_id