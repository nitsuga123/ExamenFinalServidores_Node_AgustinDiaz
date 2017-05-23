SELECT
    base_health,
    base_attack,
    base_defense,
    base_sp_attack,
    base_sp_defense
FROM
    character
WHERE
    character_id IN ({0}); -- {0} = character_id