import { writable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import type { PageData } from './routes/$types';

export let storenotes: Writable<PageData[]> = writable([]);
