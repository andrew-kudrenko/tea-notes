import type { DeepEmpty } from '$lib/common/types/utility.types';

export interface TeaNoteImpression {
	rate: number;
	comment: string;
	wellCombinedWith: string;
}

export const EMPTY_IMPRESSION: DeepEmpty<TeaNoteImpression> = {
	comment: '',
	rate: null,
	wellCombinedWith: ''
} as const;
