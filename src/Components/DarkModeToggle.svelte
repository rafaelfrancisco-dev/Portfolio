<script lang="ts">
    import {onMount} from "svelte";

    function toggle() {
        if (document.documentElement.classList.contains('light')) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }

    }

    function getCurrentMoonUrl(): string {
        if (document.documentElement.classList.contains('light')) {
            return "images/moon-fill.svg";
        } else {
            return "images/moon-stroke.svg";
        }
    }
</script>

<div>
    <button class="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" on:click={toggle}>
        <img src={getCurrentMoonUrl()}>
    </button>
</div>
