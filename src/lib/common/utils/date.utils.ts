export function stringifyDateOnly(date: Date) {
	const stringified = date.toISOString();
	return stringified.substring(0, stringified.indexOf('T'));
}
