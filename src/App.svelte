<script>
	import DarkModeToggle from "./Components/DarkModeToggle.svelte";
	import MyDescription from "./Components/MyDescription.svelte";
	import TimelineComponent from "./Components/TimelineComponent.svelte";
</script>

<main>
	<nav class="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
		<DarkModeToggle/>
	</nav>

	<div class="flex flex-col justify-center bg-white dark:bg-black px-8">
		<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
			<MyDescription/>
			<TimelineComponent/>
		</div>
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>