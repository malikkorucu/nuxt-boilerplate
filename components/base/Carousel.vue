<template>
  <carousel v-bind="options" style="height: 300px">
    <slide v-for="i in 20" :key="i" style="background: #dedede; height: 300px">
      Slide 1 Content
    </slide>
  </carousel>
</template>

<script>
export default {
  data: () => ({
    options: {
      loop: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      perPage: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
};
</script>

<style></style>
