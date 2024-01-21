import type { DeepEmpty } from '$lib/common/types/utility.types';

export const enum TeaKind {
	Green = 'green',
	White = 'white',
	Yellow = 'yellow',
	Oolong = 'oolong',
	Red = 'red',
	Black = 'black',
	ShenPuer = 'shen-puer',
	ShuPuer = 'shu-puer'
}

export interface TeaNoteGeneralInfo {
	title: string;
	kind: TeaKind;
	region: string;
	manufacturer: string;
	manufacturingYear: number;
	pricePerGram: number;
}

export const EMPTY_GENERAL_INFO: DeepEmpty<TeaNoteGeneralInfo> = {
	title: '',
	kind: null,
	manufacturer: '',
	manufacturingYear: null,
	pricePerGram: null,
	region: ''
} as const;

export const TEA_KINDS: Record<TeaKind, string> = {
	[TeaKind.Green]: 'Зелёный',
	[TeaKind.White]: 'Белый',
	[TeaKind.Yellow]: 'Жёлтый',
	[TeaKind.Oolong]: 'Улун',
	[TeaKind.Red]: 'Красный',
	[TeaKind.ShenPuer]: 'Шен Пуэр',
	[TeaKind.ShuPuer]: 'Шу Пуэр',
	[TeaKind.Black]: 'Хэй Ча'
} as const;

export const TEA_KIND_KEYS = Object.keys(TEA_KINDS);
