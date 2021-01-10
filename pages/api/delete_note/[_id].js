import { vk_mini_apps } from '../../../middlewares';
import { note } from '../../../models';

async function delete_note({ query: { _id } }, res) {
	await note.deleteOne({
		_id,
	});

	res.end();
}

export default vk_mini_apps(delete_note);
