import { Score } from './score.model';

export interface Team {
    id: number;
    name: string;
    score: Score;
    playing: boolean;
}
