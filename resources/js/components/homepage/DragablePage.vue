<template>
    <div class="content-center">
      <draggable
        :list="list"
        item-key="name"
        class="w-full text-lg font-large text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <div  class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {{ element }}
            <div @click="remove(element)" class="relative">
                <div class="absolute inset-y-0 right-0 w-16 ...">X</div>
            </div>

          </div>
        </template>
      </draggable>
      <ul role="list" class="space-y-3">
            <li
                v-for="(comp, idx) in totalList"
                :key="idx"
                style="align-items: center; text-align: center"
                class="bg-white shadow overflow-hidden rounded-md px-6 py-4"
            >
                  <div @click="add(comp)" class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {{comp}}
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import draggable from "vuedraggable";
import {ref, computed, onBeforeMount, defineComponent} from "vue"
export default defineComponent({
  components: {
    draggable
  },
  emits: ['update:list'],
  props: {
        list: {
            type: Array,
            default: [],
            required: false
        }
        },
  setup(props,{emit}){
      var enabled=ref(true)

     var list = computed({ 
      get: () => props.list, 
      set: (value) => emit('update:list', value) 
    })

    var dragging = ref(false)

      const add = function(comp) {
      list.value.push(comp);
      }
    const remove= function(rem) {
                 if (list.value.includes(rem)) {
                list.value = list.value.filter(
                    (e) => e !== rem
                );
              }
            }
    const checkMove= function(e) {
      console.log("Future index: " + e.draggedContext.futureIndex);
      console.log(list.value);
    }
    const totalList=computed({
      get:()=>{
        var tmplist=["Investments", "Eko", "Kredit", "Costs"];
        return tmplist.filter((i)=>(!list.value.includes(i)))
        }
      })

    return{
        totalList,
        enabled,
        dragging,
        list,
        add,
        remove,
        checkMove,
    }
  }

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