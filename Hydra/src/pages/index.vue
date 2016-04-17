<template>
  <map
    :center="center"
    :zoom="7"
  >
    <marker 
      v-for="m in markers"
      :position.sync="m.position"
      :clickable="true"
      :draggable="true"
      @g-click="center=m.position"
    ></marker>
  </map>

</template>


<script>
  import {load, Map, Marker} from 'vue-google-maps'
  
  load('AIzaSyBcLQm-0gkrv9eMFJiVy_soqFssp8sxB1I','OPTIONAL VERSION NUMBER')
  
  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, 11.0}
        }]
      }
    }
  }
</script>

<style >
	.title{
		font-size: 20px;
	}
   map {
  width:100%;
  height: 600px;
  display: block;
}
</style>