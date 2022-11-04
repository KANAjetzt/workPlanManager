export function get_css_var(var_name: string) {
	const style = getComputedStyle(document.body);
	return style.getPropertyValue(var_name);
}
