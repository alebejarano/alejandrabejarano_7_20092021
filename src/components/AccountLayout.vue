<template>
  <main-layout>
    <section class="account">
      <nav class="account_menu"
        aria-label="Manage you account Menu">
        <ul class="account_menu_list"
          id="content_menu">
          <li class="account_menu_list_item">
            <router-link to="/account"
              class="account_menu_list_item_link"
              title="Informations personelles">
              <svg aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3ZM15.7742 11.6645C17.132 10.5645 18 8.88361 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 8.88361 6.86797 10.5645 8.22578 11.6645C4.33857 13.0843 1.47727 16.6347 1.05411 20.9027C0.934722 22.1069 1.92503 23 3 23H21C22.075 23 23.0653 22.1069 22.9459 20.9027C22.5227 16.6347 19.6614 13.0843 15.7742 11.6645ZM12 13C7.36764 13 3.55165 16.5005 3.05484 21H20.9452C20.4483 16.5005 16.6324 13 12 13Z"
                  fill="#293644"></path>
              </svg>
              <span class="link-text">Informations personelles</span>
            </router-link>
          </li>
          <li class="account_menu_list_item">
            <router-link :to="{name: 'profilepicture'}"
              class="account_menu_list_item_link"
              title="Informations personelles">
              <svg aria-hidden="true"
                focusable="false"
                width="24px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64">
                <g id="Layer_5"
                  data-name="Layer 5">
                  <path d="M44,35A11,11,0,1,1,33,24,11,11,0,0,1,44,35ZM62,18V52a6,6,0,0,1-6,6H8a6,6,0,0,1-6-6V18a6,6,0,0,1,6-6H56A6,6,0,0,1,62,18ZM16,22a4,4,0,1,0-4,4A4,4,0,0,0,16,22ZM48,35A15,15,0,1,0,33,50,15,15,0,0,0,48,35ZM43,8a2,2,0,0,0-2-2H23a2,2,0,0,0,0,4H41A2,2,0,0,0,43,8Z" />
                </g>
              </svg>
              <span class="link-text">Photo de Profil</span>
            </router-link>
          </li>
          <li class="account_menu_list_item">
            <router-link :to="{ name: 'changepassword'}"
              class="account_menu_list_item_link"
              title="Modifier mot de passe">
              <svg aria-hidden="true"
                focusable="false"
                width="24px"
                height="24px"
                viewBox="0 0 100 100"
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                enable-background="new 0 0 100 100"
                xml:space="preserve">
                <path d="M20,76.67v6.663C20,86.999,23.001,90,26.667,90h46.666C76.999,90,80,86.999,80,83.333V76.67H20z"></path>
                <path d="M73.333,36.667H36.667V30c0-7.363,5.97-13.333,13.333-13.333S63.333,22.637,63.333,30H70c0-11.045-8.955-20-20-20
              s-20,8.955-20,20v6.667h-3.333c-3.666,0-6.667,3.001-6.667,6.667V70h60V43.333C80,39.668,76.999,36.667,73.333,36.667z M40,63.334
              h-6.667V50H40V63.334z M53.333,63.334h-6.666V50h6.666V63.334z M66.667,63.334H60V50h6.667V63.334z"></path>
              </svg>
              <span class="link-text">Modifier mot de passe</span>
            </router-link>
          </li>
          <li class="account_menu_list_item">
            <router-link :to="{ name: 'usercontent' }"
              class="account_menu_list_item_link"
              title="Vos contenus">
              <svg aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 512.003 512.003"
                id="Capa_1"
                enable-background="new 0 0 512.003 512.003"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m355.247 285.388-231.822-62.117c-8.005-2.145-16.228 2.605-18.371 10.606-2.144 8.002 2.604 16.227 10.606 18.371l231.823 62.117c1.3.349 2.605.515 3.892.515 6.622 0 12.684-4.42 14.479-11.122 2.144-8.001-2.605-16.226-10.607-18.37z"></path>
                  <path d="m339.718 343.344-231.822-62.117c-8.005-2.144-16.228 2.604-18.371 10.606-2.144 8.002 2.604 16.227 10.606 18.371l231.823 62.117c1.3.349 2.605.515 3.892.515 6.622 0 12.684-4.42 14.479-11.122 2.144-8.001-2.605-16.226-10.607-18.37z"></path>
                  <path d="m246.915 380.594-154.548-41.411c-8.004-2.147-16.227 2.604-18.371 10.606s2.604 16.227 10.606 18.371l154.548 41.411c1.301.349 2.606.515 3.892.515 6.623 0 12.684-4.42 14.479-11.122 2.145-8.001-2.604-16.226-10.606-18.37z"></path>
                  <path d="m511.772 431.883-55.567-315.139c-1.438-8.158-9.215-13.603-17.377-12.167l-127.828 22.54v-72.116c0-30.327-24.673-55-55-55s-55 24.673-55 55v44.117l-99.295-26.606c-8.003-2.146-16.228 2.604-18.371 10.606l-82.823 309.097c-1.03 3.843-.491 7.937 1.499 11.382 1.989 3.445 5.265 5.959 9.108 6.989l105.886 28.372 10.694 60.647c.69 3.918 2.91 7.401 6.168 9.683 2.539 1.778 5.546 2.713 8.604 2.713.867 0 1.739-.075 2.604-.228l146.966-25.914 66.812 17.902c1.3.349 2.605.515 3.892.515 6.622 0 12.684-4.42 14.479-11.122l6.276-23.422 116.106-20.473c8.158-1.438 13.606-9.218 12.167-17.376zm-78.147-270.432-57.381-15.375 53.021-9.349zm-202.625-106.45c0-13.785 11.215-25 25-25s25 11.215 25 25v65.553l-50-13.398zm-76.363 424.623-5.66-32.099 74.497 19.961zm-121.266-94.133 75.058-280.119 172.571 46.241v38.389c0 5.514-4.486 10-10 10s-10-4.486-10-10v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15c0 22.056 17.944 40 40 40s40-17.944 40-40v-30.35l116.185 31.131-75.058 280.119zm358.695 52.268 54.449-203.206 33.108 187.767z"></path>
                </g>
              </svg>
              <span class="link-text">Vos contenus</span>
            </router-link>
          </li>
          <li class="account_menu_list_item">
            <a @click="logout"
              class="account_menu_list_item_link logout"
              title="se déconnecter">
              <svg aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-log-out"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21"
                  y1="12"
                  x2="9"
                  y2="12">
                </line>
              </svg>
              <span class="link-text">Se déconnecter</span>
            </a>
          </li>
          <li class="account_menu_list_item">
            <router-link :to="{ name: 'deleteaccount' }"
              class="account_menu_list_item_link logout"
              title="supprimer votre compte">
              <svg aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 58.67">
                <g id="Layer_2"
                  data-name="Layer 2">
                  <g id="Layer_1-2"
                    data-name="Layer 1">
                    <path class="cls-1"
                      d="M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z" />
                    <path class="cls-1"
                      d="M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z" />
                    <path class="cls-1"
                      d="M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z" />
                  </g>
                </g>
              </svg>
              <span class="link-text">Supprimer votre compte</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <article class="account_info">
        <router-view />
      </article>
    </section>
  </main-layout>
</template>
<script>
import { mapMutations } from 'vuex'
import MainLayout from './MainLayout.vue'
export default {
  components: { MainLayout },
  methods: {
    ...mapMutations(['logout'])
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_mixins.scss';
.account {
  display: flex;
  justify-content: space-around;
  @media (max-width: $large-breakpoint) {
    display: block;
  }
  &_menu {
    &_list {
      margin: 3rem;
      @media (max-width: $large-breakpoint) {
        display: flex;
        margin: 1rem;
        overflow-y: scroll;
        padding: 0;
      }
      @media (max-width: $xxs-breakpoint) {
        padding: 0.3rem;
      }
      &_item {
        list-style-type: none;
        padding: 0.5rem;
        display: flex;
        &_link {
          @include link-style(normal);
          display: flex;
          align-items: center;
          gap: 1rem;
          &:hover {
            text-decoration: $hover-classic-link;
          }
          .link-text {
            width: max-content;
          }
        }
      }
    }
  }
}

.account_info {
  margin: 1rem 5rem;
  width: 40%;
  @media (max-width: $large-breakpoint) {
    margin: 3rem 0;
    width: 100%;
  }
  &_heading {
    font-size: map-get($font-sizes, heading2);
    text-align: center;
  }
  /*@media (max-width: $small-breakpoint) {
    width: 80%;
    margin: 1rem;
  }*/
  &_form-item {
    padding: 1rem 0;
  }
  &_button {
    margin: 1rem 0;
  }
}
.router-link-exact-active {
  color: $second-text-color;
  font-weight: map-get($font-weights, bold);
}
.logout {
  cursor: pointer;
}
</style>