<script>
  import Content from './../components/Content.svelte';
  import InputBox from './../components/InputBox.svelte';
  import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex h-screen w-screen flex-col overflow-hidden bg-black">
  <div class="mx-auto grid h-full w-[80vw] grid-rows-2">
    <InputBox class="m-auto" />
    <Content />
    <!-- <div class="h-full w-full bg-white"></div> -->
  </div>
  <Navbar />
</div>
