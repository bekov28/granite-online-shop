<template>
  <p>No Access!</p>
</template>

<script setup>
import { useSwal } from '@/composibles/useSwal'

const { showError } = useSwal()

showError('Only Admin can add/edit product list!')
</script>
