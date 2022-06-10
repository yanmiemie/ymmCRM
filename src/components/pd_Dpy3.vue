<template> 
    <div class=" flex justify-center  ">
    <div class="w-full ">
            <div class="grid grid-cols-9 gap-1"> 
              
              <div class =" col-span-4">
                <span class="pt-30 text-xs font-base my-3 " > {{msg}} 請 {{ tmplr.patient_ID }} - {{ tmplr.name }} ，完成 {{ tmplr.prePare }}</span>

              </div>
               <div class ="col-span-5">
                 
              </div>
              
            </div>
             

              
           <v-tabs
            v-model="tab"
            background-color="#EEEFF3" 
            fixed-tabs 
           >   

            <v-tab key='k0' href='#k0' v-if="!hide"  >    
              新增 產品
            </v-tab> 
            
            <v-tab key='k7' href='#k7' v-if="!hide"  >    
              修改產品 資料 
            </v-tab>

            <v-tab key='k12' href='#k12' v-if="!hide"  >    
              新增.訂單 
            </v-tab>

            <v-tab key='k11' href='#k11' v-if="!hide"  >    
              查詢.訂單
            </v-tab>  

            <v-tab key='k88' href='#k88' v-if="!hide"  >    
              顧客 列表 88
            </v-tab> 

            <v-tab key='k9' href='#k9' v-if="!hide"  >    
              產品 列表 
            </v-tab>

            <v-tab key='k10' href='#k10' v-if="!hide"  >    
              計算機
            </v-tab>

            <v-tab key='k8' href='#k8' v-if="!hide"  >    
              顧客 列表
            </v-tab>   

            

          </v-tabs>  

      <v-tabs-items v-model="tab">   
        <v-tab-item key='k0' value='k0'>  
          <div class="grid grid-cols-6 gap-1 mt-10">   
            <div class="col-span-6  ">
              <span class="pt-30 text-xs font-base my-3" > 
                {{ msg }}
              </span> 
            </div>

            <div class="col-span-6  ">
              <span class="pt-30 text-xs font-base my-3" > 
                產品登入
              </span> 
            </div> 

            <div class="col-span-1  ">
              <v-text-field 
              type="number" 
                dense v-model="pd.sno"   
                class=" text-xs  px-1" label="產品序號" >
              </v-text-field>  
            </div>

              <div class="col-span-1  ">
              <v-text-field 
              type="number" 
                dense v-model="pd.ser_idx"   
                class=" text-xs  px-1" label="系列編號" >
              </v-text-field>  
            </div> 

            <div class="col-span-1  ">
              <v-text-field 
                dense v-model="pd.name"   
                class=" text-xs  px-1" label="名稱" >
              </v-text-field>  
            </div>  

            <div class="col-span-1  ">
              <v-text-field 
                dense v-model="pd.ser_mdf"   
                class=" text-xs  px-1" label="系列名稱" >
              </v-text-field>  
            </div>

            <div class="col-span-1  ">
              <v-text-field 
                type="number" 
                dense v-model="pd.price"  
                class=" text-xs  px-1" label="售價" >
              </v-text-field>  
            </div>

               
            
            <!-- // - - - - - - -->
             

            <div class="col-span-1  ">
              <v-btn @click="savePd" > 設定產品 </v-btn>   
            </div> 

            <div class="col-span-1  ">
              <v-btn @click="updtaPd" > 更新產品 </v-btn>   
            </div> 
          </div> 

          
        </v-tab-item>
        
        <v-tab-item key='k9' value='k9'>  
            
            <template>
            <v-data-table
              :headers="pdLst"
              :items="tutorials"
              :items-per-page="30"
              :sort-by="['sno', 'ser_idx']"
              :sort-desc="[false, false]"
              multi-sort dense
              :search="search"  
            >
              <template v-slot:item.edit="{ item }">
                
                <v-icon
                  small
                  @click="deletePd(item.key)"
                >
                  mdi-delete
                </v-icon>
              </template>

              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  label="搜尋...路名"
                  class="mx-4"
                  ></v-text-field>
              </template>
              
            </v-data-table>
          </template>  
        </v-tab-item> 

        <v-tab-item key='k10' value='k10'>  
            

            <div class = "w-full"> 
              <div 
                    v-for="(tutorial, index) in tutorials"  
                    :key="index"
                    class="grid grid-cols-6 gap-1" 
                 >
                 
                  <div class="col-span-4 "> 
                     <span class="text-white text-xs mt-12 mr-3 bg-green-700 py-1 px-2 rounded-lg"  >
                      
                      {{ tutorial.name }} - {{ tutorial.ser_mdf }} 
                      </span>

                      <span class="pt-2 text-xs font-black my-8">
                        {{ tutorial.price }} $ 
                        </span>
                  </div>  
                  
                  <div class="col-span-1">  
                       <input type="number"   min="0" v-model="BKing[index]"  
                              class="focus:ring-red-500 focus:border-red-500  
                                sm:text-sm border-red-300 rounded-md" 
                              placeholder="0.00">
                       </input> 
                  </div>  

                  <div class="col-span-1 text-xs font-base text-green-900 
                              bg-green-50 rounded-lg pl-2 ">
                       {{ BKing[index] * tutorial.price }} 
                   </div> 
                </div> 

                <br>
                <hr>

                <div 
                    v-for="(tutorial, index) in tutorials"  
                    :key="index"
                    class="grid grid-cols-6 gap-1" 
                 ></div>

                <!-- <div class="col-span-1 bg-red-200 rounded-lg ">
                       {{ BKing[index] * tutorial.price }} 元
                   </div>  -->

              <!-- <div class ="w-3/3 ">  
                  
              </div> -->
              <!-- <div class = "w-1/3">
              {{ Price }} || {{ BKing }}

            </div> -->

            </div>
            <!-- <template>
            <v-data-table
              :headers="pdLst_Mdf2CNT"
              :items="tutorials"
              :items-per-page="30" 
              multi-sort dense
              :search="search"  
            >
              
              
              <template v-slot:item.edit="{ item }">
                
                <v-icon
                  small
                  @click="deletePd(item.key)"
                >
                  mdi-delete
                </v-icon>

                <v-text-field 
                class="w-1/6" 
                type="number" 
                value="item.price"
                v-model="item.key" outlined dense >
               </v-text-field>
              </template>

              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  label="搜尋...路名"
                  class="mx-4"
                  ></v-text-field>
              </template>
              
            </v-data-table>
          </template>   -->
        </v-tab-item> 

        <v-tab-item key='k11' value='k11'>


        <div class="grid grid-cols-12 " v-show="show_dtl" >  
      
          <div class="col-span-3 border-2 border-blue-700  bg-blue-200 p-3 m-2"> 
            <div>  
              <!-- {{ filterByDate }} -->
              目前登記.總數量: 
                <div v-for="ODer in ODers" v-if=" ODer.pd_id == '山羊乳950cc' | ODer.pd_id == '山羊乳500cc'">
                  <span class="  text-xs font-base p-1">{{ ODer.pd_id }}</span> 
                  <span class="  text-xs font-black p-3">{{ ODer.pd_amt }}</span>
                  <span class="  text-xs font-base p-1" >{{ ODer.sentTime.substr(5,10) }} {{ cntDate_gtWeek(ODer.sentTime)}}</span>
                  <span class="  text-xs font-light p-3" >{{ ODer.income }}</span>
                </div> 
            </div> 
              
          </div> 

          <div class="col-span-3 border-2 border-green-700  bg-green-200 p-3 m-2 ">
            <div> 

              <!-- {{ filterByDate }} -->
              目前登記.總數量: 
                <!-- <div v-for="ODer in ODers" v-if=" ODer.pd_id == '山羊乳950cc' | ODer.pd_id == '山羊乳500cc'">
                  <span class="  text-xs font-base p-1">{{ ODer.pd_id }}</span> 
                  <span class="  text-xs font-black p-3">{{ ODer.pd_amt }}</span>
                  <span class="  text-xs font-base p-3" >{{ ODer.sentTime }}</span>
                </div>  -->
                <!-- <hr class="hr-5"> -->

                <div v-for="ODer in ODers" v-if=" ODer.pd_id == '山羊乳180cc (原味)' ">
                  <span class="  text-xs font-base p-1">{{ ODer.pd_id }}</span> 
                  <span class="  text-xs font-black p-3">{{ ODer.pd_amt }}</span>
                  <span class="  text-xs font-base p-1" >{{ ODer.sentTime.substr(5,10) }} {{ cntDate_gtWeek(ODer.sentTime)}}</span>
                  <span class="  text-xs font-light p-3" >{{ ODer.income }}</span>
                </div> 

                  

                <span class="leading-10 text-s font-black" > 山羊乳 : {{ Bts }} 大 + {{tts}} 中</span>
            </div> 

          </div>  

          <div class="col-span-6 border-2 border-gray-700  bg-gray-200 p-3 m-2 " >
            <div> 

              <div class ="flex ">
                <v-text-field
                  v-model="who"
                  append-icon="mdi-magnify"
                  label="搜尋顧客姓名"
                  single-line
                  hide-details
                  class="col-span-2 px-4"
                ></v-text-field> 

                <v-select
                  v-model="searchs"
                  :items="D_itms"
                  label="配送時間" 
                ></v-select> 

                
              </div>

              <span class="  text-lg font-black p-1">{{ CNT_thsDta_Prc_Mr }} 元 </span>
              <br>
              thisDay_Mor:
            
              <!-- {{ findMb_ads(ODer.pd_id)[0] }} -->
              <!-- <span class="  text-xs">{{ thsDa_Big }}</span> -->
                <div v-for="ODer  in thsDa_Mor" >
                  <span class="  text-xs font-black p-2">{{ ODer.pd_id }}</span> 
                  <span class="  text-xs font-black p-1">{{ ODer.pd_amt }}</span>  

                  <span class="  text-xs font-base p-1" >{{ ODer.sentTime.substr(5,10) }} {{ cntDate_gtWeek(ODer.sentTime)}}</span>
                  <span class="  text-xs font-base p-1">{{ ODer.bking_name }}</span>  
                  <span class="  text-xs font-black p-1">{{ ODer.income }}</span>  
                  <span class="  text-xs font-base p-3"> {{ findMb_ads(ODer.bking_name)[0].adrs }} , {{ findMb_ads(ODer.bking_name)[0].phone }}</span>
                  <!-- <span class="  text-xs font-base p-3"> {{ findMb_ads('林志穎/楊佳燕')[0].adrs }}</span> -->

                </div> 
              <hr class="hr-5">

              thisDay_Big:
            
              <!-- {{ findMb_ads(ODer.pd_id)[0] }} -->
              <!-- <span class="  text-xs">{{ thsDa_Big }}</span> -->
                <div v-for="ODer  in thsDa_Big" >
                  <span class="  text-xs font-black p-2">{{ ODer.pd_id }}</span> 
                  <span class="  text-xs font-black p-1">{{ ODer.pd_amt }}</span>  

                  <span class="  text-xs font-base p-1" >{{ ODer.sentTime.substr(5,10) }} {{ cntDate_gtWeek(ODer.sentTime)}}</span>
                  <span class="  text-xs font-base p-1">{{ ODer.bking_name }}</span>  
                  <span class="  text-xs font-black p-1">{{ ODer.income }}</span>  
                  <span class="  text-xs font-base p-3"> {{ findMb_ads(ODer.bking_name)[0].adrs }} , {{ findMb_ads(ODer.bking_name)[0].phone }}</span>
                  <!-- <span class="  text-xs font-base p-3"> {{ findMb_ads('林志穎/楊佳燕')[0].adrs }}</span> -->

                </div> 
              <hr class="hr-5">

              thisDay_Mid: 
              <!-- <span class="  text-xs"> {{ thsDa_Mid }}</span> -->
                <div v-for="ODer  in thsDa_Mid">
                  <span class="  text-xs font-black p-2">{{ ODer.pd_id }}</span>  
                  <span class="  text-xs font-black p-1">{{ ODer.pd_amt }}</span>  

                  <span class="  text-xs font-base p-1" >{{ ODer.sentTime.substr(5,10) }} {{ cntDate_gtWeek(ODer.sentTime)}}</span>
                  <span class="  text-xs font-base p-1">{{ ODer.bking_name }}</span>
                  <span class="  text-xs font-black p-1">{{ ODer.income }}</span>  
                  <span class="  text-xs font-base p-3"> {{ findMb_ads(ODer.bking_name)[0].adrs }} , {{ findMb_ads(ODer.bking_name)[0].phone }}</span>
                </div> 


              <hr class="hr-5">  
                <span class="leading-10 text-s font-black" > 
                  山羊乳 : {{ CNT_thsDa_Big }} 大 + {{CNT_thsDa_Mid}} 中  
                </span> 

                <span class="leading-10 text-s font-black" >  
                  共{{ CNT_thsDa_Prc_Bg}} +  {{ CNT_thsDa_Prc_Md }} +  {{ CNT_thsDa_Prc_Mr }} 元
                </span> 
            </div>   
          </div>   

        </div>  


        <div class="grid grid-cols-10 " >  
            <v-text-field
              v-model="searchs"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="col-span-2 px-4"
            ></v-text-field>  
 
            <v-text-field
              v-model="need_Price"
              counter-value="mdi-message-alert"
              label="預估費用"
              single-line
              hide-details
              class="col-span-2 px-4"
            ></v-text-field> 

            <v-text-field
              v-model="clipboard"
              append-icon="mdi-clipboard-text"
              label="複製"
              single-line
              hide-details
              class="col-span-2 px-4"
            ></v-text-field> 

            <v-checkbox
              v-model="show_dtl" 
              label="顯示訊息"
              value=true 
              small dense
            ></v-checkbox>

            <v-text-field
              v-model="who"
              append-icon="mdi-magnify"
              label="搜尋顧客姓名"
              single-line
              hide-details
              class="col-span-2 px-4"
            ></v-text-field> 

        </div>
          

          <v-data-table 
            :headers="ODershd"
            :items="ODers"
            :search="searchs"
            :items-per-page="30" 
          >  
          <template v-slot:item.bking_name="{ item }"> 
            
            <v-text-field
              v-model="item.bking_name" 
              single-line
            ></v-text-field> 
          </template>
          <template v-slot:item.pd_amt="{ item }"> 
            
            <v-text-field
              v-model="item.pd_amt" 
              single-line type="number"
            ></v-text-field> 
          </template>

          <template v-slot:item.income="{ item }"> 
            <v-text-field
              v-model="item.income"  
              single-line type="number"
            ></v-text-field>  
          </template>

          <template v-slot:item.mthCard="{ item }"> 
            <v-text-field
              v-model="item.mthCard" 
              single-line type="number"
            ></v-text-field>  
          </template>

          <template v-slot:item.chk_pay="{ item }"> 
            <v-checkbox
              v-model="item.chk_pay" 
              color="orange"
              value="已付款"
              hide-details
              small dense
            ></v-checkbox> 
          </template>

          <template v-slot:item.chk_snt="{ item }"> 
            <!-- <v-text-field
              v-model="item.chk_pay" 
              single-line type="number"
            ></v-text-field>   -->
            <v-radio-group 
            v-model="item.chk_snt" 
            row >
              <v-radio
                label="延期"
                value="sntatus_1"
              ></v-radio>
              <v-radio
                label="停送"
                value="sntatus_2"
              ></v-radio>
              <v-radio
                label="完成"
                value="sntatus_3"
              ></v-radio>
            </v-radio-group>
          </template>

          <template v-slot:item.memo="{ item }">  
            <v-text-field
              v-model="item.memo" 
              single-line 
            ></v-text-field> 
          </template>

          <template v-slot:item.edit="{ item }"> 
            <v-icon
              small class="px-2" @click="deleteOd(item.key)"
            >
              mdi-delete
            </v-icon>

            <v-btn
              small
              class="px-2"
              @click="UpDtaOd(item)"
            >
              更新
            </v-btn>

            <v-btn
              small
              class="mx-3"
              @click="UpDtaOd2(item)"
            >
              更新2
            </v-btn>
          </template> 

          </v-data-table>

        </v-tab-item> 

        <v-tab-item key='k88' value='k88'> 
          <div class="grid grid-cols-6 gap-1 mt-10"> 
            <div class="col-span-6 flex border-2 border-red-700  bg-red-200 p-3 m-2 ">
               <v-text-field 
                    dense v-model="mb.name"   
                    class="col-span-1 text-xs  px-1" label="暱稱" >
                  </v-text-field>  

                  <v-text-field 
                    dense v-model="mb.phone"   
                    class="col-span-1 text-xs  px-1" label="手機" >
                  </v-text-field>  
                  
                  <v-text-field 
                    dense v-model="mb.adrs"   
                    class="col-span-1 text-xs  px-1" label="地址" >
                  </v-text-field> 

                  <v-text-field 
                    dense v-model="mb.cmty"   
                    class="col-span-1 text-xs  px-1" label="社區名稱" >
                  </v-text-field>

                  <v-text-field 
                    dense v-model="mb.memo"   
                    class="col-span-1 text-xs  px-1" label="備註" >
                  </v-text-field>

                  <v-autocomplete
                    v-model="mb.regen"
                    :items="regen_idx"
                    dense label="地區"
                    class="col-span-2"
                  ></v-autocomplete>  

                  <v-autocomplete
                    v-model="mb.pd_suit"
                    :items="pd_content_idx1"
                    dense label="方案"
                    class="col-span-2"
                  ></v-autocomplete>  

                  <!-- <v-text-field 
                    dense v-model="mb.pd_suit"   
                    class="col-span-1 text-xs  px-1" label="方案" >
                  </v-text-field>  -->
                <v-btn @click="saveMbr(mb)" > 新增 </v-btn>  
            </div> 
            <div class="col-span-3   m-2 ">
                
                <div  v-for="(_Mb, index) in MbrList" :key="index" v-if="_Mb.pd_suit != '晨間配送'" >   

                  <div class="grid grid-cols-5 gap-0.1  border-2 border-green-700 bg-green-200 p-3 m-1">
                      <v-text-field 
                        dense v-model="_Mb.name"   
                        class="col-span-1 text-xs  px-1" label="暱稱" >
                      </v-text-field>  

                      <v-text-field 
                        dense v-model="_Mb.phone"   
                        class="col-span-1 text-xs  px-1" label="手機" >
                      </v-text-field>  

                       <v-text-field 
                        dense v-model="_Mb.memo"   
                        class="col-span-1 text-xs  px-1" label="備註" >
                      </v-text-field> 

                       <v-text-field 
                        dense v-model="_Mb.cmty"   
                        class="col-span-1 text-xs  px-1" label="社區名稱" >
                      </v-text-field>

                      <div class="row-span-2"> 
                        <v-btn @click="UpDtaMbr(_Mb)" > 更新資料 </v-btn>
                        <!-- <v-btn @click="saveMbr(_Mb)" > 新增 </v-btn>   -->
                      </div> 
                      
                       <v-text-field 
                        dense v-model="_Mb.adrs"   
                        class="col-span-2 text-xs  px-1" label="暱稱" >
                      </v-text-field>  
                      
                      <v-text-field
                        v-model="_Mb.regen" 
                        dense label="地區"
                        class="col-span-1"
                      ></v-text-field> 

                      <v-autocomplete
                        v-model="_Mb.pd_suit"
                        :items="pd_content_idx1"
                        dense label="方案"
                        class="col-span-1"
                      ></v-autocomplete> 
                      
                      
                      
                     

                     
                      
                    </div>  
                </div>  
            </div> 

            <div class="col-span-3 m-2 "> 
                <div  v-for="(_Mb, index) in MbrList" :key="index" v-if="_Mb.pd_suit == '晨間配送'" >  
                  <div class="grid grid-cols-5 gap-0.1 border-2 border-blue-700 bg-blue-200 p-3 m-1">
                      <v-text-field 
                        dense v-model="_Mb.name"   
                        class="col-span-1 text-xs  px-1" label="暱稱" >
                      </v-text-field>  

                      <v-text-field 
                        dense v-model="_Mb.phone"   
                        class="col-span-1 text-xs  px-1" label="手機" >
                      </v-text-field>  

                       <v-text-field 
                        dense v-model="_Mb.memo"   
                        class="col-span-1 text-xs  px-1" label="備註" >
                      </v-text-field> 

                       <v-text-field 
                        dense v-model="_Mb.cmty"   
                        class="col-span-1 text-xs  px-1" label="社區名稱" >
                      </v-text-field>

                      <div class="row-span-2"> 
                        <v-btn @click="UpDtaMbr(_Mb)" > 更新資料 </v-btn>
                        <!-- <v-btn @click="saveMbr(_Mb)" > 新增 </v-btn>   -->
                      </div> 
                      
                       <v-text-field 
                        dense v-model="_Mb.adrs"   
                        class="col-span-2 text-xs  px-1" label="暱稱" >
                      </v-text-field>  
                      
                      <v-text-field
                        v-model="_Mb.regen" 
                        dense label="地區"
                        class="col-span-1"
                      ></v-text-field> 

                      <v-autocomplete
                        v-model="_Mb.pd_suit"
                        :items="pd_content_idx1"
                        dense label="方案"
                        class="col-span-1"
                      ></v-autocomplete>  
                     
                      
                    </div>  
                </div>  
            </div> 
        
            <!-- <div class="col-span-10 grid grid-cols-3 gap-1  my-10 "> 
                   
            </div>   -->
          </div>    
        </v-tab-item> 

        <v-tab-item key='k8' value='k8'> 
          <div class="grid grid-cols-10 gap-1 mt-10"> 
         
            <div class="col-span-10 grid grid-cols-3 gap-1  my-10 ">
               
                <div  v-for="(_Mb, index) in MbrList" :key="index" >  

                  <v-text-field 
                    dense v-model="_Mb.name"   
                    class="col-span-1 text-xs  px-1" label="暱稱" >
                  </v-text-field>  

                  <v-text-field 
                    dense v-model="_Mb.phone"   
                    class="col-span-1 text-xs  px-1" label="手機" >
                  </v-text-field>  

                  <div class="col-span-1">
                  <!-- <v-btn @click="saveCMS" > 新增顧客資料 </v-btn> -->
                  <v-btn @click="UpDtaMbr(_Mb)" > 更新資料 </v-btn>
                  <v-btn @click="saveMbr(_Mb)" > 新增 </v-btn>
                  <!-- <v-btn @click="deleteCMS" > 刪除 </v-btn> -->
                  
                </div>

                  <!-- <v-chip class="text-white text-xs mr-5" color="green"  >
                    {{ _Mb.name }} _ {{ _Mb.phone }} 
                  </v-chip>   -->

                </div>

                <h3> 訂單內容 </h3>
                <div  v-for="(_Mb, index) in ODers" :key="index" >   
                  <v-text-field 
                    dense v-model="_Mb.bking_name"   
                    class="col-span-1 text-xs  px-1" label="鄰里巷弄" >
                  </v-text-field>  

                  <v-text-field 
                    dense v-model="_Mb.pd_amt" type="number"
                    class="col-span-1 text-xs  px-1" label="數量" >
                  </v-text-field>  

                  <v-text-field 
                    dense v-model="_Mb.key"   
                    class="col-span-1 text-xs  px-1" label="鄰里巷弄" >
                  </v-text-field>  

                  <div class="col-span-1">
                  <!-- <v-btn @click="saveCMS" > 新增顧客資料 </v-btn> -->
                  <v-btn @click="UpDtaOd(_Mb)" > 更新資料 </v-btn>
                  <!-- <v-btn @click="deleteCMS" > 刪除 </v-btn> -->
                  
                </div>

                  <!-- <v-chip class="text-white text-xs mr-5" color="green"  >
                    {{ _Mb.name }} _ {{ _Mb.phone }} 
                  </v-chip>   -->

                </div>
            </div>  
          </div>    
        </v-tab-item> 

      
        <v-tab-item key='k12' value='k12'> 
          <div class="grid grid-cols-6 mt-12 "> 
            <div class="col-span-1">
              
              <v-autocomplete
                v-model="bking_name"
                :items="tmpMbrList"
                dense label="選擇顧客"
                class="col-span-2"
              ></v-autocomplete>  
            </div>  

            <div class="col-span-1">
                <v-row>  
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="sentTime"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                          v-model="sentTime"
                          multiple
                          chips
                          small-chips
                          label="選一天"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-combobox>
                      </template>

                      <v-date-picker
                        v-model="sentTime"
                        multiple
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(sentTime)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu> 
                </v-row>
            </div> 
            
            <div class="col-span-1"> 
                <v-autocomplete
                  v-model="pd_id" 
                  :items="pdLiST"
                  dense label="購買品項"
                ></v-autocomplete> 
            </div>  
            <div class="col-span-1">
              <v-text-field 
                dense v-model="income" 
                class=" text-xs  px-1" label="成交價" >
                </v-text-field>  
            </div> 
            <div class="col-span-1  ">
              <v-text-field 
                dense v-model="pd_amt" type="number"
                class=" text-xs  px-1" label="數量" >
              </v-text-field>   
            </div>

            <div class="col-span-1  "> 
              <v-btn 
                @click="saveODer"
                
              >提交囉</v-btn> 
            </div> 


             <div class="col-span-6  ">
               
                  <div
                    v-for="(item, i) in ODers"
                    :key="i"
                  > 
                    <div class="grid grid-cols-10 border-blue-700 border-2 bg-blue-200 p-3 m-2" >  
                        <span class="pt-30 text-xs font-base col-span-4 " >
                          {{ item.bking_name}}_{{ item.pd_id }} _ {{ item.income }}_  {{ item.sentTime }} _  {{ item.pd_amt }}  </span> 
                        <v-autocomplete
                          v-model="item.pd_id" 
                          :items="pdLiST"
                          dense label="購買品項"
                          class="col-span-2"
                        ></v-autocomplete> 

                        <v-text-field 
                          dense v-model="item.sentTime" hint="配送時間"
                          class="col-span-2 text-xs  px-1" label="配送時間" >
                        </v-text-field>   
                    
                        <v-btn @click="deleteOd(item.key)" > 馬上刪除 </v-btn>
                        <v-btn @click="UpDtaOd(item)" > 更新 </v-btn>
                    </div> 
              </div>
            </div>
         </div>
        </v-tab-item> 

        <v-tab-item key='k7' value='k7'> 
          <div class="grid grid-cols-6 gap-1 mt-10"> 
            <div class="col-span-5">

              <div class="col-span-5 grid grid-cols-6">  
                      {{ msg }} 
              </div> 

              <div class="col-span-6 my-10 grid grid-cols-6 gap-1">
                <div class="col-span-6  ">
              <span class="pt-30 text-xs font-base my-3" > 
                修改
              </span> 
            </div> 

            <div class="col-span-1  ">
              <v-text-field 
              type="number" 
                dense v-model="currentTutorial.sno"   
                class=" text-xs  px-1" label="產品序號" >
              </v-text-field>  
            </div>

              <div class="col-span-1  ">
              <v-text-field 
              type="number" 
                dense v-model="currentTutorial.ser_idx"   
                class=" text-xs  px-1" label="系列編號" >
              </v-text-field>  
            </div> 

            <div class="col-span-1  ">
              <v-text-field 
                dense v-model="currentTutorial.name"   
                class=" text-xs  px-1" label="名稱" >
              </v-text-field>  
            </div>  

            <div class="col-span-1  ">
              <v-text-field 
                dense v-model="currentTutorial.ser_mdf"   
                class=" text-xs  px-1" label="系列名稱" >
              </v-text-field>  
            </div>

            <div class="col-span-1  ">
              <v-text-field 
                type="number" 
                dense v-model="currentTutorial.price"  
                class=" text-xs  px-1" label="售價" >
              </v-text-field>  
            </div> 
 
                 <div class="col-span-1  ">
                  <v-btn @click="savePd_cur" > 新增產品 </v-btn>   
                </div> 

                <div class="col-span-1  ">
                  <v-btn @click="updtaPd" > 更新產品 </v-btn>   
                </div>  
                
                  </div>
                   
                  </div>
                  <div class="col-span-10"></div> 
  
            <div class="col-span-5 my-10 ">
              <v-list-item-group 
                color="primary" 
                > 
                <v-list-item
                  v-for="(tutorial, index) in tutorials"  
                  :key="index"  
                  @click="setActiveTutorial(tutorial, index)"
                  
                > 
                <v-chip class="text-white text-xs mr-5" color="green"  >
                 {{ tutorial.sno }} -{{ tutorial.ser_idx }}  |  {{ tutorial.name }} - {{ tutorial.ser_mdf }} : {{ tutorial.price }} $
                </v-chip> 
                <v-btn  @click="deletePd(tutorial.key)"  >刪除 {{ tutorial.key }}</v-btn></v-btn>

                <span class="text-xs text-green-700 font-semibold tracking-wide">{{ tutorial.question }}</span>
    
                </v-list-item>
              </v-list-item-group>  
            </div>  
          </div>    
        </v-tab-item> 
 
      </v-tabs-items>
    </div>  
  </div>
</template>
 

<script>

import TutorialDetails from "./tst_Dpy_Mdf";

import odDataService from "../services/odDataService"
import pdDataService from "../services/pdDataService"
import mbrDataService from "../services/mbrDataService"


// src/components/tst_Dpy_Mdf.vue
 
import SeatDataService from "../services/SeatPrepareService";
import Cookies from 'js-cookie'


import PlayerService from "../services/playerService";

// import Road from '../data/Roadapi';
import usersData from "../data/users.json";
import Rdapi from "../data/Roadapi.json";

// 引入 Day.js
// const dayjs = require('dayjs')

// 或使用 ES6 import 方式引入 Day.js
// import dayjs from 'dayjs'

export default {
  name: "tutorials-list",
  components: { TutorialDetails  },
  

  data() {
    return { 
      searchs:'', 
      who:'', 

      whee:3, 
      // = = = = == = 
      BKing:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Price:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // = = = = == = 
      products: [],

      sentTime:[],
      ODers:[],
      pds:[],
      pdLiST:[],
      MbrList:[],
      tmpMbrList:[],
      tmpMbrList2:[],
      jk:[],
      sd:[],
      need_Price:"",
      clipboard:"",
      show_dtl:false,

      value:'',
      value2:'',
      road:Rdapi,
      roadMdf:[],
      D_itms:["2022-05-22","2022-05-25","2022-05-27","2022-05-31"],
      pd_content_idx1:['家庭號配送','快閃店配送','晨間配送','原味1','原味2','綜合輪送（含原味）','調味輪送'],
      pd_content_idx2:['見紅就休','每天送','配合幼稚園','到外縣市上班','血緣親戚','親友團','家庭號-老顧客','家庭號-新顧客'],
      pd_content_idx3:['原味','甜味','紅糖','巧克力','草莓','果汁','綜合輪送'],

      // - - - - - - - - - - - - - - - - - - - -
      CMS:[],
      hds_Leeeft: [ 
        { text: '縣市名稱', value: 'name' },
        { text: '行政區域名稱', value: 'key' }, 
        // { text: '路名', value: '路名' },
      ], 
      
      ODershd: [ 
        { text: '顧客姓名', value: 'bking_name' ,width: "10%"},
        
        
        { text: '購買內容', value: 'pd_id' ,width: "8%"}, 
        { text: '數量', value: 'pd_amt' ,width: "5%"},
        { text: '配送日期', value: 'sentTime' ,width: "8%"},  
        { text: '月卡', value: 'mthCard' ,width: "5%"},
        { text: '成交價', value: 'income' ,width: "10%" ,align: 'center'},
        
        { text: '備註', value: 'memo',width: "10%" }, 
        { text: '付款', value: 'chk_pay' ,width: "8%" }, 
        { text: '配送', value: 'chk_snt' ,width: "20%"}, 

        // { text: '付款狀況', value: 'memo2' }, 
        // { text: '配送狀況', value: 'memo3' },

        { text: '編輯', value: 'edit',width: "15%" ,align: 'right',}, 
        
        // { text: '路名', value: '路名' },
      ], 
 

      pdLst: [  
        { text: '中分類', value: 'sno' ,align: 'center',sortable: true, },
        { text: '小分類', value: 'ser_idx',align: 'center',sortable: true, }, 
        { text: '產品名稱', value: 'name' }, 
        { text: '流水號', value: 'ser_mdf' }, 
        { text: '價錢'  , value: 'price' }, 
        { text: '流水號', value: 'key' },  
        { text: '編輯', value: 'edit' }, 
        // { text: '路名', value: '路名' },
      ],  

      pdLst_Mdf2CNT: [  
        // { text: '中分類', value: 'sno' ,align: 'center',sortable: true, },
        // { text: '小分類', value: 'ser_idx',align: 'center',sortable: true, }, 
        { text: '產品名稱', value: 'name' }, 
        { text: '流水號', value: 'ser_mdf' }, 
        { text: '價錢'  , value: 'price' },  
        { text: '編輯', value: 'edit' }, 
        // { text: '路名', value: '路名' },
      ],  

      // - - - - - - - - - - - - - - - - - - - - 
      users: usersData,
      // Roadhere: Road,
      msg:"",
      dialog: false,
      dialog2: false,
      cut_opts:['術前','術後一個月','術後三個月','術後四個月','術後六個月','術後九個月','術後一年','術後兩年','術後三年'], 
 

      menu2:false,
      DaTe: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
      tab:"k10",
      // radios:[],
      rds:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      radios1:"null",
      radios2:"null", 
      // - - - - 
      show: false,
      tutorials: [],
      // currentTutorial: null,
      currentIndex: -1,
      currentTutorial: 
      {
        sno:"",
        name:"",
        phone:"",  
      }, 
      
      pS:"",
      pN:"",
      pI:"",
      pP:[],
      pM:"",
      qufd:[],
      bking_Amt:0,

      test_DTA :[0,3,	3,	2,	2,	2,	2,	1,	1,	3,	2,	2,	2,	3,	3,	2,	2,	2,	3,	3,	3,	1,	3,	3,	3,	3,	3,	2,	3],
      test_DTA2:[0,5,	4,	2,	2,	5,	4,	3,	5,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	5,	5,	5,	5,	5,	5,	5,	1,	5,	4],
      test_DTA3:[0,4,	3,	1,	2,	3,	4,	4,	4,	4,	3,	4,	4,	4,	3,	5,	3,	4,	4,	4,	4,	4,	4,	4,	4,	4,	3,	4,	4,],
      regen_idx: ['新店','三峽','北大','鶯歌','樹林','新莊','龜山','八德','板橋','中和','新店'],
      cmtpipe:['官方帳號','大哥的Line','Fb','IG','Line','小寶的Line'],
     
      pd_id:"",
      pd_amt:"",
      income:"",
      bking_name:"", 
      
      mb:{ 
        name:"",
        phone : "",
        regen: "",
        adrs: "",
        cmty: "",
        pd_suit : "",
        memo:"",
      },

      pd:{
        sno:0,
        ser_idx:0,
        name:"",
        ser_mdf:"",
        price:0, 
      },
      
      mbr:{
          sno:"",
          name:"",
          phone:"",
          cmtpipe_1:"",
          cmtpipe_2:"",
          
          ads:{
            regen:"",
            road:"",
            no:"",
            floor:"",
            meta:"",
            cmty:"",  
          }, 

          bking:{
            mor: [],
            fmy: [], 
            timeNeed:"",
          },
          pmt:{
            fquc:"",
            type:"",
            noto:"",
          },
          memo:"", 
        },

      tmplr:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
        },

      player:{
          memo:"",
          name:"",
          quiz_statu:"",
          quiz_date:"",
          
          patient_ID:"",
          prePare:[],
          quiz_1_dtl:[],
          quiz_1_fdbk:[], 
           
        },
// - - - - -  測試 輔助功能:: 
        clients: [
                  {name: "client X", coins:  5},
                  {name: "client Y", coins: 10},
                  {name: "client Z", coins:  3},
                  {name: "client Z", coins:  3},
                  {name: "client Z2", coins: 12}
                ],
                totalCoins: 0,
                query: '',

                ThatDateODr:[],
    };
  }, 
  computed: { 
      // Get_need_Pay() {
      //   return this.BKing[] + this.num2;
      // },

      // - - - - - - - - - - - - - - 採取 ３ 段 : 日期 >> 品項 >> 數量
      filterByDate: function () { 
      	   return  this.ODers.filter(c => c.sentTime.indexOf(this.searchs) !== -1)
      },

      filterByName: function () { 
      	   return  this.ODers.filter(c => c.bking_name.indexOf(this.who) !== -1)
      },

      thsDta_Mor: function () {
      	return this.filterByName.filter(c => c.pd_id.indexOf('山羊乳180cc (原味)') !== -1)
      },

      CNT_thsDta_Prc_Mr: function () {
        return this.thsDta_Mor.reduce((a, b) => a + parseInt(b.income), 0)
      },
 
      thsDa_Big: function () {
      	return this.filterByDate.filter(c => c.pd_id.indexOf('山羊乳950cc') !== -1)
      }, 

      thsDa_Mid: function () {
      	return this.filterByDate.filter(c => c.pd_id.indexOf('山羊乳500cc') !== -1)
      },

      thsDa_Mor: function () {
      	return this.filterByDate.filter(c => c.pd_id.indexOf('山羊乳180cc (原味)') !== -1)
      },

      CNT_thsDa_Big: function () {
        return this.thsDa_Big.reduce((a, b) => a + parseInt(b.pd_amt), 0)
      },

      CNT_thsDa_Mid: function () {
        return this.thsDa_Mid.reduce((a, b) => a + parseInt(b.pd_amt), 0)
      },

      CNT_thsDa_Prc_Bg: function () {
        return this.thsDa_Big.reduce((a, b) => a + parseInt(b.income), 0)
      },

      CNT_thsDa_Prc_Md: function () {
        return this.thsDa_Mid.reduce((a, b) => a + parseInt(b.income), 0)
      },

      CNT_thsDa_Prc_Mr: function () {
        return this.thsDa_Mor.reduce((a, b) => a + parseInt(b.income), 0)
      },

      // Get_Price: function () {


      //   return this.Price.reduce((a, b) => a + parseInt(b.income), 0)
      // },

      
    } ,
     
  methods: {
    Mdf_BK(){  
      for( var c =0 ; c <= this.tutorials.length ; c++)
      {
        this.BKing[c] = parseInt(this.BKing[c])*parseInt(this.tutorials[c].price) ; 
      } 
    },

    get_Price(price,idx){ 
      this.Price[idx] = parseInt(this.BKing[idx])* parseInt(price)
    }, 
      
    Te(idx){ 
      if(idx == 1) { this.rds = this.test_DTA;  }
      else if( idx == 2 ){ this.rds = this.test_DTA2; } 
      else if( idx == 3 ){ this.rds = this.test_DTA3; } 
    },   
    chkrds(){
    for(let i = 0; i <= this.rds.length; i++){

          if( this.rds[i] == "null" ){
              this.rds[i] = 0 ; 
            } 
            else if( this.rds[i] == 'null' ){
              this.rds[i] = 0 ; 
            } 
            else if( this.rds[i] == '' ){
              this.rds[i] = 0 ; 
            }  
            else if( this.rds[i] == 5){
              this.rds[i] = 55 ; 
            }    
          }

    }, 
    savePtst(idx){  

        if( idx == 1){ 

           // 題本 1 計算方式
            this.qufd[0]=Math.round(((((((6-this.rds[3])+(6-this.rds[4])+this.rds[10]+this.rds[15]+this.rds[16]+this.rds[17]+this.rds[18])/7)*4)-4)*(100/16))*10)/10; 
            this.qufd[1]=Math.round( ((((this.rds[5] + this.rds[6] +this.rds[7]+this.rds[11]+this.rds[19]+(6-this.rds[26]))/6)*4)-4)*(100/16)*10)/10;
            this.qufd[2]=Math.round( ((((this.rds[20] + this.rds[21] +this.rds[22]+this.rds[27]                            )/4)*4)-4)*(100/16)*10)/10;       
            this.qufd[3]=Math.round( ((((this.rds[8] + this.rds[9] +this.rds[12] +this.rds[13] +this.rds[14] +this.rds[23] +this.rds[24] +this.rds[25] +this.rds[28]  )/9)*4)-4)*(100/16)*10)/10;
 
        }

        var data = { 
                      name        : this.tmplr.name,
                      patient_ID  : this.tmplr.patient_ID,  

                      prePare     : this.tmplr.prePare,
                      quiz_statu  : this.tmplr.quiz_statu,
                      quiz_date   : this.DaTe, 

                      quiz_dtl    : this.rds, 
                      quiz_fdbk   : this.qufd,  
                   };

        PlayerService.create(data)
          .then(() => {
            this.msg= "測試中，登記成功";
            this.submitted = true;

            this.tab ="k2"; 

            if(this.prePare[2]=="")
            {
              this.tab ="k2"; 
            }



          })
          .catch(e => { console.log(e); });  
    }, 
    savePdta() {
 
      this.qufd[0]=((((((6-this.radios[3])+(6-this.radios[4])+this.radios[10]+this.radios[15]+this.radios[16]+this.radios[17]+this.radios[18])/7)*4)-4)*(100/16)); 
      this.qufd[1]= ((((this.radios[5] + this.radios[6] +this.radios[7]+this.radios[11]+this.radios[19]+(6-+this.radios[26]))/6)*4)-4)*(100/16);
      this.qufd[2]=(((((this.radios[20] + this.radios[21] +this.radios[22]+this.radios[27])/4)*4)-4)*(100/16));           
  
      var data = {
       

        name        : this.tmplr.name,
        patient_ID  : this.tmplr.patient_ID,
        prePare     : this.tmplr.prePare, 
        quiz_1_fdbk : this.qufd,  
      };

      PlayerService.create(data)
        .then(() => {
          this.msg= "第一份，登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    }, 

    // - - - - - - - - - - - - - - - 
    updtaPd() {
          const data = { 

            sno : this.currentTutorial.sno,
            name : this.currentTutorial.name,
            price : this.currentTutorial.price, 
            ser_mdf : this.currentTutorial.ser_mdf, 
            ser_idx : this.currentTutorial.ser_idx, 
          };

          pdDataService.update(this.currentTutorial.key, data)
            .then(() => {
              this.msg = "更新資料,上傳成功!";
            })
            .catch((e) => {
              console.log(e);
            });
    },  
    savePd() {
       var data = { 
        sno : this.pd.sno,
        name : this.pd.name,
        price : this.pd.price, 
        ser_mdf : this.pd.ser_mdf, 
        ser_idx : this.pd.ser_idx, 
      };

      pdDataService.create(data)
        .then(() => {
          this.msg= "第一份，登記成功";
          // this.submitted = true;
        })
        .catch(e => {
          console.log(e);
          this.msg=e;
        }); 
    }, 
    savePd_cur() {
       var data = { 
        sno : this.currentTutorial.sno,
        name : this.currentTutorial.name,
        price : this.currentTutorial.price, 
        ser_mdf : this.currentTutorial.ser_mdf, 
        ser_idx : this.currentTutorial.ser_idx, 
      };

      pdDataService.create(data)
        .then(() => {
          this.msg= "第一份，登記成功";
          // this.submitted = true;
        })
        .catch(e => {
          console.log(e);
          this.msg=e;
        }); 
    }, 
    deletePd(e) {
      pdDataService.delete(e)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 

    // - - - - - - - - - - - - - - - 
    deleteOd(e) {
      odDataService.delete(e)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
    UpDtaOd(e) {
      odDataService.update(e.key, e)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 

    UpDtaOd2(e) {
          const data = { 

            // pd_id : this.currentTutorial.pd_id,
            // pd_amt : this.currentTutorial.pd_amt,
            // income : this.currentTutorial.income, 
            // bking_name: e.bking_name,
            pd_id: e.pd_id,
            pd_amt : e.pd_amt ,
            sentTime : e. sentTime ,  
            income: e.income.toString, 
            memo: e.memo, 
            // mthCard:e.mthCard, 
          };

          odDataService.update(e.key, data)
            .then(() => {
              this.msg =  e.bking_name + '@'+ e.sentTime+"更新資料,上傳成功!";
              // this.$emit("refreshList");
            })
            .catch((e) => {
              console.log(e);
            });
    },  

    // key: key,  
    //         bking_name: data.bking_name,
    //         pd_id: data.pd_id,
    //         pd_amt : data.pd_amt ,
    //         sentTime : data. sentTime ,  
    //         income: data.income, 
    //         memo: data.memo, 
    //         mthCard:data.mthCard, 

   // - - - - - - - - - - - - - - - 
    updateCMS() {
      const data = { 

        sno  : this.currentTutorial.sno,
        name : this.currentTutorial.name,
        phone : this.currentTutorial.phone,
        cmtpipe_1 : this.currentTutorial.cmtpipe_1 ,
        cmtpipe_2: this.currentTutorial.cmtpipe_2,
        regen: this.currentTutorial.regen,

        road: this.currentTutorial.road,
        no : this.currentTutorial.no ,
        floor : this.currentTutorial.floor ,
        meta : this.currentTutorial.meta ,
        cmty : this.currentTutorial.cmty ,

        mor : this.currentTutorial.mor ,
        fmy : this.currentTutorial.fmy ,
        timeNeed : this.currentTutorial.timeNeed ,

        fquc : this.currentTutorial.fquc ,
        type : this.currentTutorial.type ,
        noto : this.currentTutorial.noto ,

        memo: this.currentTutorial.memo, 
      };

      SeatDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.msg = "更新資料,上傳成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCMS() {
      SeatDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
    saveCMS() {  
      var data = {  
        sno : this.mbr.sno,
        name : this.mbr.name,
        phone : this.mbr.phone,
        cmtpipe_1 : this.mbr.cmtpipe_1 ,
        cmtpipe_2: this.mbr.cmtpipe_2,
        regen: this.mbr.ads.regen,

        road: this.mbr.ads.road,
        no : this.mbr.ads.no ,
        floor : this.mbr.ads.floor ,
        meta : this.mbr.ads.meta ,
        cmty : this.mbr.ads.cmty ,

        mor : this.mbr.bking.mor ,
        fmy : this.mbr.bking.fmy ,
        timeNeed : this.mbr.bking.timeNeed ,

        fquc : this.mbr.pmt.fquc ,
        type : this.mbr.pmt.type ,
        noto : this.mbr.pmt.noto ,

        memo: this.mbr.memo,  
      };

      SeatDataService.create(data)
        .then(() => {
          this.msg= "name,登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    },

    // - - - - - - - - - - - - - - - 
    updateODer() {
          const data = { 

            pd_id : this.currentTutorial.pd_id,
            pd_amt : this.currentTutorial.pd_amt,
            income : this.currentTutorial.income, 
          };

          odDataService.update(this.currentTutorial.key, data)
            .then(() => {
              this.msg = "更新資料,上傳成功!";
            })
            .catch((e) => {
              console.log(e);
            });
    },  
    deleteODer() {
      odDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
    saveODer() {  
      
      var step = parseInt(this.sentTime.length);
      if( step > 1 )
      {  
        for( var n=0 ; n <= step ; n++)
        {
          var data = {  
            bking_name : this.bking_name,

            pd_id : this.pd_id,
            pd_amt : this.pd_amt,
            income : this.income, 
            sentTime: this.sentTime[n],
          };
          
          this.roadMdf.push( data )

          odDataService.create(data)
        .then(() => {
                      this.msg= "第 < "+ n +" > 次登記成功";
                      // this.submitted = true;
                    })
                    .catch(e => {
                      console.log(e);
                    });
        }
      }
      else if( step == 1)
      {
        var dataa = { 
            bking_name : this.bking_name, 

            pd_id : this.pd_id,
            pd_amt : this.pd_amt,
            income : this.income, 
            sentTime: this.sentTime[0],
          };

        odDataService.create(dataa)
        .then(() => {
          this.msg= this.sentTime[0] + "__ ,登記成功";
          // this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      }

       
    },  

    // - - - - - - - - - - - - - - - 
    UpDtaMbr(e) {
      mbrDataService.update(e.key, e)
        .then(() => {
          this.msg= e.name+",登記成功";
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
    saveMbr(e) {  
       

      SeatDataService.create(e)
        .then(() => {
          this.msg= e.name+",登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    },
    saveMbr_Mdf(e) {  
       

      mbrDataService.create(e)
        .then(() => {
          this.msg= e.name+",登記成功";
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        }); 
    },
    
    cntDate_gtWeek(hint){ 
      let k = this.dayjs(hint).format("d");
      var wek =["(日)","(一)","(二)","(三)","(四)","(五)","(六)"]
      var r = wek[k]
      return r
      
    },
    chk_leftTime() {
        var r = 0;
        let k = this.dayjs(Date.now()).format("HH");
        if (k <= 12) {
            r = 1;
        } else if (k > 10 && k <= 18) {
            r = 2;
        } else if (k > 16 && k <= 25) {
            r = 3;
        }
        return r;
    }, 

    saveFirstLogin(){
        this.tmplr.quiz_statu = this.pS; 
        this.tmplr.name = this.pN;
        this.tmplr.patient_ID = this.pI;
        this.tmplr.prePare = this.pP;

        this.dialog = false;

        this.tab='k10'
        
    },  

    // findMb_phone(hint){
    //     return this.MbrList.filter(MbrList => MbrList.name.includes(hint))
    // }, 
    findMb_ads(hint){
        return this.MbrList.filter(MbrList => MbrList.name.includes(hint))
    }, 

    find_Days(hint){
        return dayjs().format()
    }, 


    cartAmount(ary,idx) {

        if(ary.sentTime == idx){ this.jk.push( ary ) } 
      return this.jk.reduce( (acc, item) => { return acc + (parseInt(item.pd_amt)) }, 0)
        
  },

      cartTotalAmount() {  
      return this.ODers.reduce( (acc, item) => { return acc + (parseInt(item.pd_amt)) }, 0)
  },
   
    removeCookie() {
      Cookies.remove('login')
    },  
   
    filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },

    mdf() {
       
      for( var n=0 ; n <= this.road.length-1 ; n++)
      {
        this.roadMdf.push( this.road[n].路名  )
      }

      // this.roadMdf = _tutorials; 
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.msg= "";
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      SeatDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    }, 

    // - - - - - - - - - - - - - - - 
    // - - - - - - - - - - - - - - -  
    cms_onDataChange(items) {
       
      let _tutorials = [];  
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,  
          name: data.name,
          sno : data.sno ,

          // sno : data.sno ,
          // name : data.name ,
          phone : data.phone ,
          cmtpipe_1 : data.cmtpipe_1 ,
          cmtpipe_2: data.cmtpipe_2,
          regen: data.regen,
          road: data.road,
          no : data.no ,
          floor : data.floor ,
          meta : data.meta ,
          cmty : data.cmty ,
          mor : data.mor ,
          fmy : data.fmy ,
          timeNeed : data.timeNeed ,
          fquc : data.fquc ,
          type : data.type ,
          noto : data.noto ,
          memo: data.memo,
           
        });
      });  
      this.tutorials=  _tutorials;
    },
    mbr_onDataChange(items) { 
        let _tutorials = []; 
        let _ts = []; 
        let _ts2 = [];  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
          key: key,  
          name: data.name,
          phone : data.phone,
          regen: data.regen,
          adrs: data.adrs,
          cmty: data.cmty,
          pd_suit : data.pd_suit,
          memo: data.memo,

          }); 

          _ts.push( data.name );
          _ts2.push( data.regen+ '區' + data.adrs );
        });   
        this.tmpMbrList=  _ts;
        this.tmpMbrList_2=  _ts;
        this.MbrList=  _tutorials;
    },
    od_onDataChange(items) { 
        let _tutorials = [];   
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key,  
            bking_name: data.bking_name,
            pd_id: data.pd_id,
            pd_amt : data.pd_amt ,
            sentTime : data. sentTime ,  
            income: data.income, 
            memo: data.memo, 
            mthCard:data.mthCard, 

          }); 
        });   
        this.ODers=  _tutorials;
    }, 
    pd_onDataChange(items) {
       
      let _tutorials = []; 
      let _ts = [];   
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,  
          name: data.name,
          sno : parseInt(data.sno) ,
          price : parseInt(data.price) , 
          ser_idx : data.ser_idx ,
          ser_mdf : data.ser_mdf , 
           
        }); 

        _ts.push( data.name + data.ser_mdf );
      });   
      this.tutorials=  _tutorials;

      this.pdLiST=_ts;
    }, 
  },
  // async mounted() {
  //   // console.log(_tutorials.title);  
  //    SeatDataService.getAll().on("value", this.onDataChange);  
  // }, 
  mounted() {
    // console.log(_tutorials.title);  

    //  SeatDataService.getAll().on("value", this.onDataChange); 
     mbrDataService.getAll().on("value", this.mbr_onDataChange);  
     pdDataService.getAll().on("value", this.pd_onDataChange); 
     odDataService.getAll().on("value", this.od_onDataChange);
     
     this.mdf();
  },
  beforeDestroy() {
     pdDataService.getAll().off("value", this.pd_onDataChange);
  }, 

    
};
</script>

<style>
/* .submit-form {
  max-width: 300px;
  margin: auto;
} */
</style>


<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: auto;
}

hr.hr-5 {
  border: 3;
  border-top: 6px double #027623;
}


</style>
