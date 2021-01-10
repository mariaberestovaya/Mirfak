import mongoose, { Schema, model } from 'mongoose';

import schemas from '../schemas';

const models = {};

for (const [name, value] of Object.entries(schemas)) {
	delete mongoose.connection.models[name];

	models[name] = model(
		name,
		new Schema(value, {
			versionKey: false,
		})
	);
}

const { note, user } = models;

export { note, user };
