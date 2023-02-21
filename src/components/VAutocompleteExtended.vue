<template>
    <v-autocomplete v-bind="$props" v-model="value" :error-messages="errors" :loading="isLoading" @blur="handleBlur">
      <template v-for="(_, slotName) in $slots" :key="slotName" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps || {}"></slot>
      </template>
    </v-autocomplete>
  </template>
  
  <script setup lang="ts" >
  import { computed, toRef } from 'vue';
  import { useField } from 'vee-validate';
  
  import type { VAutocomplete } from 'vuetify/components';
  import type { Except, Props } from './util';
  
  type CleanedProps = Except<Props<typeof VAutocomplete>, 'errorMessages' | 'variant'>;
  
  interface ExtendedProps extends CleanedProps {
    name: string;
    label: string;
    items: readonly unknown[];
    itemTitle: NonNullable<CleanedProps['itemTitle']>;
    itemValue: NonNullable<CleanedProps['itemValue']>;
    id: string;
  }
  
  const props = withDefaults(defineProps<ExtendedProps>(), {
    clearable: true
  });
    
  const { value, handleBlur, errors, meta } = useField(toRef(props, 'name'), undefined);

  const isLoading = computed(() => props.loading || meta.pending);
  </script>
  
  