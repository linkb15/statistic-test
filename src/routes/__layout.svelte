<script>
	import '../app.css';
	let drawerOpen = true;

	const closeDrawer = () => {
		drawerOpen = false;
	};
</script>

<div class='rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen'>
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
	<div class="container mx-auto drawer-content">
		<nav class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
			<div class="flex-none flex">
				<label for="my-drawer-2" class="btn btn-square btn-ghost flex lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
			<div class="flex-1 px-2 mx-2 flex">
				<a href="/">
					<span class="text-lg font-bold"> DaisyUI </span>
				</a>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>
			</div>
			<div class="flex-none">
				<div class="avatar">
					<div class="rounded-full w-10 h-10 m-1">
						<img src="https://i.pravatar.cc/500?img=32" />
					</div>
				</div>
			</div>
		</nav>
		<main class="px-4">
			<slot />
		</main>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<li>
				<a href="/" on:click={closeDrawer}>Home</a>
			</li>
			<li>
				<a href="/about" on:click={closeDrawer}>About</a>
			</li>
			<li>
				<a href="/settings" on:click={closeDrawer}>Settings</a>
			</li>
		</ul>
	</div>
</div>
