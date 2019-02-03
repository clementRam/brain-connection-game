import { Config } from './config.model';
import { Team } from './team.model';

export interface Party {
    config: Config;
    teams: Team[];
    winner?: Team;
}
