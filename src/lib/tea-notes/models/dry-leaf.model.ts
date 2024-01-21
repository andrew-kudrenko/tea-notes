import type { DeepEmpty } from '$lib/common/types/utility.types';

export interface TeaNoteDryLeaf {
	appearance: string;
	aroma: string;
}

export const EMPTY_DRY_LEAF: DeepEmpty<TeaNoteDryLeaf> = {
	appearance: '',
	aroma: ''
} as const;
