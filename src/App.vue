
   
<template>  
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
      <!-- <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      >s
      </v-avatar> -->

       

     

    <v-btn
      class="mx-2"
      fab
      dark
      small
      to="/pd_Dpy3"
      color="#4f46e5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    </v-btn>

    <v-btn
      class="mx-2 my-5"
      fab
      dark
      small
      to="/pd_Dpy3"
      color="#db2777"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </v-btn>

    <v-btn
      class="mx-2 my-5"
      fab
      dark
      small
      to="/tst_Dpy"
      color="blue"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </v-btn>

 

           <!-- <ul class="pt-10 ">

       
          <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/asaskAdd5" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           增修題本
        </router-link>
      </a> 
        </li>

        
        
       

 <li class="my-5"> 
             <a href="#" class="w-full block py-2  text-center hover:bg-blue-700  hover:text-blue-800">
     
       <router-link to="/asaak5_List" class="text-white text-xs "> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           修改題本
        </router-link>
      </a>
       
        </li>

        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/tst_Dpy" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           題本模擬填答
        </router-link>
      </a> 
        </li>


        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/adPlayer" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           預約玩家
        </router-link>
      </a> 
        </li>

        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/tst_List" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           查看填答 結果
        </router-link>
      </a> 
        </li>

        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/tst_List2" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           2
        </router-link>
      </a> 
        </li>

        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/tst_Email" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           tst_Email
        </router-link>
      </a> 
        </li>

        <li class="my-2"> 
            <a href="#" class="w-full block py-2   text-center hover:bg-blue-700   hover:text-blue-800">
        <router-link to="/tst_Dpy" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5   mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           tst_Dpy
        </router-link>
      </a> 
        </li>

       
       
    </ul>
     -->
    </v-navigation-drawer>
    <v-content class="m-2"  > 
         <router-view></router-view>
      </v-content>

    <!-- <v-main>
        
    </v-main> -->
  </v-app>
   
</template>
 
 <script>
  export default {
    data () {
      return {
        cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
      }
    },
  }
</script>