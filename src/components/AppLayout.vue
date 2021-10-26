<template>
<!-- ->Header and footer template<--->
<header>
  <div class="header-block">
    <img alt="Grupomania - Home" src="../assets/Asset-1.svg" class="icon-header">
    <div class="menu">
    <a href="#" class="menu_link">Create Post</a>
    <a href="#" class="menu_link">Your Posts</a>
    <a href="#" class="menu_link">Account</a>
    </div>
  </div>
</header>
<main>
  <div class="main">
    <slot></slot>
  </div>
  
</main>
<footer>
  <div class="footer">
    <img src="../assets/icon-1.svg" alt="Grupomanaia - Home" class="footer_icon">
    <ul class="footer_list">
      <li class="footer_list_item">Conditions générales d'utilisation</li>
      <li class="footer_list_item">Contact</li>
    </ul>
    <div>
      <a href="#">
        <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#3B5998"/>
          <path d="M26.5015 38.1115V25.0542H30.1059L30.5836 20.5546H26.5015L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5015Z" fill="white"/>
        </svg>
        <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#0077B5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z" fill="white"/>
        </svg>
        <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#FF0000"/>
          <path d="M36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.1231 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.1231 36.265 18.0732Z" fill="white"/>
          <path d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z" fill="#FF0000"/>
        </svg>  
      </a>
    </div>
  </div>
</footer>
 
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
header {
  background-color: $secondary-color;
 .header-block {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
 }
 .icon-header {
  width: 12em;
  padding: 1rem;
 }
 .menu {
  display: flex;
  justify-content: space-evenly;
  width: 40rem;
  padding-top: 1rem;
  transform: translateY(11%);
  &_link {
    color: $text-color;
    font-weight: bold;
    text-decoration: none;
  }
 }
}
.main {
  height: 80vh;
}
.footer {
  background-color: $secondary-color;
  padding: 1rem;
  display: flex;
  &_icon {
    width: 3em;
    margin-left: 2rem;
  }
  &_list {
    list-style-type: none;
    &_item {
      margin: 1rem;
    }
  }
}
</style>
