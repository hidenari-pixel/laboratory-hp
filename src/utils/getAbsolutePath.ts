export const getAbsolutePath = (path: string, env?: string) => {
	const ENV = env ? env : import.meta.env.APP_ENV;
	if (ENV === "prod") return `${import.meta.env.SITE_URL}${path}`;

	return path;
};

export const getAbsoluteImagePath = (imagePath: string, env?: string) => {
	const ENV = env ? env : import.meta.env.APP_ENV;
	if (ENV === "prod") return `${import.meta.env.SITE_URL}${imagePath}`;

	return imagePath;
};

export const getAbsoluteUrls = (
	url: {
		current: string;
		prev?: string;
		next?: string;
	},
	env?: string,
) => {
	const ENV = env ? env : import.meta.env.APP_ENV;
	if (ENV === "prod")
		return {
			current: getAbsolutePath(url.current),
			prev: url.prev ? getAbsolutePath(url.prev) : undefined,
			next: url.next ? getAbsolutePath(url.next) : undefined,
		};

	return url;
};
