import axios from 'axios';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);

	try {
		const response = await axios.post(
			'https://api.line.me/v2/bot/message/push',
			{
				to: 'U83861c3946e834fa85a1bd47db387236',
				messages: [
					{
						type: 'text',
						text: `Booking request\nName: ${body.name}\nPhone: ${body.phone}\nLine ID: ${body.lineId}\nRoom: ${body.selectedRoomName}`
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
		return new Response(response.data, { status: 200 });
	} catch (error) {
		return new Response(error, { status: 500 });
	}
};
