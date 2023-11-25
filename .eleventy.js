module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: 'src',
            include: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"

    } 
}
