~function($){
    let $search=$('#search'),
        $detail=$('#detail'),
        $btn=$('.search-btn');
    // $btn.on('click',(e)=>{e.stopPropagation()});
    $(document).on('click',(e)=>{
        let target=e.target,
            $target=$(target),
            $parents=$target.parents();
        // console.log($parents.filter('#search'));

        if($parents.filter('#search').length>0){
            if(target.tagName==='INPUT'){
                $detail.css('display','none');
                return;
            }
            $detail.css('display','block');
            return;
        }
        $detail.css('display','none');
    });
}(jQuery);
~function($){
    let swipeExample = new Swiper('.swiper-container', {
        speed:300,
        autoplay : {
            delay:3000,
        },
        effect : 'fade',
    });
    // let index = index > 5 ? 5 : index;
    // swipeExample.slideTo(index, 0);
}(jQuery);
