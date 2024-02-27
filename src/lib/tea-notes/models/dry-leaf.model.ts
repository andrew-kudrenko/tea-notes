export interface TeaNoteDryLeaf {
	appearance: string;
	aroma: string;
}

export const EMPTY_DRY_LEAF: TeaNoteDryLeaf = {
	appearance: '',
	aroma: ''
} as const;
