<script lang="ts">
    let timelineElements = [
        {
            title: "Released <i>Today in History</i> for iOS",
            description: "Launched the first one of my rewritten existing apps for iOS. Published by Andi.",
            year: 2018
        },
        {
            title: "Released <i>Today in History</i> for Android",
            description: "A really simple side-project, which combines my love of small, uncomplicated apps and history.",
            year: 2017
        },
        {
            title: "Started working full-time as an iOS Dev",
            description: "Got hired as full-time iOS dev following the end of the internship.",
            year: 2017
        },
        {
            title: "Released <i>Fogos em Portugal</i> for Android",
            description: "Released the first version of Fogos em Portugal, my first hobby app, to compete with the, then at the time, <i>lacking</i> competitors.",
            year: 2017
        },
        {
            title: "Began career",
            description: "Started as WatchKit intern at YOUSHIP, creating an Apple Watch extension for the existing app.",
            year: 2016
        },
        {
            title: "Initiated studies",
            description: "Enrolled in Computer Sciences at <b>Instituto Superior de Engenharia de Coimbra</b>.",
            year: 2013
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

                        <p class="font-medium text-gray-900 dark:text-gray-100">{@html title}</p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-400 ml-6">{@html description}</p>
                </li>
            {/each}

            <div class="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
        {/each}
    </ul>
</div>