<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase hidden-lg-and-up grey--text">
        <span>Sumedh</span>
        <span class="font-weight-light">Frieght</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list dark>
        <v-list-item class="my-1">
          <v-list-item-content>
            <v-list-item-title class="title">
              <span>Sumedh</span>
              <span class="font-weight-light">Frieght</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" class="my-4">
          <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default {
  name: "navbar",
  data: () => ({
    drawer: true,
    selectedItem: 1,
    links: [
      { text: 'All Enterprises', icon: 'mdi-domain', route: '/' },
      { text: 'Chalans', icon: 'mdi-notebook', route: '/challans' },
    ],
  }),
}
</script>

