<script>
	import * as m from '$lib/paraglide/messages.js';

	let rooms = $state([
		{
			id: 1,
			name: m.room_tentWhite_name(),
			description: m.room_tentWhite_description(),
			amenities: [
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_comfortableBedding',
				'amenities_outdoorSeating',
				'amenities_tv',
				'amenities_wifi',
				'amenities_bathroom',
				'amenities_bathtub'
			],
			images: ['/rooms/white_tent/1.png', '/rooms/white_tent/2.png', '/rooms/white_tent/3.png']
		},
		{
			id: 2,
			name: m.room_tentMongo_name(),
			description: m.room_tentMongo_description(),
			amenities: [
				'amenities_domeDesign',
				'amenities_mountainView',
				'amenities_traditionalDecor',
				'amenities_privateSpace',
				'amenities_wifi'
			],
			images: [
				'/rooms/dome_mongo_tent/1.png',
				'/rooms/dome_mongo_tent/2.png',
				'/rooms/dome_mongo_tent/3.png'
			]
		},
		{
			id: 3,
			name: m.room_privateHouse_name(),
			description: m.room_privateHouse_description(),
			amenities: [
				'amenities_fullKitchen',
				'amenities_livingRoom',
				'amenities_privateEntrance',
				'amenities_gardenArea',
				'amenities_wifi'
			],
			images: [
				'/rooms/private_house/1.png',
				'/rooms/private_house/2.png',
				'/rooms/private_house/3.png'
			]
		},
		{
			id: 4,
			name: m.room_tentLarge_name(),
			description: m.room_tentLarge_description(),
			amenities: [
				'amenities_largeSpace',
				'amenities_multipleBeds',
				'amenities_loungeArea',
				'amenities_outdoorDeck',
				'amenities_wifi'
			],
			images: ['/rooms/large_tent/1.png', '/rooms/large_tent/2.png', '/rooms/large_tent/3.png']
		},
		{
			id: 5,
			name: m.room_domeSuite_name(),
			description: m.room_domeSuite_description(),
			amenities: [
				'amenities_premiumBedding',
				'amenities_ensuiteBathroom',
				'amenities_scenicViews',
				'amenities_deluxeAmenities',
				'amenities_wifi'
			],
			images: ['/rooms/dome_suite/1.png', '/rooms/dome_suite/2.png', '/rooms/dome_suite/3.png']
		},
		{
			id: 6,
			name: m.room_mountainJacuzzi_name(),
			description: m.room_mountainJacuzzi_description(),
			amenities: [
				'amenities_privateJacuzzi',
				'amenities_mountainView',
				'amenities_luxuryBathroom',
				'amenities_premiumFurnishings',
				'amenities_wifi'
			],
			images: [
				'/rooms/mountain_jacuzzi/1.png',
				'/rooms/mountain_jacuzzi/2.png',
				'/rooms/mountain_jacuzzi/3.png'
			]
		},
		{
			id: 7,
			name: m.room_deluxe_name(),
			description: m.room_deluxe_description(),
			amenities: [
				'amenities_kingBed',
				'amenities_modernDesign',
				'amenities_luxuryBathroom',
				'amenities_sittingArea',
				'amenities_wifi'
			],
			images: ['/rooms/deluxe/1.png', '/rooms/deluxe/2.png', '/rooms/deluxe/3.png']
		},
		{
			id: 8,
			name: m.room_twinJacuzzi_name(),
			description: m.room_twinJacuzzi_description(),
			amenities: [
				'amenities_twinBeds',
				'amenities_privateJacuzzi',
				'amenities_modernAmenities',
				'amenities_scenicView',
				'amenities_wifi'
			],
			images: [
				'/rooms/twin_jacuzzi/1.png',
				'/rooms/twin_jacuzzi/2.png',
				'/rooms/twin_jacuzzi/3.png'
			]
		},
		{
			id: 9,
			name: m.room_familyOnsen_name(),
			description: m.room_familyOnsen_description(),
			amenities: [
				'amenities_privateOnsen',
				'amenities_familySpace',
				'amenities_multipleBeds',
				'amenities_livingArea',
				'amenities_wifi'
			],
			images: [
				'/rooms/family_onsen/1.png',
				'/rooms/family_onsen/2.png',
				'/rooms/family_onsen/3.png'
			]
		}
	]);

	let showDialog = $state(false);
	let selectedRoom = $state(null);

	function openBookingDialog(room) {
		selectedRoom = room;
		document.getElementById('booking-dialog').showModal();
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		if (!selectedRoom) return;
		await fetch('/api/sendBookingForm', {
			method: 'POST',
			body: JSON.stringify({
				name: formData.get('name'),
				phone: formData.get('phone'),
				lineId: formData.get('lineId'),
				selectedRoomName: selectedRoom?.name
			})
		});

		showDialog = false;
		selectedRoom = null;
		event.target.reset();
		document.getElementById('booking-dialog')?.close();
	}
</script>

<div id="nav_spacer" class="h-20"></div>

<dialog id="booking-dialog" class=" rounded-2xl backdrop:bg-black/50 w-full max-w-2xl">
	<div class="">
		<div class=" bg-white rounded-t-2xl">
			<div class="flex justify-between items-start relative w-full h-70">
				<img
					src={selectedRoom?.images[0]}
					alt={selectedRoom?.name}
					class="  absolute inset-0 w-full h-full object-cover z-0"
				/>
				<div
					class="bg-gradient-to-b from-transparent to-black/90 absolute inset-0 w-full h-full z-2"
				></div>
				<h3 class="text-2xl font-bold z-3 absolute bottom-4 left-4 text-white">
					{m.booking_dialog_title({ room_name: selectedRoom?.name })}
					<p class="text-sm text-white/60">{selectedRoom?.description}</p>
				</h3>
				<button
					class="text-black bg-white rounded-xl p-2 z-4 absolute top-4 right-4"
					onclick={() => {
						document.getElementById('booking-dialog')?.close();
					}}
				>
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>

		<form onsubmit={handleSubmit} class="p-6 space-y-4 bg-white rounded-b-2xl p-6">
			<div class="space-y-3">
				<label for="name" class="block text-sm font-medium text-gray-700">
					{m.name()}
				</label>
				<input
					type="text"
					name="name"
					id="name"
					required
					class="w-full outline-none px-6 py-3 bg-white/50 border-2 border-[#fcb100]/50 rounded-xl focus:ring-4 focus:ring-[#fcb100]/20 focus:border-[#fcb100] active:bg-[#fcb100]/5 active:scale-[0.99] transition-all"
				/>
			</div>

			<div class="space-y-3">
				<label for="phone" class="block text-sm font-medium text-gray-700">
					{m.phone()}
				</label>
				<input
					type="tel"
					name="phone"
					id="phone"
					required
					pattern="[0-9]*"
					inputmode="numeric"
					minlength="10"
					maxlength="10"
					oninvalid={(e) => e.target.setCustomValidity(m.phone_invalid())}
					oninput={(e) => e.target.setCustomValidity('')}
					class="w-full outline-none px-6 py-3 bg-white/50 border-2 border-[#fcb100]/50 rounded-xl focus:ring-4 focus:ring-[#fcb100]/20 focus:border-[#fcb100] active:bg-[#fcb100]/5 active:scale-[0.99] transition-all"
				/>
			</div>

			<div class="space-y-3">
				<label for="lineId" class="flex items-center text-sm font-medium text-gray-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mr-2 text-[#fcb100] block fill-current"
						viewBox="0 0 24 24"
					>
						<path
							d="M22.001 10.69c0 1.787-.687 3.4-2.123 4.974c-2.1 2.414-6.788 5.363-7.864 5.812c-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9c-.112-.277-.556-.424-.881-.492C5.559 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118s10 3.643 10 8.118m-3.6 3.626c1.113-1.22 1.6-2.362 1.6-3.626c0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.079.226 1.884.614 2.329 1.708l.037.096c1.805-1.176 4.173-2.979 5.26-4.228m-.262-4.001a.526.526 0 0 1 0 1.05h-1.463v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938zm-3.213 2.513a.524.524 0 0 1-.526.522a.52.52 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.52.52 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525zm-4.784 0a.527.527 0 0 1-.526.524a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525zm-2.055.524H6.098a.53.53 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05"
						/>
					</svg>
					{m.lineId()}
				</label>
				<input
					type="text"
					name="lineId"
					id="lineId"
					class="w-full outline-none px-6 py-3 bg-white/50 border-2 border-[#fcb100]/50 rounded-xl focus:ring-4 focus:ring-[#fcb100]/20 focus:border-[#fcb100] active:bg-[#fcb100]/5 active:scale-[0.99] transition-all"
				/>
			</div>

			<div class="flex justify-end gap-4">
				<button
					type="button"
					class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
					onclick={() => {
						document.getElementById('booking-dialog')?.close();
					}}
				>
					{m.cancel()}
				</button>
				<button
					type="submit"
					class="px-4 py-2 text-sm font-medium text-white bg-[#fcb100] rounded-md hover:bg-[#fcb100]/80"
				>
					{m.submit_booking()}
				</button>
			</div>
		</form>
	</div>
</dialog>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
		{m.our_rooms_title()}
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each rooms as room}
			<div
				class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
			>
				<img src={room.images[0]} alt={room.name} class="w-full h-64 object-cover" />

				<div class="p-6">
					<div class="flex justify-between items-center mb-4">
						<h2 class="text-2xl font-semibold text-gray-900">{room.name}</h2>
					</div>

					<p class="text-gray-600 mb-4">{room.description}</p>

					<div class="space-y-2">
						<h3 class="font-medium text-gray-900">Room Amenities:</h3>
						<ul class="grid grid-cols-2 gap-2">
							{#each room.amenities as amenity}
								<li class="text-sm text-gray-600 flex items-center">
									{#if amenity === 'amenities_wifi'}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
											/>
										</svg>
									{:else if amenity === 'amenities_tv'}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
												<rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
												<path d="m17 2l-5 5l-5-5" />
											</g>
										</svg>
									{:else if amenity === 'amenities_airConditioning'}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12m.3 9.7a2.5 2.5 0 0 1-3.16 3.83a2.53 2.53 0 0 1-1.14-2V12m-7.4 3.6A2 2 0 1 0 10 17v-5"
											/>
										</svg>
									{:else if amenity === 'amenities_bathtub'}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
												<path
													d="M21 13v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.4a.6.6 0 0 1 .6-.6zm-5 7l1 2m-9-2l-1 2m14-9V7a4 4 0 0 0-4-4h-5"
												/>
												<path
													d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598"
												/>
											</g>
										</svg>
									{:else if amenity === 'amenities_bathroom'}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m4 4l2.5 2.5m7 0a4.95 4.95 0 0 0-7 7M15 5L5 15m9 2v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01"
											/>
										</svg>
									{:else}
										<svg
											class="w-4 h-4 mr-2 text-[#fcb100]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									{/if}

									{m[`${amenity}`]()}
								</li>
							{/each}
						</ul>
					</div>

					<button
						type="button"
						onclick={() => openBookingDialog(room)}
						class="mt-6 w-full bg-[#fcb100] text-white py-2 px-4 rounded-md hover:bg-[#fcb100]/80 transition-colors"
					>
						Book Now
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
