<template>
    <div id="app">
        <Workspace v-bind:text='text'
                   v-bind:backgroundColor='backgroundColor'
                   v-bind:textColor='textColor'
                   v-on:changeColor='changeColor'/>
    </div>
</template>

<script>
    import Workspace from './components/Workspace.vue';
    import Colors from './services/colors';

    const colors = new Colors();

    export default {
        name: 'app',
        components: {
            Workspace
        },
        data: function () {
            return {
                text: 'Hey there',
                backgroundColor: '#fff',
                textColor: '#000'
            }
        },
        methods: {
            changeColor: function () {
              const newBackgroundColor = colors.getRandomColor();
              const newTextColor = colors.getContrastColor(newBackgroundColor);
              this.backgroundColor = newBackgroundColor;
              this.textColor = newTextColor;
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
