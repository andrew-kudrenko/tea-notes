export interface TeaNoteAftertaste {
	intensity: number | null;
	duration: number | null;
	comment: string | null;
}

export const EMPTY_AFTERTASTE: TeaNoteAftertaste = {
	comment: '',
	duration: null,
	intensity: null
} as const;
