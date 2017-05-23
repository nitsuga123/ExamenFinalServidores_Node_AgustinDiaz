SELECT
    character.character_id,
    character.character_name,
    playercharacter.health_points,
    playercharacter.attack_points,
    playercharacter.defense_points,
    playercharacter.sp_attack_points,
    playercharacter.sp_defense_points,
    character.element
FROM
    playercharacter
INNER JOIN
    character ON character.character_id = playercharacter.character_id
WHERE
    playercharacter.player_id IN ({0}) -- {0} = player_id
ORDER BY
    character.character_id;