<template>
  <div>
    <div class="p-5 mb-4 primarystyledcard rounded-3 shadow">
      <div class="container-fluid py-5">
        <div class="row align-items-start">
          <div class="col my-auto">
            <h1 class="display-2 fw-bold">{{ $route.params.tag }}</h1>
          </div>
          <div class="col my-auto">
            <p class="col-md-8 fs-4 text-md-end float-md-end">
              Projects tagged {{ $route.params.tag }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="$route.params.tag == 'Team Enigma'"
      class="p-5 mb-4 rounded-3 shadow"
      style="background-color: #3c6967; color: white; font-family: Poppins"
    >
      <div class="container-fluid py-5">
        <div class="row align-items-start">
          <div class="col my-auto">
            <h1 class="display-2 fw-bold">Team Enigma Website</h1>
            <p>Team Enigma Projects are available on their website.</p>
          </div>
          <div class="col my-auto">
            <div
              class="h-100 p-5 rounded-3 shadow d-flex flex-column"
              style="background-color:#2F5452"
            >
              <h1>Visit TE.</h1>
              <a type="button" class="btn btn-outline-light btn-lg" href="https://te.harrowschool.io/">Let's Go</a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="$route.params.tag == 'RIE'"
      class="p-5 mb-4 rounded-3 shadow"
      style="background-color: #FFFFFF; color: #000000; font-family: Poppins"
    >
      <div class="container-fluid py-5">
        <div class="row my-4">
          <div class="col">       
            <center>  
            <img src="~assets/images/kcllogo.png" width="auto" height="150px">
          </center> 
          </div>
            
          <div class="col">            
            <center>  
            <img src="~assets/images/rielogo.png" width="auto" height="150px">
          </center> 
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col my-auto">
            <h1 class="display-5 fw-bold kclprimaryfont">Research in Electronics Society</h1>
            <h4 class="kclsecondaryfont">Projects are available on their Instagram.</h4>
          </div>
          <div class="col my-auto">
            <div
              class="h-100 p-5 rounded-3 shadow d-flex flex-column"
              style="background-color:#E2231A"
            >
              <h1 style="color: #FFFFFF" class="kclsecondaryfont">Visit RIE on KCLSU.</h1>
              <a type="button" class="btn btn-outline-light btn-lg kclprimaryfont" href="https://www.kclsu.org/groups/activities/join/rie/">Let's Go</a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="$route.params.tag == 'School'"
      class="p-5 mb-4 rounded-3 shadow"
      style="background-color: #7a7d7d; color: white; font-family: Poppins"
    >
      <div class="container-fluid py-5">
        <div class="row align-items-start">
          <div class="col my-auto">
            <h1 class="display-2 fw-bold">Computer Science Society</h1>
            <p>Some of these projects may be on the school Computer Science Society website.</p>
          </div>
          <div class="col my-auto">
            <div
              class="h-100 p-5 rounded-3 shadow d-flex flex-column"
              style="background-color:#393939"
            >
              <h1>Visit CSS website</h1>
              <a type="button" class="btn btn-outline-light btn-lg" href="https://css.harrowschool.io/">Let's Go</a>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div
      class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"
      v-if="filtered"
    >
      <div
        class="col"
        v-for="(project, id) in filteredprojects"
        v-bind:key="id"
      >
        <ProjectCard :projectdata="project" :projectid="id" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filteredprojects: {},
      filtered: false,
    }
  },
  mounted() {
    for (let x in this.$store.state.projects) {
      if (this.$store.state.projects[x].tags.includes(this.$route.params.tag)) {
        this.filteredprojects[x] = this.$store.state.projects[x]
      }
    }
    this.filtered = true
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.primarystyledcard {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('~assets/images/esp1.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  transition: 0.3s;
}

.primarystyledcard:hover {
  background-position: 50% 65%;
}

@font-face {
    font-family: 'Kings Caslon Display Italic';
    src: url('~assets/fonts/KingsCaslonDisplayItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'Kings Bureau Grot 37';
  src: url('~assets/fonts/KingsBureauGrot-ThreeSeven.ttf') format('truetype');
}

.kclprimaryfont {
  font-family: 'Kings Bureau Grot 37';
}

.kclsecondaryfont {
  font-family: 'Kings Caslon Display Italic';
}
</style>
