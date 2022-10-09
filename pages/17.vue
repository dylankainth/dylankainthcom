<template>
  <div>
    <code style="font-size: 2rem; color: white"
      >if (person.name == "Dylan Kainth") && (date==person.bday) { <br />
      &nbsp console.log("It's my birthday!") <br />
      }
    </code>
    <br />
    <br />
    <iframe
      src="https://giphy.com/embed/66dLOWrLqrgxWHSeVR"
      width="480"
      height="400"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
    <p>
      <a
        href="https://giphy.com/gifs/theoffice-the-office-tv-lecture-circuit-part-1-66dLOWrLqrgxWHSeVR"
        >via GIPHY</a
      >
    </p>
    <br />
    <h1 class="display-1">It's been a crazy year, Thanks for all the good times!</h1>

    <div class="container">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col" v-for="image in images" :key="image.pathLong">
          <div
            loading="lazy"
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            :style="
              'background-image: url(' +
              image.pathLong +
              '); background-size:cover'
            "
            data-aos="zoom-in-up"
          >
            <div
              style="height: 300px !important"
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js',
          integrity:
            'sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D',
          crossorigin: 'anonymous',
        },
      ],
    }
  },
  name: 'SectionOurClients',
  data() {
    return {
      images: [],
    }
  },

  mounted() {
    this.importAll(require.context('../assets/17/', true, /\.jpg$/))
    this.importAll(require.context('../assets/17/', true, /\.gif$/))
    this.importAll(require.context('../assets/17/', true, /\.png$/))
    this.importAll(require.context('../assets/17/', true, /\.PNG$/))
    this.importAll(require.context('../assets/17/', true, /\.webp$/))
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script>

<style scoped></style>
