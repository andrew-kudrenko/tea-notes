export const enum Taste {
	Sweet = 'sweet',
	Salty = 'salty',
	Sour = 'sour',
	Bitter = 'bitter',
	Umami = 'umami'
}

export const TASTES: Record<Taste, string> = {
	[Taste.Sweet]: 'Сладкий',
	[Taste.Bitter]: 'Горький',
	[Taste.Sour]: 'Кислый',
	[Taste.Salty]: 'Солёный',
	[Taste.Umami]: 'Умами'
} as const;

export const TASTE_KEYS = Object.keys(TASTES);

export interface TeaNoteInfusion {
	appearance: string;
	aroma: string;
	taste: string;
	tastes: Taste[];
	balance: number | null;
	bouquet: number | null;
	extractivity: number | null;
	tartness: number | null;
	viscosity: number | null;
	density: number | null;
}

export const EMPTY_INFUSION = {
	appearance: '',
	aroma: '',
	taste: '',
	tastes: [],
	balance: null,
	bouquet: null,
	density: null,
	extractivity: null,
	tartness: null,
	viscosity: null
} as const satisfies TeaNoteInfusion;
