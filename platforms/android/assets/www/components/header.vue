<template>
    <header>
        <input type="radio" name="route" id="home" value="home"><label for="home" class="tab">Home</label>
        <input type="radio" name="route" id="theaters" value="theaters"><label for="theaters" class="tab">Theaters</label>
        <input type="radio" name="route" id="fav" value="fav"><label for="fav" class="tab">Favs</label>
        <input type="radio" name="route" id="fav" value="fav"><label for="fav" class="tab">Creditos</label>
    </header>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
    label {
        display: inline-block;
        width: auto;
        padding: 0 auto;
    }

    input[name="route"] {
        display: none;
    }

    input:checked + label {
        background-color: red;
    }
</style>
