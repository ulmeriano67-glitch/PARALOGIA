module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/styles.css": "styles.css"});
  eleventyConfig.addPassthroughCopy({"src/script.js": "script.js"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});
  eleventyConfig.addPassthroughCopy({"src/uploads": "uploads"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  eleventyConfig.addFilter("fechaEs", function(value) {
    if (!value) return "";
    const d = new Date(value);
    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(d);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
