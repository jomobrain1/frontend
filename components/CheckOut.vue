<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <form @submit.prevent="create">
            <v-textField label="Full Names" type="text"></v-textField>
            <v-textField label="Email" type="text"></v-textField>
            <v-textField label="Number of persons" type="number"></v-textField>

            <v-textField label="Enter phone number" type="phone"></v-textField>

            <v-btn color="primary" type="submit">Submit</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
