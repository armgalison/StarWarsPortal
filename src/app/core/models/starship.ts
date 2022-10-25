import { Character } from './character';

export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: number;
    MGLT: number;
    starship_class: string;
    pilots: string[] | Character[];
    films: string[];
    url: string;
}
