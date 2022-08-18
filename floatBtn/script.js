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
            position:relative;
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
        .set-float-btn{
            position:absolute;
            flex-direction:row;
        }
        .float-btn-common{
            left:50%;
            top:50%;
        }
        .float-btn-top{
            left:50%;
            bottom:50%;
        }
        .float-btn-left{
            top:50%;
            right:50%;
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
        .icon-list-position{
            position:relative;
            flex-direction:row;
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
        .circle{
            position:absolute;
        }
        .circle:nth-child(1){
            left:87px;
            top:7px;
        }
        .circle:nth-child(2){
            left:31.7214px;
            top:83.0845px;
        }
        .circle:nth-child(3){
            left:-57.7214px;
            top:54.0228px;
        }
        .circle:nth-child(4){
            left:-57.7214px;
            top:-40.0228px;
        }
        .circle:nth-child(5){
            left:31.7214px;
            top:-69.0845px;
        }
        .semi-circle{
            position:absolute;
        }
        .semi-circle:nth-child(1){
            left:90px;
            top:7px;
        }
        .semi-circle:nth-child(2){
            left:74.5685px;
            top:62.5685px;
        }
        .semi-circle:nth-child(3){
            left:7.83859px;
            top:90px;
        }
        .semi-circle:nth-child(4){
            left:-64.5685px;
            top:62.5685px;
        }
        .semi-circle:nth-child(5){
            left:-80px;
            top:7px;
        }
        .semi-circle-top{
            position:absolute;
        }
        .semi-circle-top:nth-child(1){
            left:90px;
            bottom:7px;
        }
        .semi-circle-top:nth-child(2){
            left:74.5685px;
            bottom:62.5685px;
        }
        .semi-circle-top:nth-child(3){
            left:7.83859px;
            bottom:90px;
        }
        .semi-circle-top:nth-child(4){
            left:-64.5685px;
            bottom:62.5685px;
        }
        .semi-circle-top:nth-child(5){
            left:-80px;
            bottom:7px;
        }
        .semi-circle-right{
            position:absolute;
        }
        .semi-circle-right:nth-child(1){
            top:90px;
            left:7px;
        }
        .semi-circle-right:nth-child(2){
            top:74.5685px;
            left:62.5685px;
        }
        .semi-circle-right:nth-child(3){
            top:7.83859px;
            left:90px;
        }
        .semi-circle-right:nth-child(4){
            top:-64.5685px;
            left:62.5685px;
        }
        .semi-circle-right:nth-child(5){
            top:-80px;
            left:7px;
        }
        .semi-circle-left{
            position:absolute;
        }
        .semi-circle-left:nth-child(1){
            top:90px;
            right:7px;
        }
        .semi-circle-left:nth-child(2){
            top:74.5685px;
            right:62.5685px;
        }
        .semi-circle-left:nth-child(3){
            top:7.83859px;
            right:90px;
        }
        .semi-circle-left:nth-child(4){
            top:-64.5685px;
            right:62.5685px;
        }
        .semi-circle-left:nth-child(5){
            top:-80px;
            right:7px;
        }
        .quarter-circle-downn-right{
            position:absolute;
        }
        .quarter-circle-downn-right:nth-child(1){
            left:7px;
            top:127px;
        }
        .quarter-circle-downn-right:nth-child(2){
            left:52.922px;
            top:117.866px;
        }
        .quarter-circle-downn-right:nth-child(3){
            left:91.8528px;
            top:91.8528px;
        }
        .quarter-circle-downn-right:nth-child(4){
            left:117.866px;
            top:52.922px;
        }
        .quarter-circle-downn-right:nth-child(5){
            left:127px;
            top:14.34788px;
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
        if(this.getAttribute('icon-display')==='circle'){
            this.shadowRoot.querySelector('.icon-list').style.flexDirection ='row'
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-common')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('circle')
            })
        }
        // if(this.getAttribute('icon-display')==='semi-circle'){
        //     this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-top')
        //     this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
        //     menuList.forEach((menu)=>{
        //         menu.classList.add('semi-circle-top')
        //     })
        // }
        if(this.getAttribute('icon-display')==='semi-circle' && this.getAttribute('circle-position')==='bottom'){
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-common')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('semi-circle')
            })
        }
        if(this.getAttribute('icon-display')==='semi-circle' && this.getAttribute('circle-position')==='top'){
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-top')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('semi-circle-top')
            })
        }
        if(this.getAttribute('icon-display')==='semi-circle' && this.getAttribute('circle-position')==='right'){
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-common')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('semi-circle-right')
            })
        }
        if(this.getAttribute('icon-display')==='semi-circle' && this.getAttribute('circle-position')==='left'){
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-left')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('semi-circle-left')
            })
        }
        if(this.getAttribute('icon-display')==='quarter-circle' && this.getAttribute('circle-position')==='down-right'){
            this.shadowRoot.querySelector('.float-btn-style').classList.add('set-float-btn','float-btn-left')
            this.shadowRoot.querySelector('.icon-list').classList.add('icon-list-position')
            menuList.forEach((menu)=>{
                menu.classList.add('quarter-circle-downn-right')
            })
        }
    }
}
window.customElements.define('float-btn',floatBtn)