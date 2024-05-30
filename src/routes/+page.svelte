<script>
	import Content from '@components/Content.svelte';
	import InputBox from '@components/InputBox.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { init_load } from '@scripts/init-load';

	$effect(() => {
		init_load();
	});
</script>

<div class="flex h-screen w-screen flex-col justify-between overflow-hidden bg-black">
	<div class="mx-auto flex h-[85vh] w-[80vw] flex-col">
		<div class="grid flex-1 content-center">
			<InputBox class=" " />
		</div>
		<Content />
		<!-- <div class="h-full w-full bg-white"></div> -->
	</div>
	<Navbar class="" />
</div>
