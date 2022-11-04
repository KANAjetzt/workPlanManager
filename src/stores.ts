import { writable, type Writable } from 'svelte/store';

export interface AppStore {
	modal_is_open: boolean;
}

export const appStore: Writable<AppStore> = writable({
	modal_is_open: true
});
