export class Header{
    constructor(){
        this.Onmenu();
        this.OnSubMenu();
    }

    Onmenu(){
        $('.menuBtn').on('mouseenter',(e)=>{
            let targetId ='#' + e.target.getAttribute('id');
            let targetWidth = $(`${targetId}`).width() + 5;
            let targetPosX = e.target.offsetLeft;

            $('#cursorBar').width(targetWidth).css('left',`${targetPosX}px`);

        });
        $('#mouseArea').on('mouseleave',()=>{
            $('#cursorBar').width(0);
        });
    }

    OnSubMenu(){
        $('subMenu').on('mouseleave',(e)=>{
            $('.hideSubMenu').toggleClass('hidden',true);
        })

        $('.subMenuBtn').on('mouseenter',(e)=>{
            $('.hideSubMenu').toggleClass('hidden',true);
            let targetId ='#' + e.target.getAttribute('id')+'SubMenu';
            $(`${targetId}`).toggleClass('hidden',false);
        }).on('mouseleave',(e)=>{
            $('.hideSubMenu').toggleClass('hidden',true);
        });
    }
}