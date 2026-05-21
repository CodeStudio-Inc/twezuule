import { MetadataRoute } from "next";
import { focusAreas } from "@/lib/data";
import { getAllPosts, getPrograms } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://twezuule.org";
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/impact",
    "/get-involved",
    "/donate",
    "/news",
    "/contact",
    "/board",
    "/partners",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...getPrograms().map((program) => ({
      url: `${baseUrl}/programs/${program.slug}`,
      lastModified: new Date(),
    })),
    ...focusAreas.map((area) => ({
      url: `${baseUrl}/focus-areas/${area.slug}`,
      lastModified: new Date(),
    })),
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/news/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
