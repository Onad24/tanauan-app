<script>
	import { onMount } from 'svelte';

	export const prerender = true;
	let { children } = $props();

	let pageSelected = $state('home');

	let lastScrollTop = $state(0);
	let scrollDirection = $state('');

	// @ts-ignore
	async function handleChildScroll(event) {
		const currentScrollTop = event.target.scrollTop;

		if (currentScrollTop > lastScrollTop) {
			scrollDirection = 'down';
		} else if (currentScrollTop < lastScrollTop) {
			scrollDirection = 'up';
		}

		lastScrollTop = currentScrollTop;
	}

	onMount(() => {
		const childDiv = document.getElementById('content');
		childDiv?.addEventListener('scroll', handleChildScroll);

		return () => {
			childDiv?.removeEventListener('scroll', handleChildScroll);
		};
	});
</script>

<div class="flex max-h-screen min-h-screen flex-col">
	<div
		class={`min-w-screen max-w-screen bg-neutral flex flex-none justify-between px-2 py-1 ${scrollDirection == 'down' ? 'hidden' : ''}`}
	>
		<a href="/home" class="text-accent flex-1 text-2xl font-bold">tanauan</a>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="flex-none p-2">
			<svg
				width="16px"
				height="16px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#F6D776"
				stroke-width="2.4"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
						fill="#F6D776"
					></path>
				</g></svg
			>
		</button>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="/home" class="flex-none p-2">
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<path
						d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<path
						d="M13.4955 13.25H13.5045"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<path
						d="M9.9955 13.25H10.0045"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
					<path
						d="M6.4955 13.25H6.5045"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</g></svg
			></a
		>
	</div>
	<div
		class="min-w-screen max-w-screen bg-neutral flex flex-none justify-between pt-2 drop-shadow-xl"
	>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			href="/home"
			class={`flex flex-1 justify-center pb-2 pt-1 ${pageSelected == 'home' ? 'border-b-2 border-b-[#F6D776]' : ''}`}
			onclick={() => (pageSelected = 'home')}
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-linecap="round"
					></path>
					<path d="M15 18H9" stroke="#F6D776" stroke-width="2.4" stroke-linecap="round"></path>
				</g></svg
			></a
		>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			href="/news/municipal"
			class={`flex flex-1 justify-center pb-2 pt-1 ${pageSelected == 'news' ? 'border-b-2 border-b-[#F6D776]' : ''}`}
			onclick={() => (pageSelected = 'news')}
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 -2 21 21"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				fill="#F6D776"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<title>news_grid [#1536]</title> <desc>Created with Sketch.</desc> <defs> </defs>
					<g id="Page-1" stroke-width="2.1" fill="none" fill-rule="evenodd">
						<g
							id="Dribbble-Light-Preview"
							transform="translate(-219.000000, -162.000000)"
							fill="#F6D776"
						>
							<g id="icons" transform="translate(56.000000, 160.000000)">
								<path
									d="M177.7,17 L181.9,17 L181.9,4 L177.7,4 L177.7,17 Z M165.1,7 L175.6,7 L175.6,4 L165.1,4 L165.1,7 Z M165.1,12 L175.6,12 L175.6,9 L165.1,9 L165.1,12 Z M165.1,17 L175.6,17 L175.6,14 L165.1,14 L165.1,17 Z M163,19 L184,19 L184,2 L163,2 L163,19 Z"
									id="news_grid-[#1536]"
								>
								</path>
							</g>
						</g>
					</g>
				</g></svg
			></a
		>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			href="/marketplace"
			class={`flex flex-1 justify-center pb-2 pt-1 ${pageSelected == 'marketplace' ? 'border-b-2 border-b-[#F6D776]' : ''}`}
			onclick={() => (pageSelected = 'marketplace')}
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				fill="#F6D776"
				stroke="#F6D776"
				stroke-width="30.72"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier"
					><path
						fill="#F6D776"
						d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
					></path></g
				></svg
			></a
		>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			href="/notifications"
			class={`flex flex-1 justify-center pb-2 pt-1 ${pageSelected == 'notifications' ? 'border-b-2 border-b-[#F6D776]' : ''}`}
			onclick={() => (pageSelected = 'notifications')}
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M9.0003 21H15.0003M18.0003 8.6C18.0003 7.11479 17.3682 5.69041 16.2429 4.6402C15.1177 3.59 13.5916 3 12.0003 3C10.409 3 8.88288 3.59 7.75766 4.6402C6.63245 5.69041 6.0003 7.11479 6.0003 8.6C6.0003 11.2862 5.32411 13.1835 4.52776 14.4866C3.75646 15.7486 3.37082 16.3797 3.38515 16.5436C3.40126 16.7277 3.4376 16.7925 3.58633 16.9023C3.71872 17 4.34793 17 5.60636 17H18.3943C19.6527 17 20.2819 17 20.4143 16.9023C20.563 16.7925 20.5994 16.7277 20.6155 16.5436C20.6298 16.3797 20.2441 15.7486 19.4729 14.4866C18.6765 13.1835 18.0003 11.2862 18.0003 8.6Z"
						stroke="#F6D776"
						stroke-width="2.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</g></svg
			></a
		>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			href="/menu"
			class={`flex flex-1 justify-center pb-2 pt-1 ${pageSelected == 'menu' ? 'border-b-2 border-b-[#F6D776]' : ''}`}
			onclick={() => (pageSelected = 'menu')}
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M4 6H20M4 12H20M4 18H20"
						stroke="#F6D776"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</g></svg
			></a
		>
	</div>
	<div id="content" class="w-screen flex-1 overflow-auto scrollbar-none">
		{@render children()}
	</div>
</div>
