<template>
    <v-form>
        <p>Module Name</p>
        <v-row class="xs-1 lg-1">
            <v-col>                     
                <v-checkbox
                    v-model="changeModuleName"
                    hide-details
                    class="shrink mr-2 mt-0"
                ></v-checkbox>
                <v-text-field
                    label="Change Module Name"
                    value="modulename (will be dynamically added)"
                    :disabled="!changeModuleName"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="xs-1 lg-1">
            <v-col>
                <v-checkbox
                    v-model="changeInternalName"
                    hide-details
                    class="shrink mr-2 mt-0"
                ></v-checkbox>
                <v-text-field
                    label="Change Internal (system) Name"
                    value="internalname (will be dynamically added)"
                    :disabled="!changeInternalName"
                ></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data: () => ({
      changeInternalName: false,
      changeModuleName: false,
    }),
}
</script>

<style scoped>

</style>