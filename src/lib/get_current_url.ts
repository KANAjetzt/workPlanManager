export function get_current_url_splitted(divider: string): Array<string> {
	return window.location.href.split(divider);
}
