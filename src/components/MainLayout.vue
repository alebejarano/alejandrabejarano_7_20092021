<template>
  <!-- ->Header and footer template<--->
  <div v-if="showMenu"  class="overlay" @click="toggleMenu"></div>
  <div class="container" @keyup.esc="showMenu = false">
    <header>
      <div class="header-block">
        <router-link to="/"
          title="Go to Homepage ">
          <img alt="Grupomania Home"
            src="../assets/Asset-1.svg"
            class="icon-header"
            role="img">
        </router-link>
        <button class="menu-btn focus-visible-only" @click="toggleMenu">Menu</button>
        <!--Navigation for big devices-->
        <nav class="menu" aria-label="Main Navigation">
          <router-link to="/"
            class="menu_link">Home
          </router-link>
          <router-link to="/usercontent"
            class="menu_link">Mes contenus
          </router-link>
          <router-link to="/account"
            class="menu_link">Mon Compte
          </router-link>
        </nav>
        <!---Navigation Menu for small devices-->
        <focus-trap v-model:active="isActive">
          <nav v-if="showMenu"  class="responsive-menu" aria-label="Main Navigation">
            <button class="close-btn" aria-label="close menu" @click="toggleMenu">X</button>
            <router-link to="/"
              class="responsive-menu_link">Home
            </router-link>
            <router-link to="/usercontent"
              class="responsive-menu_link">Mes contenus
            </router-link>
            <router-link to="/account"
              class="responsive-menu_link">Mon Compte
            </router-link>
          </nav>
        </focus-trap>
      </div>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <div class="footer">
        <!--logo and footer menu-->
        <div class="footer_menu-links">
          <img src="../assets/icon-1.svg"
            alt="Grupomanaia"
            class="footer_logo"
            role="img">
          <ul class="footer_list">
            <li class="footer_list_item">
              <a href="#">Conditions générales d'utilisation</a>
            </li>
            <li class="footer_list_item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <!--Social media links-->
        <div class="footer_icons">
          <a href="#"
            class="footer_icons_links"
            title="Facebook">
            <svg aria-hidden="true"
              focusable="false"
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#3B5998" />
              <path d="M26.5015 38.1115V25.0542H30.1059L30.5836 20.5546H26.5015L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5015Z"
                fill="white" />
            </svg>
            <span class="visually-hidden">Facebook</span>
          </a>
          <a href="#"
            class="footer_icons_links"
            title="Linkedin">
            <svg aria-hidden="true"
              focusable="false"
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#0077B5" />
              <path fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z"
                fill="white" />
            </svg>
            <span class="visually-hidden">Linkedin</span>
          </a>
          <a href="#"
            class="footer_icons_links"
            title="Youtube">
            <svg aria-hidden="true" 
              focusable="false"
              width="35"
              height="35"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#FF0000" />
              <path d="M36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.1231 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.1231 36.265 18.0732Z"
                fill="white" />
              <path d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z"
                fill="#FF0000" />
            </svg>
            <span class="visually-hidden">Youtube</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      isActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.overlay {
  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: none;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  @media (max-width: $small-breakpoint) {
    display: block;
  }
}
.focus-visible-only:focus-visible {
    outline: 2px solid blue;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
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
    @media (max-width: $small-breakpoint) {
      width: 11rem;
    }
    @media (max-width: $xxs-breakpoint) {
      width: 8em;
    }
  }
  .menu-btn {
    display: none;
    @media (max-width: $small-breakpoint) {
      @include reset-btn;
      height: fit-content;
      padding: 0.5rem;
      display: flex;
      align-self: center;
      font-weight: map-get($font-weights, bold);
      margin-right: 1rem;
      &:active {
        outline: 2px solid violet;
      }
    }
    @media (max-width: $xsmall-breakpoint) {
      font-size: 0.9em;
    }
  }
  .responsive-menu {
    position: fixed;
    top: 0;
    right: 0;
    display: none;
    flex-direction: column;
    background-color: $secondary-color;
    z-index: 20;
    height: 100vh;
    padding: 2rem;
    &_link {
      @include menu-link(-1px);
      margin: 1rem;
      &:hover {
        color: black;
        &:after {
          width: 100%;
        }
      }
    }
    @media (max-width: $small-breakpoint) {
      display: flex;
    }
    .close-btn {
      @include reset-btn;
        margin-bottom: 1rem;
        width: 1em;
        float: right;
        margin-left: 116px;
        font-size: map-get($font-sizes, medium);
       &:focus-visible {
         outline: 2px solid blue;
       }
       &:active {
         outline: 2px solid violet;
       }
    }
  }
  .menu {
    display: flex;
    justify-content: space-evenly;
    width: 40rem;
    padding-top: 1rem;
    transform: translateY(11%);
    @media (max-width: $small-breakpoint) {
      display: none;
    }
    &_link {
      @include menu-link(30px);
      &:hover {
        color: black;
        &:after {
          width: 100%;
        }
      }
    }
  }
}
header {
  .router-link-active {
    color: $primary-color;
  }
  .router-link-exact-active {
    color: $primary-color;
  }
}

main {
  flex-grow: 1;
}
.footer {
  background-color: $secondary-color;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: $xsmall-breakpoint) {
    padding: 0 0 0 0.8rem;
  }
  &_menu-links {
    display: flex;
    @media (max-width: $xsmall-breakpoint) {
      position: relative;
    }
  }
  &_logo {
    width: 3em;
    margin-left: 2rem;
    @media (max-width: $small-breakpoint) {
      margin-left: 0;
    }
    @media (max-width: $xsmall-breakpoint) {
      position: absolute;
      top: 29px;
    }
  }
  &_list {
    list-style-type: none;
    @media (max-width: $xsmall-breakpoint) {
      margin-left: 1rem;
    }
    &_item {
      margin: 1rem;
      a {
        @include link-style(normal);
        &:hover {
          text-decoration: $hover-classic-link;
        }
        @media (max-width: $xsmall-breakpoint) {
          font-size: 0.9em;
        }
      }
    }
  }
  &_icons {
    padding: 1.5rem;
    &_links {
      margin: 0.5rem;
      &:focus-visible {
        padding: 0;
      }
      @media (max-width: $xsmall-breakpoint) {
        display: grid;
        margin: 0;
      }
      svg {
        @media (max-width: $small-breakpoint) {
          margin: 0.3rem;
        }
        @media (max-width: $xsmall-breakpoint) {
          width: 30px;
        }
      }
    }
    .visually-hidden {
      @include visually-hidden;
    }
  }
}
</style>
