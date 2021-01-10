import mongoose from 'mongoose';

let connected;

export default async function mongo_connect() {
	if (connected) {
		return;
	}

	try {
		await mongoose.connect(process.env.MONGO_URL, {
			autoIndex: false,
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			socketTimeoutMS: 360000,
			family: 4,
		});

		connected = true;
	} catch (e) {
		console.error(e);
	}
}
