<template>
    <v-card>
        <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ this.$route.params.id }}</v-card-title>
    </v-card>
</template>

<script>
import editorModal from '../../mixins/editorModal.js'
import editorLoadInfo from '../../mixins/editorLoadInfo.js'

export default {
    mixins: {
        editorLoadInfo,
        editorModal,
    }    
}
</script>

<style scoped>
    .editor-title {
        /* color: red; */
        border-bottom: 1px dotted #ccc
    }
</style>