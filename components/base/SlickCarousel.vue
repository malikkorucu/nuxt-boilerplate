<template>
  <VueSlickCarousel v-bind="carouselSettings_auto" ref="carousel">
    <div v-for="i in 20" :key="i">
      <div class="info_card">
        <h3>Title</h3>
        <div class="mt-3">
          <p class="msmall line-height-medium">text</p>
          <p class="msmall line-height-medium">text</p>
          <p class="msmall line-height-medium">text</p>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    carouselSettings_auto: {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3.5,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    },
  }),
};
</script>

<style>
.container {
  width: 100%;
  max-width: 900px;
}
.info_card {
  background: lightblue;
  padding: 1rem;
  margin-right: 1rem;
}
</style>
