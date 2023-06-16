<template>
    <form id = "form">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email"  class="form-control" type="text" id="email" name="email">

          <label for="wagennummer">Wagennummer</label>
        <input v-model="wagennummer"  class="form-control" type="text" id="wagennummer" name="wagennummer">

        <label for="auftragsnummer">Auftragsnummer</label>
        <input v-model="auftragsnummer" class="form-control" type="text" id="auftragsnummer" name="auftragsnummer">

        <label for="wkz">Werkstattkurzzeichen</label>
        <input v-model="wkz" class="form-control" type="text" id="wkz" name="wkz">
        
        <label for="halter">Halter/ECM</label>
        <input v-model="halter" class="form-control" type="text" id="halter" name="halter">

        <label for="kundenNr">Kundenauftragsnummer</label>
        <input v-model="kundenNr" class="form-control" type="text" id="kundenNr" name="kundenNr">

        <label for="date">Erstellungsdatum</label>
        <input v-model="date" class="form-control" type="date" name="date" id="date">

        <label for="uic">UIC-Gattung</label>
        <input v-model="uic" class="form-control" type="text" name="uic" id="uic">

        <label for="brBauArt">Bremsbauart</label>
        <input v-model="brBauArt" class="form-control" type="text" name="brBauArt" id="brBauArt">

        <div class="form-check form-check-inline">
            <label for="br0">BR0</label>
            <input v-model="br0" class="form-check-input" type="checkbox" name="br0" id="br0">
        </div>
        
        <div class="form-check form-check-inline">
            <label for="br2">BR2</label>
            <input v-model="br2" class="form-check-input" type="checkbox" name="br2" id="br2">
        </div>
        <div class="form-check form-check-inline">
            <label for="br3">BR3</label>
            <input v-model="br3" class="form-check-input" type="checkbox" name="br3" id="br3">
        </div>    
        <div class="form-check form-check-inline">
            <label for="funkPr">Funktionsprüfung</label>
            <input v-model="funkPr" class="form-check-input" type="checkbox" name="funkPr" id="funkPr">
        </div>
        
        <br>
        <table class="table table-bordered" style="width: 1000x;border: 1px solid black;">
            <tr>
                <th>Durchgeführte Arbeiten</th>
                <th>Ergebnis in Ordnung</th>
                <th>Ergebnis nicht in Ordnung</th>
                <th>Bemerkung</th>
            </tr>
            <tr>
                <td>Gestängesteller geprüft, ggf. eingestellt </td>
                <td><input v-model="gestaengestellerOk" @click="gestaengestellerOkNot=false" type="checkbox" name="gestOk" id="gestOk"></td>
                <td><input v-model="gestaengestellerOkNot" @click="gestaengestellerOk=false" type="checkbox" name="gestNotOk" id="gestNotOk"></td>
                <td><input type="text" name="bemerkung1" id="bemerkung1"></td>
            </tr>
            <tr>
                <td>Bolzen auf Beweglichkeit geprüft  </td>
                <td><input v-model="bolzenInOrdnungField" @click="bolzenInOrdnungFieldNot=false" type="checkbox" name="bolzenBewegOk" id="bolzenBewegOk"></td>
                <td><input v-model="bolzenInOrdnungFieldNot" @click="bolzenInOrdnungField=false" type="checkbox" name="bolzenBewegOkNot" id="bolzenBewegOkNot"></td>
                <td><input type="text" name="bemerkung2" id="bemerkung2"></td>
            </tr>
            <tr>
                <td>Bremsgestänge auf Beweglichkeit geprüft </td>
                <td><input v-model="bremsGestaengeField" @click="bremsGestaengeFieldNot=false" type="checkbox" name="bremGestOK" id="bremGestOK"></td>
                <td><input v-model="bremsGestaengeFieldNot" @click="bremsGestaengeField=false" type="checkbox" name="bremGestOKNot" id="bremGestOKNot"></td>
                <td><input type="text" name="bemerkung3" id="bemerkung3"></td>
            </tr>
            <tr>
                <td>Bolzensicherungen geprüft  </td>
                <td><input v-model="bolzenSicherungenField" @click="bolzenSicherungenFieldNot=false" type="checkbox" name="bolzSafeOk" id="bolzSafeOk"></td>
                <td><input v-model="bolzenSicherungenFieldNot" @click="bolzenSicherungenField=false" type="checkbox" name="bolzSafeOkNot" id="bolzSafeOkNot"></td>
                <td><input type="text" name="bemerkung4" id="bemerkung4"></td>
            </tr>
            <tr>
                <td>Bremsfangschlingen geprüft </td>
                <td><input v-model="bremsFangField" @click="bremsFangFieldNot=false" type="checkbox" name="bremsFangOk" id="bremsFangOk"></td>
                <td><input v-model="bremsFangFieldNot" @click="bremsFangField=false" type="checkbox" name="bremsFangOkNot" id="bremsFangOkNot"></td>
                <td><input type="text" name="bemerkung5" id="bemerkung5"></td>
            </tr>
            <tr>
                <td>Alle Gleitstellen gefettet </td>
                <td><input v-model="gleitstellenGefettetField" @click="gleitstellenGefettetFieldNot=false" type="checkbox" name="gleitstellenOk" id="gleitstellenOk"></td>
                <td><input v-model="gleitstellenGefettetFieldNot" @click="gleitstellenGefettetField=false" type="checkbox" name="gleitstellenOkNot" id="gleitstellenOkNot"></td>
                <td><input type="text" name="bemerkung6" id="bemerkung6"></td>
            </tr>
            <tr>
                <td>Klotz- und Belagspiel eingestellt </td>
                <td><input v-model="klotzBelagspielField" @click="klotzBelagspielFieldNot=false" type="checkbox" name="klotzOk" id="klotzOk"></td>
                <td><input v-model="klotzBelagspielFieldNot" @click="klotzBelagspielField=false" type="checkbox" name="klotzOkNot" id="klotzOkNot"></td>
                <td><input type="text" name="bemerkung7" id="bemerkung7"></td>
            </tr>
            <tr>
                <td>Stärke Bremsklotzsohlen gemessen  </td>
                <td><input v-model="staerkeBremsklotzField" @click="staerkeBremsklotzFieldNot=false" type="checkbox" name="staerkeOk" id="staerkeOk"></td>
                <td><input v-model="staerkeBremsklotzFieldNot" @click="staerkeBremsklotzField=false" type="checkbox" name="staerkeOkNot" id="staerkeOkNot"></td>
                <td><input type="text" name="bemerkung8" id="bemerkung8"></td>
            </tr>
            <tr>
                <td>Ziehlsche Feder geprüft  </td>
                <td><input v-model="ziehlscheFederField" @click="ziehlscheFederFieldNot=false" type="checkbox" name="federOk" id="federOk"></td>
                <td><input v-model="ziehlscheFederFieldNot" @click="ziehlscheFederField=false" type="checkbox" name="federOkNot" id="federOkNot"></td>
                <td><input type="text" name="bemerkung9" id="bemerkung9"></td>
            </tr>
            <tr>
                <td>Druckbehälter entwässert </td>
                <td><input v-model="druckbehaelterEntwaessertField" @click="druckbehaelterEntwaessertFieldNot=false" type="checkbox" name="druckOk" id="druckOk"></td>
                <td><input v-model="druckbehaelterEntwaessertFieldNot" @click="druckbehaelterEntwaessertField=false" type="checkbox" name="druckOkNot" id="druckOkNot"></td>
                <td><input type="text" name="bemerkung10" id="bemerkung10"></td>
            </tr>
            <tr>
                <td>Bremsanschriften geprüft, ggf. erneuert bzw. ergänzt </td>
                <td><input v-model="bremsanschiftenGeprueftField" @click="bremsanschiftenGeprueftFieldNot=false" type="checkbox" name="bremsAnschOk" id="bremsAnschOkNot"></td>
                <td><input v-model="bremsanschiftenGeprueftFieldNot" @click="bremsanschiftenGeprueftField=false" type="checkbox" name="bremsAnschOkNot" id="bremsAnschOkNot"></td>
                <td><input type="text" name="bemerkung11" id="bemerkung11"></td>
            </tr>
            <tr>
                <td>Druckbehälter geprüft </td>
                <td><input v-model="druckbehaelterGeprueftField" @click="druckbehaelterGeprueftFieldNot=false" type="checkbox" name="druckCheckedOk" id="druckCheckedOk"></td>
                <td><input v-model="druckbehaelterGeprueftFieldNot" @click="druckbehaelterGeprueftField=false" type="checkbox" name="druckCheckedOkNot" id="druckCheckedOkNot"></td>
                <td><input type="text" name="bemerkung11" id="bemerkung11"></td>
            </tr>
            <tr>
                <td>Dichtheit HL und Bremsanlagen geprüft </td>
                <td><input v-model="dichtheitGeprueftField" @click="dichtheitGeprueftFieldNot=false" type="checkbox" name="dichtOk" id="dichtOk"></td>
                <td><input v-model="dichtheitGeprueftFieldNot" @click="dichtheitGeprueftField=false" type="checkbox" name="dichtOkNot" id="dichtOkNot"></td>
                <td><input type="text" name="bemerkung11" id="bemerkung11"></td>
            </tr>

        </table>
    




        
        <br>
        <input v-on:click="sendData" type="button" value="Submit">
    </div>
    </form>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
import { useUserStore } from '@/store/user';
import api from "@/api/api";

const userStore = useUserStore();

const email = ref(userStore.getEmail);
const wagennummer = ref();
const auftragsnummer = ref();
const wkz = ref();
const halter= ref();
const kundenNr = ref();
const date = ref();
const uic = ref();
const brBauArt = ref();
const br0= ref();
const br2 = ref();
const br3 = ref();
const funkPr = ref();
const gestaengestellerOk = ref();
const gestaengestellerOkNot = ref();
const bolzenInOrdnungField = ref();
const bolzenInOrdnungFieldNot = ref();
const bremsGestaengeField = ref();
const bremsGestaengeFieldNot = ref();
const bolzenSicherungenField = ref();
const bolzenSicherungenFieldNot = ref();
const bremsFangField = ref();
const bremsFangFieldNot = ref();
const gleitstellenGefettetField = ref();
const gleitstellenGefettetFieldNot = ref();
const klotzBelagspielField = ref();
const klotzBelagspielFieldNot = ref();
const staerkeBremsklotzField = ref();
const staerkeBremsklotzFieldNot = ref();
const ziehlscheFederField = ref();
const ziehlscheFederFieldNot = ref();
const druckbehaelterEntwaessertField = ref();
const druckbehaelterEntwaessertFieldNot = ref();
const bremsanschiftenGeprueftField = ref();
const bremsanschiftenGeprueftFieldNot = ref();
const druckbehaelterGeprueftField =ref();
const druckbehaelterGeprueftFieldNot =ref();
const dichtheitGeprueftField = ref();
const dichtheitGeprueftFieldNot = ref();





const sendData = async () => {
  const dataPr = {
    "wagennummer": wagennummer.value,
    auftragsnummer: auftragsnummer.value,
    werkstattkurzzeichen: wkz.value,
    halterECM: halter.value,
    kundenauftragnummer: kundenNr.value,
    date: date.value,
    uicGattung: uic.value,
    bremsBauart: brBauArt.value,
    br0: br0.value,
    br2: br2.value,
    br3: br3.value,
    funktionspruefung: funkPr.value,
    gestaengestellterInOrdnung: gestaengestellerOk.value,
    gestaengestellterInOrdnungNot: gestaengestellerOkNot.value,
    bolzenInOrdnung: bolzenInOrdnungField.value,
    bolzenInOrdnungNot: bolzenInOrdnungFieldNot.value,
    bremsgestaengeInOrdnung: bremsGestaengeField.value,
    bremsgestaengeInOrdnungNot: bremsGestaengeFieldNot.value,
    bolzenSicherungenGeprueft: bolzenSicherungenField.value,
    bolzenSicherungenGeprueftNot: bolzenSicherungenFieldNot.value,
    bremsfangschlingen: bremsFangField.value,
    bremsfangschlingenNot: bremsFangFieldNot.value,
    gleitstellenGefettet: gleitstellenGefettetField.value,
    gleitstellenGefettetNot: gleitstellenGefettetFieldNot.value,
    klotzUndBelagspiel: klotzBelagspielField.value,
    klotzUndBelagspielNot: klotzBelagspielFieldNot.value,
    staerkeBremsKlotzSohlen: staerkeBremsklotzField.value,
    staerkeBremsKlotzSohlenNot: staerkeBremsklotzFieldNot.value,
    ziehlscheFeder: ziehlscheFederField.value,
    ziehlscheFederNot: ziehlscheFederFieldNot.value,
    druckbehaelterEntw: druckbehaelterEntwaessertField.value,
    druckbehaelterEntwNot: druckbehaelterEntwaessertFieldNot.value,
    bremsAnschriften: bremsanschiftenGeprueftField.value,
    bremsAnschriftenNot: bremsanschiftenGeprueftFieldNot.value,
    druckBehaelterGeprueft: druckbehaelterGeprueftField.value,
    druckBehaelterGeprueftNot: druckbehaelterGeprueftFieldNot.value,
    dichtheitHLUndBremsanlagen: dichtheitGeprueftField.value,
    dichtheitHLUndBremsanlagenNot: dichtheitGeprueftFieldNot.value,
  };
  console.log(dataPr)
  try {
    const response = await api.post("/home", dataPr);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }


}

</script>




<style>
form{
    margin: 20px;
}

</style>