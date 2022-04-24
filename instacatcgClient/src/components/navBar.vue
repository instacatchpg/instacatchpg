<template>
    <v-bottom-navigation
      :value="value"
      color="purple"
      grow
      
    >
      <v-btn large>
        <span>הגדרות</span>
  
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
       <v-btn large>
        <span>מידע</span>
  
        <v-icon>mdi-information</v-icon>
      </v-btn>
       <v-btn large>
        <span>רשימת החשודים</span>
  
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
     
      <v-btn large>
        <span>תגובות</span>
  
        <v-icon>mdi-comment</v-icon>
      </v-btn>
        <v-btn large>
        <span>פרופיל</span>
  
        <v-icon>mdi-account</v-icon>
      </v-btn>
     
      
    </v-bottom-navigation>
</template>


<script>
export default {
  name: 'navBar',

 data: () => ({ value: 1 }),
}
</script>