<script lang="ts">
    import Textfield from "@smui/textfield";
    import Icon from "@smui/textfield/icon";
    import HelperText from "@smui/textfield/helper-text";

    import CalendarIcon from '$lib/assests/icons/event_note.svg?raw'
  
    export let date: string | null = null;
    export let helperText = ''
    export let label = ''
  
    function onClick({ target }) {
      if (target.nodeName === "INPUT") {
        target.showPicker()
      }
    }

    $: {
      if (!date?.length) {
        date = null
      }
    }
  
  </script>
  
  <Textfield 
    on:click={onClick} 
    bind:value={date}
    {label}
    type="date"
    variant="filled"
    style="width: 100%;"
    helperLine$style="width: 100%;" 
  >
    <Icon slot="trailingIcon">
        {@html CalendarIcon}
    </Icon>

    {#if helperText}
    <HelperText>{helperText}</HelperText>
    {/if}
  </Textfield>
