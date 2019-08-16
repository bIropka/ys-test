<template>
    <div>
        <h1 v-bind:style='{ color: newTextColor }'>{{ text }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'TitleText',
        props: {
            text: String,
            newTextColor: String
        }
    }
</script>

<style scoped>
    h1 {
        text-transform: uppercase;
        user-select: none;
    }
</style>
