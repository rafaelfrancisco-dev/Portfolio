<script>
	import MainComponent from "./Components/MainComponent.svelte";
	import DarkModeToggle from "./Components/DarkModeToggle.svelte";
</script>

<main class="bg-white dark:bg-black text-white dark:text-black">
	<DarkModeToggle/>
	<MainComponent/>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>