<template>
  <section class="home-page__content">
    <section class="section home-page__list">
      <section class="container">
        <section class="box home-page__box">
          <input v-model="dest" @keyup.enter="setDirections" type="text" class="input">
        </section>
        <section class="box home-page__box">
          <section class="home-page__graphic">
            <section class="home-page__map" id="first-map">Loading...</section>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
// Components
import Actions from './../components/Actions'
import Chartist from 'vue-bulma-chartist'

//
import {mapGetters} from 'vuex'
import {userPosition} from './../store/getters'

//
export default {
  components: {
    Actions,
    Chartist
  },
  computed: {
    ...mapGetters([
      'userPosition'
    ])
  },
  methods: {
    setDirections () {
      this.directionsService.route({
        origin: `${this.userPosition.latitude},${this.userPosition.longitude}`,
        destination: this.dest,
        travelMode: 'WALKING'
      }, (response, status) => {
        this.directionsRenderer.setDirections(response)
      })
    }
  },
  mounted () {
    this.$store.watch(userPosition, (val) => {
      //
      this.loading = false

      /* eslint-disable no-undef */
      this.map = new google.maps.Map(this.$el.querySelector('#first-map'), {
        center: {lat: val.latitude, lng: val.longitude},
        scrollwheel: false,
        zoom: 15
      })

      /* eslint-disable no-undef */
      this.directionsRenderer = new google.maps.DirectionsRenderer({map: this.map})

      /* eslint-disable no-undef */
      this.directionsService = new google.maps.DirectionsService()

      // Return the value
      return val
    })
  },
  data () {
    return {
      dest: '',
      loading: true
    }
  }
}
</script>

<style lang="sass">
.home-page
  &__box
    padding: 10px
  &__map
    height: 400px
    background: #CCC
    &--loading
      text-align: center
      padding: 10px 0 0
  &__list
    background: transparent
</style>
