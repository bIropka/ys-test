<template>
    <div class="workspace"
         v-on:click="workspaceClicked"
         v-bind:style="{ backgroundColor: backgroundColor }" >
        <TitleText v-bind:text="text" v-bind:newTextColor="textColor" />
    </div>
</template>

<script>
    import TitleText from './TitleText.vue';

    export default {
        name: 'Workspace',
        components: {
            TitleText
        },
        props: {
            text: String,
            backgroundColor: String,
            textColor: String
        },
        methods: {
            workspaceClicked: function () {
                this.$emit('changeColor');
            }
        }
    }
</script>

<style scoped>
    .workspace {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
</style>
