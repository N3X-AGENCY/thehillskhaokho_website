import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append(
		'Authorization',
		'Bearer cvTXYBKuk/6JogsOd0rR/ybvKN/OP/yS89XcJUcFONayAY/37CqZXZ4z+/VO2y4HWrro8qL5wnnhzsJq99f4XemrjgGw0Waofxc9+ztcxvbtofs0CJ4fu5qB5R/oMrse+Kd2fPCY+5Ho5PVYUGmHvAdB04t89/1O/w1cDnyilFU='
	);

	const raw = JSON.stringify({
		to: 'U83861c3946e834fa85a1bd47db387236',
		messages: [
			{
				type: 'text',
				text: `Contact form \n Name: ${body.name}\n Phone: ${body.phone}\n Line ID: ${body.lineId}\nMessage: ${body.message}`
			}
		]
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch('https://api.line.me/v2/bot/message/push', requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
	return new Response('OK');
};
