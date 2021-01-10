import s from './s';

export default function custom_fetch(path, body) {
	return fetch(`${location.origin}${s(path)}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
}
