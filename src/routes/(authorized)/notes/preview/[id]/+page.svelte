{#if data.note}
<LayoutGrid>
    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined" style="max-width: 350px;">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Общая информация
            </h2>
            <hr>

            <p>Название: {data.note.general.title}</p>
            <p>Вид: {TEA_KINDS[data.note.general.kind]}</p>
            <p>Дата дегустации: {data.note.general.tastingDate}</p>
            <p>Изготовитель: {data.note.general.manufacturer}</p>
            <p>Год изготовления: {data.note.general.manufacturingYear}г.</p>
            <p>Регион: {data.note.general.region}</p>
            <p>Цена за грамм: {data.note.general.pricePerGram}р.</p>
        </Card>
    </Cell>
    
    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined" style="max-width: 350px;">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Приготовление
            </h2>
            <hr>

            <p>Способ: {METHODS[data.note.brewing.method]}</p>
            <p>Посуда: {DISHWARES[data.note.brewing.dishware]}</p>
            <p>Объём воды: {data.note.brewing.quantity}мл.</p>
            <p>Температура: {data.note.brewing.temperature}°C</p>
            <p>Количество чая: {data.note.brewing.volume}г.</p>
        </Card>
    </Cell>
    
    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Сухой лист
            </h2>
            <hr>
            
            <p>Внешний вид: {data.note.dryLeaf.appearance}</p>
            <p>Аромат: {data.note.dryLeaf.aroma}</p>
        </Card>
    </Cell>
    
    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Настой
            </h2>
            <hr>
        
            <div style="margin-bottom: .5rem;">
                <span class="mdc-typography--subtitle2">Внешний вид</span>
                <p>{data.note.infusion.appearance}</p>
            </div>

            <div style="margin-bottom: .5rem;">
                <span class="mdc-typography--subtitle2">Аромат</span>
                <p>{data.note.infusion.aroma}</p>
            </div>

            <div style="margin-bottom: .5rem;">
                <span class="mdc-typography--subtitle2">Вкус</span>
                <p>{data.note.infusion.taste}</p>
            </div>

            <div style="margin-bottom: .5rem;">
                <span class="mdc-typography--subtitle2">Вкусы</span>
                <p>{data.note.infusion.tastes.map(t => TASTES[t]).join(', ')}</p>
            </div>

            <p>Баланс: {data.note.infusion.balance}/5</p>
            <p>Букет: {data.note.infusion.bouquet}/5</p>
            <p>Экстрактивность: {data.note.infusion.extractivity}/5</p>
            <p>Терпкость: {data.note.infusion.tartness}/5</p>
            <p>Вязкость: {data.note.infusion.viscosity}/5</p>
            <p>Плотность: {data.note.infusion.density}/5</p>
        </Card>
    </Cell>

    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Послевкусие
            </h2>
            <hr>
        
            <p>Комментарий: {data.note.aftertaste.comment}</p>
            <p>Плотность: {data.note.aftertaste.intensity}/5</p>
            <p>Длительность: {data.note.aftertaste.duration}/5</p>
        </Card>
    </Cell>

    <Cell spanDevices={{ desktop: 4, tablet: 6, phone: 12 }}>
        <Card padded variant="outlined">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                Впечатление
            </h2>
            <hr>
        
            <p>Комментарий: {data.note.impression.comment}</p>
            <p>Хорошо сочетается с: {data.note.impression.wellCombinedWith}</p>
            <p>Оценка: {data.note.impression.rate}/5</p>
        </Card>
    </Cell>
</LayoutGrid>
{/if}

<script lang="ts">
    import Card from '@smui/card'

	import { DISHWARES, METHODS } from "$lib/tea-notes/models/brewing.model";
    import { TEA_KINDS } from "$lib/tea-notes/models/general-info.model";
    import type { PageData } from "./$types";
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { TASTES } from '$lib/tea-notes/models/infusion.model';

    export let data!: PageData
</script>
