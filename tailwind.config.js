const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

const production = !process.env.ROLLUP_WATCH; // Or some other env var like NODE_ENV

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'blue-opaque': 'rgb(13 42 148 / 18%)'
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.700')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        'h2,h3,h4': {
                            'scroll-margin-top': spacing[32]
                        },
                        code: { color: theme('colors.pink.500') },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.400'),
                            '&:hover': {
                                color: theme('colors.blue.600')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300')
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.100'),
                            'scroll-margin-top': spacing[32]
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        ol: {
                            li: {
                                '&:before': { color: theme('colors.gray.500') }
                            }
                        },
                        ul: {
                            li: {
                                '&:before': { backgroundColor: theme('colors.gray.500') }
                            }
                        },
                        strong: { color: theme('colors.gray.300') },
                        thead: {
                            color: theme('colors.gray.100')
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700')
                            }
                        }
                    }
                }
            })
        }
    },
    variants: {
        typography: ['dark']
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