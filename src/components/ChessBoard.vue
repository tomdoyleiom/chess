<template>
  <div class="chessboard" >
    <Tile v-for="n in 64" v-bind:key="n" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tile from './Tile.vue';
@Component({
  components: {
    Tile,
  },
})
export default class ChessBoard extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
