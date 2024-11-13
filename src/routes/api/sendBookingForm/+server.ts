import axios from 'axios';
import type { RequestHandler } from './$types';
let LAST_RUN_DATE = new Date();
export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	// Check rate limit
	const now = new Date();
	const timeDiff = now.getTime() - LAST_RUN_DATE.getTime();
	const requestsPerMinute = 30; // 30 requests per minute
	const minTimeBetweenRequests = (30 * 1000) / requestsPerMinute; // 3000ms between requests

	if (timeDiff < minTimeBetweenRequests) {
		return new Response('Too many requests', { status: 429 });
	}
	// N3X = U83861c3946e834fa85a1bd47db387236
	// VAN = U104a6ae3e72cbfb9bd4edb0dc7dfff93
	try {
		const response = await axios.post(
			'https://api.line.me/v2/bot/message/push',
			{
				to: 'U104a6ae3e72cbfb9bd4edb0dc7dfff93',
				messages: [
					{
						type: 'text',
						text: `${body?.is_test ? '[TEST] ' : ''}Booking request\nName: ${body.name}\nPhone: ${body.phone}\nLine ID: ${body.lineId}\nRoom: ${body.selectedRoomName}`
					}
				]
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer cvTXYBKuk/6JogsOd0rR/ybvKN/OP/yS89XcJUcFONayAY/37CqZXZ4z+/VO2y4HWrro8qL5wnnhzsJq99f4XemrjgGw0Waofxc9+ztcxvbtofs0CJ4fu5qB5R/oMrse+Kd2fPCY+5Ho5PVYUGmHvAdB04t89/1O/w1cDnyilFU='
				}
			}
		);
		LAST_RUN_DATE = new Date();
		return new Response('SENT', { status: 200 });
	} catch (error) {
		return new Response(error, { status: 500 });
	}
};
