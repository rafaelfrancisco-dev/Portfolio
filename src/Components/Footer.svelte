<script lang="ts">
    let elements = [
        {
            name: "Github",
            link: "https://github.com/rafaelfrancisco-dev"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/rafael-francisco/"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/does_it_compile"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/rafaelfrancisco6"
        }
    ]
</script>

<footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-4">
    <div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {#each elements as footerItem}
            <a class="text-gray-500 hover:text-gray-600 transition" href={footerItem.link} target="_blank">{footerItem.name}</a>
        {/each}
    </div>
</footer>