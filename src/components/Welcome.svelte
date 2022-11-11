<script lang="ts">
	import { plan_data } from './../stores.ts';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import type { Message } from '$db/plans';
	import { enhance } from '$app/forms';
	import { appStore } from '../stores';
	import Modal from '$lib/Modal.svelte';
	import Link from '$comps/inputs/Link.svelte';
	import Btn_Check from '$comps/buttons/Btn_Check.svelte';
	import Name from '$comps/inputs/Name.svelte';

	export let messages: Message;
	export let data: PageData;
	export let form: ActionData;
</script>

<Modal name={'is_modal_open'}>
	<div class="welcome">
		<div class="message">
			<h2>{messages[!$appStore.is_plan_created ? 'plan_creation' : 'links'].heading}</h2>
			<p>{messages[!$appStore.is_plan_created ? 'plan_creation' : 'links'].text}</p>
		</div>

		<form
			method="POST"
			use:enhance={({ form, data, cancel }) => {
				console.log(form);
				console.log(data);

				return ({ result }) => {
					if (result.type === 'success') {
						// show urls
						$appStore.is_plan_created = true;
						// update plan data store
						const data = result.data?.data;

						delete data._id;
						$plan_data = data;
					}
				};
			}}
		>
			<div class="name">
				<Name readonly={$appStore.is_plan_created} disabled={$appStore.is_plan_created} />
			</div>

			{#if $appStore.is_plan_created}
				<div class="links">
					<div class="link">
						<Link placeholder={'Admin Link'} value={$plan_data.urls.admin} />
					</div>
					<div class="link">
						<Link placeholder={'Share Link'} value={$plan_data.urls.share} />
					</div>
				</div>
			{/if}
			<div class="btn_check">
				<Btn_Check border_radius={1} />
			</div>
		</form>
	</div>
</Modal>

<style lang="postcss">
	.welcome {
		position: relative;
		padding: 1.5rem 2rem;
		width: 80vw;
		max-width: 25rem;
		background-color: hsla(0, 0%, 0%, 0.4);
		border-radius: 3px;
	}

	.message {
		margin-bottom: 3rem;
		max-width: 25ch;
	}

	p,
	h2 {
		color: var(--welcome_message_text_color);
	}

	h2 {
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.6rem;
	}

	p {
		font-size: 0.8rem;
		font-weight: 400;
	}

	.name {
		margin-bottom: 3rem;
	}

	.links {
		margin-bottom: 4rem;
	}

	.link {
		margin-bottom: 1.75rem;
	}

	.btn_check {
		--height: 2.6rem;
		position: absolute;
		width: 90%;
		bottom: calc(var(--height) / 2 * -1);
		left: 1rem;
		height: var(--height);
	}
</style>
