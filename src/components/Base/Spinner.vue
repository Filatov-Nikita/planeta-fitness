<template>
  <div class="lds-ring" :style="{ '--size': size }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: '80px',
      type: String
    }
  }
}
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  font-size: var(--size);
  width: 1em;
  height: 1em;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 0.8em;
  height: 0.8em;
  margin: 0.1em;
  border: 0.05em solid var(--color-green-600);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-green-600) transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
