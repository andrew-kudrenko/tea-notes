<AppBar {user}>
  <div class="tea-note-form">
    <TeaNoteForm note={getEmptyTeaNote()} />
  </div>
</AppBar>

<style lang="scss">
  .tea-note-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 0;
  }
</style>

<script lang=ts>
	import AppBar from '$lib/common/components/app-bar/app-bar.svelte';

  import TeaNoteForm from '$lib/tea-notes/components/tea-note-form/tea-note-form.svelte'
	import { getEmptyTeaNote } from '$lib/tea-notes/models/tea-note.model';
	import type { User } from '$lib/user/types/user.types';

  const user: User = {
    id: 2, 
    nickName: 'andy69',
    avatarUrl: '',
  } 
</script>
