<template>
  <celular-icon v-if="icon === 'celular'"></celular-icon>
  <fixo-icon v-else-if="icon === 'fixo'"></fixo-icon>
  <internet-icon v-else-if="icon === 'internet'"></internet-icon>
  <tv-icon v-else></tv-icon>
</template>

<script>
import CelularIcon from './../assets/images/celular.svg';
import FixoIcon from './../assets/images/fixo.svg';
import InternetIcon from './../assets/images/internet.svg';
import TvIcon from './../assets/images/tv.svg';

export default {
  name: 'claro-icons',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  components: {
    CelularIcon,
    FixoIcon,
    InternetIcon,
    TvIcon
  }
}
</script>

<style scoped>

</style>
