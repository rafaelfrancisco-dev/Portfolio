<script lang="ts">
    import {onMount} from "svelte";

    onMount(async () => {
        document.documentElement.classList.add('light');
    });

    function toggle() {
        if (document.documentElement.classList.contains('light')) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }

    }
</script>

<div>
    <button class="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" on:click={toggle}>
        <slot/>
    </button>
</div>
