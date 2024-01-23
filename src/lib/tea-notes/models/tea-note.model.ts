import type { DeepEmptyOmit } from '$lib/common/types/utility.types';

import type { TeaNoteGeneralInfo } from './general-info.model';
import type { TeaNoteBrewing } from './brewing.model';
import type { TeaNoteAftertaste } from './aftertaste.model';
import type { TeaNoteDryLeaf } from './dry-leaf.model';
import type { TeaNoteImpression } from './impression.model';
import { EMPTY_AFTERTASTE } from './aftertaste.model';
import { EMPTY_BREWING } from './brewing.model';
import { EMPTY_DRY_LEAF } from './dry-leaf.model';
import { EMPTY_GENERAL_INFO } from './general-info.model';
import { EMPTY_IMPRESSION } from './impression.model';
import { EMPTY_INFUSION, type TeaNoteInfusion } from './infusion.model';

export interface TeaNote {
	id: number;
	general: TeaNoteGeneralInfo;
	brewing: TeaNoteBrewing;
	dryLeaf: TeaNoteDryLeaf;
	infusion: TeaNoteInfusion;
	aftertaste: TeaNoteAftertaste;
	impression: TeaNoteImpression;
}

export type EmptyTeaNote = ReturnType<typeof getEmptyTeaNote>;

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
