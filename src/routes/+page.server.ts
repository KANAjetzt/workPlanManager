import { create_collection } from '$db/createCollection';
import type { PageServerData } from './$types';

const data = {
	title: 'test plan',
	welcome_message: {
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
	},
	links: {
		admin: 'http://someNiceLink.com/wadawd',
		user: 'http://someNiceLink.com/dwdasw'
	},
	blocks: [
		{
			title: 'Sonntag',
			date: '2022-09-25',
			time: null,
			count: {
				current: 4,
				needed: 8
			},
			sub_blocks: [
				{
					title: 'Küche',
					count: {
						current: 4,
						needed: 8
					},
					sub_blocks: [
						{
							title: '16:00 Uhr',
							time: 'T14:00:00.000Z',
							sub_blocks: [
								{
									title: 'Patrick Roth'
								},
								{
									title: 'Katja Roth'
								},
								{
									title: 'Martina Jäger'
								},
								{
									title: 'Benjamin Widemann'
								}
							]
						},
						{
							title: '20:00 Uhr',
							time: 'T18:00:00.000Z',
							sub_blocks: []
						}
					]
				}
			]
		}
	]
};
