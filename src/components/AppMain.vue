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
              v-for="item in getPackages"
              :key="item.name"
            )
              v-card(
                @click="getFullPackageInfo(item.name)"
              )
                v-card-title {{ item.name }}
                v-card-subtitle {{ item.description }}
                v-card-text
                  .keywords
                    .keyword(
                      v-for="keyword in item.keywords"
                      :key="keyword"
                    ) {{ keyword }}
        v-col(
          cols="12"
        )
          paginate(
            v-if="getPageCounter > 1"
            :page-count="getPageCounter"
            :page-range="2"
            :margin-pages="1"
            :click-handler="paginationSearch"
            :prev-text="'<<'"
            :next-text="'>>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          )
          v-card(
            v-else-if="getSearchQuery && !getPageCounter"
          )
            v-card-title Not Found
    AppModal(
      v-if="packageInfo"
      :packageInfo="packageInfo"
    )



</template>

<script>
import agolia from "@/modules/agolia-search"
import AppModal from "@/components/PackageModal";

import { mapGetters, mapActions } from "vuex"

export default {
  name: "AppMain",
  components: {AppModal},
  data: () => ({
    packageInfo: null
  }),
  computed: {
    ...mapGetters(["getPackages", "getPageCounter", "getSearchQuery"])
  },
  created() {
    this.changeCurrentPage(0)
  },
  methods: {
    ...mapActions(["changeCurrentPage"]),
    paginationSearch(pageNumber){
      pageNumber--;
      this.changeCurrentPage(pageNumber);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },

    async getFullPackageInfo(packageName){
      this.packageInfo = await agolia.getByName(packageName)
          .catch((err) => {
            console.log(err);
          })
      console.log(this.packageInfo)
      this.$nextTick(()=>{
        this.$modal.show("singlePackageModal")
      })
    }
  },
}
</script>

<style lang="scss">

.keywords {
  display: flex;
  flex-wrap: wrap;

  .keyword {
    padding: 3px 10px;
    margin-bottom: 3px;
    margin-right: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1)
  }
}

.pagination {
  padding-left: 0 !important;
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: center;
  align-items: center;

  .page-item {
    margin: 0 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);

    a {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media(max-width: 540.1px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
      }
    }

    &.active {
      background-color: rgba(0, 0, 0, 0.3);

      a {
        cursor: default;
      }
    }

    &.disabled {
      a {
        display: flex;
      }
    }
  }

  .disabled {
    a {
      cursor: default;
      display: none;
    }
  }
}

</style>