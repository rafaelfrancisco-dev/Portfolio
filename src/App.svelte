<script>
	import MainComponent from "./Components/MainComponent.svelte";
	import DarkModeToggle from "./Components/DarkModeToggle.svelte";
</script>

<main>
	<DarkModeToggle/>
	<MainComponent/>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>