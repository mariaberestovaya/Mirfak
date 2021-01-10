import { vk_mini_apps } from '../../middlewares';
import { note } from '../../models';

async function notes({ user: { id } }, res) {
	res.json(
		await note.find({
			id,
		})
	);
}

export default vk_mini_apps(notes);
