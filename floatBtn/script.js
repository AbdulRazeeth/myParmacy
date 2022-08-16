'use strict'
const template =document.createElement('template')
template.innerHTML = `
     <style>
        .container {
            position:absolute;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            gap:10px;
            top:10%;
            left:40%;
        } 
        .add-btn {
            display:block;
            width : 60px;
            height : 60px;
            border-radius : 50%;
            background : blue;
            box-sizing:border-box;
        }
        .add-symbol {
            width:100%;
            height:100%;
            position:relative
        }
        .add-symbol::before{
            content: '';
            position: absolute;
            width: 3%;
            height: 40%;
            background: #fff;
            top: 30%;
            left: 48.5%;
        }
        .add-symbol::after{
            content: '';
            position: absolute;
            height: 3%;
            width: 40%;
            background: #fff;
            left: 30%;
            top: 49%;
        }
        .close-btn {
            display:none;
            width : 60px;
            height : 60px;
            border-radius : 50%;
            background : blue;
            box-sizing:border-box;
            transform: rotate(45deg)
        }
        .close-symbol {
            width:100%;
            height:100%;
            position:relative
        }
        .close-symbol::before{
            content: '';
            position: absolute;
            width: 3%;
            height: 40%;
            background: #fff;
            top: 30%;
            left: 48.5%;
        }
        .close-symbol::after{
            content: '';
            position: absolute;
            height: 3%;
            width: 40%;
            background: #fff;
            left: 30%;
            top: 49%;
        }
        .icon-list{
            width:100%;
            display:none;
            flex-direction:column;
            gap:10px;
            justify-content:center;
            align-items:center;
            margin:0;
            padding:0;
            transition:transform 1.6s cubic-bezier(0.12, 0, 0.39, 0);
        }
        .icon-list li{
            list-style-type:none;
        }
        .list-icon-style{
            display:flex;
            align-item:center;
            justify-content:center;
            padding:12px;
            border-radius:50%;
            background:gray;
            cursor:pointer;
            
        }
     </style>



     <div class='container'>
        <div class='add-btn'>
            <div class='add-symbol'></div>
        </div>
        <div class='close-btn'>
            <div class='close-symbol'></div>
        </div>
        <ul class='icon-list'>
            <li>
               <a class='list-icon-style'>
                 <img src='./edit.png' width='30px' height='30px'>
               </a>
            </li>
            <li>
               <a class='list-icon-style'>
                 <img src='./reload.png' width='30px' height='30px'>
               </a>
            </li>
            <li>
               <a class='list-icon-style'>
                 <img src='./delete.png' width='30px' height='30px'>
               </a>
            </li>
            <li>
               <a class='list-icon-style'>
                 <img src='./upload.png' width='30px' height='30px'>
               </a>
            </li>
            <li>
               <a class='list-icon-style'>
                 <img src='./external-link.png' width='30px' height='30px'>
               </a>
            </li>
        </ul>
     </div>
`
class floatBtn extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    openIconList(value){
        const openBtn = this.shadowRoot.querySelector('.add-btn')
        const closeBtn = this.shadowRoot.querySelector('.close-btn')
        const iconList = this.shadowRoot.querySelector('.icon-list')
        if(value === true){
            openBtn.style.display = 'none'
            closeBtn.style.display = 'block'
            iconList.style.display = 'flex'
        }else{
            openBtn.style.display = 'block'
            closeBtn.style.display = 'none'
            iconList.style.display = 'none'
        }
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.add-btn').addEventListener('click',()=>{
            this.openIconList(true)
        })
        this.shadowRoot.querySelector('.close-btn').addEventListener('click',()=>{
            this.openIconList(false)
        })
        if(this.getAttribute('set-background')){
            this.shadowRoot.querySelector('.add-btn').style.background = this.getAttribute('set-background')
            this.shadowRoot.querySelector('.close-btn').style.background = this.getAttribute('set-background')
        }
        if(this.getAttribute('set-color')){
            this.shadowRoot.querySelector('.add-btn').style.color = this.getAttribute('set-color')
            this.shadowRoot.querySelector('.close-btn').style.background = this.getAttribute('set-background')
        }
    }
}
window.customElements.define('float-btn',floatBtn)