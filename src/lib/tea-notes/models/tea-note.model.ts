import type { TeaNoteGeneralInfo } from './general-info.model';
import type { TeaNoteBrewing } from './brewing.model';
import type { TeaNoteAftertaste } from './aftertaste.model';
import type { TeaNoteDryLeaf } from './dry-leaf.model';
import type { TeaNoteImpression } from './impression.model';
import type { TeaNoteInfusion } from './infusion.model';

export interface TeaNote {
	general: TeaNoteGeneralInfo;
	brewing: TeaNoteBrewing;
	dryLeaf: TeaNoteDryLeaf;
	infusion: TeaNoteInfusion;
	aftertaste: TeaNoteAftertaste;
	impression: TeaNoteImpression;
}
