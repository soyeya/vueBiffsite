<template>
 <footer>
    <div class="wrap">
        <div class="footer_info">
            <div class="box">
                <ul class="logo"><img src="../assets/img/logo.svg" alt="logo"></ul>
                <ul class="adressInfo">
                    <li><span>부산사무국(48058)부산광역시 해운대구 수영강변대로 120 영화의전당 비프힐 3층</span></li>
                    <li><span>서울사무소(03131)서울특별시 종로구 율곡로 84 가든타워 1601호</span></li>
                </ul>
            </div>
        </div>
        <div class="footer_link">
        <ul v-for="list in footerLink" class="link_content">
        <li><a :href="list.href">{{list.txt}}</a></li>  
        </ul>
        <ul>
            <li><span>© Busan International Film Festival.</span></li>
        </ul>
    </div>

    </div>
        </footer>

</template>

<script>

 export default {
 
   name : "Footer",
   data(){

     return {

            footerLink : [{

                txt : "개인정보처리방침",
                href : "#"
            },
            {
                txt : "저작권정책",
                href : "#"
            },
            {
                txt : "1:1문의",
                href : "#"
            },
            {
                txt : "역대영화제",
                href : "#"
            },
        
        ]
  
        }
   
   
   }
 
 }


</script>