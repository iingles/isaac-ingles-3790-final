<template>
    <v-container>
        <v-card>
            <v-card-title>Editing (module name goes here)</v-card-title>
            <v-form>                
                <v-row>
                    <h1>Module Name: (module name)</h1>
                    <v-checkbox
                        v-model="changeModuleName"
                        hide-details
                        class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                        label="Module Name"
                        value="modulename (will be dynamically added)"
                        :disabled="!changeModuleName"
                    ></v-text-field>
                    <v-checkbox
                        v-model="changeInternalName"
                        hide-details
                        class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                        label="Internal (system) Name"
                        value="internalname (will be dynamically added)"
                        :disabled="!changeInternalName"
                    ></v-text-field>
                </v-row>        
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      includeFiles: true,
      enabled: false,
    }),
}
</script>

<style scoped>

</style>
