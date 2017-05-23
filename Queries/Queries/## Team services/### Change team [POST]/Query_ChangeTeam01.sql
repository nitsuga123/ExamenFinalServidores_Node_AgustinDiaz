SELECT
    character_id
FROM
    playercharacter
WHERE
    player_id IN ({0}) -- {0} = player_id
ORDER BY
    character_id;