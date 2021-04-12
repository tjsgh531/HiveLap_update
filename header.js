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

        let targetIdLeave = true;
        let hiddenElementIdLeave = true;
        let targetId = null;
        let hiddenElementId = null;
        $('.subMenuBtn').on('mouseenter',(e)=>{

            $('.hideSubMenu').toggleClass('hidden',true);

            targetId = '#' + e.target.getAttribute('id');
            hiddenElementId = `${targetId}` + 'SubMenu';

            targetIdLeave = false;
            hiddenElementIdLeave = true;
            
            $(`${targetId}`).on('mouseenter',()=>{
                targetIdLeave = false;
            }).on('mouseleave',()=>{
                targetIdLeave = true;
            });
            $(`${hiddenElementId}`).on('mouseenter',()=>{
                hiddenElementIdLeave= false;
            }).on('mouseleave',()=>{
                hiddenElementIdLeave = true;
            });
        });
    
        $(window).on('mousemove',()=>{
            if(targetIdLeave && hiddenElementIdLeave){
                $(`${hiddenElementId}`).toggleClass('hidden',true);
            }
            else{
                $(`${hiddenElementId}`).toggleClass('hidden',false);
            }
        })
    }

}