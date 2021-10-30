new Vue({
    el: "#app",
    data :{
        player_heal : 100,
        monster_heal :100,
        game_is_on : false,
        logs : []

    },
    methods :{
        start_game : function(){
            this.game_is_on=true;

        },
        attack: function(){
            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.add_to_log({turn :"p" , text:"OYUNCU ATAĞI ("+point+")"})
            this.monster_attack();
            
        },
        special_attack : function(){
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal-=point;
            this.add_to_log({turn :"p" , text:"  ÖZEL OYUNCU ATAĞI ("+point+")"})
            this.monster_attack();

        },
        heal_up : function(){
            var point = Math.ceil(Math.random() * 20);
            this.player_heal+=point;
            this.add_to_log({turn :"p" , text:"İLK YARDIM ("+point+")"})
            this.monster_attack();
            
        },
        give_up : function(){
            this.player_heal = 0;
            this.add_to_log({turn :"p" , text:"OYUNCU ATAĞI PES ETTİ"})

        },
        monster_attack : function(){
            var point= Math.ceil(Math.random() * 10);
            this.player_heal-=point;
            this.add_to_log({turn :"m" , text:"CANAVAR ATAĞI ("+point+")"})


        },
        add_to_log : function(log){
            this.logs.push(log);
        }

    },
    watch :{
        player_heal : function(value){
            if(value<= 0){
                this.player_heal=0;
                if(confirm("Oyunu kaybettin.Tekrar denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal=100;
                }
            }else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal : function(value){
            if(value<= 0){
                this.monster_heal=0;
                if(confirm("Oyunu kazandın.Tekrar denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal=100;
                }
            }else if(value>=100){
                this.monster_heal=100;
            }
        },
    }
})