<script lang="ts">
    let timelineElements = [
        {
            title: "asd",
            description: "asd",
            year: 2019
        },
        {
            title: "asd",
            description: "asd",
            year: 2019
        },
        {
            title: "fghfghfgh",
            description: "fghfghfghf",
            year: 2019
        },
        {
            title: "fgh",
            description: "fghfghfghfgh",
            year: 2019
        },
        {
            title: "fgh",
            description: "fghfghgfhfgh",
            year: 2017
        }
    ]
</script>

<div>
    <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">Timeline</h3>

    <ul>
        {#each [...new Set(timelineElements.map(element => element.year))] as year}
            <h3 class="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">{year}</h3>

            {#each timelineElements.filter(element => element.year === year) as { title, description }}
                <li class="mb-4 ml-2">
                    <div class="flex items-center mb-2 text-green-700 dark:text-green-300">
                        <svg class="h-4 w-4 mr-2" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></g>
                        </svg>

                        <p class="font-medium text-gray-900 dark:text-gray-100">{title}</p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-400 ml-6">{description}</p>
                </li>
            {/each}

            <div class="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
        {/each}
    </ul>
</div>