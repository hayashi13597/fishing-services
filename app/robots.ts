import { MetadataRoute } from "next";
import { DOMAIN_HOST } from "../utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DOMAIN_HOST}/sitemap.xml`,
  };
}
