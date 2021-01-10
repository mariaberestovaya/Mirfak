export default function s(path) {
	return `/api/${path}${location.search}`;
}
