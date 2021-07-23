<template>
  <div class="searchBar-wrapper">
      <ul>
        <li class="searchSection" v-if="isDefault">
            <input type="search" name="searchInText" id="searchInText" placeholder="What are your findings?">
        </li>
        <li class="searchSection isCustomized" v-else>
            <div class="row-search">
                <div class="col_1">
                    <a class="inpSearchLink" href="javascript:void(0)" @click="openSearchBox()">
                        <i class="material-icons">chevron_right</i>
                    </a>
                </div>
                <div class="col_2">
                    <input type="search" name="searchCustomizedInText" 
                            id="searchCustomizedInText" 
                            placeholder="What are your findings?"
                            @keypress="checkInput()">
                </div>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
const $ = require('jquery');
export default {
    name: "SearchBar",
    props: ["isCustomized"],
    data() {
        return {
            isDefault: true,
            isToggle: false,
        }
    },
    created() {
        this.init();
    },
    mounted() {
        $(".app-container").on("click", function(){
            var inputVal = $('#searchCustomizedInText').val();
            if (!inputVal) {
                $('.row-search .col_2').css('transform', 'scaleX(0)');
            }
        });
        // $(".inpSearchLink").on({
        //     mouseenter: function () {
        //         //stuff to do on mouse enter
        //         $('.row-search .col_2').addClass( "hoverIn" );
        //         $('.row-search .col_2').removeClass( "hoverOut" );
        //         $('.row-search .col_2').css('transform', 'scaleX(100%)');
        //         $("input[name='searchCustomizedInText'").focus();
        //         $("input[name='searchCustomizedInText'").prop('autofocus');

        //         var inputVal = $('#searchCustomizedInText').val();
        //         if (inputVal) {
        //             $(this).off('mouseleave');
        //         } else {
        //             return;
        //         }
        //         return;
        //     },
        //     mouseleave: function () {
        //         //stuff to do on mouse leave
        //         $('.row-search .col_2').addClass( "hoverOut" );
        //         $('.row-search .col_2').removeClass( "hoverIn" );
        //         $('.row-search .col_2').css('transform', 'scaleX(0)');
        //     }
        // });
        $("#searchCustomizedInText").on({
            mouseover: function() {
                console.log('over');
            }
        })
    },
    methods: {
        init() {
            // isCustomized
            if (this.isCustomized) {
                this.isDefault = false;
            }
        },
        checkInput() {
            var inpValue = $('#searchCustomizedInText').val();
            console.log('inpValue: ' + inpValue);
            if (inpValue) {
                $('.row-search .col_2').css('transform', 'scaleX(100%)');
                return true;
            }
            $(".inpSearchLink").on('mouseleave');
            return false;
        },
        openSearchBox() {
            this.isToggle = !this.isToggle;
            if (this.isToggle) {
                $('.row-search .col_2').css('transform', 'scaleX(100%)');
                $("input[name='searchCustomizedInText'").focus();
                $("input[name='searchCustomizedInText'").prop('autofocus');
            } else {
                $('.row-search .col_2').css('transform', 'scaleX(0)');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .searchBar-wrapper {
        ul {
            position: relative;

            li {
                min-width: 260px;
            }

            .searchSection {
                list-style-type: none;

                input[type="search"] {
                    position: relative;
                    padding: 0 30px;
                    -webkit-appearance: none;
                    background: #fff;
                    outline: none;
                    width: 100%;
                    height: 30px;
                    border-radius: 20px;
                    box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1), 0 2px 4px -1px rbga(0, 0, 0, 0.06);
                }

                .col_2 {
                    transform: scaleX(0);
                    min-width: 260px;
                }
            }

            .row-search {
                display: flex;
                justify-content: flex-start;
                margin-left: 35px;
            }
        }

        ul li.searchSection::before {
            background: url('../assets/Icons/search_icon.png');
            background-size: 20px 20px;
            width: 20px;
            height: 20px;
            z-index: 2;
            content: "";
            position: absolute;
            display: inline-block;
            top: 6px;
            left: 8px;
        }

        ul li.searchSection.isCustomized::before { 
            background-size: 30px 30px;
            width: 30px;
            height: 30px;
            top: -5px;
            left: 0px;
            border: 3px solid #000;
            border-radius: 20px;
        }

        ul li.searchSection.isCustomized .col_2 {
            li {
                min-width: 260px;
            }
            input[type="search"] {
                    padding: 0 10px;
                    width: 100%;
                }
        }
        
    }
    .hoverIn {
        animation: fadein 2s;

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
    }

    .hoverOut {
        animation: fadeout 2s;

        @keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
    }
    
</style>