const production = !process.env.ROLLUP_WATCH; // Or some other env var like NODE_ENV

module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Inter', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
    purge: {
        content: [
            "./src/**/*.svelte",
            "./public/**/*.html"
        ],
        // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))

            return broadMatches
                .concat(broadMatchesWithoutTrailingSlash)
        },
        enabled: production // Disable purge in dev
    },
};