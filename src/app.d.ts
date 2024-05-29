// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  export type NoteMode = 'note' | 'draw' | 'list' | 'todo' | 'image' | 'table' | 'audio' | 'more';

  type TNote = {
    id: string;
    timeCreated: string;
    timeModified: string;
    title: string;
    index: number;
  } & (
    | {
        type: 'note';
        content: string;
      }
    | {
        type: 'list' | 'todo';
        content: string[];
      }
    | {
        type: 'table';
        content: string[][];
      }
  );
}

export { NoteMode };
