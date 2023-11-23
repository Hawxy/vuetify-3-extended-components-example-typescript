<template>
  <v-autocomplete v-bind="props" v-model="value" :error-messages="errors" :loading="isLoading" @blur="handleBlur">
    <template v-for="(_, slotName) in ($slots as Slots)" :key="slotName" #[slotName]="slotProps">
      <slot v-if="slotProps" :name="slotName" v-bind="slotProps || {}" />
    </template>
  </v-autocomplete>
</template>

<script setup lang="ts" generic="TItem">
import { computed, toRef, type ExtractPropTypes, type ExtractPublicPropTypes} from "vue";
import { useField } from "vee-validate";

import type { VAutocomplete } from "vuetify/components";
import type { Except } from "./util";

// props
type CleanedProps = Except<ExtractPublicPropTypes<typeof VAutocomplete>, "errorMessages" | "variant">;

// extend//override props we want to add/change
interface ExtendedProps extends /* @vue-ignore */ CleanedProps {
  name: string;
  label: string;
  items: readonly TItem[];
  itemTitle: NonNullable<CleanedProps["itemTitle"]>;
  itemValue: NonNullable<CleanedProps["itemValue"]>;
  id: string;
}

const props = defineProps<ExtendedProps>();

/* This doesn't work :(
type Emits = VAutocomplete['$emit']

defineEmits<Emits>();
*/

// re-expose slot types - note that generics will not pass down to this type
type Slots = ExtractPropTypes<VAutocomplete["$slots"]>;

defineSlots<Slots>();


const { value, handleBlur, errors, meta } = useField<any>(toRef(props, "name"), undefined);

const isLoading = computed(() => props.loading || meta.pending);
</script>
