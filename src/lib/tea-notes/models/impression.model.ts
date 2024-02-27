export interface TeaNoteImpression {
	rate: number | null;
	comment: string;
	wellCombinedWith: string;
}

export const EMPTY_IMPRESSION: TeaNoteImpression = {
	comment: '',
	rate: null,
	wellCombinedWith: ''
} as const;
