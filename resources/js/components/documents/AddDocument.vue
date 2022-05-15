<template>
   <div v-if="errors">
  <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
    <p v-for="error in v" :key="error" class="text-sm">
      {{ error }}
    </p>
  </div>
</div>

<div class="bg-white">
  <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
      <span class="block">Add new document</span>
    </h2>
  </div>
</div>
<div class="px-8">
    <form class="space-y-6" @submit.prevent="saveDocument">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Ime</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.name">
                </div>
            </div>

        </div>

        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Add document
        </button>
    </form>
</div>
</template>

<script>
import { reactive } from "vue";
import useDocuments from "../../composables/documents";
export default {
    setup() {
        const form = reactive({
            'name': '',
        })
        const { errors, storeDocument } = useDocuments()
        const saveDocument = async () => {
            await storeDocument({...form});
        }
        return {
            form,
            errors,
            saveDocument
        }
    }
}
</script>