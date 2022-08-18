<script lang="ts">
  import { useHydrate } from "@sveltestack/svelte-query";
  import type { DayAtWork } from "../models";
  import { getInitials } from "../utils";

  export let attendee: DayAtWork;

  function isSelected(dayAtWork: DayAtWork): boolean {
    return !!dayAtWork && !!dayAtWork.type;
  }

  function isFull(dayAtWork: DayAtWork): boolean {
    return isSelected(dayAtWork) && dayAtWork.type == "FULL";
  }

  function isFirstHalf(dayAtWork: DayAtWork): boolean {
    return isSelected(dayAtWork) && dayAtWork.type == "FIRST-HALF";
  }

  function isLastHalf(dayAtWork: DayAtWork): boolean {
    return isSelected(dayAtWork) && dayAtWork.type == "LAST-HALF";
  }

  function isEmpty(dayAtWork: DayAtWork): boolean {
    return isSelected(dayAtWork) && dayAtWork.type == "EMPTY";
  }
</script>

<div
  class="avatar-container"
  title={attendee.user.name}
  class:selected={!attendee.user.profilePicture && isSelected(attendee) && !isEmpty(attendee)}
  class:first-half={isFirstHalf(attendee)}
  class:last-half={isLastHalf(attendee)}
>
  {#if attendee.user.profilePicture}
    <img class="avatar" src={attendee.user.profilePicture} alt={attendee.user.name} />
    <div
      class="avatar-overlay"
      class:selected={isSelected(attendee) && !isEmpty(attendee)}
      class:first-half={isFirstHalf(attendee)}
      class:last-half={isLastHalf(attendee)}
    />
  {:else}
    <div class="initials">
      {getInitials(attendee.userId)}
    </div>
  {/if}
</div>

<style lang="postcss">
  .avatar-container {
    --bg-color: #37e17b;
    --color: #ff4b33;
  }

  .avatar,
  .avatar-container {
    position: relative;
    display: flex;
    font-size: 1.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
  }

  .avatar-overlay {
    position: absolute;
    font-size: 1.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
  }

  .avatar-container.selected {
    background: var(--bg-color);
    border: 1px solid var(--color);
    color: var(--color);
  }

  .avatar-container.selected.first-half {
    background: linear-gradient(
      to left,
      rgba(238, 238, 238, 1) 0%,
      rgba(238, 238, 238, 1) 50%,
      var(--bg-color) 50%,
      var(--bg-color) 100%
    );
  }

  .avatar-container.selected.last-half {
    background: linear-gradient(
      to right,
      rgba(238, 238, 238, 1) 0%,
      rgba(238, 238, 238, 1) 50%,
      var(--bg-color) 50%,
      var(--bg-color) 100%
    );
  }

  .avatar-overlay.selected.first-half {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 50%;
    height: 100%;
    background: rgba(165, 165, 165, 0.7);
    border-bottom-right-radius: 1000px;
    border-top-right-radius: 1000px;
  }

  .avatar-overlay.selected.last-half {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 50%;
    height: 100%;
    background: rgba(165, 165, 165, 0.7);
    border-bottom-left-radius: 1000px;
    border-top-left-radius: 1000px;
  }
</style>
