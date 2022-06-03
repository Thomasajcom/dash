<script lang="ts">
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
  class="avatar"
  title={attendee.userId}
  class:selected={isSelected(attendee) && !isEmpty(attendee)}
  class:first-half={isFirstHalf(attendee)}
  class:last-half={isLastHalf(attendee)}
>
  <div class="initials">
    {getInitials(attendee.userId)}
  </div>
</div>

<style>
  .avatar {
    --bg-color: #37e17b;
    --color: #ff4b33;
  }

  .avatar {
    display: flex;
    font-size: 1.5rem;
    background-color: var(--color);
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color);
    color: var(--color);
  }
  .avatar.selected {
    background: var(--bg-color);
  }

  .avatar.selected.first-half {
    background: linear-gradient(
      to left,
      rgba(238, 238, 238, 1) 0%,
      rgba(238, 238, 238, 1) 50%,
      var(--bg-color) 50%,
      var(--bg-color) 100%
    );
  }

  .avatar.selected.last-half {
    background: linear-gradient(
      to right,
      rgba(238, 238, 238, 1) 0%,
      rgba(238, 238, 238, 1) 50%,
      var(--bg-color) 50%,
      var(--bg-color) 100%
    );
  }
</style>
