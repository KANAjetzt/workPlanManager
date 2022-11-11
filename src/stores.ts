import type { Plan, Plan_Defaults } from '$db/plans';
import { readable, writable, type Readable, type Writable } from 'svelte/store';
export interface AppStore {
	is_modal_open: boolean;
	is_plan_created: boolean;
}

export const appStore: Writable<AppStore> = writable({
	is_modal_open: true,
	is_plan_created: false
});

export const default_plan_data: Readable<Plan_Defaults> = readable({
	messages: {
		admin: {
			plan_creation: {
				heading: 'Hi!',
				text: 'Gib deinem Arbeitsplan einen Namen und bestätige mit einem klick auf den Button.'
			},
			links: {
				heading: 'Deine Links',
				text: 'Speicher dir die unten stehenden Links ab um auf deine Arbeitsplan zugreifen zu können.'
			}
		},
		user: {
			welcome: {
				heading: 'Hi!',
				text: 'Trag hier einfach deinen Namen ein und such dir danach deine gewünschte Arbeit raus.'
			}
		}
	}
});

export const plan_data: Writable<Plan> = writable({
	title: '',
	urls: {
		admin: '',
		share: ''
	},
	slug: ''
});
