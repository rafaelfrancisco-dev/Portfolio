<script>
	import DarkModeToggle from "./Components/DarkModeToggle.svelte";
	import MyDescription from "./Components/MyDescription.svelte";
	import TimelineComponent from "./Components/TimelineComponent.svelte";
	import ProjectsComponent from "./Components/ProjectsComponent.svelte";
	import Footer from "./Components/Footer.svelte";
</script>

<div>
	<nav class="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
		<DarkModeToggle/>

		<div>
			<a class="p-1 sm:p-4 text-gray-900 dark:text-gray-100" href="/">Home</a>
			<a class="p-1 sm:p-4 text-gray-900 dark:text-gray-100" href="/">About</a>
		</div>
	</nav>

	<main>
		<div class="flex flex-col justify-center bg-white dark:bg-black px-8">
			<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
				<MyDescription/>
				<ProjectsComponent/>
				<TimelineComponent/>
				<Footer/>
			</div>
		</div>
	</main>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.sticky-nav {
		position: -webkit-sticky;
		position: sticky;
		z-index: 10;
		top: 0;
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		backdrop-filter: saturate(180%) blur(20px);
		transition: background-color .1 ease-in-out;
	}
</style>