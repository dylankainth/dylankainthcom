<template>
<div>
<button class="btn btn-outline-light" @click="downloadCV">Download</button>
</div>
</template>


<script>
export default {
    mounted() {
        window.location = "https://docs.google.com/document/d/1HqRWw8HQaI-LCIO5_st4aAvzexoVRe3nKUFekwO_tPA/export?format=pdf"
    },
    methods : {
        downloadCV() {
            window.location = "https://docs.google.com/document/d/1HqRWw8HQaI-LCIO5_st4aAvzexoVRe3nKUFekwO_tPA/export?format=pdf"
        }
    },
    head() {
    return {
        title : 'Dylan Kainth > CV'
    }
    
  },
}
</script>

<style scoped>
.cvparent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.cvframe {
    width: 100%;
    height: 100%;
}
</style>