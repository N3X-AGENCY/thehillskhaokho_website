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
		<button
			class="bg-[#fcb100] text-black font-bold py-4 px-8 rounded-full hover:bg-[#fcb100]/90 transition-all transform hover:scale-105"
		>
			Book Your Stay Now
		</button>
	</div>
</div>

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
