import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useDocuments() {
    const document = ref([])
    const documents = ref([])

    const errors = ref('')
    const router = useRouter()

    const getDocuments = async () => {
        let response = await axios.get('/api/documents')
        documents.value = response.data.data
    }

    const getDocument = async (id) => {
        let response = await axios.get('/api/documents/'+ id)
        document.value = response.data.data
    }

    const storeDocument = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/documents', data)
            await router.push({ name: 'kredit' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateDocument = async (id) => {
        errors.value = ''
        try {
            await axios.patch('/api/documents/' + id, document.value)
            await router.push({ name: 'documents' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const deleteDocument = async (id) => {
        await axios.delete('/api/documents/' + id)
    }


    return {
        errors,
        document,
        documents,
        getDocument,
        getDocuments,
        storeDocument,
        updateDocument,
        deleteDocument,
    }
}