UPDATE
    team
SET
    character_id_1 = {0}, -- {0} = character_id_1
    character_id_2 = {1}, -- {1} = character_id_2
    character_id_3 = {2} -- {2} = character_id_3
WHERE
    player_id IN ({3}); -- {3} = player_id