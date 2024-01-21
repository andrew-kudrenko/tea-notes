import type { DeepEmptyOmit } from '$lib/common/types/utility.types';
import { EMPTY_AFTERTASTE } from './aftertaste.model';
import { EMPTY_BREWING } from './brewing.model';
import { EMPTY_DRY_LEAF } from './dry-leaf.model';
import { EMPTY_GENERAL_INFO } from './general-info.model';
import { EMPTY_IMPRESSION } from './impression.model';
import { EMPTY_INFUSION, type TeaNoteInfusion } from './infusion.model';

export function getEmptyTeaNote() {
	return {
		general: { ...EMPTY_GENERAL_INFO },
		brewing: { ...EMPTY_BREWING },
		dryLeaf: { ...EMPTY_DRY_LEAF },
		infusion: { ...EMPTY_INFUSION } as DeepEmptyOmit<TeaNoteInfusion, 'tastes'>,
		aftertaste: { ...EMPTY_AFTERTASTE },
		impression: { ...EMPTY_IMPRESSION }
	};
}
