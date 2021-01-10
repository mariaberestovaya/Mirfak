import crypto from 'crypto';
import qs from 'querystring';

import { user } from '../models';

export default async function vk_check_signature(query) {
	const vk_keys = {};

	for (const key of Object.keys(query).sort()) {
		if (key.includes('vk_')) {
			vk_keys[key] = query[key];
		}
	}

	const hash = crypto
		.createHmac('sha256', process.env.VK_SECURE_KEY)
		.update(qs.stringify(vk_keys))
		.digest()
		.toString('base64')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=$/, '');

	const { vk_user_id, sign } = query;

	if (sign !== hash) {
		return;
	}

	const id = Number(vk_user_id);

	let _user = await user.findOne({
		id,
	});

	if (!_user) {
		_user = await user.create({
			id,
		});
	}

	return _user;
}
