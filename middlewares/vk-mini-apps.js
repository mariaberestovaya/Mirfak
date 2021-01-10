import { use } from 'next-api-middleware';

import { mongo_connect, vk_check_signature } from '../scripts';

async function vk_mini_apps(req, res, next) {
	mongo_connect();

	const user = await vk_check_signature(req.query);

	if (!user) {
		res.status(401).json([]);

		return;
	}

	req.user = user;

	await next();
}

export default use(vk_mini_apps);
