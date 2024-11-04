import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.dir(body, { depth: null });
	return new Response();
};
