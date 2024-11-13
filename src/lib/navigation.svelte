<script lang="ts">
	import { languageTag } from './paraglide/runtime.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { beforeNavigate, goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath, { replaceState: true });
	}

	let IsNavigationOpen = $state(false);
	function toggleNavigation() {
		IsNavigationOpen = !IsNavigationOpen;

		if (IsNavigationOpen) {
			gsap.to('.mobile_nav_container', {
				opacity: IsNavigationOpen ? 1 : 0,
				pointerEvents: IsNavigationOpen ? 'auto' : 'none',
				onComplete: () => {
					if (IsNavigationOpen) {
						gsap.fromTo(
							gsap.utils.toArray('.mobile_nav_item'),
							{ opacity: 0 },
							{ opacity: 1, stagger: 0.1 }
						);
					} else {
						gsap.to(gsap.utils.toArray('.mobile_nav_item'), {
							opacity: 0,
							stagger: 0.1
						});
					}
				}
			});
		} else {
			gsap.fromTo(
				gsap.utils.toArray('.mobile_nav_item'),
				{ opacity: 1 },
				{
					opacity: 0,
					stagger: 0.1,
					onComplete: () => {
						gsap.to('.mobile_nav_container', { opacity: 0, pointerEvents: 'none' });
					}
				}
			);
		}
	}
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	beforeNavigate(() => {
		if (IsNavigationOpen) {
			toggleNavigation();
		}
	});
	onMount(() => {
		gsap.set(gsap.utils.toArray('.desktop_nav_item'), { opacity: 0 });
		gsap.set(gsap.utils.toArray('.mobile_nav_item'), { opacity: 0 });
		gsap.to(gsap.utils.toArray('.desktop_nav_item'), {
			opacity: 1,

			stagger: 0.1
		});
		gsap.to('.mobile_nav_container', { opacity: 0, pointerEvents: 'none' });
	});
</script>

<nav class="bg-white text-black fixed w-full h-20 z-2 flex justify-between items-center">
	<div class="flex items-center justify-between w-full absolute inset-0 p-4 z-1">
		<a href="/" class="text-[#fcb100] font-bold text-xl">
			<img src="/thehillslogo.jpg" alt="Paradise Resort" class="w-16 h-16 mix-blend-darken" />
		</a>

		<div class=" space-x-6 desktop_nav_container flex items-center">
			<button
				onclick={toggleNavigation}
				type="button"
				class="text-2xl md:hidden {IsNavigationOpen ? 'hidden' : 'block'}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-black" viewBox="0 0 24 24">
					<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
						<path d="M5 5L19 5M5 19L19 19" />
						<path d="M5 12H19" />
					</g>
				</svg>
			</button>
			<a
				href="/"
				class="hover:text-[#fcb100] transition-colors hidden md:block opacity-0 desktop_nav_item"
				>{m.menu_home()}</a
			>
			<a
				href="/rooms"
				class="hover:text-[#fcb100] transition-colors hidden md:block opacity-0 desktop_nav_item"
				>{m.menu_rooms()}</a
			>

			<a
				href="/contact"
				class="hover:text-[#fcb100] transition-colors hidden md:block opacity-0 desktop_nav_item"
				>{m.menu_contact()}</a
			>
			<div class="hidden md:block opacity-0 desktop_nav_item">
				<button onclick={() => switchToLanguage('en')}>🇺🇸</button>
				<button onclick={() => switchToLanguage('th')}>🇹🇭</button>
			</div>
		</div>
	</div>
	<!-- Desktop Navigation -->
	<!-- Mobile Menu -->
	<div class="flex items-center">
		<div
			class="absolute inset-0 bg-white/70 backdrop-blur-lg z-50 opacity-0 pointer-events-none h-screen mobile_nav_container flex flex-col items-center justify-center"
		>
			<button onclick={toggleNavigation} type="button" class="absolute top-7 right-4 text-2xl">
				<svg
					class="w-10 h-10"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
			<a
				href="/"
				class="text-2xl py-2 hover:text-[#fcb100] transition-colors text-3xl mobile_nav_item"
				>{m.menu_home()}</a
			>
			<a
				href="/rooms"
				class="text-2xl py-2 hover:text-[#fcb100] transition-colors mobile_nav_item text-3xl"
				>{m.menu_rooms()}</a
			>

			<a
				href="/contact"
				class="text-2xl py-2 hover:text-[#fcb100] transition-colors mobile_nav_item text-3xl"
				>{m.menu_contact()}</a
			>
			<div class="mobile_nav_item text-4xl mt-5">
				<button
					onclick={() => {
						switchToLanguage('en');
					}}>🇺🇸</button
				>
				<button
					class={languageTag() === 'th' ? 'border-[#fcb100]' : ''}
					onclick={() => {
						switchToLanguage('th');
					}}>🇹🇭</button
				>
			</div>
		</div>
	</div>
</nav>
