/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import VAutocompleteExtended from './components/VAutocompleteExtended.vue'

const app = createApp(App)

app.component('VAutocompleteExtended', VAutocompleteExtended)

registerPlugins(app)

app.mount('#app')
