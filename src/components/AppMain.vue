<template lang="pug">
  v-main
    v-container
      v-row.d-flex.justify-center
        v-col(
          cols="12"
          md="9"
        )
          v-row
            v-col(
              cols="12"
              v-for="item in packages"
              :key="item.name"
            )
              v-card
                v-card-title {{ item.name }}
                v-card-subtitle {{ item.description }}
                v-card-text
                  .keywords
                    .keyword(
                      v-for="keyword in item.keywords"
                    ) {{ keyword }}
        v-col(
          cols="12"
        )
          paginate(
            v-if="pages"
            :page-count="pages"
            :page-range="2"
            :margin-pages="1"
            :click-handler="searchPackages"
            :prev-text="'<<'"
            :next-text="'>>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          )
          v-card(
            v-else
          )
            v-card-title Not Found

</template>

<script>
import agolia from "@/modules/agolia-search"

export default {
  name: "AppMain",
  data: () => ({
    packages: [],
    pages: 0,
    searchQuery: ""
  }),
  watch: {
    searchQuery(){
      this.searchPackages(1);
    }
  },
  methods: {
    async searchPackages(pageNumber) {
      if (!pageNumber) return;
      pageNumber--;
      const response = await agolia(this.searchQuery, pageNumber)
          .then(r => r.response)
          .catch((err) => {
            console.log(err);
          })
      console.log(response)
      this.packages = response.hits;
      this.pages = response.nbPages;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
  },
  created() {
    this.searchPackages(1);
  },
  events: {
    queryChange(value){
      this.searchQuery = value;
    }
  }
}
</script>

<style lang="scss" >

.keywords{
  display: flex;
  flex-wrap: wrap;
  .keyword{
    padding: 3px 10px;
    margin-bottom: 3px;
    margin-right: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1)
  }
}

.pagination{
  padding-left: 0 !important;
  display: flex;
  width: 100%;
  width: 100%;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  .page-item{
    margin: 0 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    a{
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media(max-width: 540.1px){
        width: 25px;
        height: 25px;
        font-size: 12px;
      }
    }
    &.active{
      background-color: rgba(0, 0, 0, 0.3);
      a{
        cursor: default;
      }
    }
    &.disabled{
      a{
        display: flex;
      }
    }
  }
  .disabled{
    a{
      cursor: default;
      display: none;
    }
  }
}

</style>