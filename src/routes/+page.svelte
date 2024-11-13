<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div id="nav_spacer" class="h-20"></div>
<div class="relative h-screen flex items-center justify-center overflow-hidden">
	<div class="absolute inset-0">
		<img src="/bg.png" alt="The Hills Resort" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-black/50"></div>
	</div>
	<div class="relative text-center text-white z-1 max-w-4xl mx-auto px-4">
		<h1 class="text-6xl md:text-7xl font-bold mb-6 text-[#fcb100]">The Hills Resort</h1>
		<p class="text-2xl md:text-3xl mb-8">Experience Luxury in the Heart of Paradise</p>
		<div class="flex gap-4 justify-center mb-8">
			<div class="flex items-center">
				<svg class="w-6 h-6 text-[#fcb100]" fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
				<span class="ml-2">{m.rating_title({ score: 4.7 })}</span>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-[#fcb100]" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
					<path
						fill-rule="evenodd"
						d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="ml-2"
					>{m.happy_guests_title({ number: new Intl.NumberFormat().format(20000) })}</span
				>
			</div>
		</div>
		<a
			href="/rooms"
			class="bg-[#fcb100] text-black font-bold py-4 px-8 rounded-full hover:bg-[#fcb100]/90 transition-all transform hover:scale-105"
		>
			{m.book_your_stay_now_cta()}
		</a>
	</div>
</div>

<!-- New Perks Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div class="flex items-center space-x-4">
				<div class="text-[#fcb100]">
					<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
						/>
						<path d="M10 12V7m0 8h.01" />
					</svg>
				</div>
				<div>
					<h3 class="font-bold">24/7 Service</h3>
					<p class="text-gray-600">Always here for you</p>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<div class="text-[#fcb100]">
					<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-bold">Free Breakfast</h3>
					<p class="text-gray-600">Daily fresh meals</p>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<div class="text-[#fcb100]">
					<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-bold">Prime Location</h3>
					<p class="text-gray-600">Near attractions</p>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<div class="text-[#fcb100]">
					<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
						/>
					</svg>
				</div>
				<div>
					<h3 class="font-bold">Local Experience</h3>
					<p class="text-gray-600">Cultural activities</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-16">Experience Unparalleled Luxury</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			<div class="group hover:transform hover:scale-105 transition-all">
				<div class="bg-black/5 p-8 rounded-2xl transition-all h-full h-full">
					<div class="text-[#fcb100] mb-4">
						<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
							></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-black mb-4">Luxury Suites</h3>
					<p class="text-gray-600 leading-relaxed">
						Immerse yourself in opulent comfort with our meticulously designed suites featuring
						premium amenities, stunning views, and personalized service that exceeds expectations.
					</p>
				</div>
			</div>

			<div class="group hover:transform hover:scale-105 transition-all">
				<div class="bg-black/5 p-8 rounded-2xl transition-all h-full">
					<div class="text-[#fcb100] mb-4">
						<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9 2a4 4 0 00-4 4v1H3a1 1 0 000 2h1v1a3 3 0 003 3h1.17A3.001 3.001 0 0111 15.17V17a1 1 0 102 0v-1.83a3.001 3.001 0 012.83-2.17h1a3 3 0 003-3V9h1a1 1 0 100-2h-2V6a4 4 0 00-4-4H9z"
							></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-black mb-4">Exquisite Dining</h3>
					<p class="text-gray-600 leading-relaxed">
						Embark on a culinary journey through our world-class restaurants, featuring authentic
						Thai cuisine and international delicacies prepared by award-winning chefs.
					</p>
				</div>
			</div>
			<div class="group hover:transform hover:scale-105 transition-all">
				<div class="bg-black/5 p-8 rounded-2xl transition-all h-full">
					<div class="text-[#fcb100] mb-4">
						<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M10 2a7 7 0 00-7 7c0 2.1 1.3 4.8 3.8 8.1a.5.5 0 00.8 0c2.5-3.3 3.8-6 3.8-8.1a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-black mb-4">Natural Harmony</h3>
					<p class="text-gray-600 leading-relaxed">
						Immerse yourself in the breathtaking natural surroundings with guided nature walks,
						meditation gardens, and private terraces offering panoramic views of the lush tropical
						landscape.
					</p>
				</div>
			</div>

			<div class="group hover:transform hover:scale-105 transition-all">
				<div class="bg-black/5 p-8 rounded-2xl transition-all h-full">
					<div class="text-[#fcb100] mb-4">
						<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
							></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-black mb-4">Wellness Sanctuary</h3>
					<p class="text-gray-600 leading-relaxed">
						Discover tranquility in our luxury spa offering traditional Thai treatments, modern
						therapies, and holistic wellness programs for complete rejuvenation.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20 px-4 bg-black/5">
	<div class="max-w-7xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
			<div>
				<h2 class="text-4xl font-bold mb-6">Discover Paradise</h2>
				<p class="text-gray-600 leading-relaxed mb-8">
					Nestled in the heart of Thailand's most pristine landscape, The Hills Resort offers an
					unparalleled luxury experience. Our resort combines traditional Thai hospitality with
					modern luxury, creating an unforgettable escape for our distinguished guests.
				</p>
				<div class="space-y-4">
					<div class="flex items-center">
						<div class="text-[#fcb100] mr-4">✓</div>
						<p class="text-gray-600">Private beach access</p>
					</div>
					<div class="flex items-center">
						<div class="text-[#fcb100] mr-4">✓</div>
						<p class="text-gray-600">24/7 concierge service</p>
					</div>
					<div class="flex items-center">
						<div class="text-[#fcb100] mr-4">✓</div>
						<p class="text-gray-600">Infinity pools with ocean views</p>
					</div>
				</div>
			</div>
			<img src="/sunset1.jpg" alt="susnet1" class="w-full h-full object-cover rounded-2xl" />
		</div>
	</div>
</section>

<section class="py-20 px-4 bg-[#fcb100]/10">
	<div class="max-w-7xl mx-auto text-center">
		<h2 class="text-4xl font-bold mb-8">Begin Your Luxury Journey</h2>
		<p class="text-gray-600 max-w-2xl mx-auto mb-12">
			Experience the perfect blend of luxury, comfort, and Thai hospitality. Book your stay today
			and create memories that will last a lifetime.
		</p>
		<button
			class="bg-[#fcb100] text-black font-bold py-4 px-12 rounded-full hover:bg-[#fcb100]/90 transition-all transform hover:scale-105 shadow-lg"
		>
			Reserve Your Experience
		</button>
	</div>
</section>

<!-- New Local Attractions Section -->
<section class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-16">Explore Our Surroundings</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<div>
				<img
					src="/waterfall.jpg"
					alt="Local Waterfall"
					class="rounded-2xl mb-8 w-full h-[300px] object-cover"
				/>
				<h3 class="text-2xl font-bold mb-4">Natural Wonders</h3>
				<p class="text-gray-600 leading-relaxed">
					Just minutes away from breathtaking waterfalls, hiking trails, and natural hot springs.
					Our location offers the perfect balance of serenity and adventure.
				</p>
			</div>
			<div>
				<img
					src="/temple.jpg"
					alt="Local Temple"
					class="rounded-2xl mb-8 w-full h-[300px] object-cover"
				/>
				<h3 class="text-2xl font-bold mb-4">Cultural Heritage</h3>
				<p class="text-gray-600 leading-relaxed">
					Immerse yourself in local culture with nearby ancient temples, traditional markets, and
					authentic Thai experiences. Our staff can arrange guided tours and cultural activities.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Destination Highlights Section -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-4">Explore Our Paradise</h2>
		<p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
			Nestled in the heart of Khao Kho, we're surrounded by natural wonders, cultural landmarks, and
			exciting attractions
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Nature Card -->
			<div
				class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						src="/national-park.jpg"
						alt="Thung Salaeng Luang National Park"
						class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
					>
						<span class="text-white font-bold">7.7 km to National Park</span>
					</div>
				</div>
				<div class="p-6">
					<h3 class="text-xl font-bold mb-3">Natural Wonders</h3>
					<ul class="space-y-2">
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Thung Salaeng Luang National Park
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Khao Kho Waterfall
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Scenic Mountain Views
						</li>
					</ul>
				</div>
			</div>

			<!-- Cultural Card -->
			<div
				class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						src="/temple.jpg"
						alt="Wat Pha Sorn Kaew"
						class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
					>
						<span class="text-white font-bold">12.1 km to Wat Pha Sorn Kaew</span>
					</div>
				</div>
				<div class="p-6">
					<h3 class="text-xl font-bold mb-3">Cultural Attractions</h3>
					<ul class="space-y-2">
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Wat Pha Sorn Kaew Temple
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Local Markets
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Historical Sites
						</li>
					</ul>
				</div>
			</div>

			<!-- Activities Card -->
			<div
				class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
			>
				<div class="relative h-64 overflow-hidden">
					<img
						src="/activities.jpg"
						alt="Local Activities"
						class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
					>
						<span class="text-white font-bold">Endless Adventures Await</span>
					</div>
				</div>
				<div class="p-6">
					<h3 class="text-xl font-bold mb-3">Local Experiences</h3>
					<ul class="space-y-2">
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Coffee Shop Trail (12+ cafes nearby)
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Amazing Dinosaur Park
						</li>
						<li class="flex items-center text-gray-600">
							<svg class="w-5 h-5 text-[#fcb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
							Scenic Viewpoints
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Interactive Map Section -->
<section class="py-20 bg-black/5">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-4xl font-bold mb-6">Strategic Location</h2>
				<p class="text-gray-600 mb-8">
					Located in the heart of Khao Kho, The Hills Resort offers easy access to over 20
					attractions within a 40km radius:
				</p>
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<div class="bg-[#fcb100] rounded-full p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-bold">12+ Coffee Shops</h3>
							<p class="text-gray-600">Experience local cafe culture</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="bg-[#fcb100] rounded-full p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-bold">Natural Landmarks</h3>
							<p class="text-gray-600">Within 7.7km to National Park</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="bg-[#fcb100] rounded-full p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-bold">Quick Access</h3>
							<p class="text-gray-600">Most attractions within 40 minutes</p>
						</div>
					</div>
				</div>
			</div>
			<div class="relative rounded-2xl overflow-hidden shadow-xl">
				<img src="/location-map.jpg" alt="The Hills Resort Location Map" class="w-full" />
			</div>
		</div>
	</div>
</section>
