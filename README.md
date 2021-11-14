
# ContextMenu.js
## LightWeight Javascript Library for making your own contextmenu 

[!dddd](./demo.gif)

## Quick Start 

```html
<script src="https://raw.githubusercontent.com/mboussaid/contextMenu.js/main/src/contextMenu.min.js" ></script>


```

> How to Use 
```javascript 
contextMenu({
//// array of items 
    items:[

        {
            
            template:"", ///html template
            onClick:function(item,index){
                /// callback function

            }
        }
    ] 
}).init(document /* where you want to add contextmenu document by default */)
```
> Example 

```javascript


contextMenu({
items:[

{
template:"<a href='#'>Github</a>",
onClick:function(item,index){
console.log("you have clicked on github link !!!!!!")
}

{
template:"<a href='#'>Facebook</a>",
onClick:function(item,index){
console.log("you have clicked on Facebook link !!!!!!")
},

{
template:"<a href='#'>Youtube</a>",
onClick:function(item,index){
console.log("you have clicked on Youtube link !!!!!!")
}
}
]
}).int();
```


### Styling


```css


/* The main container */
.contextMenu{

}


/* The ul element */
.contextMenuList{

}


/* The main container */
.contextMenuItem{

}


```


### Using Custom Classes and id

```javascript

contextMenu({
className:"myCustomClassName",

id:"myCustomIdHere",
items:[]
}).init(document);
```





## Example



> Html 

```html

<html>
<body>
<textarea></textarea>
    </body>
    </html>
```

> Javascript 


```javascript
contextMenu({
items:[
{
template:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZdJREFUSEu1lYExBVEMRe+vABWgAlSAClABKkAFqAAdUMGnAlSADuiACpgzk+zkZ7L735rZzOzs7puXe5P7kryZJrbZxPhqITiUdCBp2x5ierfnRdLDUJBDBADfSNpYkuWnpAtJj9W+PoIrSZcj5bs1ogW3iuA/4A56J+k8MmSCPUnPtuFJEmQnks5s7cPeW/ZG/3vbc2xrR1GuTICe67bx2gj4XZX0nSSLazFrMDZ9byTgUOcBhOiIvsWyrKeW2UKZkqqnCei+JMqwxSjhtyq4mAFgu0FrnMZY9KdPdnCOBGi8YoivkjjwMRYJOuxI8BvQJiGIEZDN2pjwrcpcgS+fADGDfMi0P93ZYjQXY8Wtq8C+Mv2x86D86M7cAw5EL1B5OZCyTHGiSUiTEiUqL1u6mp5wIoDJmKrjO1onT64i/n1UAESZOUjsagfLkvr6Qv9Uw871LKdjCLUaikuHnfs7CQ1DNj7UohSZoMpy8EZDLmRg+FXOToDmnE85VlquTIjIgmyiMUq47cqbzDe2ELT0Qe+eyQn+AIklVhnz1DvpAAAAAElFTkSuQmCC"/> <span>Github</span>`,
onClick:function(){
window.open('https://www.github.com','_blank');
}
},

{
template:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvNlYExBEEQRd9lIANEQAbIgAgQwREBIkAGREAGiIDLgAyIgHpqRrUxO7N3Vaeuq7bqamfu/+7+3X8nLDkmS8ZnJQh2gR1gOz1rwEt6roHXVhdaFQh0CRx12ngPHAPvtXtDBGZ7B2yM1MhKTsYSmPnzAPhTArFlOW5bVdYquAEOA8BHArAVMc4Bk6lmni+WBAr6UID7TlEXipLArM4C0gFQZj4XUUnwmEZyqELfe+ezwXIaKy4JnOn19GcFtT1ltMC9ewHYie/4d4KxLYpVOUlbQ7r1RLafVx1VPZ+GO5vRPnpj6vrvNcbUjXesrcJ4Kxe0tmhlRpIomnYQQ4/SqzK4Z3qSi/oTNYLslnma4n0XTsLadM2S2/7KomV2LliNpCaJ4JL+cdSeXduaKGANXLPTj+ay6wikkPtJPH/bQhfSkbbfC39wOtM57nglvsnjUh249QX0WEAZ2ArXmQAAAABJRU5ErkJggg=="/> <span>Google</span>`,
onClick:function(){
window.open('https://www.google.com','_blank');
}
}
]
}).init(document.querySelector("textarea"));

```


> CSS


```css


    .contextMenu{
            background-color: gray;
         
         
            color:#fff;
        }
        .contextMenuItem{
            padding: 5px 10px;
            display: flex;
            align-items: center;
        justify-content: center;
        justify-items: center;
        }
        .contextMenuItem{
            margin-top: 5px;
        }
        .contextMenuItem span{
            margin-left: 5px;
        }
        .contextMenuItem:hover{
            background-color: green;
            color:#fff;
        }
```





## Example

```javascript
contextMenu({
list:[
{
template:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZdJREFUSEu1lYExBVEMRe+vABWgAlSAClABKkAFqAAdUMGnAlSADuiACpgzk+zkZ7L735rZzOzs7puXe5P7kryZJrbZxPhqITiUdCBp2x5ierfnRdLDUJBDBADfSNpYkuWnpAtJj9W+PoIrSZcj5bs1ogW3iuA/4A56J+k8MmSCPUnPtuFJEmQnks5s7cPeW/ZG/3vbc2xrR1GuTICe67bx2gj4XZX0nSSLazFrMDZ9byTgUOcBhOiIvsWyrKeW2UKZkqqnCei+JMqwxSjhtyq4mAFgu0FrnMZY9KdPdnCOBGi8YoivkjjwMRYJOuxI8BvQJiGIEZDN2pjwrcpcgS+fADGDfMi0P93ZYjQXY8Wtq8C+Mv2x86D86M7cAw5EL1B5OZCyTHGiSUiTEiUqL1u6mp5wIoDJmKrjO1onT64i/n1UAESZOUjsagfLkvr6Qv9Uw871LKdjCLUaikuHnfs7CQ1DNj7UohSZoMpy8EZDLmRg+FXOToDmnE85VlquTIjIgmyiMUq47cqbzDe2ELT0Qe+eyQn+AIklVhnz1DvpAAAAAElFTkSuQmCC"/> <span>Github</span>`,
onClick:function(){
window.open('https://www.github.com','_blank');
}
},

{
template:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVlJREFUSEvNlYExBEEQRd9lIANEQAbIgAgQwREBIkAGREAGiIDLgAyIgHpqRrUxO7N3Vaeuq7bqamfu/+7+3X8nLDkmS8ZnJQh2gR1gOz1rwEt6roHXVhdaFQh0CRx12ngPHAPvtXtDBGZ7B2yM1MhKTsYSmPnzAPhTArFlOW5bVdYquAEOA8BHArAVMc4Bk6lmni+WBAr6UID7TlEXipLArM4C0gFQZj4XUUnwmEZyqELfe+ezwXIaKy4JnOn19GcFtT1ltMC9ewHYie/4d4KxLYpVOUlbQ7r1RLafVx1VPZ+GO5vRPnpj6vrvNcbUjXesrcJ4Kxe0tmhlRpIomnYQQ4/SqzK4Z3qSi/oTNYLslnma4n0XTsLadM2S2/7KomV2LliNpCaJ4JL+cdSeXduaKGANXLPTj+ay6wikkPtJPH/bQhfSkbbfC39wOtM57nglvsnjUh249QX0WEAZ2ArXmQAAAABJRU5ErkJggg=="/> <span>Google</span>`,
onClick:function(){
window.open('https://www.google.com','_blank');
}
}
]
}).init();

```


> CSS


```css


    .contextMenu{
            background-color: gray;
         
         
            color:#fff;
        }
        .contextMenuItem{
            padding: 5px 10px;
            display: flex;
            align-items: center;
        justify-content: center;
        justify-items: center;
        }
        .contextMenuItem{
            margin-top: 5px;
        }
        .contextMenuItem span{
            margin-left: 5px;
        }
        .contextMenuItem:hover{
            background-color: green;
            color:#fff;
        }
```

[Wacth the Example Demo](https://mboussaid.github.io/contextMenu.js/demo.html)
