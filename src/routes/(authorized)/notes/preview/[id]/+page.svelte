{#if data.note}
<div class="mdc-typography--headline6">Общая информация</div>
<hr>

<p>Название: {data.note.general.title}</p>
<p>Вид: {TEA_KINDS[data.note.general.kind]}</p>
<p>Дата дегустации: {data.note.general.tastingDate}</p>
<p>Изготовитель: {data.note.general.manufacturer}</p>
<p>Год изготовления: {data.note.general.manufacturingYear}</p>
<p>Регион: {data.note.general.region}</p>
<p>Цена за грамм, р: {data.note.general.pricePerGram}</p>

<div class="mdc-typography--headline6">Приготовление</div>
<hr>

<p>Способ: {METHODS[data.note.brewing.method]}</p>
<p>Посуда: {DISHWARES[data.note.brewing.dishware]}</p>
<p>Объём воды: {data.note.brewing.quantity}</p>
<p>Температура: {data.note.brewing.temperature}</p>
<p>Количество чая, г: {data.note.brewing.volume}</p>


<div class="mdc-typography--headline6">Сухой лист</div>
<hr>

<p>Внешний вид: {data.note.dryLeaf.appearance}</p>
<p>Аромат: {data.note.dryLeaf.aroma}</p>

<div class="mdc-typography--headline6">Настой</div>
<hr>

<p>Внешний вид: {data.note.infusion.appearance}</p>
<p>Аромат: {data.note.infusion.aroma}</p>
<p>Вкус: {data.note.infusion.taste}</p>
<p>Вкусы: {data.note.infusion.tastes.join(', ')}</p>
<p>Баланс: {data.note.infusion.balance}/5</p>
<p>Букет: {data.note.infusion.bouquet}/5</p>
<p>Экстрактивность: {data.note.infusion.extractivity} / 5</p>
<p>Терпкость: {data.note.infusion.tartness} / 5</p>
<p>Вязкость: {data.note.infusion.viscosity} / 5</p>
<p>Плотность: {data.note.infusion.density} / 5</p>

<div class="mdc-typography--headline6">Послевкусие</div>
<hr>

<p>Комментарий: {data.note.aftertaste.comment}</p>
<p>Плотность: {data.note.aftertaste.intensity} / 5</p>
<p>Длительность: {data.note.aftertaste.duration} / 5</p>

<div class="mdc-typography--headline6">Впечатление</div>
<hr>

<p>Комментарий: {data.note.impression.comment}</p>
<p>Хорошо сочетается с: {data.note.impression.wellCombinedWith}</p>
<p>Оценка: {data.note.impression.rate} / 5</p>

{/if}

<script lang="ts">
	import { DISHWARES, METHODS } from "$lib/tea-notes/models/brewing.model";
    import { TEA_KINDS } from "$lib/tea-notes/models/general-info.model";
    import type { PageData } from "./$types";

    export let data!: PageData
</script>
