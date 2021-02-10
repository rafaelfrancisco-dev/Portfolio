<script lang="ts">
    let isDark = false;

    function toggle() {
        if (!isDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');

            isDark = !isDark;
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');

            isDark = !isDark;
        }
    }
</script>

<button aria-label="Enable Dark Mode" class="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" on:click={toggle}>
    {#if isDark}
        <img alt="Dark mode toggle" src="images/moon-stroke.svg">
    {:else }
        <img alt="Dark mode toggle" src="images/moon-fill.svg">
    {/if}
</button>
