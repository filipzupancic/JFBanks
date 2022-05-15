<template>
    <div>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center radial-progress">
                <p
                    class="mt-1 text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-3xl"
                >
                    Dokumenti
                </p>
                <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    Preprosto pridobi in dodaj potrebne dokumente.
                </p>
            
            </div>
        </div>
        <div 
            class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md"
        >

        <dodaj-dokument></dodaj-dokument>    

             <ul 
                role="list"
                class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                <template v-for="item in documents" :key="item.id">
                    <li class="col-span-1 flex shadow-sm rounded-md">
                        <div 
                           @click="finishedStatus" class="flex-shrink-0 flex items-center justify-center w-16 bg-emerald-600 text-white text-sm font-medium rounded-l-md"
                        >
                            PDF
                        </div>
                        <div
                            class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                        >
                            <div class="flex-1 px-4 py-2 text-sm truncate">
                                <a
                                    href="#"
                                    class="text-gray-900 font-medium hover:text-gray-600"
                                    >{{ item.name }}</a
                                >
                                <p class="text-gray-500">Added: May 2022</p>
                            </div>
                            <div class="flex-shrink-0 pr-2">
                                <button
                                    type="button"
                                    class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <span class="sr-only">Open options</span>
                                    <!-- Heroicon name: solid/dots-vertical -->
                                    <svg
                                        class="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        
    </div>
</template>

<script>
import useDocuments from "../../composables/documents";
import { defineComponent, onMounted } from "vue";
import AddDocument from "../documents/AddDocument"

export default defineComponent({
    emits:['finishedStatusEvent'],
    data() {
        return {

        };
    },
    methods: {
      
    },
    components:{
        "dodaj-dokument":AddDocument

    },
    setup(props, { emit }) {

        const { documents, getDocuments, deleteDocument } = useDocuments();
        onMounted(getDocuments);
        const finishedStatus= ()=>{

            emit('finishedStatusEvent',true)
        }
        const deleteTheDocument = async (id) => {
            if (!window.confirm("Are you sure?")) {
                return;
            }
            await deleteDocument(id);
            await getDocuments();
        };
        return {
            documents,
            finishedStatus,
            deleteTheDocument,
        };
    },
});
</script>