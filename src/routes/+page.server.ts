import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	return {
		notes: await prisma.note.findMany()
	};
};

export const actions: Actions = {
	createNote: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.note.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create note' });
		}

		return {
			status: 201
		};
	},

	deleteNote: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) return fail(400, { message: 'Invalid request' });

		try {
			await prisma.note.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Something went wrong while deleting your note' });
		}

		return { status: 200 };
	}
};
