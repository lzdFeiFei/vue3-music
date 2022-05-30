<template>
  <div>
    <Scroll
      class="index-list"
      :probe-type="3"
      @scroll="onScroll"
      ref="scrollRef"
    >
      <ul ref="groupRef">
        <li class="group" v-for="group in data" :key="group.title">
          <h2 class="title">{{ group.title }}</h2>
          <ul>
            <li
              v-for="item in group.list"
              :key="item.id"
              class="item"
              @click="onItemClick(item)"
            >
              <img class="avatar" v-lazy="item.pic" /><span class="name">{{
                item.name
              }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="fixed" v-show="fixedTitle" :style="fixedStyle">
        <div class="fixed-title">{{ fixedTitle }}</div>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import Scroll from './Scroll/Scroll.vue'
</script>

<style scoped></style>
