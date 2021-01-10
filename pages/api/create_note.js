import { vk_mini_apps } from '../../middlewares';
import { note } from '../../models';

async function create_note(
	{ body: { title, text, color = 'white' }, user: { id } },
	res
) {
	await note.create({
		id,
		title,
		text,
		color,
	});

	res.end();
}

export default vk_mini_apps(create_note);
