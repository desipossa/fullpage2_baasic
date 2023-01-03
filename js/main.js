$(function(){

    var p_color = ['#f00', '#ff0', '#0f0'];

    $('.itm01 .desc .color li').each((idx, itm)=> {
        $(itm).css({
            background: p_color[idx]
        })
    })

    var txt = '2023 lee portfolio'
    
    var atxt = [...txt].map((it,idx) => {
        return '<span>' + it + '</span>'
    });

    $('.slogan').html(atxt);

    function ani() {
        $('.slogan span').each((idx, itm) => {
            console.log(idx, itm);
            $(itm).css({
                opacity:1,
                transform: 'translateY(0) rotateY(0deg)',
                transition : '0.5s ' + idx/10 + 's'
            })
        })
    }

       $('#main').fullpage({
        anchors: ['s01', 's02', 's03', 's04', 's05'],
        navigation: true,
        responsiveWidth: 768,
        css3:false,
        easing: 'easeOutBounce',
        scrollingSpeed: 1500,
        afterRender: function(){
            $('.section').eq(0).addClass('on');
            ani();
        },
        onLeave: function(link, idx){
            console.log(link, idx);
            $('.gnb li').eq(idx - 1).addClass('on')
            .siblings().removeClass('on');
            $('.section').eq(idx - 1).addClass('on')
            .siblings().removeClass('on');
        },

    });

})