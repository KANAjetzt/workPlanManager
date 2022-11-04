<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import Link from '$comps/inputs/Link.svelte';
	import Btn_Check from './buttons/Btn_Check.svelte';
</script>

<Modal name={'modal_is_open'}>
	<div class="welcome">
		<div class="message">
			<h2>Hi!</h2>
			<p>Speicher dir die unten stehenden Links ab um auf deine Arbeitsplan zugreifen zu können.</p>
		</div>
		<div class="links">
			<div class="link">
				<Link placeholder={'Admin Link'} />
			</div>
			<div class="link">
				<Link placeholder={'Share Link'} />
			</div>
		</div>
		<div class="btn_check">
			<Btn_Check border_radius={1} />
		</div>
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

	.links {
		margin-bottom: 3rem;
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
