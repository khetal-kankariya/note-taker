import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getNote = async () => {
		const note = await prisma.note.findUnique({
			where: {
				id: Number(params.noteId)
			}
		});
		if (!note) {
			throw error(404, 'note not found');
		}
		return note;
	};

	return {
		note: await getNote()
	};
};

export const actions: Actions = {
	updateNote: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.note.update({
				where: {
					id: Number(params.noteId)
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update note' });
		}

		return {
			status: 200
		};
	}
};
