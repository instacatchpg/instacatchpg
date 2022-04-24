<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-parallax
          height="200"
          src="https://assets.wpdeveloper.com/2019/08/How-to-remove-annoying-SPAMS-from-your-website.png"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <v-card outlined color="transparent" elevation="20">
                <h1 style="color: black">התגובות שלך באינסטגרם</h1>
                <h4 class="subheading" style="color: black">
                  התגובות החשודות שמצאנו
                </h4>
              </v-card>
            </v-col>
          </v-row>
        </v-parallax>

        <v-container class="text-right">
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card color="#3E3292" dark @click="openInformation(item)">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" size="125">
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-h5" v-text="item.title">
                    </v-card-title>

                    <v-card-subtitle v-text="item.name"></v-card-subtitle>
                    <br />
                    <br />
                    <v-card-text>
                      <v-row>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon dark v-bind="attrs" v-on="on">
                              mdi-alert
                            </v-icon>
                          </template>
                          <span>רמת סכנה</span>
                        </v-tooltip>

                        <v-col cols="11">
                          <v-progress-linear
                            reverse
                            :value="item.toolBarLength"
                            :color="item.toolBarColor"
                          ></v-progress-linear>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
              <br>
                  <v-card v-if="item===clickedItem">
                      <v-row>
                          <v-col cols="3">
                   
                          </v-col>
                              <v-col cols="9">
                    <v-card-title class="text-h6">
                      : סטטיסטיקות לפי האלגוריתם שלנו
                    </v-card-title>
                          </v-col>
                      </v-row>
                    <v-row>
                      <v-col cols="8">
                        <v-progress-linear
                          reverse
                          value="80"
                          color="red"
                        ></v-progress-linear>
                      </v-col>
                      שימוש במילים חשודות
                    </v-row>
                    <v-row>
                      <v-col cols="8">
                        <v-progress-linear
                          reverse
                         value="60"
                          color="yellow"
                        ></v-progress-linear>
                      </v-col>
                      כמות מעקב מול עוקבים
                    </v-row>
                    <v-row>
                      <v-col cols="8">
                        <v-progress-linear
                          reverse
                         value="40"
                          color="green"
                        ></v-progress-linear>
                      </v-col>
                      תמונות ממקור אחר
                    </v-row>
                  </v-card>
                
              <br />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    openInformation(item) {
        this.clickedItem=item;
    },
  },
  data() {
    const items= [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "חרמן? תיכנס לקישור בפרופיל שלי",
        name: "Ellie.Goulding",
        toolBarLength: "73",
        toolBarColor: "yellow",
      },
      {
        src: "http://cdn.shopify.com/s/files/1/1566/2889/articles/PORTADA-ARIANA-GRANDE.jpg?v=1625039476",
        title: "  בוא לפרופיל שלי קבל מתנה חינם",
        name: "ofir.shriki",
        toolBarLength: "98",
        toolBarColor: "red",
      },
      {
        src: "https://static.onecms.io/wp-content/uploads/sites/20/2021/10/13/justin-bieber.jpg",
        title: "אייפון 11 בחינם בפרופיל שלי",
        name: "roni_ng",
        toolBarLength: "83",
        toolBarColor: "red",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/%D7%A2%D7%95%D7%9E%D7%A8_%D7%90%D7%93%D7%9D_%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%A9%D7%99_%D7%A4%D7%A8%D7%A0%D7%A7%D7%95_%28cropped%29.jpg",
        title: "מה אתה עושה בשירותים כשאתה רואה את התמונות שלי",
        name: "shaked.alon",
        toolBarLength: "43",
        toolBarColor: "green",
      },
      {
        src: "data:image/jpeg;base64,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",
        title: "תכנס לקישור בפרופיל שלי ותקבל נעליים בחינם",
        name: "Ellie Goulding",
        toolBarLength: "63",
        toolBarColor: "yellow",
      },
    ];
    return {
      items: items,
      clickedItem: items[0]
    }
}
};
</script>
