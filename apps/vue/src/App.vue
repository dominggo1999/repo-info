<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core";
import { Button, TextField, LoadingWithMessage } from "@acme/ui-vue";
import { useQuery } from "@tanstack/vue-query";
import type { GetUsersResponse } from "@acme/types";
import { AxiosError } from "axios";
import { getUsersByUsername } from "@acme/services";

const username = ref("");

const { isFetching, refetch, data } = useQuery<GetUsersResponse, AxiosError>(
  ["users", username.value],
  () => getUsersByUsername(username.value, 5),
  {
    enabled: false, // set enabled to false initially
  },
);

const search = () => {
  refetch();
};

useDark();
</script>

<template>
  <div>
    <div class="mx-auto w-full max-w-screen-md px-4 lg:px-5">
      <form
        @submit.prevent="search"
        className="mb-3 flex w-full gap-x-4 items-center mt-5 flex-wrap gap-y-4"
      >
        <TextField placeholder="Enter GitHub username" v-model="username" />

        <Button type="submit">Search</Button>
      </form>

      <div v-if="isFetching">
        <LoadingWithMessage />
      </div>

      <div
        v-if="!isFetching && data?.total_count === 0"
        class="mt-5 flex justify-center text-center font-semibold"
      >
        <p>No Results</p>
      </div>

      <div
        class="mt-5 flex w-full flex-col gap-y-4 pb-10"
        v-if="!isFetching && data?.items"
      >
        <div
          v-for="user in data?.items"
          :key="user.id"
          className="flex w-full items-center gap-x-3 rounded-xl border-2 border-primary-500 px-5 py-3 w-full"
        >
          <div
            className="relative aspect-square min-w-[3rem] overflow-hidden rounded-full"
          >
            <img
              class="aspect-square h-20 w-20"
              alt="Avatar"
              :src="user.avatar_url"
            />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="user.html_url"
            className="break-all text-left text-lg font-semibold text-primary-500 sm:text-xl hover:underline"
          >
            {{ user.login }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
