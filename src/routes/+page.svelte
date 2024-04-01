<script>
	import Content from './../components/Content.svelte';
	import InputBox from './../components/InputBox.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center bg-black">
	<Navbar />
	<div class="grid h-full grid-flow-col grid-rows-2 place-content-center">
		<InputBox class="my-auto" />
		<div>
			<Content />
		</div>
	</div>
</div>
