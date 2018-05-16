<template>
    <div>
        <div class="box">
            <script :src="src"></script>
            <input type="text" v-model="data" @keyup="send()">
            <ul>
                <li>adsfad</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: '',
            src: ''
        }
    },
    methods: {
        send() {
            function show (res) {
                console.log(res);
            }
            this.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ this.data +'&json=1&p=3&sid=1460_21120_26350&req=2&sc=eb&csor=0&cb=show';
        }
    }
}
</script>
<style>
.box {
    width: 400px;
    margin: 20px auto;
}
</style>


