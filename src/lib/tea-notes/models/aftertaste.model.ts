import type { DeepEmpty } from '$lib/common/types/utility.types';

export interface TeaNoteAftertaste {
	intensity: number;
	duration: number;
	comment: string;
}

export const EMPTY_AFTERTASTE: DeepEmpty<TeaNoteAftertaste> = {
	comment: '',
	duration: null,
	intensity: null
} as const;
