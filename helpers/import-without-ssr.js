import dynamic from 'next/dynamic';

export default function import_without_ssr(fn) {
	return dynamic(fn, {
		ssr: false,
	});
}
