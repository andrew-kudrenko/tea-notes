<form class="tea-note-form">
    <Paper variant="outlined">
      <div class="tea-note-form__header mdc-typography--headline4">Заметка</div>

      <LayoutGrid>
        <Cell span={12}>
          <div class="mdc-typography--headline6">Общая информация</div>
          <hr />
          <GeneralInfoForm general={teaNote.general} />
        </Cell>

        <Cell span={12}>
          <div class="mdc-typography--headline6">Приготовление</div>
          <hr />
          <BrewingForm brewing={teaNote.brewing} />
        </Cell>

        <Cell span={12}>
          <div class="mdc-typography--headline6">Сухой лист</div>
          <hr />
          <DryLeafForm dryLeaf={teaNote.dryLeaf} />
        </Cell>
        
        <Cell span={12}>
          <div class="mdc-typography--headline6">Настой</div>
          <hr />
          <InfusionForm infusion={teaNote.infusion} />
        </Cell>

        <Cell span={12}>
          <div class="mdc-typography--headline6">Послевкусие</div>
          <hr />
          <AftertasteForm aftertaste={teaNote.aftertaste} />
        </Cell>

        <Cell span={12}>
          <div class="mdc-typography--headline6">Впечатление</div>
          <hr />
          <ImpressionForm impression={teaNote.impression} />
        </Cell>
      </LayoutGrid>
  </Paper>
</form>

<button on:click={() => console.log('Tea Note: ', {...teaNote})}>Log</button>

<style lang="scss">
  .tea-note-form {
    max-width: 1000px;

    &__header {
      text-align: center;
    }
  }
</style>

<script lang=ts>
  import LayoutGrid, { Cell } from '@smui/layout-grid'
  import Paper from '@smui/paper'
  
	import { getEmptyTeaNote } from '$lib/tea-notes/models/tea-note-empty.model';
  import GeneralInfoForm from '$lib/tea-notes/components/tea-note-form/general-info-form.svelte'
  import BrewingForm from '$lib/tea-notes/components/brewing-form/brewing-form.svelte'
  import DryLeafForm from '$lib/tea-notes/components/tea-note-form/dry-leaf-form.svelte'
  import InfusionForm from '$lib/tea-notes/components/tea-note-form/infusion-form.svelte'
	import AftertasteForm from '$lib/tea-notes/components/tea-note-form/aftertaste-form.svelte';
  import ImpressionForm from '$lib/tea-notes/components/tea-note-form/impression-form.svelte';

  let teaNote = getEmptyTeaNote()
</script>
