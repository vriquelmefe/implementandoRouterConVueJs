<template>
      <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->
  <div>
      <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
    <router-link :to="{ name: 'articulo'}">Ver Articulos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
   methods: {
    paginar(siguiente){
      let entrada = parseInt(this.$route.params.entrada)
      if (siguiente)
        return entrada < 10 ? `/blog/${entrada + 1}` :
              `/blog/${entrada}`
      else
        return entrada > 1 ? `/blog/${entrada - 1}` :
              `/blog/${entrada}`
    }
  },

}
</script>

<style>

</style>