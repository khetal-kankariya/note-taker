<script>
	import Content from './../components/Content.svelte';
	import InputBox from './../components/InputBox.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="relative h-screen w-screen overflow-hidden bg-black">
	<div class="mx-auto grid h-full w-[80vw] grid-flow-col grid-rows-2 pb-20">
		<InputBox class="m-auto" /><Content />
	</div>
	<Navbar class="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-full" />
</div>
