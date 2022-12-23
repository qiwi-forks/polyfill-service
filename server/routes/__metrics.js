module.exports = app => {
	app.get("/__metrics", (request, response) => {
		response.status(200);
		response.set("Cache-Control", "max-age=0, must-revalidate, no-cache, no-store, private");
		const { size, memoryUsage } = app.cache;

		response.json({ cache: {size,  memoryUsage }});
	});
};
