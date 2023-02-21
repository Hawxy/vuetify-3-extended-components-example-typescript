<template>
  <v-container class="fill-height">
    <v-responsive class="pa-2">    
      <form @submit="submit">
      <v-row>
        <v-col>
          <v-autocomplete-extended label="Country" name="country" item-title="name" item-value="value"
          :items="countries" id="autocomplete" />
        </v-col> 
      </v-row>  
      <v-row>
        <v-col>
          <v-btn type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </form>
    </v-responsive> 

  </v-container>
</template>

<script setup lang="ts">
import VAutocompleteExtended from './VAutocompleteExtended.vue';
import { object, string, type InferType } from 'yup';
import { useForm } from 'vee-validate';

const schema = object({
  country: string().required().label("Country")
});

type FormType = InferType<typeof schema>;

const defaultForm: FormType = { country: '' };

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: defaultForm
});

const submit = handleSubmit((value) => {/*insert server submit logic, then reset the form*/ resetForm() })

const countries = [{ name: 'Australia', value: 'australia' }, { name: 'United States', value: 'united-states' }]
</script>
