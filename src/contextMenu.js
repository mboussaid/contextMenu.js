const contextMenu = (function(){
    let config = {};
 
    var Constructor = function(_config){
        config = _config;


        let container = document.createElement("div");
        container.classList.add(config.className ||  'contextMenu');
        container.setAttribute("id",config.id || 'contextMenuId');
        applyStyle(container,{
            position:"fixed",
            display:"none",
            top:"0px",
            left:"0px"
        })
        let ul = document.createElement("ul");
        applyStyle(ul,{
            listStyle:"none",
            padding:"0px",
            margin:"0px",
            display:"flex",
            flexDirection:"column"
        })
        config.items.forEach((item,index)=>{
    
            let li = document.createElement("li");
            li.innerHTML =  item.template;
            li.classList.add("contextMenuItem")
            applyStyle(li,{
                cursor:"pointer"
            })
            li.addEventListener('click',function(e){
    
                item.onClick(e.target,index)
            })
            ul.classList.add("contextMenuList")
            ul.appendChild(li)
        })
        container.appendChild(ul)
    
    
    
        document.body.appendChild(container)

    }


    function applyStyle(el,styles){

        Object.keys(styles).forEach(key=>{
            el.style[key] = styles[key]
        })

    }

Constructor.prototype.init = function(element){


let el  = element || document;
    let id = config.id || 'contextMenuId';
    let contextMenu = document.querySelector(`#${id}`);

    contextMenu.addEventListener('mouseleave',function(){
       applyStyle(this,{
           display:"none"
       })
    })
    el.addEventListener('contextmenu',function(e){
        e.preventDefault();
       
        applyStyle(contextMenu,{
            top:`${e.clientY}px`,
            left:`${e.clientX}px`,
            display:'block'
        });

    })

    
 
}
    return function(_config){
        return new Constructor(_config)
    }
})();