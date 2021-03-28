<template>
  <div class="text-black navbar">
    <img
      src="https://redash.io/assets/images/elements/redash-logo.svg"
      alt=""
      class="m-4 ml-0 h-9 md:ml-4"
    >
    <div class="humber">
      <!-- <span class="">Toggle navigation</span> -->
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <ul class="nav-left">
      <li class="">
        <a href="#">Product</a>
      </li>
      <li class="">
        <a href="#">Customers</a>
      </li>
      <li class="">
        <a href="#">Case Studies</a>
      </li>
      <li class="">
        <a href="#">Community</a>
      </li>
      <li class="">
        <a href="#">Pricing</a>
      </li>
      <li class="">
        <a href="#">dropdown</a>
      </li>
    </ul>
    <ul class="nav-right">
      <li>
        <a href="#">login</a>
      </li>
      <li>
        <a class="started" href="#">getStart</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon-bar {
  width: 22px;
  height: 2px;
  @apply bg-blue-400;
}
.navbar {
  height: 4.25rem;
  top: 0;
  left: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
  @apply flex justify-between  w-full  bg-white shadow-md px-4 fixed;
}
.navbar-right {
  @apply flex-grow;
}
.humber {
  @apply md:hidden flex flex-col items-center space-y-1 justify-center  w-11 h-11 p-0.5 my-4;
}
.login {
  @apply text-xl;
}

.nav-left {
  @apply md:flex justify-start flex-grow hidden;
}
.nav-right {
  @apply md:flex justify-start hidden;
}
ul > li {
  @apply mt-4 text-sm font-medium inline-block;
}
ul > li > a {
  @apply hover:bg-gray-100 block py-2 px-4;
}

.started {
  padding: 6px 0;
  margin: 0px 10px 17px;
  @apply bg-blue-500 px-4  hover:bg-blue-300 text-white rounded-sm;
}
</style>
