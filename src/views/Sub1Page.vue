<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sub1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-button @click="toPage3">go sub deeper</ion-button>
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
  IonToolbar,
  IonTitle,
} from "@ionic/vue";

const router = useIonRouter();
const toPage3 = () => {
  router.push("/sub/sub");
};
</script>
