export const enum TeaDishware {
	Teapot = 'teapot',
	Gaiwan = 'gaiwan',
	Cup = 'cup',
	Thermos = 'thermos',
	Other = 'other'
}

export const enum TeaBrewingMethod {
	Spill = 'spill',
	Infuse = 'infuse',
	Boil = 'boil',
	Other = 'other'
}

export interface TeaNoteBrewing {
	method: TeaBrewingMethod | null;
	dishware: TeaDishware | null;
	volume: number | null;
	temperature: number | null;
	quantity: number | null;
}

export const EMPTY_BREWING: TeaNoteBrewing = {
	method: null,
	dishware: null,
	quantity: null,
	temperature: null,
	volume: null
} as const;

export const DISHWARES: Record<TeaDishware, string> = {
	[TeaDishware.Teapot]: 'Чайник',
	[TeaDishware.Gaiwan]: 'Гайвань',
	[TeaDishware.Cup]: 'Кружка',
	[TeaDishware.Thermos]: 'Термос',
	[TeaDishware.Other]: 'Другое'
} as const;

export const DISHWARE_KEYS = Object.keys(DISHWARES);

export const METHODS: Record<TeaBrewingMethod, string> = {
	[TeaBrewingMethod.Spill]: 'Пролив',
	[TeaBrewingMethod.Infuse]: 'Настаивание',
	[TeaBrewingMethod.Boil]: 'Варка',
	[TeaBrewingMethod.Other]: 'Другое'
};

export const METHOD_KEYS = Object.keys(METHODS);
