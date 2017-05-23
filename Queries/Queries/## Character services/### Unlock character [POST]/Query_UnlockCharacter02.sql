INSERT INTO
    playercharacter (player_id, character_id, health_points, attack_points, defense_points, sp_attack_points, sp_defense_points)
VALUES
    ('{0}','{1}','{2}','{3}','{4}','{5}','{6}') ON CONFLICT (player_id, character_id) DO NOTHING; -- {0} = player_id, {1} = character_id, {2} = health_points, {3} = attack_points, {4} = defense_points, {5} = sp_attack_points, {6} = sp_defense_points