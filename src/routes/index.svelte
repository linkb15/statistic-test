<script>
	import { operationStore, query, setClient } from '@urql/svelte';
	import client from '$lib/graphql/client';
	import Chart from 'svelte-frappe-charts';

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9]
			}
		]
	};
	setClient(client);
	const todos = operationStore(`
    query {
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    ships {
      name
      home_port
      image
    }
  }
}
    `);

	query(todos);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $todos.fetching}
	<p>Loading...</p>
{:else if $todos.error}
	<p>Oh no... {$todos.error.message}</p>
{:else}
	<ul>
		{#each $todos.data.launchesPast as todo}
			<li>{todo.mission_name}</li>
		{/each}
	</ul>
{/if}

<Chart {data} type="line" />
<Chart {data} type="pie" />

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
				<th />
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="w-12 h-12 mask mask-squircle">
								<img
									src="https://i.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div class="font-bold">Hart Hagerty</div>
							<div class="text-sm opacity-50">United States</div>
						</div>
					</div>
				</td>
				<td>
					Zemlak, Daniel and Leannon

					<br />
					<span class="badge badge-outline badge-sm">Desktop Support Technician</span>
				</td>
				<td>Purple</td>
				<th>
					<button class="btn btn-ghost btn-xs">details</button>
				</th>
			</tr>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="w-12 h-12 mask mask-squircle">
								<img
									src="https://i.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div class="font-bold">Brice Swyre</div>
							<div class="text-sm opacity-50">China</div>
						</div>
					</div>
				</td>
				<td>
					Carroll Group

					<br />
					<span class="badge badge-outline badge-sm">Tax Accountant</span>
				</td>
				<td>Red</td>
				<th>
					<button class="btn btn-ghost btn-xs">details</button>
				</th>
			</tr>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="w-12 h-12 mask mask-squircle">
								<img
									src="https://i.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div class="font-bold">Marjy Ferencz</div>
							<div class="text-sm opacity-50">Russia</div>
						</div>
					</div>
				</td>
				<td>
					Rowe-Schoen

					<br />
					<span class="badge badge-outline badge-sm">Office Assistant I</span>
				</td>
				<td>Crimson</td>
				<th>
					<button class="btn btn-ghost btn-xs">details</button>
				</th>
			</tr>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="w-12 h-12 mask mask-squircle">
								<img
									src="https://i.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Brazil</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner

					<br />
					<span class="badge badge-outline badge-sm">Community Outreach Specialist</span>
				</td>
				<td>Indigo</td>
				<th>
					<button class="btn btn-ghost btn-xs">details</button>
				</th>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
