import { vk_mini_apps } from '../../../middlewares';
import { note } from '../../../models';

async function update_note(
	{ query: { _id }, body: { title, text, color }, user: { id } },
	res
) {
	await note.updateOne(
		{
			_id,
			id,
		},
		{
			title,
			text,
			color,
		}
	);

	res.end();
}

export default vk_mini_apps(update_note);
