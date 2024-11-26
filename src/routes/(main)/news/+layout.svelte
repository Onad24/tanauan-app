<script>
	export const prerender = true;
	let { children } = $props();
	let pageSelected = $state('municipal');
</script>

<div id="content" class="w-screen flex-1 overflow-auto pb-10 scrollbar-none">
	{@render children()}
</div>

<div class=" bg-neutral absolute bottom-0 flex w-full flex-none justify-between pb-2">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href="./municipal"
		class={`flex flex-1 justify-center pt-2 ${pageSelected == 'municipal' ? 'border-t-accent border-t-2' : ''}`}
		onclick={() => (pageSelected = 'municipal')}
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
		href="./barangay"
		class={`flex flex-1 justify-center pt-2 ${pageSelected == 'barangay' ? 'border-t-accent border-t-2' : ''}`}
		onclick={() => (pageSelected = 'barangay')}
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
</div>
