<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-button @click="toPage2">Go sub1</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  useIonRouter,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const router = useIonRouter();
const toPage2 = () => {
  router.push("/sub");
};
</script>
