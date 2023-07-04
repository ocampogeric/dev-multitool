<script setup>
import { reactive } from 'vue';
import {ref} from 'vue'

const data = reactive({
    inputEncoder: '',
    outputEncoder: '',
    inputDecoder: '',
    outputDecoder: '',
    tab: null,
    encodedTextCopied: false,
    decodedTextCopied: false,
    encodedTextLoading: false,
    decodedTextLoading: false
})


const encode = () => {
    data.outputEncoder = btoa(data.inputEncoder)
    data.encodedTextCopied = false
    data.encodedTextLoading = false
}

const decode = () => {
    data.outputDecoder= atob(data.inputDecoder)
    data.decodedTextCopied= false
    data.decodedTextLoading = false
}

const copyEncodedContent = async () => {
    try {
        data.encodedTextLoading = true
        await navigator.clipboard.writeText(data.outputEncoder);
        console.log('Content copied to clipboard');
        data.encodedTextCopied = true
        data.encodedTextLoading = false
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
const copyDecodedContent = async () => {
    try {
        data.decodedTextLoading = true
        await navigator.clipboard.writeText(data.outputDecoder);
        console.log('Content copied to clipboard');
        data.decodedTextCopied= true
        data.decodedTextLoading = false
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
</script>


<template>
<v-container>
    <v-tabs
      v-model="data.tab"
      color="grey-darken-3"
      align-tabs="center"
    >
      <v-tab :value="1">Base64 Encoder</v-tab>
      <v-tab :value="2">Base64 Decoder</v-tab>
    </v-tabs>
    <v-window v-model="data.tab">
        <v-window-item :value="1">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <div class="text-h2 text-grey-darken-3">Base64 Encoder</div>
                    </v-col>
                </v-row>
                <v-row justify="start">
                    <v-col cols="12" class="pb-0 mb-0">
                        <v-textarea v-model="data.inputEncoder" class="" label="String to be encoded" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col cols="auto" class="pt-0 mt-0">
                        <v-btn @click="encode" variant="outlined">Encode</v-btn>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-col cols="12" class="mt-6 pb-0 mb-0">
                        <v-textarea v-model="data.outputEncoder" label="Encoded String" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col cols="auto" class="pt-0 mt-0">
                        <v-btn 
                            @click="copyEncodedContent"
                            prepend-icon="mdi-content-copy"
                            variant="outlined"
                            :loading="data.encodedTextLoading"
                            :color="data.encodedTextCopied?'green-darken-3':''"
                            :append-icon="data.encodedTextCopied?'mdi-check-circle': ''">Copy to clipboard</v-btn>
                    </v-col>
                    </v-row>
            </v-container>
        </v-window-item>
        <v-window-item :value="2">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <div class="text-h2 text-grey-darken-3">Base64 Decoder</div>
                    </v-col>
                </v-row>
                <v-row justify="start">
                    <v-col cols="12" class="pb-0 mb-0">
                        <v-textarea v-model="data.inputDecoder" class="" label="String to be encoded" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col cols="auto" class="pt-0 mt-0">
                        <v-btn @click="decode" variant="outlined">Decode</v-btn>
                    </v-col>    
                </v-row>
                <v-row justify="end">
                    <v-col cols="12" class="mt-6 pb-0 mb-0">
                        <v-textarea v-model="data.outputDecoder" label="Encoded String" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col cols="auto" class="pt-0 mt-0">
                        <v-btn 
                            @click="copyDecodedContent"
                            prepend-icon="mdi-content-copy"
                            variant="outlined"
                            :loading="data.decodedTextLoading"
                            :color="data.decodedTextCopied?'green-darken-3':''"
                            :append-icon="data.decodedTextCopied?'mdi-check-circle': ''">Copy to clipboard</v-btn>
                    </v-col>
                    </v-row>
            </v-container>
        </v-window-item>
    </v-window>
    
</v-container>
</template>

<style scoped>
</style>