import type { Plan_Defaults } from '$db/plans';
import { writable, type Writable } from 'svelte/store';
export interface AppStore {
	modal_is_open: boolean;
}

export const appStore: Writable<AppStore> = writable({
	modal_is_open: true
});

export const default_plan_data: Plan_Defaults = {
	welcome_messages: {
		admin: {
			heading: 'Hi!',
			description:
				'Speicher dir die unten stehenden Links ab um auf deine Arbeitsplan zugreifen zu können.'
		},
		user: {
			heading: 'Hi!',
			description:
				'Trag hier einfach deinen Namen ein und such dir danach deine gewünschte Arbeit raus.'
		}
	}
};
