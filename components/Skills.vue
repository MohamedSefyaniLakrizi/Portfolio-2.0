<template>
  <Carousel
    :value="skills"
    :numVisible="4"
    :numScroll="4"
    :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <div class="overflow-hidden">
        <div
          class="flex w-[75px] md:w-[150px] p-2 hover:-translate-x-full transition-transform duration-300 ease-in-out">
          <div class="flex items-center relative w-[75px] md:w-[150px]">
            <div class="w-[75px] md:w-[150px] flex justify-center">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="!w-10 !h-10 rounded" />
            </div>
          </div>
          <div class="flex w-[75px] md:w-[150px] items-center justify-center">
            <div
              class="font-medium w-[75px] md:w-[150px] select-none text-center">
              {{ slotProps.data.name }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
  const skills = [
    {
      name: "React",
      image:
        "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png",
    },
    {
      name: "Next",
      image:
        "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
    },
    {
      name: "Python",
      image:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
    },
    {
      name: ".NET",
      image:
        "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000",
    },
    {
      name: "Vue",
      image:
        "https://img.icons8.com/?size=100&id=eETV3RNHVrWA&format=png&color=000000",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      name: "Nuxt",
      image:
        "https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000",
    },
    {
      name: "Node.js",
      image:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "React Native",
      image: 
        "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
    {
      name: "AWS",
      image: 
        "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
    },
    {
      name: "PostgreSQL",
      image:
        "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },
    {
      name: "Git",
      image:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
  ];

  const responsiveOptions = ref([
    {
      breakpoint: "767px",
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: "575px",
      numVisible: 4,
      numScroll: 4,
    },
  ]);
</script>
