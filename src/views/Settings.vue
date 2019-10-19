<template>
    <v-container fluid>
        <v-form>
            <v-list>
                <!-- Could potentially make the "switch" its own
                component and pull in menu items dynamically -->
                <v-list-item> 
                    <v-switch
                        v-model="switch1"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
                <v-list-item> 
                    <v-switch
                        v-model="switch2"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
                <v-list-item> 
                    <v-switch
                        v-model="switch3"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
                <v-list-item> 
                    <v-switch
                        v-model="switch4"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
                <v-list-item> 
                    <v-switch
                        v-model="switch5"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
                <v-list-item> 
                    <v-switch
                        v-model="switch6"
                        :label="'Lorem Ipsum'"
                    >
                    </v-switch>
                </v-list-item>
            </v-list>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            switch1: true,
            switch2: true,
            switch3: true,
            switch4: true,
            switch5: true,
            switch6: true,
        }
    }
}
</script>

<style scoped>

</style>