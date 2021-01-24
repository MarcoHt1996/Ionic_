<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="success">
                <ion-title>Kelas</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="item in kelas" :key="item.id" 
                :routerLink="'/kelas/'+item.id">
                    <ion-label> 
                        {{ item.nama }}
                        <span class="rata-kanan">No Ruang{{ item.noruang }}</span>
                        <p>{{ item.matakuliah }}</p>
                        </ion-label>
                        </ion-item>    
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel

    } from '@ionic/vue'
    import { defineComponent }from 'vue'
    import axios from 'axios';
    
    export default defineComponent({
        data(){
            return{
                kelas:[]
            }
        },
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonList,
            IonItem,
            IonLabel
        },
        mounted(){
            axios.post("https://http://3.238.40.67/api/kelas",{
                "user_id": localStorage.getItem("user_id")
            })
            .then(response => {
                this.kelas = response.data.data
            })
        }
        
    })
</script>

<style scoped>
.rata-kanan {
    float: right;
}

</style>