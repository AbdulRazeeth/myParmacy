'use strict'
const template =document.createElement('template')
template.innerHTML = `
     <style>
        .float-container{
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            gap: 20px;
        }
        .float-btn-style{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #3B82F6;
            background-color: #3B82F6;
            padding: 15px;
            border-radius: 50%;
            transition: transform .25s cubic-bezier(.4,0,.2,1) 0ms;
            will-change: transform;
        }
        .float-btn-style:focus{
            box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #9dc1fb, 0 1px 2px 0 black;
        }
        .float-btn-style:hover{
            background: #2563eb;
            color: #ffffff;
            border-color: #2563eb;
        }
        .icon-style{
            font-size: 30px !important;
            color: #ffffff;
        }
        .close-btn{
            display:none;
        }
        .icon-list{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start:0;
        }
        .menu-hide{
            transform:scale(0);
            opacity:0;
            transition: transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;
            will-change: transform;
        }
        .menu-show{
            transform:scale(1);
            opacity:1;
            transition: transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;
            will-change: transform;
        }
        .list-icon-style{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #495057;
            color: #fff;
            padding: 12px;
            border-radius: 50%;
        }
     </style>
        <div class="float-container">
            <button class="float-btn-style open-btn">
                <span class="material-symbols-outlined icon-style "> add </span>
            </button>
            <ul class="icon-list">
                <li class="menu menu-hide">
                    <a class="list-icon-style">
                        <span class="material-symbols-outlined"> edit</span>
                    </a>
                </li>
                <li class="menu menu-hide">
                    <a class="list-icon-style">
                        <span class="material-symbols-outlined"> refresh</span>
                    </a>
                </li>
                <li class="menu menu-hide">
                    <a class="list-icon-style">
                        <span class="material-symbols-outlined"> delete</span>
                    </a>
                </li>
                <li class="menu menu-hide">
                    <a class="list-icon-style">
                        <span class="material-symbols-outlined"> upload</span>
                    </a>
                </li>
                <li class="menu menu-hide">
                    <a class="list-icon-style">
                        <span class="material-symbols-outlined"> pin_invoke</span>
                    </a>
                </li>
            </ul>
        </div>
`
class floatBtn extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /><style>@font-face {
            font-family: 'Material Symbols Outlined';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v47/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
          }</style>`
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    BoolValue = false;
    decideValue(){
        this.BoolValue = !this.BoolValue
        this.openIconList(this.BoolValue)
    }
    openIconList(value){
        const openBtn = this.shadowRoot.querySelector('.open-btn')
        const menuList =this.shadowRoot.querySelectorAll('.menu')
        const arrLength = menuList.length -1
        if(value === true){
            openBtn.style.transform = 'rotate(45deg)'
            for(let i=0; i<menuList.length; i++){
                menuList[i].classList.add('menu-show')
                menuList[i].classList.remove('menu-hide')
                menuList[i].style.transitionDelay = `${i*30}ms`
            }
        }else{
            openBtn.style.transform = 'rotate(0)'
            for(let i=0; i<menuList.length; i++){
                menuList[i].classList.add('menu-hide')
                menuList[i].classList.remove('menu-show')
                menuList[i].style.transitionDelay = `${arrLength*30/(i+1)}ms`
            }
        }
    }
    connectedCallback(){
        const menuList =this.shadowRoot.querySelectorAll('.menu')
        this.shadowRoot.querySelector('.open-btn').addEventListener('click',()=>{
            this.decideValue()
        })
        if(this.getAttribute('set-background')){
            this.shadowRoot.querySelector('.add-btn').style.background = this.getAttribute('set-background')
            this.shadowRoot.querySelector('.close-btn').style.background = this.getAttribute('set-background')
        }
        if(this.getAttribute('set-color')){
            this.shadowRoot.querySelector('.add-btn').style.color = this.getAttribute('set-color')
            this.shadowRoot.querySelector('.close-btn').style.background = this.getAttribute('set-background')
        }
        if(this.getAttribute('button-position')==='right'){
            this.shadowRoot.querySelector('.float-container').style.flexDirection ='row'
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='row'
        }
        if(this.getAttribute('button-position')==='left'){
            this.shadowRoot.querySelector('.float-container').style.flexDirection ='row-reverse'
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='row-reverse'
        }
        if(this.getAttribute('button-position')==='top'){
            this.shadowRoot.querySelector('.float-container').style.flexDirection ='column-reverse'
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='column-reverse'
        }
        if(this.getAttribute('button-position')==='bottom'){
            this.shadowRoot.querySelector('.float-container').style.flexDirection ='column'
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='column'
        }
        if(this.getAttribute('button-position')==='circle'){
            this.shadowRoot.querySelector('.float-container').style.flexDirection ='row'
            this.shadowRoot.querySelector('.float-container').style.gap ='0'
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='row'
            this.shadowRoot.querySelector('.icon-list').style.gap ='0'
            this.shadowRoot.querySelector('.icon-list').style.position ='relative'
            for(let i=0; i<menuList.length; i++){
                menuList[i].style.position = 'absolute'
                menuList[i].style.top = `${i*20}px`
                menuList[i].style.left = `${i*7}px`
            }

        }
    }
}
window.customElements.define('float-btn',floatBtn)