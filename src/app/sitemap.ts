import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/produtos", "/portfolio", "/sobre-nos", "/contato"];

	return routes.map((path) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: path === "" ? 1 : 0.8,
	}));
}
