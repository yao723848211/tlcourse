<template>
    <div>
        <div>
            <PageVideo></PageVideo>
            <SectionDetailMiddle></SectionDetailMiddle>
            <SectionDetail></SectionDetail>
        </div>
    </div>

</template>

<script>
    import SectionDetail from "../components/SectionDetail";
    import SectionDetailMiddle from "../components/SectionDetailMiddle";
    import PageVideo from "../components/PageVideo";
    export default {
        name: "Detail",
        components: {
            SectionDetail,
            SectionDetailMiddle,
            PageVideo
        }
    }
</script>

<style scoped>

</style>