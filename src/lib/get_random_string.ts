export function get_random_string(): string {
	// Generate a random URL Path for the share link
	const uuid = crypto.randomUUID();
	// Only grab the last part - so path is not long
	const uuid_split = uuid.split('-');

	return uuid_split[uuid_split.length - 1];
}
