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
				'amenities_tv',
				'amenities_wifi',
				'amenities_queenBed'
			],
			images: ['/rooms/white_tent/1.png', '/rooms/white_tent/2.png', '/rooms/white_tent/3.png']
		},
		{
			id: 2,
			name: m.room_tentMongo_name(),
			description: m.room_tentMongo_description(),
			amenities: [
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_tv',
				'amenities_wifi',
				'amenities_queenBed'
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
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_tv',
				'amenities_wifi',
				'amenities_kingBed'
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
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_twinBeds',
				'amenities_queenBed',
				'amenities_tv',
				'amenities_wifi'
			],
			images: ['/rooms/large_tent/1.png', '/rooms/large_tent/2.png', '/rooms/large_tent/3.png']
		},
		{
			id: 5,
			name: m.room_domeSuite_name(),
			description: m.room_domeSuite_description(),
			amenities: [
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_queenBed',
				'amenities_bathtub',
				'amenities_tv',
				'amenities_wifi'
			],
			images: ['/rooms/dome_suite/1.png', '/rooms/dome_suite/2.png', '/rooms/dome_suite/3.png']
		},
		{
			id: 6,
			name: m.room_mountainJacuzzi_name(),
			description: m.room_mountainJacuzzi_description(),
			amenities: [
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_privateJacuzzi',
				'amenities_queenBed',
				'amenities_bathtub',
				'amenities_tv',
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
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_privateJacuzzi',
				'amenities_kingBed',
				'amenities_bathtub',
				'amenities_tv',
				'amenities_wifi'
			],
			images: ['/rooms/deluxe/1.png', '/rooms/deluxe/2.png', '/rooms/deluxe/3.png']
		},
		{
			id: 8,
			name: m.room_twinJacuzzi_name(),
			description: m.room_twinJacuzzi_description(),
			amenities: [
				'amenities_kingBed',
				'amenities_privateJacuzzi',
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_tv',
				'amenities_wifi',
				'amenities_splitRoomsX2'
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
				'amenities_airConditioning',
				'amenities_privateBathroom',
				'amenities_privateJacuzzi',
				'amenities_queenBed',
				'amenities_bathtub',
				'amenities_tv',
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
	import axios from 'axios';
	import { useMachine } from '@xstate/svelte';
	import { bookingFormMachine } from '$lib/states/bookform.machine';
	import { browser } from '$app/environment';

	const { snapshot: BOOKING_SNAPSHOT, send: SendToBookingMachine } = useMachine(bookingFormMachine);
	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		if (!selectedRoom) return;

		SendToBookingMachine({
			type: 'SUBMIT',
			context: {
				name: formData.get('name'),
				phone: formData.get('phone'),
				lineId: formData.get('lineId'),
				selectedRoomName: selectedRoom?.name
			}
		});
	}

	BOOKING_SNAPSHOT.subscribe(async (snapshot) => {
		if (browser === false) return;

		switch (snapshot.value) {
			case 'idle': {
				document.getElementById('booking-dialog')?.querySelector('form')?.reset();
				break;
			}
			case 'submitting': {
				try {
					const RESPONSE = await axios.post('/api/sendBookingForm', {
						name: snapshot.context.name,
						phone: snapshot.context.phone,
						lineId: snapshot.context.lineId,
						selectedRoomName: snapshot.context.selectedRoomName,
						is_test: import.meta.env.DEV === true
					});
					if (RESPONSE.status === 200) {
						SendToBookingMachine({ type: 'SUCCESS' });
					} else {
						SendToBookingMachine({
							type: 'ERROR',
							context: { error: 'An Error Occured, please try again later.' }
						});
					}
				} catch (error) {
					console.error(error);
					SendToBookingMachine({
						type: 'ERROR',
						context: { error: 'An Error Occured, please try again later.' }
					});
				}
				break;
			}

			case 'success': {
				break;
			}

			case 'error': {
				console.error(snapshot.context.error);
				break;
			}
		}
	});
</script>

<div id="nav_spacer" class="h-20"></div>

<dialog id="booking-dialog" class=" rounded-2xl backdrop:bg-black/50 w-full max-w-2xl">
	{#if $BOOKING_SNAPSHOT.value === 'error'}
		<div class="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<p class="text-sm">{$BOOKING_SNAPSHOT.context.error}</p>
				</div>
				<div class="ml-auto pl-3">
					<button
						type="button"
						class="bg-red-100 text-red-500 rounded-md p-2 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
						onclick={() => SendToBookingMachine({ type: 'RESET' })}
					>
						Try Again
					</button>
				</div>
			</div>
		</div>
	{:else if $BOOKING_SNAPSHOT.value === 'success'}
		<div class="p-6 bg-white rounded-2xl">
			<div class="text-center">
				<div class="mb-4">
					<svg
						class="mx-auto h-12 w-12 text-green-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-2">
					{m.booking_thank_you_title()}
				</h3>
				<p class="text-gray-600">
					{m.booking_thank_you_description()}
				</p>
				<button
					class="mt-6 bg-[#fcb100] text-black font-bold py-3 px-6 rounded-xl hover:bg-[#fcb100]/90 transition-all"
					onclick={() => {
						SendToBookingMachine({ type: 'RESET' });
					}}
				>
					{m.close()}
				</button>
			</div>
		</div>
	{:else}
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
						disabled={$BOOKING_SNAPSHOT.value === 'submitting'}
						class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						onclick={() => {
							document.getElementById('booking-dialog')?.close();
						}}
					>
						{m.cancel()}
					</button>
					<button
						type="submit"
						disabled={$BOOKING_SNAPSHOT.value === 'submitting'}
						class="px-4 py-2 text-sm font-medium text-white bg-[#fcb100] rounded-md hover:bg-[#fcb100]/80 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{m.submit_booking()}
					</button>
				</div>
			</form>
		</div>
	{/if}
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
						<h3 class="font-medium text-gray-900">{m.booking_amenities_title()}</h3>
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
									{:else if amenity === 'amenities_privateBathroom'}
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
									{:else if amenity === 'amenities_privateJacuzzi'}
										<svg class="w-4 h-4 mr-2 text-[#fcb100] fill-current" viewBox="0 0 24 24">
											<path
												d="M19.25 9.5q-.725 0-1.237-.525t-.513-1.25t.513-1.237t1.237-.513t1.238.513T21 7.725t-.513 1.25t-1.237.525m-14.5 0q-.725 0-1.237-.525T3 7.725t.513-1.237t1.237-.513t1.238.513t.512 1.237t-.513 1.25T4.75 9.5M9.075 8q-.3 0-.475-.237t-.15-.538q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T6.6 1.8q.05-.35.288-.575T7.475 1q.3 0 .5.238t.175.562q-.05.725.125 1.3t.6 1.1q.65.775.913 1.488T10 7.2q-.025.35-.3.575T9.075 8m3 0q-.3 0-.475-.238t-.15-.537q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T9.6 1.8q.05-.35.3-.575T10.5 1q.3 0 .488.25t.162.575q-.05.75.125 1.313t.6 1.062q.65.775.913 1.488T13 7.2q-.025.35-.3.575T12.075 8m3 0q-.3 0-.475-.238t-.15-.537q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T12.6 1.8q.05-.35.3-.575T13.5 1q.3 0 .488.25t.162.575q-.05.75.125 1.313t.6 1.062q.65.775.913 1.488T16 7.2q-.025.35-.3.575T15.075 8M4 22q-.825 0-1.412-.587T2 20v-6q0-.425.288-.712T3 13v-.625q0-.775.538-1.325t1.312-.55q.4 0 .763.188t.637.462l1.125 1.275q.15.15.313.3t.337.275h7.95q.2-.125.35-.275l.3-.3l1.125-1.275q.275-.275.638-.462t.762-.188q.775 0 1.313.55T21 12.375V13q.425 0 .713.288T22 14v6q0 .825-.587 1.413T20 22zm0-5h16v-2H4zm0 3h16v-1H4zm8-1v-2z"
											/>
										</svg>
									{:else if amenity === 'amenities_queenBed'}
										<svg class="w-4 h-4 mr-2 text-[#fcb100] fill-current" viewBox="0 0 24 24">
											<path
												d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
											/>
										</svg>
									{:else if amenity === 'amenities_kingBed'}
										<svg class="w-4 h-4 mr-2 text-[#fcb100] fill-current" viewBox="0 0 24 24">
											<path
												d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
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
						{m.book_now_cta()}
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
