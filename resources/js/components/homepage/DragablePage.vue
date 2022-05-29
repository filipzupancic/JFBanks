<template>
    <div class="content-center">
        <p class="pt-8">Prikaži / skrij</p>
        <draggable
            :list="list"
            item-key="name"
            class="bg-white overflow-hidden rounded-md md:px-6 lg:px-6 sm:px-0 pt-4"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
        >
            <template #item="{ element }">
                <div class="group p-2 my-2 w-full flex items-center text-center justify-between rounded-full border bg-blue-50 border-blue-500 shadow-sm space-x-3 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <div>
                    <div v-if='element==="Stroski"'>Stroški</div>
                    <div v-else>{{element}}</div>
                    </div>
                    <div @click="update(element)" class="relative pb-8 pr-4 mr-8 pr-8">
                        <div class="absolute inset-y-0 right-0 text-red-500 text-3xl text-center">
                            <strong><b>X</b></strong>
                        </div>
                    </div>
                </div>
            </template>
        </draggable>
        <div class="relative pb-4">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
        </div>
        <ul role="list" class="">
            <li
                v-for="(comp, idx) in totalList"
                :key="idx"
                style="align-items: center; text-align: center"
                class="bg-white overflow-hidden rounded-md text-center md:px-6 lg:px-6"
            >
                <div
                    @click="add(comp)"
                    class="group p-2 my-2 w-full text-center flex items-center justify-between rounded-full border bg-gray-100 border-gray-900 shadow-sm space-x-3 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {{ comp }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import { ref, computed, onBeforeMount, defineComponent } from "vue";
export default defineComponent({
    components: {
        draggable,
    },
    emits: ["update:list"],
    props: {
        list: {
            type: Array,
            default: [],
            required: false,
        },
    },
    setup(props, { emit }) {
        var enabled = ref(true);

        var list = computed({
            get: () => props.list,
            set: (value) => emit("update:list", value),
        });

        var dragging = ref(false);

        const add = function (comp) {
            list.value.push(comp);
        };

        const update = function (rem) {
            if (list.value.includes(rem)) {
                list.value = list.value.filter((e) => e !== rem);
            } else {
                list.value.push(rem);
            }
        };
        const checkMove = function (e) {
            console.log("Future index: " + e.draggedContext.futureIndex);
            console.log(list.value);
        };
        const totalList = computed({
            get: () => {
                var tmplist = ["Kredit", "Investicije", "Eko", "Stroski"];
                return tmplist.filter((i) => !list.value.includes(i));
            },
        });
        // const displayList = ["Kredit"}, "Investicije", "Eko", "Stroški"];

        return {
            totalList,
            enabled,
            dragging,
            list,
            add,
            update,
            checkMove,
        };
    },
});
</script>
<style scoped>
.buttons {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.not-draggable {
    cursor: no-drop;
}
</style>
